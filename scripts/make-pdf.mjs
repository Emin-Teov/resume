// Generates the resume PDFs from the /?print=<lang>[&variant=<name>] page.
// The public/ ones are linked from the website; tailored ones go to resumes/ and are not deployed.
// Usage: npm run pdf   (set CHROME_PATH if Chrome/Edge is installed somewhere unusual)
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { build, preview } from 'vite';

const JOBS = [
  { query: 'print=en',            out: 'public/Emin_Tavakkulov_CV_EN.pdf' },
  { query: 'print=az',            out: 'public/Emin_Tavakkulov_CV_AZ.pdf' },
  { query: 'print=en&variant=bp', out: 'resumes/Emin_Tavakkulov_CV_EN_bp.pdf' },
];
const PORT = 4179;
const DEBUG_PORT = 9333;

const chromePath = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find(p => p && existsSync(p));
if (!chromePath) throw new Error('Chrome not found — set CHROME_PATH');

const sleep = ms => new Promise(r => setTimeout(r, ms));

await build({ logLevel: 'warn' });
const server = await preview({ preview: { port: PORT, strictPort: true }, logLevel: 'warn' });

const profileDir = mkdtempSync(join(tmpdir(), 'cv-chrome-'));
const chrome = spawn(chromePath, ['--headless=new', '--disable-gpu', `--remote-debugging-port=${DEBUG_PORT}`,
  `--user-data-dir=${profileDir}`, 'about:blank'], { stdio: 'ignore' });

try {
  let targets;
  for (let i = 0; i < 50 && !targets; i++) {
    try { targets = await (await fetch(`http://127.0.0.1:${DEBUG_PORT}/json`)).json(); } catch { await sleep(200); }
  }
  const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => { ws.onopen = r; });

  let id = 0;
  const pending = {};
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (pending[d.id]) { pending[d.id](d); delete pending[d.id]; }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    pending[++id] = d => (d.error ? reject(new Error(d.error.message)) : resolve(d.result));
    ws.send(JSON.stringify({ id, method, params }));
  });

  for (const { query, out } of JOBS) {
    await send('Page.navigate', { url: `http://localhost:${PORT}/?${query}` });
    // wait until the resume is rendered and web fonts are loaded
    for (let i = 0; i < 100; i++) {
      const { result } = await send('Runtime.evaluate', {
        expression: `document.fonts.ready.then(() => !!document.querySelector('.cv') && document.fonts.status === 'loaded')`,
        awaitPromise: true, returnByValue: true,
      });
      if (result.value) break;
      await sleep(150);
    }
    await sleep(300);
    const { data } = await send('Page.printToPDF', { printBackground: true, preferCSSPageSize: true });
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, Buffer.from(data, 'base64'));
    console.log('wrote', out);
  }
  ws.close();
} finally {
  chrome.kill();
  await new Promise(r => server.httpServer.close(r));
  await sleep(500);
  try { rmSync(profileDir, { recursive: true, force: true }); } catch { /* chrome may still hold files */ }
}

// rebuild so dist/ includes the fresh PDFs
await build({ logLevel: 'warn' });

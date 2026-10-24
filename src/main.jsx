import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18n from './i18n';
import App from './App.jsx'
import { EMAIL, PHONE } from './contact-info'

// /?print=en or /?print=az renders the printable A4 resume used to generate the PDFs.
// &variant=<name> layers src/translation/<lang>/variants/<name>.json on top (e.g. a CV tailored to one vacancy).
const params = new URLSearchParams(window.location.search);
const printLang = params.get('print');
const variant = params.get('variant');
const ResumeDoc = lazy(() => import('./pages/resume-doc.jsx'));
const variants = import.meta.glob('./translation/*/variants/*.json', { import: 'default' });

// objects merge recursively; arrays and strings from the override replace the base
function merge(base, over) {
  if (Array.isArray(over) || typeof over !== 'object' || over === null) return over;
  const out = { ...base };
  for (const k of Object.keys(over)) out[k] = merge(base?.[k], over[k]);
  return out;
}

async function start() {
  if (printLang) {
    const load = variant && variants[`./translation/${printLang}/variants/${variant}.json`];
    if (load) {
      const base = i18n.getResourceBundle(printLang, 'translation');
      i18n.addResourceBundle(printLang, 'translation', merge(base, await load()), false, true);
    }
    await i18n.changeLanguage(printLang);
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      {printLang
        ? <Suspense fallback={null}><ResumeDoc EMAIL={EMAIL} PHONE={PHONE} /></Suspense>
        : <App />}
    </StrictMode>,
  )
}

start();

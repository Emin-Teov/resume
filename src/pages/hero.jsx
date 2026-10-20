import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { scrollTo } from '../utils';

const LINE_COLORS = ["#A3D9FF", "#FFD580", "#84F0C0", "#F0A3FF", "#8B9AB5"];

// ── Terminal typewriter hook ─────────────────────────────────────
function useTypewriter(lines, speed = 38, pauseBetween = 600) {
  const [displayed, setDisplayed] = useState([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let lineIdx = 0, charIdx = 0;
    let current = [];
    let timer;

    const tick = () => {
      if (lineIdx >= lines.length) return;
      const line = lines[lineIdx];
      charIdx++;
      current = [...current.slice(0, lineIdx), line.slice(0, charIdx)];
      setDisplayed([...current]);

      if (charIdx >= line.length) {
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(tick, pauseBetween);
      } else {
        timer = setTimeout(tick, speed);
      }
    };

    timer = setTimeout(tick, 400);
    const blink = setInterval(() => setCursor(c => !c), 530);

    return () => { clearTimeout(timer); clearInterval(blink); };
  }, [lines, speed, pauseBetween]);

  return { displayed, cursor };
}

function NowCard() {
  const { t } = useTranslation();
  const job = t('experience.items', { returnObjects: true })[0];
  const facts = t('hero.facts', { returnObjects: true });

  return (
    <aside className="now-card">
      <p className="now-label"><span className="pulse" />{t('hero.now_label')}</p>
      <p className="now-role">{job.role}</p>
      <p className="now-company">{job.company}</p>
      <p className="now-since">{t('hero.since')}</p>
      <dl className="facts">
        {facts.map(f => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function Hero({ STACK_LINES }) {
  const { t, i18n } = useTranslation();
  const { displayed, cursor } = useTypewriter(STACK_LINES);

  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-layout">
        <div className="hero-inner">
          <p className="hero-eyebrow">{t('opportunities')}</p>

          <h1 className="hero-name">
            {t('name')}<br />
            <span>{t('surname')}</span>
          </h1>

          <p className="hero-role">{t('title')}</p>
          <p className="hero-meta">{t('hero.tagline')}</p>

          {/* terminal block — the signature element */}
          <div className="terminal">
            <div className="terminal-bar">
              {["#FF5F57", "#FEBC2E", "#28C840"].map(c => <i key={c} style={{ background: c }} />)}
              <span>emin@portfolio ~ zsh</span>
            </div>
            <div className="terminal-body">
              {displayed.map((shown, i) => (
                <div key={i}>
                  <span className="prompt">$ </span>
                  <span style={{ color: LINE_COLORS[i % LINE_COLORS.length] }}>{shown}</span>
                  {i === displayed.length - 1 && cursor && <span className="caret" />}
                </div>
              ))}
            </div>
          </div>

          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => scrollTo("contact")}>
              {t('hero.cta_contact')}
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("experience")}>
              {t('hero.cta_experience')}
            </button>
            <a className="btn btn-ghost" href={`/Emin_Tavakkulov_CV_${i18n.language.toUpperCase()}.pdf`} download>
              {t('hero.cta_cv')} ↓
            </a>
          </div>
        </div>
        <NowCard />
      </div>
    </section>
  );
}

export default Hero;

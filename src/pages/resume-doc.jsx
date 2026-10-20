import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './resume-doc.css';

// Print-only A4 resume, rendered at /?print=en or /?print=az and turned into a PDF by scripts/make-pdf.mjs.
function ResumeDoc({ EMAIL, PHONE }) {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });
  const aiItems = t('skills.ai_items', { returnObjects: true });
  const jobs = t('experience.items', { returnObjects: true });
  const degrees = t('education.items', { returnObjects: true });
  const languages = t('contact.languages', { returnObjects: true });

  useEffect(() => {
    document.title = `${t('full_name')} — CV`;
  }, [t]);

  return (
    <div className="cv">
      <header className="cv-head">
        <div>
          <h1>{t('name')} <span>{t('surname')}</span></h1>
          <p className="cv-title">{t('title')}</p>
        </div>
        <ul className="cv-contact">
          <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></li>
          <li>{t('contact.address')}</li>
        </ul>
      </header>

      <div className="cv-body">
        <aside className="cv-side">
          <section>
            <h2>{t('skills.technical')}</h2>
            {groups.map(g => (
              <div key={g.cat} className="cv-skill-group">
                <p className="cv-cat">{g.cat}</p>
                <div className="cv-chips">
                  {g.items.map(i => <span key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2>{t('skills.ai')}</h2>
            <ul className="cv-ai">
              {aiItems.map(i => <li key={i}>{i}</li>)}
            </ul>
          </section>

          <section>
            <h2>{t('contact.languages_label')}</h2>
            {languages.map(l => (
              <p key={l.name} className="cv-lang">{l.name} <b>{l.level}</b></p>
            ))}
          </section>
        </aside>

        <main className="cv-main">
          <section>
            <h2>{t('about.label')}</h2>
            <p className="cv-profile">{t('about.text')}</p>
          </section>

          <section>
            <h2>{t('experience.label')}</h2>
            {jobs.map(j => (
              <article key={j.company} className="cv-item">
                <div className="cv-item-head">
                  <h3>{j.role}</h3>
                  <span className={j.current ? "cv-period current" : "cv-period"}>{j.period}</span>
                </div>
                <p className="cv-org">{j.company}<span> · {j.place}</span></p>
                {j.bullets.length > 0 && (
                  <ul>{j.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                )}
              </article>
            ))}
          </section>

          <section>
            <h2>{t('education.label')}</h2>
            {degrees.map(d => (
              <article key={d.period} className="cv-item">
                <div className="cv-item-head">
                  <h3>{d.degree}</h3>
                  <span className={d.current ? "cv-period current" : "cv-period"}>{d.period}</span>
                </div>
                <p className="cv-org">{t('education.school')}<span> · {t('location')}</span></p>
                <ul>{d.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default ResumeDoc;

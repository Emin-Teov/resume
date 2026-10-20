import { useTranslation } from 'react-i18next';
import Reveal from './reveal';

function Contact({ EMAIL, PHONE }) {
  const { t } = useTranslation();
  const languages = t('contact.languages', { returnObjects: true });

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="eyebrow">{t('contact.label')}</p>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="contact-offer">{t('contact.offer')}</p>

        <div className="btn-row">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="btn btn-ghost" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
        </div>
      </Reveal>

      <Reveal delay={100} className="contact-grid">
        <div>
          <p className="contact-label">{t('contact.address_label')}</p>
          <p className="contact-value">{t('contact.address')}</p>
        </div>
        <div>
          <p className="contact-label">{t('contact.phone_label')}</p>
          <a className="contact-value" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
        </div>
        <div>
          <p className="contact-label">{t('contact.email_label')}</p>
          <a className="contact-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div>
          <p className="contact-label">{t('contact.languages_label')}</p>
          {languages.map(l => (
            <p key={l.name} className="contact-value lang-row">
              {l.name} <b>{l.level}</b>
            </p>
          ))}
        </div>
      </Reveal>

      <p className="footer">© 2026 {t('full_name')}</p>
    </section>
  );
}

export default Contact;

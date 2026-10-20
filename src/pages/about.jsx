import { useTranslation } from 'react-i18next';
import Reveal, { SectionHeader } from './reveal';

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="section tinted">
      <SectionHeader label={t('about.label')} title={t('about.title')} />
      <Reveal delay={80}>
        <p className="profile-text">{t('about.text')}</p>
      </Reveal>
    </section>
  );
}

export default About;

import { useTranslation } from 'react-i18next';
import { SectionHeader } from './reveal';
import Timeline from './timeline';

function Education() {
  const { t } = useTranslation();
  const items = t('education.items', { returnObjects: true }).map(e => ({
    ...e, title: e.degree, org: t('education.school'), place: t('location'),
  }));

  return (
    <section id="education" className="section">
      <SectionHeader label={t('education.label')} title={t('education.title')} />
      <Timeline items={items} presentLabel={t('now')} />
    </section>
  );
}

export default Education;

import { useTranslation } from 'react-i18next';
import { SectionHeader } from './reveal';
import Timeline from './timeline';

function Experience() {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }).map(e => ({
    ...e, title: e.role, org: e.company,
  }));

  return (
    <section id="experience" className="section tinted">
      <SectionHeader label={t('experience.label')} title={t('experience.title')} />
      <Timeline items={items} presentLabel={t('now')} />
    </section>
  );
}

export default Experience;

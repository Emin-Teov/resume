import { useTranslation } from 'react-i18next';
import Reveal, { SectionHeader } from './reveal';

function Skills() {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });
  const aiItems = t('skills.ai_items', { returnObjects: true });

  return (
    <section id="skills" className="section">
      <SectionHeader label={t('skills.label')} title={t('skills.title')} />

      <div className="skills-cols">
        <Reveal>
          <p className="sub-title">{t('skills.technical')}</p>
          {groups.map(group => (
            <div key={group.cat} className="skill-group">
              <span className="skill-cat">{group.cat}</span>
              <div className="chips">
                {group.items.map(item => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <p className="sub-title">{t('skills.ai')}</p>
          <div className="ai-grid">
            {aiItems.map(item => <div key={item} className="ai-item">{item}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;

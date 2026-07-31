import { useTranslation } from 'react-i18next'

import Reveal from './reveal';

function Skills(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <section id="skills" style={{ padding: "100px 5vw" }}>
            <Reveal>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#2D7EFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Technical skills
                </p>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "#fff", margin: "0 0 56px", letterSpacing: "-0.5px" }}>
                What I build with
                </h2>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {props.SKILLS.map((group, gi) => (
                <Reveal key={group.cat} delay={gi * 80}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ minWidth: 110 }}>
                        <span style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                        color: "#2D7EFF", letterSpacing: 1.5, textTransform: "uppercase",
                        }}>
                        {group.cat}
                        </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: 1 }}>
                        {group.items.map(item => (
                        <span key={item} style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 14, color: "#CBD5E1",
                            background: "rgba(45,126,255,0.08)",
                            border: "1px solid rgba(45,126,255,0.18)",
                            padding: "6px 16px", borderRadius: 6,
                            letterSpacing: 0.2,
                            transition: "background 0.2s, color 0.2s, border-color 0.2s",
                            cursor: "default",
                        }}
                            onMouseOver={e => { e.target.style.background = "rgba(45,126,255,0.18)"; e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(45,126,255,0.5)"; }}
                            onMouseOut={e => { e.target.style.background = "rgba(45,126,255,0.08)"; e.target.style.color = "#CBD5E1"; e.target.style.borderColor = "rgba(45,126,255,0.18)"; }}
                        >
                            {item}
                        </span>
                        ))}
                    </div>
                    </div>
                    {gi < props.SKILLS.length - 1 && (
                    <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginTop: 32 }} />
                    )}
                </Reveal>
                ))}
            </div>
        </section>
    </>
  );
}

export default Skills;
import { useTranslation } from 'react-i18next'

import Reveal from './reveal';

function Projects(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <section id="projects" style={{ padding: "100px 5vw" }}>
            <Reveal>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#2D7EFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Selected work
                </p>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "#fff", margin: "0 0 56px", letterSpacing: "-0.5px" }}>
                Projects I've built
                </h2>
            </Reveal>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                gap: 24,
            }}>
                {props.PROJECTS.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                    <div style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: 28,
                    height: "100%",
                    boxSizing: "border-box",
                    transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
                    cursor: "default",
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor = `${p.color}44`;
                        e.currentTarget.style.boxShadow = `0 8px 32px ${p.color}18`;
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                    >
                    <div style={{
                        width: 42, height: 4, borderRadius: 2,
                        background: p.color, marginBottom: 22,
                    }} />
                    <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 20, fontWeight: 700, color: "#fff",
                        margin: "0 0 12px", letterSpacing: "-0.3px",
                    }}>
                        {p.name}
                    </h3>
                    <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14, color: "#8B9AB5", lineHeight: 1.7,
                        margin: "0 0 24px",
                    }}>
                        {p.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {p.tags.map(tag => (
                        <span key={tag} style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11, color: p.color,
                            background: `${p.color}14`,
                            border: `1px solid ${p.color}30`,
                            padding: "4px 10px", borderRadius: 4,
                            letterSpacing: 0.3,
                        }}>
                            {tag}
                        </span>
                        ))}
                    </div>
                    </div>
                </Reveal>
                ))}
            </div>
        </section>
    </>
  );
}

export default Projects;
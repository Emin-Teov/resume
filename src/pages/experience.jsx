import { useTranslation } from 'react-i18next'

import Reveal from './reveal';

function Experience(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <section id="experience" style={{ padding: "100px 5vw", background: "rgba(45,126,255,0.03)", borderTop: "1px solid rgba(45,126,255,0.08)", borderBottom: "1px solid rgba(45,126,255,0.08)" }}>
            <Reveal>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#2D7EFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                Background
                </p>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: "#fff", margin: "0 0 64px", letterSpacing: "-0.5px" }}>
                Experience & education
                </h2>
            </Reveal>

            <div style={{ position: "relative", maxWidth: 760 }}>
                {/* vertical line */}
                <div style={{
                position: "absolute", left: 10, top: 8, bottom: 8,
                width: 1, background: "linear-gradient(to bottom, #2D7EFF, rgba(45,126,255,0.1))",
                }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {props.EXPERIENCE.map((e, i) => (
                    <Reveal key={i} delay={i * 60}>
                    <div style={{ display: "flex", gap: 32, paddingBottom: 44, position: "relative" }}>
                        {/* dot */}
                        <div style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 2,
                        background: e.type === "edu" ? "rgba(45,126,255,0.15)" : "#2D7EFF",
                        border: e.type === "edu" ? "2px solid #2D7EFF" : "2px solid #2D7EFF",
                        boxShadow: e.type === "work" ? "0 0 12px rgba(45,126,255,0.4)" : "none",
                        zIndex: 1,
                        }} />
                        <div>
                        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#4A5568", letterSpacing: 1, marginBottom: 6 }}>
                            {e.period}
                        </p>
                        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: "#fff", margin: "0 0 4px" }}>
                            {e.role}
                        </p>
                        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "#2D7EFF", margin: "0 0 10px" }}>
                            {e.company}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#8B9AB5", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            {e.detail}
                        </p>
                        </div>
                    </div>
                    </Reveal>
                ))}
                </div>
            </div>
        </section>
    </>
  );
}

export default Experience;
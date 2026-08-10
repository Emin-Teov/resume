import React, {useState, useEffect} from 'react';

import { useTranslation } from 'react-i18next';

function Hero(props){
    const { t, i18n } = useTranslation();

    // ── Terminal typewriter hook ─────────────────────────────────────
    function useTypewriter(lines, speed = 38, pauseBetween = 600) {
      const [displayed, setDisplayed] = useState([]);
      const [cursor, setCursor] = useState(true);
    
      useEffect(() => {
        let lineIdx = 0, charIdx = 0;
        let current = [];
        let raf;
    
        const tick = () => {
          if (lineIdx >= lines.length) {
            setCursor(false);
            return;
          }
          const line = lines[lineIdx];
          charIdx++;
          current = [...current.slice(0, lineIdx), line.slice(0, charIdx)];
          setDisplayed([...current]);
    
          if (charIdx >= line.length) {
            lineIdx++;
            charIdx = 0;
            setTimeout(() => { raf = requestAnimationFrame(tick); }, pauseBetween);
          } else {
            setTimeout(() => { raf = requestAnimationFrame(tick); }, speed);
          }
        };
    
        setTimeout(() => { raf = requestAnimationFrame(tick); }, 400);
        const blink = setInterval(() => setCursor(c => !c), 530);
    
        return () => { cancelAnimationFrame(raf); clearInterval(blink); };
      }, []);
    
      return { displayed, cursor };
    }

    const { displayed, cursor } = useTypewriter(props.STACK_LINES);

    return(
        <>
            <section style={{
                minHeight: "100vh",
                display: "flex", flexDirection: "column", justifyContent: "center",
                padding: "0 5vw",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* background grid */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    backgroundImage: `
                    linear-gradient(rgba(45,126,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(45,126,255,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }} />
                {/* blue glow */}
                <div style={{
                    position: "absolute", top: "20%", right: "10%",
                    width: 520, height: 520, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(45,126,255,0.14) 0%, transparent 65%)",
                    zIndex: 0, pointerEvents: "none",
                }} />

                <div style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
                    <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13, color: "#2D7EFF", letterSpacing: 2,
                    marginBottom: 20, textTransform: "uppercase",
                    }}>
                        {t('opportunities')}
                    </p>

                    <h1 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(42px, 6vw, 80px)",
                    fontWeight: 700, color: "#fff", lineHeight: 1.08,
                    margin: "0 0 12px",
                    letterSpacing: "-1.5px",
                    }}>
                    {t('name')}<br />
                    <span style={{ color: "#2D7EFF" }}>{t('surname')}</span>
                    </h1>

                    <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 26px)",
                    color: "#8B9AB5", fontWeight: 400,
                    margin: "0 0 48px",
                    }}>
                        Full-Stack Developer · {t('location')}
                    </p>

                    {/* terminal block — the signature element */}
                    <div style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(45,126,255,0.2)",
                    borderRadius: 12,
                    padding: "24px 28px",
                    maxWidth: 640,
                    backdropFilter: "blur(8px)",
                    }}>
                    <div style={{ display: "flex", gap: 7, marginBottom: 18 }}>
                        {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                        <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                        ))}
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#4A5568", marginLeft: 8 }}>
                        emin@portfolio ~ zsh
                        </span>
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(11px, 1.5vw, 13.5px)", lineHeight: 2 }}>
                        {props.STACK_LINES.map((line, i) => {
                        const shown = displayed[i] ?? "";
                        const isActive = i === displayed.length - 1;
                        if (!shown && i > displayed.length - 1) return null;
                        return (
                            <div key={i}>
                            <span style={{ color: "#4A5568" }}>$ </span>
                            <span style={{ color: i === 0 ? "#A3D9FF" : i === 1 ? "#FFD580" : i === 2 ? "#84F0C0" : i === 3 ? "#F0A3FF" : "#8B9AB5" }}>
                                {shown}
                            </span>
                            {isActive && cursor && (
                                <span style={{ display: "inline-block", width: 9, height: 16, background: "#2D7EFF", verticalAlign: "middle", marginLeft: 2, borderRadius: 1 }} />
                            )}
                            </div>
                        );
                        })}
                    </div>
                    </div>

                    <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
                    {/* <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        style={{
                        background: "#2D7EFF", color: "#fff", border: "none",
                        padding: "14px 32px", borderRadius: 8,
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600,
                        cursor: "pointer", letterSpacing: 0.3,
                        transition: "background 0.2s, transform 0.15s",
                        }}
                        onMouseOver={e => { e.target.style.background = "#1a65d6"; e.target.style.transform = "translateY(-2px)"; }}
                        onMouseOut={e => { e.target.style.background = "#2D7EFF"; e.target.style.transform = "translateY(0)"; }}
                    >
                        View Projects
                    </button> */}
                    {/* <a href="mailto:e1000.tavakkulov@gmail.com"
                        style={{
                        display: "inline-flex", alignItems: "center",
                        background: "transparent", color: "#8B9AB5",
                        border: "1px solid rgba(139,154,181,0.3)",
                        padding: "14px 32px", borderRadius: 8,
                        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 500,
                        cursor: "pointer", textDecoration: "none",
                        transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseOver={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
                        onMouseOut={e => { e.currentTarget.style.color = "#8B9AB5"; e.currentTarget.style.borderColor = "rgba(139,154,181,0.3)"; }}
                    >
                        Get in touch
                    </a> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
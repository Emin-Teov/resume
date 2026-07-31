import { useTranslation } from 'react-i18next'

import Reveal from './reveal';

function Contact(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <section id="contact" style={{
            padding: "100px 5vw 80px",
            borderTop: "1px solid rgba(45,126,255,0.08)",
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        }}>
        <Reveal>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#2D7EFF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Let's talk
            </p>
            <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 700, color: "#fff",
            margin: "0 0 16px", letterSpacing: "-1px",
            maxWidth: 600,
            }}>
            Open to the right role
            </h2>
            <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17, color: "#8B9AB5", lineHeight: 1.7,
            margin: "0 0 48px", maxWidth: 480,
            }}>
            Full-stack, backend, or mobile — remote or Baku-based. If the work is interesting, let's find out if we're a fit.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 64 }}>
            <a href="mailto:e1000.tavakkulov@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#2D7EFF", color: "#fff",
                padding: "16px 36px", borderRadius: 8,
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600,
                textDecoration: "none", letterSpacing: 0.3,
                transition: "background 0.2s, transform 0.15s",
            }}
                onMouseOver={e => { e.currentTarget.style.background = "#1a65d6"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "#2D7EFF"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
                {props.EMAIL}
            </a>
            <a href="tel:+994775975319" style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", color: "#8B9AB5",
                border: "1px solid rgba(139,154,181,0.3)",
                padding: "16px 36px", borderRadius: 8,
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
            }}
                onMouseOver={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
                onMouseOut={e => { e.currentTarget.style.color = "#8B9AB5"; e.currentTarget.style.borderColor = "rgba(139,154,181,0.3)"; }}
            >
                {props.PHONE}
            </a>
            </div>

            <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            {[
                { label: "Location", value: "Baku, Azerbaijan" },
                { label: "Languages", value: "AZ · EN · RU" },
                { label: "Status", value: "PhD Researcher & Open to work" },
            ].map(({ label, value }) => (
                <div key={label}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#4A5568", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>{label}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "#8B9AB5", margin: 0 }}>{value}</p>
                </div>
            ))}
            </div>
        </Reveal>

        <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)", width: "100%", maxWidth: 600 }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#2A3448", margin: 0 }}>
            © 2026 Emin Tavakkulov — built with React
            </p>
        </div>
        </section>
    </>
  );
}

export default Contact;
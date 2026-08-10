import logo from '../assets/logo.svg';

import { useTranslation } from 'react-i18next';
import React, {useState, useEffect} from 'react';

function Nav(props){
    const { t, i18n } = useTranslation();

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
    }, []);
    const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return(
        <>
            <header>
                {/* NAV */}
                <nav style={{
                    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                    padding: "0 5vw",
                    height: 64,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(45,126,255,0.12)" : "none",
                    transition: "all 0.3s ease",
                }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, color: "#2D7EFF", letterSpacing: 1 }}>
                        ET<span style={{ color: "#fff" }}>.</span>dev
                    </span>
                    <div style={{ display: "flex", gap: 32 }}>
                        {props.TABS.map(s => (
                        <button key={s} onClick={() => go(s)}
                            style={{ background: "none", border: "none", cursor: "pointer", color: "#8B9AB5", fontSize: 13, fontFamily: "'Inter', sans-serif", letterSpacing: 0.5, textTransform: "uppercase", transition: "color 0.2s" }}
                            onMouseOver={e => e.target.style.color = "#fff"}
                            onMouseOut={e => e.target.style.color = "#8B9AB5"}
                        >
                            {t(`nav.${s}`)}
                        </button>
                        ))}
                    </div>

                    <button style={{ background: "none", border: "none", cursor: "pointer", color: "#2D7EFF", fontSize: 8, fontFamily: "'Inter', sans-serif", letterSpacing: 0.5, textTransform: "uppercase", transition: "color 0.2s" }}
                        onMouseOver={e => e.target.style.color = "#fff"}
                        onMouseOut={e => e.target.style.color = "#2D7EFF"}
                        onClick={() => {
                                i18n.changeLanguage(props.lang)
                                props.setLang(props.lang)
                            }
                        }
                    >
                        {props.lang}
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Nav;
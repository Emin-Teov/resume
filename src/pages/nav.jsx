import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { scrollTo } from '../utils';

function Nav({ TABS }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nextLang = i18n.language === "en" ? "az" : "en";

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <header>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ET<span>.</span>ai
        </button>
        <div className="nav-links">
          {TABS.map(s => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
              {t(`nav.${s}`)}
            </button>
          ))}
        </div>
        <button className="lang-btn" onClick={() => i18n.changeLanguage(nextLang)} aria-label={`Switch language to ${nextLang}`}>
          {nextLang}
        </button>
      </nav>
    </header>
  );
}

export default Nav;

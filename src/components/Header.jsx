import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../i18n'
import { routes } from "../routes";
import { useLanguageNavigation } from "../hooks/useLanguageNavigation";
import { Sun, Moon } from "lucide-react";
import { langList } from "../utils/langList";

function Header() {
    const { t } = useTranslation()
    const lang = ['pt', 'en'].includes(i18n.language?.slice(0, 2))
  ? i18n.language.slice(0, 2)
  : 'pt'
    
    const [theme, setTheme] = useState("light")
    const { changeLanguage } = useLanguageNavigation();

    useEffect(() => {
        document.body.classList.remove("light", "dark")
        document.body.classList.add = (theme);
        document.body.className = theme //remover esta linha antes de exportar
    }, [theme]);

    useEffect(() => {
        const saved = localStorage.getItem("theme")
        if (saved) setTheme(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <header>
            <div className="container header-container">
                <div>
                    <h1>{t('title')}</h1>
                    <p>Rápido, preciso e gratuíto</p>
                </div>
                    <div className="menu">
                        <nav>
                            <Link to={`/${lang}`}>Home</Link>
                            <Link to={`/${lang}/${routes[lang].length}`}>{t('length')}</Link>
                            <Link to={`/${lang}/${routes[lang].area}`}>{(t('area'))}</Link>
                            <Link to={`/${lang}/${routes[lang].volume}`}>{t('volume')}</Link>
                            <Link to={`/${lang}/${routes[lang].mass}`}>{t('mass')}</Link>
                            <Link to={`/${lang}/${routes[lang].speed}`}>{t('speed')}</Link>
                        </nav>
                        <div className="change-lang">
                            <select className="select-lang" onChange={(e) => changeLanguage(e.target.value)}>
                                {Object.entries(langList).map(([keyLang, langName]) => (
                                <option key={keyLang} value={keyLang}>{langName}</option>   
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="lang-buttons">
                        <button onClick={() => changeLanguage('pt')}>PT</button>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                    </div>
                    <div className="mode-buttons">
                        <button
                            className="theme-toggle"
                            onClick={() => setTheme(theme === 'light' ? "dark" : "light")}
                        >
                            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
                        </button>
                    </div>
            </div>
        </header>
    );
}

export default Header;
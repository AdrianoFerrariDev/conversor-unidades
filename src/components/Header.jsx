import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../i18n'
import { routes } from "../routes";
import { useLanguageNavigation } from "../hooks/useLanguageNavigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { langList } from "../utils/langList";

function Header() {
    const { t } = useTranslation()
    const lang = ['pt', 'en'].includes(i18n.language?.slice(0, 2))
  ? i18n.language.slice(0, 2)
  : 'pt'
    
    const [theme, setTheme] = useState("light")
    const [openMenu, setOpenMenu] = useState(false)
    const { changeLanguage } = useLanguageNavigation();
    const saved = localStorage.getItem("theme")

    useEffect(() => {
        document.body.classList.remove("light", "dark")
        document.body.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme]);

    useEffect(() => {
        if (saved) setTheme(saved)
    }, [])

    useEffect(() => {
        document.querySelector('.nav-menu').classList.toggle('open-menu')
    },[openMenu])

    return (
        <header>
            <div className="container header-container">
                <div>
                    <h1>{t('title')}</h1>
                    <p>Rápido, preciso e gratuíto</p>
                </div>
                    <div className="menu">
                        <nav className="nav-menu">
                            <div className="menu-buttons">
                                <button
                                    className="theme-mode"
                                    onClick={() => setTheme(theme === 'light' ? "dark" : "light")}
                                >
                                    {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
                                </button>
                                <button
                                    className="menu-button"
                                    onClick={() => setOpenMenu(openMenu === true ? false : true)}
                                >
                                    {openMenu === false ? <Menu size={22} /> : <X size={22} />}
                                </button>
                            </div>
                            <ul>
                                <li><Link to={`/${lang}`}>Home</Link></li>
                                <li><Link to={`/${lang}/${routes[lang].length}`}>{t('length')}</Link></li>
                                <li><Link to={`/${lang}/${routes[lang].area}`}>{(t('area'))}</Link></li>
                                <li><Link to={`/${lang}/${routes[lang].volume}`}>{t('volume')}</Link></li>
                                <li><Link to={`/${lang}/${routes[lang].mass}`}>{t('mass')}</Link></li>
                                <li><Link to={`/${lang}/${routes[lang].speed}`}>{t('speed')}</Link></li>
                            </ul>
                        </nav>
                        <div className="change-lang">
                            <select name="site-lang" className="select-lang" onChange={(e) => changeLanguage(e.target.value)}>
                                {Object.entries(langList).map(([keyLang, langName]) => (
                                <option key={keyLang} value={keyLang}>{langName}</option>   
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* 
                    <div className="lang-buttons">
                        <button onClick={() => changeLanguage('pt')}>PT</button>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                    </div>
                    */}
            </div>
        </header>
    );
}

export default Header;
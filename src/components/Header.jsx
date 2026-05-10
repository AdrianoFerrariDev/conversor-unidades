import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../i18n'
import { Sun, Moon, Menu, X } from "lucide-react";
import { langList } from "../utils/langList";
import { getSlug, translateSlug } from "../utils/routes";
import { getInitialLanguage } from "../utils/getInitialLanguage";

function Header() {
    const { t } = useTranslation()
    
    const navigate = useNavigate()
    const location = useLocation()

    // Pega idioma salvo em localStorage, senão usa a função getInitialLanguage
    const lang = localStorage.getItem('lang') || getInitialLanguage()

    const [theme, setTheme] = useState("light")
    const [openMenu, setOpenMenu] = useState(false)

    const saved = localStorage.getItem("theme")

    // Sincroniza i18n + localStorage
    useEffect(() => {
        i18n.changeLanguage(lang)
        localStorage.setItem("lang", lang);
    }, [lang])

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

        // Impede scroll da tela quando o menu está aberto
        document.body.style.overflow = openMenu ? "hidden" : "auto"
    },[openMenu])

    useEffect(() => {
        setOpenMenu(false)
    }, [location.pathname])

    function handleChangeLanguage(newLang) {
        const segments = location.pathname.split("/")
        const currentLang = segments[1];
        const currentSlug = segments[2] || ""

        // pega o path atual
        const newSlug = translateSlug(currentSlug, currentLang, newLang)

        // Redireciona mantendo rota atual
        navigate(`/${newLang}/${newSlug}`)
    }

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
                                <li><Link to={`/${lang}/${getSlug(lang, "length")}`}>{t('length')}</Link></li>
                                <li><Link to={`/${lang}/${getSlug(lang, "area")}`}>{(t('area'))}</Link></li>
                                <li><Link to={`/${lang}/${getSlug(lang, "volume")}`}>{t('volume')}</Link></li>
                                <li><Link to={`/${lang}/${getSlug(lang, "mass")}`}>{t('mass')}</Link></li>
                                <li><Link to={`/${lang}/${getSlug(lang, "speed")}`}>{t('speed')}</Link></li>
                                <li><Link to={`/${lang}/${getSlug(lang, "about")}`}>{t('about')}</Link></li>
                            </ul>
                        </nav>
                        <div className="change-lang">
                            <select
                                value={lang}
                                name="site-lang"
                                className="select-lang"
                                onChange={(e) => handleChangeLanguage(e.target.value)}
                            >
                                {Object.entries(langList).map(([keyLang, langName]) => (
                                <option key={keyLang} value={keyLang}>{langName}</option>   
                                ))}
                            </select>
                        </div>
                    </div>
            </div>
        </header>
    );
}

export default Header;
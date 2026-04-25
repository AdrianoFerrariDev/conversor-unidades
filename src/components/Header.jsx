import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../i18n'
import { routes } from "../routes";
import { useLanguageNavigation } from "../hooks/useLanguageNavigation";

function Header() {
    const { t } = useTranslation()
    const lang = ['pt', 'en'].includes(i18n.language?.slice(0, 2))
  ? i18n.language.slice(0, 2)
  : 'pt'
    
    const { changeLanguage } = useLanguageNavigation();

    return (
        <header>
            <div className="container">
                <h1>{t('title')}</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/${lang}/${routes[lang].length}`}>{t('length')}</Link>
                    <Link to={`/${lang}/${routes[lang].area}`}>{(t('area'))}</Link>
                    <Link to={`/${lang}/${routes[lang].volume}`}>{t('volume')}</Link>
                    <Link to={`/${lang}/${routes[lang].mass}`}>{t('mass')}</Link>
                    <Link to={`/${lang}/${routes[lang].speed}`}>{t('speed')}</Link>
                </nav>
                <button onClick={() => changeLanguage('pt')}>PT</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </header>
    );
}

export default Header;
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../routes";
import { getSlug } from "../utils/routes";
import { languages } from "../config/languages";

function Footer() {
    const { t } = useTranslation()
    const {lang: urlLang} = useParams()

    // Fallback (localStorage -> default)
    const fallbackLang = localStorage.getItem("lang");

    // Idioma final 
    const lang = languages.includes(urlLang) ? urlLang : fallbackLang
    console.log(fallbackLang)
    

    return (
        <footer>
            <div className="container">
                <p>© 2026 {t('title')}</p>
                <div className="site-polices">
                    <span><Link to={`/${lang}/${getSlug(lang, "privacy")}`}>{t('privacy')}</Link></span>
                    <span><Link to={`/${lang}/${getSlug(lang, "terms")}`}>{t('terms')}</Link></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
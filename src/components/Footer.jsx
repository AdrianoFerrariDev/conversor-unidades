import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../routes";
import { getSlug } from "../utils/routes";

function Footer() {
    const { t } = useTranslation()
    const {lang: urlLang} = useParams()

    // Idiomas permitidos
    const supportedLangs = ["pt", "en"]

    // Fallback (localStorage -> default)
    const fallbackLang = localStorage.getItem("lang") || "pt";

    // Idioma final 
    const lang = supportedLangs.includes(urlLang) ? urlLang : fallbackLang

    return (
        <footer>
            <div className="container">
                <p>© 2026 {t('title')}</p>
                <div>
                    <span><Link to={`/${lang}/${getSlug(lang, "privacy")}`}>{t('privacy')}</Link></span>
                    <span><Link to={`/${lang}/${getSlug(lang, "terms")}`}>{t('terms')}</Link></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
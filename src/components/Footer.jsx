import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getSlug } from "../utils/routes";
import { getInitialLanguage } from "../utils/getInitialLanguage";

function Footer() {
    const { t } = useTranslation()
    
    // Pega idioma salvo em localStorage, senão usa a função getInitialLanguage
    const lang = localStorage.getItem('lang') || getInitialLanguage()

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
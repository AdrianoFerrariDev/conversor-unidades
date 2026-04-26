import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation()

    return (
        <footer>
            <div className="container">
                <p>© 2026 {t('title')}</p>
            </div>
        </footer>
    );
}

export default Footer;
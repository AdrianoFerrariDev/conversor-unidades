import { useTranslation } from "react-i18next";
import i18n from '../i18n'

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
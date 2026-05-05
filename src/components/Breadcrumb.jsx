import { Link, useParams } from "react-router-dom";
import { routes } from "../routes";
import { getKeyFromSlug } from "../utils/routes";
import { useTranslation } from "react-i18next";

function Breadcrumbs() {
    const { lang, slug} = useParams();
    const { t } = useTranslation();

    const key = slug ? getKeyFromSlug(lang, slug) : null;

    return (
        <nav className="breadcrumbs">
            <Link to={`/${lang}`}>{t("home")}</Link>
            {
                key && (
                    <>
                        <span> / </span>
                        <span>{t(key)}</span>
                    </>
                )
            }
        </nav>
    );
}

export default Breadcrumbs;
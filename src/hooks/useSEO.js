import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { setPageSEO, setHrefLangs } from "../utils/seo";
import { setBreadcrumbSchema, setFAQSchema } from "../utils/structureData";

import { getSlug } from "../utils/routes";

export function useSEO({ title, description, routeKey, breadcrumbs = false, faq = null }) {
    const { lang } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        // SEO básico
        setPageSEO({
            title: `${title} | ${t("title")}`,
            description,
            url: window.location.href,
            image: "/preview.png"
        });

        // hreflang
        if (routeKey) {
            setHrefLangs(routeKey);
        }

        // Breadcrumb schema
        if(breadcrumbs && routeKey) {
            setBreadcrumbSchema({
                lang,
                items: [
                    { name: "Home", path: ""},
                    { name: title, path: `/${getSlug(lang, routeKey)}`}
                ]
            });
        }

        // FAQ Schema
        if (faq && faq.length > 0) {
            setFAQSchema(faq);
        }
    }, [lang, title, description, routeKey, breadcrumbs, faq]);
}
import { useEffect } from "react";
import Converter from "../components/Converter"
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";
import { setHrefLangs, setPageSEO } from "../utils/seo";
import { setJSONLD } from "../utils/jsonld";

function Length() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            title: `${t("length")} | ${t("title")}`,
            description: t("description.length"),
            url: window.location.href,
            image: "/preview.png"
        });

        setHrefLangs("length");
    }, [t])

    setJSONLD({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${t("length")}`,
        url: window.location.origin
    })

    return (
        <Converter
            title={t('pageTitle.lengthConv')}
            unitSystem={unitSystem}
            units={units}
        />
        
    );
}

export default Length;
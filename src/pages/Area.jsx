import { useEffect } from "react";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/area'
import { useTranslation } from "react-i18next";
import { setPageSEO } from "../utils/seo";
import { setJSONLD } from "../utils/jsonld";

function Area() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            title: `${t("area")} | ${t("title")}`,
            description: t("description.area"),
            url: window.location.href,
            image: "/preview.png"
        })
    }, [t])

    /*setJSONLD({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${t("area")}`,
        url: window.location.origin
    })*/
    
    return (
        <Converter 
            title={t('pageTitle.areaConv')}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Area
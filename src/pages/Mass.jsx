import { useEffect } from "react";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/mass'
import { useTranslation } from "react-i18next";
import { setPageSEO } from "../utils/seo";
import { setJSONLD } from "../utils/jsonld";

function Mass() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            title: `${t("mass")} | ${t("title")}`,
            description: t("description.mass"),
            url: window.location.href,
            image: "/preview.png"
        })
    }, [t])

    /*setJSONLD({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${t("mass")}`,
        url: window.location.origin
    })*/

    return(
        <Converter
            title={t('pageTitle.massConv')}
            unitSystem={unitSystem}
            units={units}
        />        
    );
}

export default Mass;
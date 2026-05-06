import { useEffect } from "react";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/volume'
import { useTranslation } from "react-i18next";
import { setPageSEO } from "../utils/seo";
import { setJSONLD } from "../utils/jsonld";


function Volume() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            title: `${t("volume")} | ${t("title")}`,
            description: t("description.volume"),
            url: window.location.href,
            image: "/preview.png"
        })
    }, [t])

    setJSONLD({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${t("volume")}`,
        url: window.location.origin
    })
    
    return (
        <Converter 
            title={t('pageTitle.volumeConv')}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Volume
import { useEffect } from "react";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/speed'
import { useTranslation } from "react-i18next";
import { setPageSEO } from "../utils/seo";

function Speed() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            title: `${t("speed")} | ${t("title")}`,
            description: t("description.speed"),
            url: window.location.href,
            image: "/preview.png"
        })
    }, [t])

    /*setJSONLD({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${t("speed")}`,
        url: window.location.origin
    })*/

    return (
        <Converter 
            title={t("pageTitle.speedConv")}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Speed;
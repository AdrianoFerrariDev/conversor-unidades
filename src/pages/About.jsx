import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { setHrefLangs, setPageSEO } from "../utils/seo";

function About() {
    const { t } = useTranslation();

    useEffect(() =>{
        setPageSEO({
            title: `${t("about")} | ${t("title")}`,
            description: t("description.about"),
            url: window.location.href,
            image: "/preview.png"
        });

        setHrefLangs("about");
    });

    /*setJSONLD({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${t("about")}`,
        url: window.location.origin
    });*/

    return (
        <>
        <h2>Sobre</h2>
        </>
    );
}

export default About;
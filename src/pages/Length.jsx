import Converter from "../components/Converter"
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO";
import EducationalContent from "../components/EducationContent";
import FAQ from "../components/FAQ";
import PageIntro from "../components/PageIntro";

function Length() {
    const { t } = useTranslation()

    /*const faqs = [
        {
            question: t("faq.length.q1"),
            answer: t("faq.length.a1")
        },
        {
            question: t("faq.length.q2"),
            answer: t("faq.length.a2")
        }
    ];*/

    useSEO({
        title: t("length"),
        description: t("description.length"),
        routeKey: "length",
        breadcrumbs: true,
        //faq: faqs
    });

    return (
        <>
        <PageIntro 
            title={t("length")}
            text={t("pageIntro.length")}
        />
        <Converter
            unitSystem={unitSystem}
            units={units}
            defaultFrom={0}
            defaultTo={9}
        />
        <EducationalContent title={t("length_info_title")}>
            <p>{t("length_info_1")}</p>
            <p>{t("length_info_2")}</p>

            <h3>{t("common_conversions")}</h3>
            <ul>
                <li>1 km = 1000 m</li>
                <li>1 mi = 1.609 km</li>
            </ul>
        </EducationalContent>
        </>
    );
}

export default Length;
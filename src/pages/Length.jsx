import Converter from "../components/Converter"
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO";
import EducationalContent from "../components/EducationContent";
import FAQ from "../components/FAQ";
import Breadcrumbs from "../components/Breadcrumb";

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
        <Breadcrumbs />
        <Converter
            title={t("length")}
            text={t("pageIntro.length")}
            unitSystem={unitSystem}
            units={units}
            defaultFrom={0}
            defaultTo={9}
        />
        <EducationalContent title={t("educational.length.title")}>
            <p>{t("educational.length.info1")}</p>
            <p>{t("educational.length.info2")}</p>
        </EducationalContent>
        </>
    );
}

export default Length;
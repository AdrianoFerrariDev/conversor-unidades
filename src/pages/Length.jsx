import Converter from "../components/Converter"
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO";

function Length() {
    const { t } = useTranslation()

    useSEO({
        title: t("length"),
        description: t("description.length"),
        routeKey: "length",
        breadcrumbs: true,
        faq: [
            {
                question: t("faq.length.q1"),
                answer: t("faq.length.a1")
            },
            {
                question: t("faq.length.q2"),
                answer: t("faq.length.a2")
            }
        ]
    });

    return (
        <Converter
            title={t('pageTitle.lengthConv')}
            unitSystem={unitSystem}
            units={units}
        />
        
    );
}

export default Length;
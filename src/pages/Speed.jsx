import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/speed'
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumb";
import EducationalContent from "../components/EducationContent";


function Speed() {
    const { t } = useTranslation()

   useSEO({
        title: t("speed"),
        description: t("description.speed"),
        routeKey: "speed",
        breadcrumbs: true
   })

    return (
        <>
        <Breadcrumbs />
        <Converter
            title={t('speed')}
            text={t('pageIntro.speed')}
            unitSystem={unitSystem}
            units={units}
            defaultFrom={3}
            defaultTo={0}
        />
        <EducationalContent title={t("educational.speed.title")}>
            <p>{t("educational.speed.info1")}</p>
            <p>{t("educational.speed.info2")}</p>
        </EducationalContent>
        </>
    );
}

export default Speed;
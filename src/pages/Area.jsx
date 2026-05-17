import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/area'
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumb";
import EducationalContent from "../components/EducationContent";


function Area() {
    const { t } = useTranslation()

    useSEO({
        title: t("area"),
        description: t("description.area"),
        routeKey: "area",
        breadcrumbs: true,
    })
    
    return (
        <>
        <Breadcrumbs />
        <Converter 
            title={t('area')}
            text={t('pageIntro.area')}
            unitSystem={unitSystem}
            units={units}
            defaultFrom={3}
            defaultTo={6}
        />
        <EducationalContent title={t("educational.area.title")}>
            <p>{t('educational.area.info1')}</p>
            <p>{t('educational.area.info2')}</p>
        </EducationalContent>
        </>
    );
}

export default Area
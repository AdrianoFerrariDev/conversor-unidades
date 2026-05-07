import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/area'
import { useSEO } from "../hooks/useSEO";
import PageIntro from "../components/PageIntro";


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
        <PageIntro
            title={t('area')}
            text={t('pageIntro.area')}
        />
        <Converter 
            unitSystem={unitSystem}
            units={units}
        />
        </>
    );
}

export default Area
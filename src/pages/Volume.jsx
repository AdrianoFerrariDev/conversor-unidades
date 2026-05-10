import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/volume'
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumb";

function Volume() {
    const { t } = useTranslation()

    useSEO({
        title: t("volume"),
        description: t("description.volume"),
        routeKey: "volume",
        breadcrumbs: true
    })
    
    return (
        <>
        <Breadcrumbs />
        <Converter
            title={t('volume')}
            text={t('pageIntro.volume')}
            unitSystem={unitSystem}
            units={units}
            defaultFrom={5}
            defaultTo={3}
        />
        </>
    );
}

export default Volume
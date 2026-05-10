import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/mass'
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumb";

function Mass() {
    const { t } = useTranslation()

    useSEO({
        title: t("mass"),
        description: t("description.mass"),
        routeKey: "mass",
        breadcrumbs: true
    })

    return(
        <>
        <Breadcrumbs />
        <Converter
            title={t('mass')}
            text={t('pageIntro.mass')}
            unitSystem={unitSystem}
            units={units}
            defaultFrom={1}
            defaultTo={4}
        />
        </>        
    );
}

export default Mass;
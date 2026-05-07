import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/volume'
import { useSEO } from "../hooks/useSEO";
import PageIntro from "../components/PageIntro";

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
        <PageIntro
            title={t('volume')}
            text={t('pageIntro.volume')}
        />
        <Converter 
            unitSystem={unitSystem}
            units={units}
        />
        </>
    );
}

export default Volume
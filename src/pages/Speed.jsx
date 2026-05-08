import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/speed'
import { useSEO } from "../hooks/useSEO";
import PageIntro from "../components/PageIntro";

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
        <PageIntro
            title={t('speed')}
            text={t('pageIntro.speed')}
        />
        <Converter
            unitSystem={unitSystem}
            units={units}
            defaultFrom={3}
            defaultTo={0}
        />
        </>
    );
}

export default Speed;
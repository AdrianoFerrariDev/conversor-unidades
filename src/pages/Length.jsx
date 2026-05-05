import { useEffect } from "react";
import Converter from "../components/Converter"
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";
import { setPageSEO } from "../utils/seo";

function Length() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            titles: `${t("area")} | ${t("title")}`,
            description: t("area")
        })
    }, [t])

    return (
        <Converter
            title={t('pageTitle.lengthConv')}
            unitSystem={unitSystem}
            units={units}
        />
        
    );
}

export default Length;
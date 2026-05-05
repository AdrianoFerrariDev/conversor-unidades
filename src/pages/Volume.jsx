import { useEffect } from "react";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/volume'
import { useTranslation } from "react-i18next";
import { setPageSEO } from "../utils/seo";


function Volume() {
    const { t } = useTranslation()

    useEffect(() => {
        setPageSEO({
            titles: `${t("area")} | ${t("title")}`,
            description: t("area")
        })
    }, [t])
    
    return (
        <Converter 
            title={t('pageTitle.volumeConv')}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Volume
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/area'
import { useTranslation } from "react-i18next";

function Area() {
    const { t } = useTranslation()
    
    return (
        <Converter 
            title={t('pageTitle.areaConv')}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Area
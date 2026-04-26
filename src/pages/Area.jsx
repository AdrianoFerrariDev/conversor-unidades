import Converter from "../components/Converter";
import { unitsArea } from "../converters/area";
import { useTranslation } from "react-i18next";

function Area() {
    const { t } = useTranslation()
    
    return (
        <Converter 
            title={t('areaConv')}
            units={unitsArea}
        />
    );
}

export default Area
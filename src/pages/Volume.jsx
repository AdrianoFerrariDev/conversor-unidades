import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";


function Volume() {
    const { t } = useTranslation()
    return (
        <Converter 
            title={t('volumeConv')}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Volume
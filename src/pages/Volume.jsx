import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/volume'
import { useTranslation } from "react-i18next";


function Volume() {
    const { t } = useTranslation()
    return (
        <Converter 
            title={t('pageTitle.volumeConv')}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Volume
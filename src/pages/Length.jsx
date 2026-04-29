import Converter from "../components/Converter"
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";

function Length() {
    const { t } = useTranslation()

    return (
        <Converter
            title={t('pageTitle.lengthConv')}
            unitSystem={unitSystem}
            units={units}
        />
        
    );
}

export default Length;
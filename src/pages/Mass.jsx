import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/mass'
import { useTranslation } from "react-i18next";

function Mass() {
    const { t } = useTranslation()
    return(
        <Converter
            title={t('massConv')}
            unitSystem={unitSystem}
            units={units}
        />        
    );
}

export default Mass;
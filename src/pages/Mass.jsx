import Converter from "../components/Converter";
import { unitsMass } from "../converters/mass";
import { useTranslation } from "react-i18next";

function Mass() {
    const { t } = useTranslation()
    return(
        <Converter
            title={t('massConv')}
            units={unitsMass}
        />        
    );
}

export default Mass;
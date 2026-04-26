import Converter from "../components/Converter"
import { units } from "../converters/length"
import { useTranslation } from "react-i18next";

function Length() {
    const { t } = useTranslation()

    return (
        <Converter
            title={t('lengthConv')}
            units={units}
        />
        
    );
}

export default Length;
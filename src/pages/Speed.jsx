import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/speed'
import { useTranslation } from "react-i18next";

function Speed() {
    const { t } = useTranslation()
    return (
        <Converter 
            title={t("speedConv")}
            unitSystem={unitSystem}
            units={units}
        />
    );
}

export default Speed;
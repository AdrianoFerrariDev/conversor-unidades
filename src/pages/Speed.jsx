import Converter from "../components/Converter";
import { unitsSpeed } from "../converters/speed";
import { useTranslation } from "react-i18next";

function Speed() {
    const { t } = useTranslation()
    return (
        <Converter 
            title={t("speedConv")}
            units={unitsSpeed}
        />
    );
}

export default Speed;
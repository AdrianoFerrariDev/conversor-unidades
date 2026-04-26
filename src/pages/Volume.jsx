import Converter from "../components/Converter";
import { unitsVolume } from "../converters/volume";
import { useTranslation } from "react-i18next";


function Volume() {
    const { t } = useTranslation()
    return (
        <Converter 
            title={t('volumeConv')}
            units={unitsVolume}
        />
    );
}

export default Volume
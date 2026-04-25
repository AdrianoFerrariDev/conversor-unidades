import Converter from "../components/Converter";
import { unitsArea } from "../converters/area";
function Area() {
    return (
        <Converter 
            title="Conversor de Área"
            units={unitsArea}
        />
    );
}

export default Area
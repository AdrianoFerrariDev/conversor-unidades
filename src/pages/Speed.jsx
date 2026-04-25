import Converter from "../components/Converter";
import { unitsSpeed } from "../converters/speed";

function Speed() {
    return (
        <Converter 
            title="Conversor de Velocidade"
            units={unitsSpeed}
        />
    );
}

export default Speed;
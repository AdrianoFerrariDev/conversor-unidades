import Converter from "../components/Converter"
import { units } from "../converters/length"

function Length() {
    return (
        <Converter
            title="Conversor de Comprimento"
            units={units}
        />
        
    );
}

export default Length;
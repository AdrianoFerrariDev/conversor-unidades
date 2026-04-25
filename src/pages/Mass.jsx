import Converter from "../components/Converter";
import { unitsMass } from "../converters/mass";

function Mass() {
    return(
        <Converter
            title="Conversor de Massa"
            units={unitsMass}
        />        
    );
}

export default Mass;
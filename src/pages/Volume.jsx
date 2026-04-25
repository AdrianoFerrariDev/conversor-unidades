import Converter from "../components/Converter";
import { unitsVolume } from "../converters/volume";
function Volume() {
    return (
        <Converter 
            title="Conversor de Volume"
            units={unitsVolume}
        />
    );
}

export default Volume
import { createUnitSystem } from "../utils/createUnitSystem";

const areaSystem = {
    metric: { name: "Métrico", units: {
            metroQuad: {factor: 1, symbol: 'm²', name: 'metricSystem.sqmeter'},
            quilometroQuad: {factor: 1000000, symbol: 'km²', name: 'metricSystem.sqkilometer'},
            decimetroQuad: { factor: 0.01, symbol: 'dm²', name: 'metricSystem.sqdecimeter'},
            centimetroQuad: {factor: 0.0001, symbol: 'cm²', name: 'metricSystem.sqdecimeter'},
            milimetroQuad: {factor: 0.0000001, symbol: 'mm²', name: 'metricSystem.sqmillimiter'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(areaSystem)
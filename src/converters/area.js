import { createUnitSystem } from "../utils/createUnitSystem";

const areaSystem = {
    metric: { name: "Métrico", units: {
            metroQuad: {factor: 1, symbol: 'm²', name: 'Metro quadrado'},
            quilometroQuad: {factor: 1000000, symbol: 'km²', name: 'Quilômetro quadrado'},
            decimetroQuad: { factor: 0.01, symbol: 'dm²', name: 'Decímetro quadrado'},
            centimetroQuad: {factor: 0.0001, symbol: 'cm²', name: 'Centímetro quadrado'},
            milimetroQuad: {factor: 0.0000001, symbol: 'mm²', name: 'Milímetro quadrado'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(areaSystem)
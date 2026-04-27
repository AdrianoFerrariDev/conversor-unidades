import { createUnitSystem } from "../utils/createUnitSystem";

const volumeSystem = {
    metric: { name: "Métrico" , units: {
            metroCub: {factor: 1, symbol: 'm³', name: 'Metro cúbico'},
            quilometroCub: {factor: 100000000, symbol: 'km³', name: 'Quilômetro cúbico'},
            decimetroCub: { factor: 0.001, symbol: 'dm³', name: 'Decímetro cúbico'},
            centimetroCub: {factor: 0.000001, symbol: 'cm³', name: 'Centímetro cúbico'},
            milimetroCub: {factor: 0.000000001, symbol: 'mm³', name: 'Milímetro cúbico'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(volumeSystem)
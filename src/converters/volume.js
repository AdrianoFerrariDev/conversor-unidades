import { createUnitSystem } from "../utils/createUnitSystem";

const volumeSystem = {
    metric: { name: "Métrico" , units: {
            quilometroCub: {factor: 100000000, symbol: 'km³', name: 'metricSystem.cbkilometer'},
            metroCub: {factor: 1, symbol: 'm³', name: 'metricSystem.cbmeter'},
            decimetroCub: { factor: 0.001, symbol: 'dm³', name: 'metricSystem.cbdecimeter'},
            centimetroCub: {factor: 0.000001, symbol: 'cm³', name: 'metricSystem.cbcentimeter'},
            milimetroCub: {factor: 0.000000001, symbol: 'mm³', name: 'metricSystem.cbmillimiter'},
            litro: {factor: 0.001, symbol: 'L', name: 'metricSystem.liter'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(volumeSystem)
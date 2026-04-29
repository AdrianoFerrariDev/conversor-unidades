import { createUnitSystem } from "../utils/createUnitSystem";

const speedSystem = {
    metric: { name: "Métrico", units: {
            metro_segundo: {factor: 1, symbol: 'm/s', name: 'metricSystem.metersec'},
            quilometro_segundo: {factor: 1000, symbol: 'km/s', name: 'metricSystem.kilometersec'},
            quilometro_hora: { factor: (1/3.6), symbol: 'km/h', name: 'metricSystem.kilometerhour'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(speedSystem)
import { createUnitSystem } from "../utils/createUnitSystem";

const speedSystem = {
    metric: { name: "Métrico", units: {
            metro_segundo: {factor: 1, symbol: 'm/s', name: 'Metro por segundo'},
            quilometro_segundo: {factor: 1000, symbol: 'km/s', name: 'Quilômetro por segundo'},
            quilometro_hora: { factor: (1/3.6), symbol: 'km/h', name: 'Quilômetro por hora'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(speedSystem)
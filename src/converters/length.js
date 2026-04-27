import { createUnitSystem } from "../utils/createUnitSystem";

export const lengthSystem = {
    metric: { name: "Métrico", units: {
            metro: {factor: 1, symbol: 'm', name: 'units.meter'},
            quilometro: {factor: 1000, symbol: 'km', name: 'units.kilometer'},
            decimetro: { factor: 0.1, symbol: 'dm', name: 'units.decimeter'},
            centimetro: {factor: 0.01, symbol: 'cm', name: 'units.centimeter'},
            milimetro: {factor: 0.001, symbol: 'mm', name: 'units.millimeter'},
        },
    },
    imperial: { name: "Imperial", units: {
            milha: {factor: 1609.34, symbol: 'mi', name: 'units.mile'},
            polegada: { factor: 0.0254, symbol: "in", name: 'units.inch'}
        },
    }
}

export const { unitSystem, units } = createUnitSystem(lengthSystem)
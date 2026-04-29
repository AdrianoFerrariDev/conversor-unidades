import { createUnitSystem } from "../utils/createUnitSystem";

const lengthSystem = {
    metric: { name: "Métrico", units: {
            quilometro: {factor: 1000, symbol: 'km', name: 'metricSystem.kilometer'},
            hectometro: {factor: 100, symbol: 'hm', name: 'metricSystem.hectometer'},
            decametro: {factor: 10, symbol: 'dam', name: 'metricSystem.decameter'},
            metro: {factor: 1, symbol: 'm', name: 'metricSystem.meter'},
            decimetro: { factor: 0.1, symbol: 'dm', name: 'metricSystem.decimeter'},
            centimetro: {factor: 0.01, symbol: 'cm', name: 'metricSystem.centimeter'},
            milimetro: {factor: 0.001, symbol: 'mm', name: 'metricSystem.millimeter'},
            micrometro: {factor: 0.000001, symbol: '\u03bcm', name: 'metricSystem.micrometer'},
            nanometro: {factor: 0.000000001, symbol: 'nm', name: 'metricSystem.nanometer'},
        },
    },
    imperial: { name: "Imperial", units: {
            milha: {factor: 1609.34, symbol: 'mi', name: 'imperialSystem.mile'},
            polegada: { factor: 0.0254, symbol: "in", name: 'imperialSystem.inch'}
        },
    }
}

export const { unitSystem, units } = createUnitSystem(lengthSystem)
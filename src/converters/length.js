import { createUnitSystem } from "../utils/createUnitSystem";

const lengthSystem = {
    metric: { name: "metric", units: {
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
    imperial: { name: "imperial", units: {
            milha: {factor: 1609.344, symbol: 'mi', name: 'imperialSystem.mile'},
            furlong: { factor: 201.168, symbol: "fur", name: 'imperialSystem.furlong'},
            corrente: { factor: 20.1168, symbol: "ch", name: 'imperialSystem.chain'},
            barra: { factor: 5.0292, symbol: "rd", name: 'imperialSystem.rod'},
            jarda: { factor: 0.9144, symbol: "yd", name: 'imperialSystem.yard'},
            pe: { factor: 0.3048, symbol: "ft", name: 'imperialSystem.foot'},
            link: { factor: 0.201168, symbol: "li", name: 'imperialSystem.link'},
            polegada: { factor: 0.0254, symbol: "in", name: 'imperialSystem.inch'},
            mil: { factor: 0.0000254, symbol: "mil", name: 'imperialSystem.mil'},
        },
    }
}

export const { unitSystem, units } = createUnitSystem(lengthSystem)
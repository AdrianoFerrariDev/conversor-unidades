import { createUnitSystem } from "../utils/createUnitSystem";

const areaSystem = {
    metric: { name: "Métrico", units: {
            quilometroQuad: {factor: 1000000, symbol: 'km²', name: 'metricSystem.sqkilometer'},
            hectometroQuad: {factor: 10000, symbol: 'hm²', name: 'metricSystem.sqhectometer'},
            decametroQuad: {factor: 100, symbol: 'dam²', name: 'metricSystem.sqdecameter'},
            metroQuad: {factor: 1, symbol: 'm²', name: 'metricSystem.sqmeter'},
            decimetroQuad: { factor: 0.01, symbol: 'dm²', name: 'metricSystem.sqdecimeter'},
            centimetroQuad: {factor: 0.0001, symbol: 'cm²', name: 'metricSystem.sqdecimeter'},
            milimetroQuad: {factor: 0.000001, symbol: 'mm²', name: 'metricSystem.sqmillimeter'},
            micrometroQuad: {factor: 1e-12, symbol: 'mm²', name: 'metricSystem.sqmicrometer'},
            nanometroQuad: {factor: 1e-18, symbol: 'mm²', name: 'metricSystem.sqnanometer'},
        }
    },
    imperial: { name: "Imperial", units: {
            milhaQuad: {factor: 2589988.110336, symbol: 'mi²', name: 'imperialSystem.sqmile'},
            homestead: {factor: 647497.027584, symbol: '', name: 'imperialSystem.homestead'},
            acre: {factor: 4046.8564224, symbol: 'ac', name: 'imperialSystem.acre'},
            rood: {factor: 1011.7141056, symbol: '', name: 'imperialSystem.rood'},
            barraQuad: {factor: 25.29285264, symbol: 'rd²', name: 'imperialSystem.sqrod'},
            jardaQuad: {factor: 0.83612736, symbol: 'yd²', name: 'imperialSystem.sqyard'},
            peQuad: {factor: 0.09290304, symbol: 'ft²', name: 'imperialSystem.sqfoot'},
            polegadaQuad: {factor: 0.00064516, symbol: 'in²', name: 'imperialSystem.sqinch'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(areaSystem)
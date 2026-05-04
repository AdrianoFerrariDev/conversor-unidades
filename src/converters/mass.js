import { createUnitSystem } from "../utils/createUnitSystem";

const massSystem = {
        metric: { name: "metric", units: {
                        tonelada: { factor: 10000000, symbol: 'ton', name:'metricSystem.ton'},
                        quilograma: {factor: 1000000, symbol: 'kg', name: 'metricSystem.kilogram'},
                        hectograma: {factor: 100000, symbol: 'hg', name: 'metricSystem.hectogram'},
                        decagrama: {factor: 10000, symbol: 'dag', name: 'metricSystem.decagram'},
                        grama: {factor: 1000, symbol: 'g', name: 'metricSystem.gram'},
                        decigrama: { factor: 100, symbol: 'dg', name: 'metricSystem.decigram'},
                        centigrama: {factor: 10, symbol: 'cg', name: 'metricSystem.centigram'},
                        miligrama: {factor: 1, symbol: 'mg', name: 'metricSystem.milligram'},
                        micrograma: {factor: 0.001, symbol: '\u03bcg', name: 'metricSystem.microgram'},
                        nanograma: {factor: 0.000001, symbol: 'ng', name: 'metricSystem.nanogram'},
                }       
        },
        avoirdupois: { name: "imperial-avoirdupois", units: {
                        stone: {factor: 6350293.18, symbol: 'st', name: 'avoirdupoisSystem.stone'},
                        libra: {factor: 453592.37, symbol: 'lb', name: 'avoirdupoisSystem.pound'},
                        onca: {factor: 28349.523125, symbol: 'oz', name: 'avoirdupoisSystem.ounce'},
                        dracma: {factor: 1771.8451953125, symbol: 'dr', name: 'avoirdupoisSystem.dram'},
                        grao: {factor: 64.79891, symbol: 'gr', name: 'avoirdupoisSystem.grain'}
                }
        },
        troy: { name: "imperial-troy", units: {
                        libratroy: {factor: 373241.7216, symbol: 'lb t', name: 'troySystem.poundtroy'},
                        oncatroy: {factor: 31103.4768, symbol: 'oz t', name: 'troySystem.ouncetroy'},
                        dracmatroy: {factor: 3887.9346, symbol: 'dr', name: 'troySystem.dramtroy'},
                        pennyweight: {factor: 1555.17384, symbol: 'dwt', name: 'troySystem.pennyweight'}
                }
        }
};

export const { unitSystem, units } = createUnitSystem(massSystem)
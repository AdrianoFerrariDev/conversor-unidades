import { createUnitSystem } from "../utils/createUnitSystem";

const massSystem = {
        metric: { name: "metric", units: {
                tonelada: { factor: 1000000, symbol: 'ton', name:'metricSystem.ton'},
                quilograma: {factor: 1000, symbol: 'kg', name: 'metricSystem.kilogram'},
                grama: {factor: 1, symbol: 'g', name: 'metricSystem.gram'},
                decigrama: { factor: 0.1, symbol: 'dg', name: 'metricSystem.decigram'},
                centigrama: {factor: 0.01, symbol: 'cg', name: 'metricSystem.centigram'},
                miligrama: {factor: 0.001, symbol: 'mg', name: 'metricSystem.milligram'},
        }
    }
};

export const { unitSystem, units } = createUnitSystem(massSystem)
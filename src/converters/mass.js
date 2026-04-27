import { createUnitSystem } from "../utils/createUnitSystem";

const massSystem = {
        metric: { name: "Metrico", units: {
                grama: {factor: 1, symbol: 'g', name: 'Grama'},
                quilograma: {factor: 1000, symbol: 'kg', name: 'Quilôgrama'},
                decigrama: { factor: 0.1, symbol: 'dg', name: 'Decimgrama'},
                centigrama: {factor: 0.01, symbol: 'cg', name: 'Centigrama'},
                miligrama: {factor: 0.001, symbol: 'mg', name: 'Miligrama'},
        }
    }
    
};

export const { unitSystem, units } = createUnitSystem(massSystem)
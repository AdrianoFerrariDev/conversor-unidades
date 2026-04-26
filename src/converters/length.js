export const units = {
    metro: {factor: 1, symbol: 'm', name: 'units.meter'},
    quilometro: {factor: 1000, symbol: 'km', name: 'units.kilometer'},
    decimetro: { factor: 0.1, symbol: 'dm', name: 'units.decimeter'},
    centimetro: {factor: 0.01, symbol: 'cm', name: 'units.centimeter'},
    milimetro: {factor: 0.001, symbol: 'mm', name: 'units.millimeter'},
    milha: {factor: 1609.34, symbol: 'mi', name: 'units.mile'},
};

export function convertLength(value, from, to){
    const valueInMeters = value * units[from].factor;
    return valueInMeters / units[to].factor;
}
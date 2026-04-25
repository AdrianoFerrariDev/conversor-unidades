export const units = {
    metro: {factor: 1, symbol: 'm', name: 'Metro'},
    quilometro: {factor: 1000, symbol: 'km', name: 'Quilômetro'},
    decimetro: { factor: 0.1, symbol: 'dm', name: 'Decímetro'},
    centimetro: {factor: 0.01, symbol: 'cm', name: 'Centímetro'},
    milimetro: {factor: 0.001, symbol: 'mm', name: 'Milímetro'},
    milha: {factor: 1609.34, symbol: 'mi', name: 'Milha'},
};

export function convertLength(value, from, to){
    const valueInMeters = value * units[from].factor;
    return valueInMeters / units[to].factor;
}
export const units = {
    metro: {factor: 1, symbol: 'm'},
    quilometro: {factor: 1000, symbol: 'km'},
    decimetro: { factor: 0.1, symbol: 'dm'},
    centimetro: {factor: 0.01, symbol: 'cm'},
    milimetro: {factor: 0.001, symbol: 'mm'},
    milha: {factor: 1609.34, symbol: 'mi'},
};

export function convertLength(value, from, to){
    const valueInMeters = value * units[from].factor;
    return valueInMeters / units[to].factor;
}

export function formatNumber(num) {
    if( num === 0 ) return 0;
    
    if( Math.abs(num) < 0.01 ) {
        return num.toExponential(2);
    }

    return parseFloat(num.toFixed(4));
}
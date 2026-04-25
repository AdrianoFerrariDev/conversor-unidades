export function formatNumber(num) {
    if( num === 0 ) return 0;

    const abs = Math.abs(num);
    
    // Muito pequeno ou muito grande → exponencial
    if( abs < 0.000001 || abs >= 1e9 ) {
        return num.toExponential(4);
    }

    // Até 6 casas decimais, removendo zeros desnecessários
    const formatted = Number(num.toFixed(6));
    
    return formatted;
}
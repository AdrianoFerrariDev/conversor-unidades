export function formatNumber(num) {
    if( num === 0 ) return 0;
    
    if( Math.abs(num) < 0.01 ) {
        //return num.toExponential(2);
    }

    return parseFloat(num.toFixed(4));
}
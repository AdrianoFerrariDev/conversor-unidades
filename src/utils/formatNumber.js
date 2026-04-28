const superscriptMap = {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    '-': '⁻',
}

function toSuperscript(num) {
    return num
        .toString()
        .split('')
        .map(char => superscriptMap[char] || char)
        .join('')
}

export function formatNumber(value, lang = 'pt') {
    if (!isFinite(value)) return ''

    const abs = Math.abs(value)
    
    // Muito pequeno ou muito grande → exponencial
    if( abs !== 0 && (abs < 0.000001 || abs >= 1e9 )) {
        const exp = value.toExponential(2)
        const [base, expoent] = exp.split('e')

        const cleanBase = Number(base) !== 1 ? `${Number(base)} x` : ''
        const cleanExp = expoent.replace('+', '')

        return `${cleanBase} 10${toSuperscript(cleanExp)}`
    }

    return new Intl.NumberFormat( lang === 'pt' ? 'pt-BR' : 'en-US', {
        maximumFractionDigits: 6,
    }).format(value)

    /*// Até 6 casas decimais, removendo zeros desnecessários
    const formatted = Number(num.toFixed(6));
    
    return formatted;*/
}
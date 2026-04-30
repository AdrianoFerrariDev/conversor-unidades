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

const SPACE = '\u202F'

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

    const formatter = new Intl.NumberFormat(lang === 'pt' ? 'pt-Br' : 'en-US', {
            maximumFractionDigits: 8,
        })
    
    // Muito pequeno ou muito grande → exponencial
    if( abs !== 0 && (abs < 0.000001 || abs >= 1e9 )) {
        const exp = value.toExponential(8)
        const [base, expoent] = exp.split('e')

        const cleanBaseNumber = Number(base)

        const formattedBase = cleanBaseNumber !== 1 ? formatter.format(cleanBaseNumber) : ''

        const cleanExp = expoent.replace('+', '')

        return formattedBase ? `${formattedBase}${SPACE}x${SPACE}10${toSuperscript(cleanExp)}` : `10${toSuperscript(cleanExp)}`
    }

    return formatter.format(value)
}
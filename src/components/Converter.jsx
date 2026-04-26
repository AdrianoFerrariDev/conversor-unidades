import { useState } from "react";
import { formatNumber } from "../utils/formatNumber";
import { useTranslation } from "react-i18next";

function Converter({ units, title }) {
    const unitKeys = Object.keys(units)
    const { t } = useTranslation()

    const [value, setValue] = useState(1)
    const [from, setFrom] = useState(unitKeys[0])
    const [to, setTo] = useState(unitKeys[1])

    function convert(value, from, to) {
        const base = value * units[from].factor
        return base / units[to].factor
    }

    const result = formatNumber(convert(Number(value), from, to))

    return (
        <>
            <h2>{title}</h2>
            <input
                type="number"
                value={value}
                autoFocus
                onChange={(e) => setValue(e.target.value)}
            />

            <select value={from} onChange={(e) => setFrom(e.target.value)}>
                {unitKeys.map((unit) => (
                    <option key={unit} value={unit}>
                        {t(units[unit].name)}
                    </option>
                ))}
            </select>
            <button onClick={() => {
                setFrom(to)
                setTo(from)
            }}>
                Inverter
            </button>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
                {unitKeys.map((unit) => (
                    <option key={unit} value={unit}>
                        {t(units[unit].name)}
                    </option>
                ))}
            </select>
            <p>Resultado {result} {units[to].symbol}</p>
            <table>
                <thead>
                    <tr>
                        <td>{t('value')}</td>
                        <td>{t('unity')}</td>
                    </tr>
                </thead>
                <tbody>
                    {unitKeys.map((unit) => {
                        const converted = convert(Number(value), from, unit)
                        return(
                            <tr
                                key={unit}
                                className={`table-row ${unit ===to ? 'active-row' : ''} clickable`}
                                onClick={() => {if (unit !== to) setTo(unit)}}
                            >
                                <td>{formatNumber(converted)} {units[unit].symbol}</td>
                                <td>{t(units[unit].name)}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )
}

export default Converter;
import { useState } from "react";
import { formatNumber } from "../utils/formatNumber";
import { useTranslation } from "react-i18next";
import { ArrowLeftRight } from "lucide-react";

function Converter({ units, unitSystem, title }) {
    const unitKeys = Object.keys(units)
    const { t, i18n } = useTranslation()

    const [value, setValue] = useState(1)
    const [from, setFrom] = useState(unitKeys[0])
    const [to, setTo] = useState(unitKeys[1])

    function convert(value, from, to) {
        const base = value * units[from].factor
        return base / units[to].factor
    }

    function getLang(i18n) {
    return ['pt', 'en'].includes(i18n.language?.slice(0, 2))
        ? i18n.language.slice(0, 2)
        : 'pt'
    }

    const result = formatNumber(
        convert(Number(value), from, to),
        getLang(i18n)
    )

    return (
        <>
            <h2>{title}</h2>
            <section className="converter">
                <div className="converter-row">
                    <div className="converter-input">
                        <input
                            type="number"
                            value={value}
                            autoFocus
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="converter-config">
                        <select name="unit-from" value={from} onChange={(e) => setFrom(e.target.value)}>
                            {Object.entries(unitSystem).map(([systemKey,system]) => (
                                <optgroup key={systemKey} label={t(system.name)}>
                                    {Object.entries(system.units).map(([unitKey, unit]) => (
                                        <option key={unitKey} value={unitKey}>
                                            {t(unit.name)} ({unit.symbol})
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                        <button
                            className="swap-btn"
                            onClick={() => {
                            setFrom(to)
                            setTo(from)
                        }}
                            aria-label="Inverter unidades"
                        >
                            <ArrowLeftRight size={20} />
                        </button>
                        <select name="unit-to" value={to} onChange={(e) => setTo(e.target.value)}>
                            {Object.entries(unitSystem).map(([systemKey,system]) => (
                                <optgroup key={systemKey} label={t(system.name)}>
                                    {Object.entries(system.units).map(([unitKey, unit]) => (
                                        <option key={unitKey} value={unitKey}>
                                            {t(unit.name)} ({unit.symbol})
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>                    
                </div>
                <p className="result">{t('result')}: {value} {units[from].symbol} <span className="equal">=</span> {result} {units[to].symbol}</p>
            </section>
            <section className="list-convertions">
                {Object.entries(unitSystem).map(([systemKey, system]) => (
                    <div key={systemKey} className="table-group">
                        <h3 className={`list-title${units[to].system === systemKey ? ' active-system' : ''}`}>{t(unitSystem[systemKey].name)}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>{t('value')}</td>
                                    <td>{t('unity')}</td>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(system.units).map(([unitKey, unit]) => {
                                        const converted = convert(Number(value),from, unitKey)

                                        return (
                                            <tr
                                                key={unitKey}
                                                className={`table-row ${unitKey === to ? 'active-row' : ''} clickable`}
                                                onClick={() => {
                                                    if(unitKey !== to) setTo(unitKey)
                                                }}
                                            >
                                                <td>
                                                    {formatNumber(converted, i18n.language?.slice(0, 2))} {unit.symbol}
                                                </td>
                                                <td>{t(unit.name)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Converter;
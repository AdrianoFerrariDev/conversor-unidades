import { useState } from "react";
import { convertLength } from "../converters/length";
import { formatNumber } from "../converters/length";
import { units } from "../converters/length";

function Length() {
    const [value, setValue] = useState(0)
    const [from, setFrom] = useState('metro')
    const [to, setTo] = useState('quilometro')

    const result = formatNumber(convertLength(Number(value), from, to))
    const allUnits = Object.keys(units)
    return (
        <>
            <h2>Conversor de Comprimento</h2>
            <p>Converta metros, quilômetros, milhas e mais.</p>

            <input 
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="metro">Metro</option>
                <option value="quilometro">Quilometro</option>
                <option value="decimetro">Decímetro</option>
                <option value="centimetro">Centímetro</option>
                <option value="milimetro">Milímetro</option>
                <option value="milha">Milha</option>
            </select>
            <button onClick={() => {
                setFrom(to)
                setTo(from)
            }}>
                    Inverter
            </button>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="metro">Metro</option>
                <option value="quilometro">Quilometro</option>
                <option value="decimetro">Decímetro</option>
                <option value="centimetro">Centímetro</option>
                <option value="milimetro">Milímetro</option>
                <option value="milha">Milha</option>
            </select>
            <p>Resultado: {result} {units[to].symbol}</p>
            <table>
                <thead>
                    <tr>
                        <th>Unidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {allUnits.map((unit) => {
                        const converted = convertLength(Number(value), from, unit)
                        return(
                            <tr key={unit}>
                                <td>{units[unit].symbol}</td>
                                <td>{formatNumber(converted)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Length;
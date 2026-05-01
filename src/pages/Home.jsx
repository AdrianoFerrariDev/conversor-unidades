import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

function Home() {
  const [value, setValue] = useState(1)
  const [from, setFrom] = useState("meter")
  const [to, setTo] = useState("kilometer")
  
  const units = {
    meter: { factor: 1, symbol: "m" },
    kilometer: { factor: 1000, symbol: "km" },
    centimeter: { factor: 0.01, symbol: "cm" },
    mile: { factor: 1609.34, symbol: "mi" },
  }

  function convert(value, from, to) {
      const base = value * units[from].factor
      return base / units[to].factor
  }

  return (
    <div className="home">
      {/* Quick Converter */}
      <section className="converter">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="converter-row">
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {Object.keys(units).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <button
            className="swap-btn"
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
          >
            <ArrowLeftRight size={18} />
          </button>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {Object.keys(units).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <p className="result">
          Resultado: {convert(Number(value), from, to).toFixed(4)} {units[to].symbol}
        </p>
      </section>

      {/* Popular */}
      <section className="popular">
        <h2>Conversores populares</h2>
        <div className="grid">
          {["Comprimento", "Área", "Volume", "Massa", "Velocidade"].map((item) => (
            <div key={item} className="card">
              {item}
            </div>
          ))}
        </div>
      </section>
      { /* Quick List */}
      <section className="quick">
        <h2>Conversões rápidas</h2>
        <ul>
          <li>1 metro = 100 centímetros</li>
          <li>1 km = 0.621 milhas</li>
          <li> 1 litro = 0.264 galões (US)</li>
        </ul>
      </section>

      {/* Content */}
      <section className="content">
        <h2>Sobre conversão</h2>
        <p>Este conversor permite transformar unidades de forma rápida e precisa. Ideal para estudantes, profissionais e uso cotidiano.</p>
      </section>
    </div>
  );
}

export default Home;
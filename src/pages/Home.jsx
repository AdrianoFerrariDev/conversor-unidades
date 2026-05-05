import { useState } from "react";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/length'
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation()

  return (
    <div className="home">
      {/* Quick Converter */}
      <Converter 
        title={t('pageTitle.lengthConv')}
        unitSystem={unitSystem}
        units={units}
        showTable={false}
      />
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
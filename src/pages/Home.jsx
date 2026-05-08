import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/length'
import { useSEO } from "../hooks/useSEO";
import PageIntro from "../components/PageIntro";

function Home() {
  const { t } = useTranslation()
  
  useSEO({
    title: t("home"),
    description: t("description.home"),
    routeKey: "/",
    breadcrumbs: false,
  });

  return (
    <>
      <PageIntro
        breadcrumbs={false}
        title={t("pageTitle.home")}
        text={t("pageIntro.home")}
      />
      <Converter 
        unitSystem={unitSystem}
        units={units}
        defaultFrom={3}
        defaultTo={5}
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
    </>
  );
}

export default Home;
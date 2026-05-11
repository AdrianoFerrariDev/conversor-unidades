import { useTranslation } from "react-i18next";
import Converter from "../components/Converter";
import { units, unitSystem } from '../converters/length'
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumb";

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
      <Converter
        title={t("pageTitle.home")}
        text={t("pageIntro.home")}
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
          {[t('length'), t('area'), t('volume'), t('mass'), t('speed')].map((item) => (
            <div key={item} className="card">
              {item}
            </div>
          ))}
        </div>
      </section>
      { /* Quick List */}
      <section className="usual">
        <h2>Conversões comuns</h2>
        <p>Abaixo você pode ver algumas conversões usuais de medidas de valor unitário para o seu correspondente.</p>
        <ul>
          <li>1 metro(m) = 100 centímetro(cm)</li>
          <li>1 polegada(in) = 2,54 centímetros(cm)</li>
          <li>1 milha(mi) = &asymp; 1,609 quilômetros(km)</li>
          <li>1 galão Americano - gal (US) &asymp;  3,785 litros(L)</li>
          <li>1 pé(ft) = 30,48 centímetros(cm)</li>
          <li>1 quilograma (kg) = 1000 gramas(g)</li>
          <li>1 metro/segundo (m/s) = 3,6 quilômetros/hora(km/h)</li>
        </ul>
      </section>
    </>
  );
}

export default Home;
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
      <section className="quick">
        <h2>Conversões rápidas</h2>
        <ul>
          <li>1 m = 100 cm</li>
          <li>1 in = 2,54 cm</li>
          <li>1 mi = 1,609 km</li>
          <li>1 gal (US) = 3,785 L</li>
        </ul>
      </section>
    </>
  );
}

export default Home;
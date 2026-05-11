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
        <p>Abaixo, algumas conversões usuais de medidas de valor unitário para o seu correspondente.</p>
        <ul class="conv-list">
          <li><span class="usual-from">1 {t('meter')}(m)</span><span class="usual-eq">=</span><span class="usual-to">100 {t('centimeters')}(cm)</span></li>
          <li><span class="usual-from">1 {t('inch')}(in)</span><span class="usual-eq">=</span><span class="usual-to">2,54 {t('centimeters')}(cm)</span></li>
          <li><span class="usual-from">1 {t('mile')}(mi)</span><span class="usual-eq">&asymp;</span><span class="usual-to">1,609 {t('kilometers')}(km)</span></li>
          <li><span class="usual-from">1 {t('gallon')}(US)(gal (US))</span><span class="usual-eq">&asymp;</span><span class="usual-to">3,785 {t('liters')}(L)</span></li>
          <li><span class="usual-from">1 {t('foot')}(ft)</span><span class="usual-eq">=</span><span class="usual-to">30,48 {t('centimeters')}(cm)</span></li>
          <li><span class="usual-from">1 {t('kilogram')}(kg)</span><span class="usual-eq">=</span><span class="usual-to">1000 {t('grams')}(g)</span></li>
          <li><span class="usual-from">1 {t('metersecond')}(m/s)</span><span class="usual-eq">=</span><span class="usual-to">3,6 {t('kilometershour')}(km/h)</span></li>
        </ul>
      </section>
    </>
  );
}

export default Home;
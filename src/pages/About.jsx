import { useTranslation } from "react-i18next";
import Breadcrumbs from "../components/Breadcrumb";
import { useSEO } from "../hooks/useSEO";

function About() {
    const { t } = useTranslation();

    useSEO({
        title: t('about'),
        description: t('description.about'),
        routeKey: 'area',
        breadcrumbs: true
    })

    return (
        <>
        <Breadcrumbs />
        <h2>{t("about")}</h2>
        <section>
            <p>Projeto pessoal para incluir em portfólio</p>
        </section>
        </>
    );
}

export default About;
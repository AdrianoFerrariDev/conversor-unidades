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
        <section className="text-doc">
            <p>O Conversor de Unidades é um projeto desenvolvido com foco em aprendizado, prática de desenvolvimento front-end moderno e demonstração de habilidades para portfólio profissional.</p>

            <p>A aplicação foi construída utilizando React, JavaScript e outras tecnologias modernas do ecossistema web, com foco em:</p>
            <ul>
                <li>experiência do usuário</li>
                <li>responsividade</li>
                <li>internacionalização</li>
                <li>SEO</li>
                <li>acessibilidade</li>
                <li>organização de código</li>
                <li>componentização</li>
            </ul>
                
            <h3>Objetivo</h3>
            
            <p>O objetivo do projeto é fornecer uma ferramenta simples, rápida e intuitiva para conversão de unidades de medida, incluindo diferentes sistemas de unidades utilizados ao redor do mundo.</p>

            <p>Além da funcionalidade prática, este projeto também serve como ambiente de estudo e experimentação de boas práticas de desenvolvimento web.</p>

            <h3>Funcionalidades</h3>

            <p>Entre os recursos atualmente disponíveis estão:</p>
            <ul>
                <li>conversão de unidades em tempo real</li>
                <li>suporte a múltiplos idiomas</li>
                <li>interface responsiva</li>
                <li>organização por categorias de unidades</li>
                <li>tabelas de conversão</li>
                <li>estrutura otimizada para SEO</li>
            </ul>

            <p>Novas funcionalidades e unidades poderão ser adicionadas futuramente conforme a evolução do projeto.</p>

            <h3>Projeto de Portfólio</h3>

            <p>Este site é um projeto pessoal desenvolvido para fins de estudo, prática e apresentação profissional.</p>

            <p>Ele faz parte do meu portfólio como desenvolvedor e demonstra conhecimentos relacionados ao desenvolvimento de aplicações web modernas utilizando React e ferramentas do ecossistema JavaScript.</p>
            <ul>
                <li>Tecnologias utilizadas</li>
                <li>React</li>
                <li>React Router</li>
                <li>Vite</li>
                <li>i18next</li>
                <li>CSS</li>
                <li>Git e GitHub</li>
            </ul>
        </section>
        </>
    );
}

export default About;
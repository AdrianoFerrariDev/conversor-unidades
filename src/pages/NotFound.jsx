import { Link, useParams } from "react-router-dom";

function NotFound() {
    const { lang = "pt" } = useParams;

    return (
        <>
            <section className="not-found">
                <h2>404</h2>
                <p>Página não encontrada.</p>
                <p>A página que você tentou acessar não existe ou foi movida</p>
                <Link to={`/${lang}`}>Voltar para a página inicial</Link>
            </section>
        </>
    )
}

export default NotFound;
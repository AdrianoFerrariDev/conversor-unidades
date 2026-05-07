import Breadcrumbs from "./Breadcrumb";

function PageIntro({ breadcrumbs = true, title, text }) {
    return (
        <>
        {breadcrumbs &&(
            <Breadcrumbs />
        )}
            <section className="page-intro">
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
        </>
    );
}

export default PageIntro;
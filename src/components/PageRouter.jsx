import { useParams, Navigate } from "react-router-dom";
import { getKeyFromSlug } from "../utils/routes";

import Length from "../pages/Length";
import Area from "../pages/Area";
import Volume from "../pages/Volume";
import Mass from "../pages/Mass";
import Speed from "../pages/Speed";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";
import { routes } from "../routes";


function PageRouter() {
    const { lang, slug } = useParams();

    //const key = getKeyFromSlug(lang, slug);

    /*if(!key) {
        return <Navigate to={`/${lang}`} />;
    }*/

    const pages =  {
        length: <Length />,
        area: <Area />,
        volume: <Volume />,
        mass: <Mass />,
        speed: <Speed />,
        about: <About />,
        privacy: <Privacy />,
        terms: <Terms />
    };

    const currentRoutes = routes[lang];

    if (!currentRoutes) {
        return <NotFound />
    }

    // procura qual chave bate com o slug traduzido
    const routeKey = Object.keys(currentRoutes).find((key) => currentRoutes[key] === slug);

    if(!routeKey) {
        return <NotFound />
    }

    return pages[routeKey];
}

export default PageRouter;
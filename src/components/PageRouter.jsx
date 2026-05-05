import { useParams, Navigate } from "react-router-dom";
import { getKeyFromSlug } from "../utils/routes";

import Length from "../pages/Length";
import Area from "../pages/Area";
import Volume from "../pages/Volume";
import Mass from "../pages/Mass";
import Speed from "../pages/Speed";

function PageRouter() {
    const { lang, slug } = useParams();

    const key = getKeyFromSlug(lang, slug);

    if(!key) {
        return <Navigate to={`/${lang}`} />;
    }

    const pages =  {
        length: <Length />,
        area: <Area />,
        volume: <Volume />,
        mass: <Mass />,
        speed: <Speed />
    };

    return pages[key] || <Navigate to={`/${lang}`} />;
}

export default PageRouter;
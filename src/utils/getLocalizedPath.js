import { routes } from "../routes";

export function getLocalizedPath(lang, routeKey='') {
    const localizedRoute = routes[lang]?.[routeKey];

    if (!routeKey) {
        return `/${lang}`;
    }

    // fallback segurança
    if (!localizedRoute) {
        return `/${lang}`;
    }

    return `/${lang}/${localizedRoute}`;
}


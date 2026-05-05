import { routes } from "../routes";

export function getSlug(lang, key) {
    return routes[lang]?.[key] || "";
}

export function getKeyFromSlug(lang, slug) {
    return Object.keys(routes[lang]).find(
        key => routes[lang][key] === slug
    );
}

export function translateSlug(slug, fromLang, toLang) {
    const key = getKeyFromSlug(fromLang, slug);
    return key ? getSlug(toLang, key) : "";
}
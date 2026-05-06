import { routes } from "../routes";

export function setPageSEO({ title, description, image, url }) {
    document.title = title;

    function setMeta(property, content) {
        let element = document.querySelector(`meta[property="${property}"]`)
        if(!element) {
            element = document.createElement("meta");
            element.setAttribute("property", property);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    }

    function setName(name, content) {
        let element = document.querySelector(`meta[name="${name}"]`);
        if(!element) {
            element = document.createElement("meta");
            element.setAttribute("name", name);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    }

    setName("description", description);

    // Open Graph
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:url", url);
    setMeta("og:image", image);

    function setLink(rel, href) {
        let link = document.querySelector(`link[rel="${rel}"]`);
        if(!link){
            link = document.createElement("link");
            link.setAttribute("rel", rel);
            document.head.appendChild(link);
        }
        link.setAttribute("href", href);
    }

    setLink("canonical", url);

    
}

function setAlternate(hreflang, href) {
    let link = document.querySelector(`link[hreflang="${hreflang}"]`);
    
    if(!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link)
    }
    link.setAttribute("href", href);
}

export function setHrefLangs(currentKey) {
    const baseUrl = window.location.origin;

    Object.keys(routes).forEach((lang) => {
        const slug = routes[lang][currentKey] || "";
        const url = `${baseUrl}/${lang}/${slug}`;

        setAlternate(lang, url);
    });

    // Fallback internacional
    setAlternate("x-default", `${baseUrl}/`);
}
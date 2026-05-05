export function setPageSEO({ titles, description }) {
    document.title = titles;

    let meta = document.querySelector('meta[name=\"description\"]');

    if(!meta){
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
    }

    meta.content = description;
}
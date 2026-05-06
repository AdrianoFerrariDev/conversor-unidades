export function setJSONLD(data) {
    let script = document.querySelector("#json-ld");

    if(!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "json-ld";
        document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
}
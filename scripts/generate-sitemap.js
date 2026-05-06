import fs from "fs";
import { routes } from "../src/routes/index.js";

const baseUrl = "https://meusite.com.br";

function generateUrls() {
    const urls = [];

    Object.keys(routes).forEach((lang) => {
        const pages = routes[lang];

        Object.values(pages).forEach((slug) => {
            const path = slug ? `/${lang}/${slug}` : `/${lang}`;
            urls.push(`${baseUrl}${path}`);
        });
    });

    return urls;
}

function generateSitemap() {
    const urls = generateUrls();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
        .map(
            (url) => `
            <url>
                <loc>${url}</loc>
            </url>`
        )
        .join("")}
    </urlset>`;

    fs.writeFileSync("./public/sitemap.xml", xml);
}

generateSitemap();
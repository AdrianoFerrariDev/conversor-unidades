export function setJSONLD(id, data) {
    let script = document.querySelector(`#${id}`);

    if(!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
}

export function setBreadcrumbSchema({ lang, items }) {
  const baseUrl = window.location.origin;

  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${baseUrl}/${lang}${item.path}`
  }));

  setJSONLD("jsonld-breadcrumbs", {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  });
}

export function setFAQSchema(faqs) {
  setJSONLD("jsonld-faq", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  });
}
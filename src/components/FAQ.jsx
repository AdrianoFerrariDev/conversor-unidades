import { useState } from "react";

function FAQ({ faqs, title="FAQ" }) {
    const [openIndex, setOpenIndex] = useState(null);

    function toggle(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className="faq">
            <h2>{title}</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggle(index)}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <p className="faq-answer">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
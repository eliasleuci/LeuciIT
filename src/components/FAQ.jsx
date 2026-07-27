import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "¿Cómo se define el presupuesto de un desarrollo a medida?",
        answer: "El costo depende de la complejidad funcional, integraciones requeridas y alcance del sistema. Tras nuestra reunión inicial de diagnóstico, enviamos una propuesta formal a precio cerrado con etapas, entregables y plazos fijos, sin sorpresas ni costos ocultos."
    },
    {
        question: "¿El código y el sistema desarrollado pasan a ser 100% de mi empresa?",
        answer: "Absolutamente. A diferencia de plataformas enlatadas con licencias mensuales por usuario, en Leuci IT todo el código fuente, la base de datos y los activos digitales son propiedad intelectual 100% exclusiva de tu empresa."
    },
    {
        question: "¿Cuánto tiempo toma desarrollar una plataforma o panel a medida?",
        answer: "Un MVP (Producto Mínimo Viable) funcional suele entregarse en un plazo de 3 a 6 semanas. Proyectos más complejos se estructuran en sprints de 2 a 3 semanas con avances tangibles."
    },
    {
        question: "¿Qué sucede después del lanzamiento del sistema?",
        answer: "No te dejamos solo. Ofrecemos planes de soporte continuo, mantenimiento preventivo, monitoreo de servidor y desarrollo de nuevas funcionalidades a medida que tu negocio evoluciona."
    },
    {
        question: "¿Se pueden integrar herramientas de Inteligencia Artificial o APIs externas?",
        answer: "Sí. Integramos modelos de IA (procesamiento de texto, asistentes automatizados, análisis predictivo) y conectamos tu plataforma con pasarelas de pago, facturación electrónica, WhatsApp o sistemas heredados."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-header" onClick={onClick}>
                <h3>{question}</h3>
                <span style={{ color: 'var(--accent)' }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="faq-body"
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Preguntas Frecuentes</div>
                    <h2>Respuestas claras a <span className="text-accent">tus dudas principales</span></h2>
                    <p>Todo lo que necesitás saber antes de iniciar tu proyecto tecnológico.</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={activeIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

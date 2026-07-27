import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const HowWeWork = () => {
    const steps = [
        {
            num: "01",
            title: "Diagnóstico",
            desc: "Reunión inicial de 30 minutos para analizar tu negocio, procesos y objetivos."
        },
        {
            num: "02",
            title: "Arquitectura",
            desc: "Diseñamos la estructura técnica, wireframes y propuesta clara con plazos fijos."
        },
        {
            num: "03",
            title: "Desarrollo",
            desc: "Construcción por sprints con entregas periódicas para que veas el avance real."
        },
        {
            num: "04",
            title: "Despliegue",
            desc: "Testing riguroso, pruebas de seguridad y puesta en marcha en servidores de alto rendimiento."
        },
        {
            num: "05",
            title: "Evolución",
            desc: "Acompañamiento post-lanzamiento, soporte directo y escalabilidad continua."
        }
    ];

    return (
        <section id="proceso" className="how-we-work">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Metodología Ágil</div>
                    <h2>Un proceso <span className="text-accent">transparente y sin sorpresas</span></h2>
                    <p>Sabrás exactamente en qué etapa está tu proyecto desde el día uno hasta el lanzamiento.</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="step-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="step-num">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="steps-banner">
                    <CheckCircle size={18} className="text-emerald" style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
                    <strong>Resultado garantizado:</strong> Un sistema en producción, funcionando con usuarios reales en pocas semanas.
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

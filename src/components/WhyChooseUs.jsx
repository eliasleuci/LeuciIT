import React from 'react';
import { motion } from 'framer-motion';
import { Code2, UserCheck, Shield, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Code2 size={24} />,
            title: "100% Código Propio",
            description: "Sin plantillas genéricas de WordPress ni sistemas enlatados. Desarrollamos software a medida donde el código y la propiedad intelectual son 100% tuyos."
        },
        {
            icon: <UserCheck size={24} />,
            title: "1 Interlocutor Directo, 0 Ruido",
            description: "Trato directo con el desarrollador senior responsable del producto. Sin project managers intermediarios que diluyan tu visión ni demoren las respuestas."
        },
        {
            icon: <Shield size={24} />,
            title: "Experiencia en Proyectos Críticos",
            description: "Sistemas testeados y operando con éxito en organismos públicos, plataformas SaaS y comercio electrónico con altos estándares de seguridad."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Arquitectura Escalable & Modular",
            description: "Construimos pensando en el futuro. Empezá con las funciones clave de tu MVP y agregá módulos a medida que tu empresa lo requiera."
        }
    ];

    return (
        <section id="diferenciales" className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Diferenciadores Clave</div>
                    <h2>¿Por qué elegir <span className="text-accent">Leuci IT</span>?</h2>
                    <p>No somos una agencia genérica ni revendedores. Somos tu aliado técnico de confianza.</p>
                </div>

                <div className="why-grid">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="why-icon">{reason.icon}</div>
                            <div className="why-info">
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

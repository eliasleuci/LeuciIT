import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Zap, Cpu } from 'lucide-react';

const WhatWeDo = () => {
    const features = [
        {
            icon: <Layout className="icon" />,
            title: "Páginas y Apps a Medida",
            description: "No usamos plantillas. Construimos páginas web y aplicaciones web desde cero, con el diseño y las funciones exactas que tu negocio necesita."
        },
        {
            icon: <Zap className="icon" />,
            title: "Adiós al Excel Caótico",
            description: "Reemplazamos planillas complejas y procesos manuales por sistemas centralizados, intuitivos y compartidos."
        },
        {
            icon: <Cpu className="icon" />,
            title: "Paneles de Control Propios",
            description: "Diseñamos paneles de administración para gestionar inventario, ventas, contenidos y reportes desde un solo lugar."
        }
    ];

    return (
        <section id="que-hacemos" className="what-we-do">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Nuestra Misión</div>
                    <h2>Transformamos tus procesos en <span className="text-accent">activos digitales</span></h2>
                    <p>Ayudamos a las PYMES argentinas a dar el salto tecnológico con herramientas que simplifican el día a día.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, ShoppingCart, Layers, Repeat, Share2, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Globe size={28} />,
            title: "Páginas Web & Landing Pages",
            outcome: "Convertí visitas en clientes calificados",
            description: "Sitios ultrarrápidos, modernos y optimizados para transmitir autoridad y captar clientes de mayor presupuesto."
        },
        {
            icon: <Layers size={28} />,
            title: "Aplicaciones Web a Medida",
            outcome: "Digitalizá la operativa interna de tu empresa",
            description: "Plataformas y software propio adaptado 100% a tus reglas de negocio: gestión de clientes, servicios y operaciones."
        },
        {
            icon: <LayoutDashboard size={28} />,
            title: "Paneles de Control & Dashboards",
            outcome: "Toma de decisiones basada en datos reales",
            description: "Visualizá inventario, métricas clave, usuarios y facturación desde una consola administrativa intuitiva."
        },
        {
            icon: <ShoppingCart size={28} />,
            title: "E-Commerce de Alta Performance",
            outcome: "Ventas fluidas sin comisiones de terceros",
            description: "Tiendas online personalizadas con catálogo inteligente, carritos optimizados y checkout automatizado."
        },
        {
            icon: <Repeat size={28} />,
            title: "Automatización de Procesos",
            outcome: "Ahorrá decenas de horas operativas al mes",
            description: "Eliminamos tareas repetitivas conectando tus formularios, correos, facturación y herramientas diarias."
        },
        {
            icon: <Share2 size={28} />,
            title: "Integración de APIs y Sistemas",
            outcome: "Sincronía total entre todas tus plataformas",
            description: "Hacemos que tu software se comunique con pasarelas de pago, servicios de mensajería, bases de datos o IA."
        }
    ];

    return (
        <section id="servicios" className="services">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Nuestros Servicios</div>
                    <h2>Soluciones enfocadas en <span className="text-accent">el retorno de tu inversión</span></h2>
                    <p>La tecnología es el vehículo; el objetivo es hacer crecer y escalar tu negocio.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="service-icon-box">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <div className="service-outcome">
                                <Sparkles size={14} /> {service.outcome}
                            </div>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

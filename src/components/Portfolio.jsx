import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Sparkles, LineChart, Store } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            icon: <ShieldCheck size={28} />,
            tag: "Sector Público",
            title: "SIGEVIR — Gestión Vehicular",
            client: "Policía Judicial de Córdoba",
            description: "Sistema full-stack para la gestión integral de la flota vehicular de un organismo público, desde el registro hasta el seguimiento operativo diario.",
            stack: ["React", "Vercel", "Railway", "Supabase"]
        },
        {
            icon: <Sparkles size={28} />,
            tag: "SaaS Multi-Cliente",
            title: "App Fiamma — Gestión para Estéticas",
            client: "En uso por múltiples centros de estética",
            description: "Plataforma de gestión para negocios de estética: reservas online, agenda de profesionales, fichas clínicas, cobros mixtos y reseñas de clientes.",
            stack: ["Next.js", "Supabase"]
        },
        {
            icon: <Store size={28} />,
            tag: "E-commerce",
            title: "Tienda FIT12 — Venta Online",
            client: "fit12cba.com",
            description: "Tienda online propia con carrito, checkout por WhatsApp y buscador inteligente con IA para encontrar productos en segundos.",
            stack: ["React", "Supabase", "Netlify"]
        },
        {
            icon: <LineChart size={28} />,
            tag: "Business Intelligence",
            title: "Panel de Cuentas Corrientes",
            client: "Consolidación de 3 empresas",
            description: "Aplicación que centraliza y visualiza cuentas corrientes de múltiples empresas: antigüedad de deuda, KPIs y vistas cruzadas en un solo panel.",
            stack: ["React", "Vite"]
        }
    ];

    return (
        <section id="proyectos" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Trabajo Real</div>
                    <h2>Proyectos <span className="text-accent">en producción</span>, no maquetas</h2>
                    <p>Estos son algunos de los sistemas que diseñé y desarrollé de punta a punta, hoy operando con usuarios reales.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="portfolio-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="portfolio-card-top">
                                <div className="portfolio-icon">{project.icon}</div>
                                <span className="portfolio-tag">{project.tag}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p className="portfolio-client">{project.client}</p>
                            <p className="portfolio-description">{project.description}</p>
                            <div className="portfolio-stack">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="portfolio-stack-item">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="portfolio-cta">
                    <p>¿Tenés un proyecto en mente? Contame la idea y armamos una propuesta a medida.</p>
                    <a href="#contacto" className="btn btn-primary">
                        Empezar mi proyecto <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

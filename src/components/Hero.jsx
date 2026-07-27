import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-grid">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="badge">
                            <span className="badge-dot"></span>
                            Partner Tecnológico · Córdoba, ARG
                        </div>

                        <h1>
                            Software a medida.<br />
                            Resultados a la medida de <span className="text-accent">tu ambición</span>.
                        </h1>

                        <p>
                            Soy Elias Leuci. Diseño y desarrollo plataformas web, paneles de gestión y sistemas que hoy operan en organismos públicos, empresas y startups.
                        </p>

                        <div className="hero-actions">
                            <div className="hero-ctas">
                                <a href="#contacto" className="btn btn-primary">
                                    Agendar diagnóstico gratuito <ArrowRight size={18} />
                                </a>
                                <a href="#servicios" className="btn btn-secondary">
                                    Explorar servicios
                                </a>
                            </div>
                            <span className="btn-subtext">↳ 30 min · Sin compromiso · Por videollamada</span>
                        </div>

                        <div className="hero-proof">
                            <div className="hero-proof-item">
                                <CheckCircle2 size={16} className="text-emerald" />
                                <span>100% Código propio sin plantillas</span>
                            </div>
                            <div className="hero-proof-item">
                                <CheckCircle2 size={16} className="text-emerald" />
                                <span>Un solo interlocutor directo</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass-card-stack">
                            <div className="card-header-bar">
                                <div className="window-dots">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                </div>
                                <div className="status-pill">
                                    <span className="pulse-dot"></span>
                                    SISTEMAS EN PRODUCCIÓN
                                </div>
                            </div>

                            <div className="metrics-list">
                                <div className="metric-row">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <ShieldCheck size={20} className="text-accent" />
                                        <span className="metric-label">Sector Público & Privado</span>
                                    </div>
                                    <span className="metric-val text-emerald">+4</span>
                                </div>

                                <div className="metric-row">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <Zap size={20} className="text-accent" />
                                        <span className="metric-label">Disponibilidad de Sistemas</span>
                                    </div>
                                    <span className="metric-val">99.9%</span>
                                </div>

                                <div className="metric-row">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <Code2 size={20} className="text-accent" />
                                        <span className="metric-label">Arquitectura Scalable</span>
                                    </div>
                                    <span className="metric-val text-accent">React + Node</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
    const comparisons = [
        {
            beforeTitle: "Planillas de Excel caóticas",
            beforeDesc: "Información dispersa en múltiples archivos, errores humanos de tipeo y descontrol de datos.",
            afterTitle: "Panel de control centralizado",
            afterDesc: "Toda tu operación en un solo lugar, accesible desde cualquier dispositivo y en tiempo real."
        },
        {
            beforeTitle: "Consultas y reservas perdidas",
            beforeDesc: "Mensajes de WhatsApp traspapelados, falta de seguimiento a clientes e ineficiencia.",
            afterTitle: "Automatización y agendas digitales",
            afterDesc: "Sistema propio para reservas, turnos o pedidos funcionando las 24 horas del día."
        },
        {
            beforeTitle: "Decisiones a ciegas",
            beforeDesc: "Sin reportes ni métricas claras sobre ventas, inventario o métricas clave de tu negocio.",
            afterTitle: "Dashboards e indicadores en vivo",
            afterDesc: "Gráficos intuitivos para entender la salud de tu empresa en segundos y actuar rápido."
        }
    ];

    return (
        <section id="problema-solucion" className="problem-solution">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Transformación Digital</div>
                    <h2>De la improvisación a <span className="text-accent">sistemas eficientes</span></h2>
                    <p>Diseñamos herramientas que resuelven los cuellos de botella reales de tu empresa.</p>
                </div>

                <div className="comparison-grid">
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="comparison-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="comp-state">
                                <span className="comp-tag before">
                                    <XCircle size={14} /> El Problema Frecuente
                                </span>
                                <h3>{item.beforeTitle}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.beforeDesc}</p>
                            </div>

                            <div className="comp-divider"></div>

                            <div className="comp-state">
                                <span className="comp-tag after">
                                    <CheckCircle2 size={14} /> La Solución a Medida
                                </span>
                                <h3 className="text-accent">{item.afterTitle}</h3>
                                <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{item.afterDesc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

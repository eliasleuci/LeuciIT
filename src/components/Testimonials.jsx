import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Elias nos resolvió en pocas semanas lo que veníamos arrastrando en planillas de Excel durante años. Hoy tenemos un sistema propio centralizado y confiable.",
            author: "Martín R.",
            role: "Director de Operaciones",
            initials: "MR"
        },
        {
            quote: "Trabajar de forma directa sin intermediarios fue la diferencia. Entendió exactamente lo que necesitaba el negocio y el producto estuvo listo en tiempo récord.",
            author: "Carolina S.",
            role: "Fundadora & CEO",
            initials: "CS"
        },
        {
            quote: "Excelente nivel técnico y compromiso. El panel de gestión que desarrolló simplificó la administración diaria de nuestra empresa enormemente.",
            author: "Gustavo M.",
            role: "Gerente de Tecnología",
            initials: "GM"
        }
    ];

    return (
        <section id="testimonios" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <div className="badge">Prueba Social</div>
                    <h2>Lo que dicen <span className="text-accent">quienes confían en nosotros</span></h2>
                    <p>La mejor garantía es el resultado en la operación diaria de nuestros clientes.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div>
                                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="#7b5eff" color="#7b5eff" />
                                    ))}
                                </div>
                                <p className="quote-text">"{item.quote}"</p>
                            </div>

                            <div className="author-info">
                                <div className="author-avatar">{item.initials}</div>
                                <div>
                                    <div className="author-name">{item.author}</div>
                                    <div className="author-role">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        projectType: 'Plataforma / App Web a Medida',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "5493515208784";
        const text = `Hola Elias, quisiera agendar un diagnóstico estratégico para un proyecto.

📌 Datos de contacto:
• Nombre: ${formData.name}
• Empresa / Negocio: ${formData.company || 'No especificado'}
• Email: ${formData.email}
• Tipo de Proyecto: ${formData.projectType}

💬 Detalles del Proyecto:
${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contacto" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="badge">Contacto Directo</div>
                        <h2>¿Tenés un proceso que necesita <span className="text-accent">su propio sistema</span>?</h2>
                        <p>
                            Agendemos una llamada de diagnóstico de 30 minutos sin costo para evaluar tus requerimientos y diseñar una propuesta a medida.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon"><Phone size={20} /></div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Teléfono / WhatsApp</div>
                                    <div>+54 9 351 520-8784</div>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon"><MapPin size={20} /></div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ubicación</div>
                                    <div>Córdoba, Argentina (Atención Global)</div>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon"><Clock size={20} /></div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tiempo de respuesta</div>
                                    <div>Menos de 24 horas hábiles</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="contact-card-form"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre Completo *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ej: Roberto Gómez"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Empresa / Organización</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Ej: Grupo Logístico SRL"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Corporativo *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="roberto@empresa.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Tipo de Proyecto *</label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                >
                                    <option value="Plataforma / App Web a Medida">Plataforma / App Web a Medida</option>
                                    <option value="Panel de Control / Dashboard">Panel de Control / Dashboard</option>
                                    <option value="Sitio Web Institucional Premium">Sitio Web Institucional Premium</option>
                                    <option value="E-Commerce / Tienda Online">E-Commerce / Tienda Online</option>
                                    <option value="Integración de APIs & Automatizaciones">Integración de APIs & Automatizaciones</option>
                                    <option value="Otro proyecto especial">Otro proyecto especial</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Detalles del Requerimiento *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Contanos brevemente qué problema querés resolver o qué procesos querés automatizar..."
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Solicitar propuesta personalizada <Send size={18} />
                                </button>
                                <span className="btn-subtext">↳ Sin compromiso · Respuesta prioritaria en 24hs</span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

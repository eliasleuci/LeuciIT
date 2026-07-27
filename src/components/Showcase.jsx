import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Calendar, Eye, ShoppingCart, Sparkles, CheckCircle2, Utensils } from 'lucide-react';

const Showcase = () => {
    const [activeTab, setActiveTab] = useState('ecommerce');
    const [selectedImage, setSelectedImage] = useState(null);

    const showcaseData = {
        ecommerce: {
            category: "E-Commerce & Tiendas Online",
            title: "Tienda Online con Carrito Inteligente e IA",
            subtitle: "Plataforma de comercio electrónico rápida e intuitiva para venta minorista y mayorista.",
            description: "Comercio electrónico de alta performance con buscador asistido por Inteligencia Artificial (botón ✨ IA) para encontrar productos por nombre o código en milisegundos, carrito lateral desplegable ('Tu pedido') y checkout fluido.",
            highlights: [
                "Buscador asistido por Inteligencia Artificial (IA) para encontrar productos",
                "Panel de pedido lateral (Drawer) dinámico en tiempo real",
                "Filtros de categoría rápidos por tipo de producto y etiquetas",
                "Diseño responsive optimizado para compra rápida desde el celular"
            ],
            images: [
                {
                    src: "/projects/fit12-store.png",
                    title: "Tienda Online — Buscador Inteligente IA & Carrito Flotante",
                    badge: "E-Commerce & IA"
                }
            ]
        },
        gastronomy: {
            category: "Gastronomía & KDS",
            title: "Sistema de Gestión Gastronómica & Pantalla de Cocina (KDS)",
            subtitle: "Plataforma integral para locales gastronómicos, hamburgueserías y restaurantes.",
            description: "Punto de venta táctil para mostrador y mesas con selector multicanal (Mostrador, Mesa, Envío), cobros integrados (Efectivo, Tarjeta, QR) y Pantalla de Cocina en tiempo real (KDS) con temporizadores y estados de preparación ('En fuego', 'Listo').",
            highlights: [
                "Pantalla de Cocina (KDS) sincronizada en tiempo real sin demoras",
                "Gestión multicanal: Mostrador, Mesas y Envíos (Delivery)",
                "Catálogo de productos con fotos, modificadores y variantes",
                "Control financiero, métricas de venta y gestión de stock"
            ],
            images: [
                {
                    src: "/projects/orderix-pos.jpg",
                    title: "Toma de Pedidos & Punto de Venta Gastronómico",
                    badge: "POS Gastronómico"
                },
                {
                    src: "/projects/orderix-kitchen.png",
                    title: "Pantalla de Cocina (KDS) & Producción en Tiempo Real",
                    badge: "KDS & Cocina"
                }
            ]
        },
        pos: {
            category: "POS & Gestión Comercial",
            title: "Sistemas de Facturación & Control de Stock",
            subtitle: "Plataforma comercial adaptada a las reglas de negocio de cada empresa.",
            description: "Mostrador de ventas de alta velocidad con atajos de teclado (F2 para búsqueda por código), emisión de comprobantes, remitos, métricas de ganancias estimadas e historial de ventas en tiempo real.",
            highlights: [
                "Diseño Dark Mode de alta legibilidad para jornadas intensas",
                "Logotipo y esquema cromático adaptado al branding corporativo",
                "Control automático de bajo stock e historial de ventas",
                "Cero latencia: búsquedas instantáneas en catálogos extensos"
            ],
            images: [
                {
                    src: "/projects/miky-pos.png",
                    title: "Mostrador de Ventas & Facturación Instantánea",
                    badge: "POS & Facturador"
                },
                {
                    src: "/projects/miky-dashboard.png",
                    title: "Dashboard de Control & Métricas de Venta",
                    badge: "Panel de Control"
                },
                {
                    src: "/projects/fit12-dashboard.png",
                    title: "Panel de Gestión Personalizado",
                    badge: "Custom Branding"
                }
            ]
        },
        aesthetic: {
            category: "SaaS & Reservas Online",
            title: "Plataforma de Reservas & Gestión de Turnos",
            subtitle: "Experiencia digital de lujo para centros de estética, belleza y salud.",
            description: "Plataforma de agendamiento online con diseño minimalista refinado, flujo intuitivo de reservas en 3 pasos según la categoría de tratamiento, soporte multi-idioma (ES/EN) y gestión de profesionales.",
            highlights: [
                "Diseño Luxury minimalista con acabados elegantes",
                "Flujo de reservas optimizado en 3 clics",
                "Soporte multi-idioma para clientes internacionales",
                "Integración fluida para agendamiento de turnos"
            ],
            images: [
                {
                    src: "/projects/beauty-hero.jpg",
                    title: "Experiencia Digital & Presentación de Servicios",
                    badge: "Landing Luxury"
                },
                {
                    src: "/projects/beauty-booking.png",
                    title: "Selector de Tratamientos & Reserva de Turnos Online",
                    badge: "Reserva de Turnos"
                }
            ]
        }
    };

    const currentData = showcaseData[activeTab];

    return (
        <section id="casos-reales" className="showcase-section">
            <div className="container">
                <div className="section-header">
                    <div className="badge">
                        <Sparkles size={14} className="text-accent" />
                        Software en Producción
                    </div>
                    <h2>Interfaces diseñadas para <span className="text-accent">sorprender y operar</span></h2>
                    <p>Así lucen las soluciones creadas a medida para nuestros clientes: rápidas, intuitivas y alineadas a su identidad corporativa.</p>
                </div>

                {/* Tabs Selector */}
                <div className="showcase-tabs">
                    <button
                        className={`showcase-tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ecommerce')}
                    >
                        <ShoppingCart size={18} />
                        <span>Tienda E-Commerce & IA</span>
                    </button>

                    <button
                        className={`showcase-tab-btn ${activeTab === 'gastronomy' ? 'active' : ''}`}
                        onClick={() => setActiveTab('gastronomy')}
                    >
                        <Utensils size={18} />
                        <span>Gestión Gastronómica & Cocina</span>
                    </button>

                    <button
                        className={`showcase-tab-btn ${activeTab === 'pos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pos')}
                    >
                        <ShoppingBag size={18} />
                        <span>Sistemas POS & Dashboard</span>
                    </button>

                    <button
                        className={`showcase-tab-btn ${activeTab === 'aesthetic' ? 'active' : ''}`}
                        onClick={() => setActiveTab('aesthetic')}
                    >
                        <Calendar size={18} />
                        <span>App de Reservas</span>
                    </button>
                </div>

                {/* Main Showcase Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="showcase-panel"
                    >
                        <div className="showcase-info">
                            <span className="showcase-category">{currentData.category}</span>
                            <h3>{currentData.title}</h3>
                            <p className="showcase-subtitle">{currentData.subtitle}</p>
                            <p className="showcase-desc">{currentData.description}</p>

                            <div className="showcase-highlights">
                                {currentData.highlights.map((item, idx) => (
                                    <div key={idx} className="showcase-highlight-item">
                                        <CheckCircle2 size={16} className="text-emerald" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="showcase-gallery">
                            {currentData.images.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    className="browser-frame"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="browser-header">
                                        <div className="browser-dots">
                                            <span className="b-dot b-red"></span>
                                            <span className="b-dot b-yellow"></span>
                                            <span className="b-dot b-green"></span>
                                        </div>
                                        <span className="browser-title">{img.title}</span>
                                        <span className="browser-badge">{img.badge}</span>
                                    </div>
                                    <div className="browser-body">
                                        <img src={img.src} alt={img.title} loading="lazy" />
                                        <div className="browser-overlay">
                                            <span className="overlay-btn">
                                                <Eye size={18} /> Ampliar Captura
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Modal for Expanded Image View */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="image-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="image-modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="image-modal-header">
                                <h4>{selectedImage.title}</h4>
                                <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>✕</button>
                            </div>
                            <div className="image-modal-body">
                                <img src={selectedImage.src} alt={selectedImage.title} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Showcase;

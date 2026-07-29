import React from 'react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <LogoIcon size={28} />
                            <span>Leuci IT</span>
                            <span className="logo-badge">STUDIO</span>
                        </a>
                        <p>
                            Desarrollo de software a medida y soluciones tecnológicas de alta performance para empresas, startups y organismos públicos en Argentina e Hispanoamérica.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#proceso">Proceso</a></li>
                                <li><a href="#diferenciales">Diferenciales</a></li>
                                <li><a href="#testimonios">Testimonios</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Soluciones</h4>
                            <ul>
                                <li><a href="#servicios">Desarrollo Web</a></li>
                                <li><a href="#servicios">Apps Web a Medida</a></li>
                                <li><a href="#servicios">Paneles de Control</a></li>
                                <li><a href="#servicios">E-Commerce</a></li>
                                <li><a href="#contacto">Consulta Estratégica</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Leuci IT. Todos los derechos reservados. Elias Leuci.</p>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <a 
                            href="https://www.linkedin.com/in/elias-leuci-725091a7/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}
                        >
                            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                        </a>
                        <span>• Córdoba, Argentina</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

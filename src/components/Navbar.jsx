import React, { useState } from 'react';
import { Menu, X, Cpu, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="#" className="logo">
                    <Cpu size={24} className="text-accent" />
                    <span>Leuci IT</span>
                    <span className="logo-badge">STUDIO</span>
                </a>

                <div className="desktop-menu">
                    <ul className="nav-links">
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#casos-reales">Capturas Reales</a></li>
                        <li><a href="#proceso">Proceso</a></li>
                        <li><a href="#diferenciales">Diferenciales</a></li>
                        <li><a href="#testimonios">Testimonios</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                    <a href="#contacto" className="btn btn-primary btn-sm">
                        Agendar reunión estratégica <ArrowUpRight size={16} />
                    </a>
                </div>

                <button 
                    className="mobile-menu-btn" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a></li>
                    <li><a href="#casos-reales" onClick={() => setIsOpen(false)}>Capturas Reales</a></li>
                    <li><a href="#proceso" onClick={() => setIsOpen(false)}>Proceso</a></li>
                    <li><a href="#diferenciales" onClick={() => setIsOpen(false)}>Diferenciales</a></li>
                    <li><a href="#testimonios" onClick={() => setIsOpen(false)}>Testimonios</a></li>
                    <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
                    <li>
                        <a href="#contacto" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                            Reservar diagnóstico →
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

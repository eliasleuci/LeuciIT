import React from 'react';
import { Building2, Store, Sparkles, LineChart, ShieldCheck } from 'lucide-react';

const LogoBar = () => {
    const sectors = [
        { icon: <ShieldCheck size={18} />, name: "Organismos Públicos" },
        { icon: <Sparkles size={18} />, name: "Plataformas SaaS Multi-Cliente" },
        { icon: <Store size={18} />, name: "E-Commerce & Retail" },
        { icon: <LineChart size={18} />, name: "Business Intelligence & Finanzas" },
        { icon: <Building2 size={18} />, name: "PyMEs y Negocios en Crecimiento" },
    ];

    return (
        <div className="logo-bar">
            <div className="container">
                <p className="logo-bar-title">Soluciones operando con éxito en diversos sectores</p>
                <div className="logo-items">
                    {sectors.map((sector, index) => (
                        <div key={index} className="logo-badge-item">
                            <span className="text-accent">{sector.icon}</span>
                            <span>{sector.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoBar;

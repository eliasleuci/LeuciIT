import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    const phoneNumber = "5493515208784";
    const message = encodeURIComponent("¡Hola Elias! Quisiera agendar un diagnóstico estratégico para un software a medida.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} />
        </motion.a>
    );
};

export default FloatingWhatsApp;

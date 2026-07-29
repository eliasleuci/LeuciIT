import React from 'react';

const LogoIcon = ({ size = 28, className = '' }) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 512 512" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`logo-icon-svg ${className}`}
            style={{ minWidth: size, display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
            aria-hidden="true"
        >
            {/* Main Royal Blue Square */}
            <rect x="64" y="96" width="352" height="352" rx="20" fill="#0D47EC" />
            
            {/* White 'L' Character */}
            <path d="M 160 192 H 224 V 320 H 344 V 384 H 160 Z" fill="#FFFFFF" />
            
            {/* Top-Right Tilted Black Diamond */}
            <rect x="380" y="60" width="72" height="72" rx="4" fill="#090A0F" transform="rotate(45 416 96)" />
        </svg>
    );
};

export default LogoIcon;

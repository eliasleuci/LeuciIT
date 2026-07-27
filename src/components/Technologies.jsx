import React from 'react';

const Technologies = () => {
    const techList = [
        "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "SUPABASE", "VERCEL",
        "RAILWAY", "PYTHON", "TAILWIND CSS", "REST APIS", "POSTGRESQL", "DOCKER"
    ];

    // Double the array for seamless infinite loop
    const fullTrack = [...techList, ...techList];

    return (
        <div className="tech-marquee">
            <div className="tech-track">
                {fullTrack.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <span>///</span> {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

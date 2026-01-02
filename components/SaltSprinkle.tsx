import React, { useState, useEffect, useRef } from 'react';

interface SaltParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    rotation: number;
}

const SaltSprinkle: React.FC = () => {
    const [particles, setParticles] = useState<SaltParticle[]>([]);
    const lastScrollY = useRef(0);
    const particleIdCounter = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only sprinkle when scrolling up
            if (currentScrollY < lastScrollY.current) {
                // Create new salt particles
                const newParticles: SaltParticle[] = [];
                const numParticles = Math.floor(Math.random() * 3) + 2; // 2-4 particles per scroll

                for (let i = 0; i < numParticles; i++) {
                    newParticles.push({
                        id: particleIdCounter.current++,
                        x: Math.random() * window.innerWidth,
                        y: -10, // Start above the viewport
                        size: Math.random() * 4 + 2, // 2-6px
                        duration: Math.random() * 2 + 3, // 3-5 seconds
                        delay: Math.random() * 0.2,
                        rotation: Math.random() * 360,
                    });
                }

                setParticles(prev => [...prev, ...newParticles]);

                // Remove particles after they've fallen
                setTimeout(() => {
                    setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
                }, 6000);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute"
                    style={{
                        left: `${particle.x}px`,
                        top: `${particle.y}px`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: '#1a1a1a',
                        borderRadius: '50%',
                        opacity: 0.6,
                        transform: `rotate(${particle.rotation}deg)`,
                        animation: `saltFall ${particle.duration}s linear ${particle.delay}s forwards`,
                    }}
                />
            ))}

            <style>{`
        @keyframes saltFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(${window.innerHeight + 20}px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default SaltSprinkle;

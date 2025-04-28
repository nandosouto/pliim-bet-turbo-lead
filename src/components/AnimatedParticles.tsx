
import React from "react";

// Gera partículas aleatórias para o fundo
const generateParticles = (count = 15) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    color: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#00B300" : "#FEFF0B",
    delay: i * 0.2,
    duration: 4 + Math.random() * 4
  }));
};

const AnimatedParticles = () => {
  const particles = React.useMemo(() => generateParticles(20), []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="absolute rounded-full animate-pulse opacity-40"
          style={{
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedParticles;

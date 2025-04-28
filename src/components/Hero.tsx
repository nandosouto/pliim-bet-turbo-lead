
import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import { ArrowRight } from "lucide-react";

// Array de partículas para o fundo animado
const particles = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  color: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#00B300" : "#FEFF0B",
  delay: i * 0.2
}));

const Hero = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Partículas animadas no fundo */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="absolute rounded-full animate-pulse opacity-60"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="w-full max-w-lg mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="relative overflow-hidden rounded-lg mb-6 group">
            <img 
              src="http://supervipexclusive.online/wp-content/uploads/2025/04/CAPA-PLIIMBET-4-scaled-1.webp" 
              alt="Pliim Bet VIP" 
              className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width="320"
              height="161"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/320x161/000000/FEFF0B?text=PLIIM+BET";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-3 right-3 bg-[#FFD700] text-black px-3 py-1 rounded-md text-xs font-bold animate-scale-pulse">
              EXCLUSIVO
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white animate-fade-in" style={{animationDelay: '0.4s'}}>
            <span className="text-pliim-gold">PARABÉNS!</span> VOCÊ FOI ESCOLHIDO PARA O CUPOM EXCLUSIVO!
          </h1>
          
          <p className="text-lg text-center mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            Falta apenas 1 passo para jogar e ganhar!
          </p>
          
          <div className="flex justify-center mb-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <WhatsAppButton />
          </div>

          <div className="flex flex-col gap-3 text-center animate-fade-in" style={{animationDelay: '1s'}}>
            <p className="text-pliim-gold font-medium flex items-center justify-center gap-2">
              Você está entre os 100 escolhidos! <ArrowRight size={16} /> Aproveite!
            </p>
            <p className="text-xs text-gray-400">⚠️ Site 18+ | Sem garantia de ganhos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

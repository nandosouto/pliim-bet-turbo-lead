
import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-lg mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="relative overflow-hidden rounded-lg mb-6 group">
            <img 
              src="http://supervipexclusive.online/wp-content/uploads/2025/04/CAPA-PLIIMBET-4-scaled-1.webp" 
              alt="Pliim Bet VIP" 
              className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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

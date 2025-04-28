
import React from "react";
import { Check, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "João P.",
    testimonial: "Ganhei R$ 500 em 2 horas! Cashback super rápido!",
    stars: 5,
    verified: true,
    bgClass: "from-[#F2FCE2]/10 to-transparent"
  },
  {
    id: 2,
    name: "Maria L.",
    testimonial: "Retirei R$ 1.200 no mesmo dia! Plataforma confiável e rápida.",
    stars: 5,
    verified: true,
    bgClass: "from-[#D3E4FD]/10 to-transparent"
  },
  {
    id: 3,
    name: "Ricardo S.",
    testimonial: "Rodadas grátis todo dia! Melhor plataforma de longe!",
    stars: 5,
    verified: true,
    bgClass: "from-[#FFDEE2]/10 to-transparent"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-black/80 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#00B300]/5 to-black/0 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-pliim-gold animate-fade-in">
          O QUE OS JOGADORES ESTÃO DIZENDO
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br border border-white/10 shadow-xl rounded-lg p-5 relative overflow-hidden animate-fade-in"
              style={{animationDelay: `${0.2 * (index + 1)}s`}}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgClass} opacity-10`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-[#FFD700]">{testimonial.name}</h3>
                  {testimonial.verified && (
                    <div className="flex items-center text-xs text-[#00B300]">
                      <Check size={14} className="mr-1" />
                      <span>Verificado</span>
                    </div>
                  )}
                </div>
                
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                
                <p className="text-sm">{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from "react";
import { Check, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "João P.",
    testimonial: "Ganhei R$ 500 em 2 horas! Cashback super rápido!",
    stars: 5,
    verified: true
  },
  {
    id: 2,
    name: "Maria L.",
    testimonial: "Retirei R$ 1.200 no mesmo dia! Plataforma confiável e rápida.",
    stars: 5,
    verified: true
  },
  {
    id: 3,
    name: "Ricardo S.",
    testimonial: "Rodadas grátis todo dia! Melhor plataforma de longe!",
    stars: 5,
    verified: true
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-pliim-gold animate-fade-in">
          O QUE OS JOGADORES ESTÃO DIZENDO
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card animate-fade-in"
              style={{animationDelay: `${0.2 * (index + 1)}s`}}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-pliim-gold">{testimonial.name}</h3>
                {testimonial.verified && (
                  <div className="flex items-center text-xs text-green-400">
                    <Check size={14} className="mr-1" />
                    <span>Verificado</span>
                  </div>
                )}
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

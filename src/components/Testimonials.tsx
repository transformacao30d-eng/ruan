import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonialImages = [
    {
      id: 1,
      url: "https://i.ibb.co/Pzj4zhMJ/1.png",
      alt: "Depoimento WhatsApp 1"
    },
    {
      id: 2,
      url: "https://i.ibb.co/fGMzL9q9/2.png",
      alt: "Depoimento WhatsApp 2"
    },
    {
      id: 3,
      url: "https://i.ibb.co/xt8pSV7L/3.png",
      alt: "Depoimento WhatsApp 3"
    },
    {
      id: 4,
      url: "https://i.ibb.co/9kL6WhQ2/4.jpg",
      alt: "Depoimento WhatsApp 4"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E2E5C] tracking-tight leading-tight">
            Veja os Resultados de Quem Já Usa Nossas Atividades
          </h2>
        </div>

        {/* 9:16 Carousel Container */}
        <div className="relative max-w-sm mx-auto px-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento Anterior"
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-[#22C55E] shadow-xl border border-slate-200/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Image slide container without letterboxing or background box */}
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] mx-auto flex items-center justify-center">
            <img
              key={currentIndex}
              src={testimonialImages[currentIndex].url}
              alt={testimonialImages[currentIndex].alt}
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-2xl shadow-xl mx-auto block transition-all duration-300"
            />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Próximo Depoimento"
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-[#22C55E] shadow-xl border border-slate-200/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Carousel Dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {testimonialImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-8 h-2.5 bg-[#22C55E] rounded-full shadow-sm' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};






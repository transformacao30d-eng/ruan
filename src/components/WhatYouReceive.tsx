import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CHECKOUT_URL } from '../config';

export const WhatYouReceive: React.FC = () => {

  const previewImages = [
    {
      url: "https://i.ibb.co/MjyZvTY/image.png",
      title: "Atividades de Caligrafia e Vogais"
    },
    {
      url: "https://i.ibb.co/nMTHf2Gm/image.png",
      title: "Coordenação Motora e Traçados"
    },
    {
      url: "https://i.ibb.co/Z6Lt7BwL/image.png",
      title: "Desenhos e Ligue os Pontos"
    },
    {
      url: "https://i.ibb.co/RkTcfFTy/image.png",
      title: "Fixação e Leitura Inicial"
    },
    {
      url: "https://i.ibb.co/C5MXnLCt/image.png",
      title: "Escrita de Números e Lógica"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? previewImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === previewImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Helper to get 3 items for display
  const visibleCards = [
    previewImages[currentIndex],
    previewImages[(currentIndex + 1) % previewImages.length],
    previewImages[(currentIndex + 2) % previewImages.length],
  ];

  return (
    <section id="previa-conteudo" className="py-16 md:py-24 bg-gradient-to-b from-[#D4E4FF] via-[#EBF3FF] to-[#D4E4FF] relative overflow-hidden">
      {/* Decorative playful soft background blobs */}
      <div className="absolute top-10 left-8 w-72 h-72 bg-[#FFD95A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-80 h-80 bg-[#4F7DF3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF8FA3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F89252] tracking-tight leading-tight">
            Conheça um pouco das Atividades do Material
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative my-8 px-8 sm:px-12 max-w-3xl mx-auto">
          
          {/* Navigation Arrow Left */}
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-[#4F7DF3] shadow-md border border-slate-200/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </button>

          {/* Cards Grid (1 card mobile, 2 tablet, 3 desktop) */}
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 items-center justify-center max-w-2xl mx-auto">
            {visibleCards.map((item, idx) => {
              let visibilityClass = "block w-full max-w-[280px] sm:max-w-none mx-auto sm:scale-105 z-10 border-[#4F7DF3]/30 ring-2 ring-[#4F7DF3]/10";
              if (idx === 1) {
                visibilityClass = "hidden sm:block opacity-90";
              } else if (idx === 2) {
                visibilityClass = "hidden md:block opacity-90";
              }

              return (
                <div 
                  key={`${currentIndex}-${idx}`}
                  className={`bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200/70 shadow-lg shadow-slate-200/30 transition-all duration-300 transform hover:-translate-y-1 ${visibilityClass}`}
                >
                  <div className="relative aspect-[3/4] max-h-[300px] sm:max-h-[250px] w-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100 p-1">
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain mx-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrow Right */}
          <button
            onClick={nextSlide}
            aria-label="Próximo"
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-[#4F7DF3] shadow-md border border-slate-200/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </button>

          {/* Carousel Dot Indicators - Exact pill/dot style */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {previewImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para a imagem ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-6 h-2 bg-[#22C55E] rounded-full shadow-sm' 
                    : 'w-2 h-2 bg-slate-200 hover:bg-slate-300 rounded-full'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Section CTA Button */}
        <div className="mt-10 text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-lg sm:text-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>QUERO O MATERIAL COMPLETO</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};



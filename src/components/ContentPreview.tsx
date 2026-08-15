import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WORKSHEETS_PREVIEW_IMAGE } from '../assets';
import { getCheckoutUrl } from '../utils/checkout';

interface SlideItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  fallbackImage?: string;
  description: string;
}

export const ContentPreview: React.FC = () => {
  const slides: SlideItem[] = [
    {
      id: 'worksheets',
      title: 'Amostra de Folhas Prontas em A4',
      category: 'PÁGINAS PRONTAS PARA IMPRIMIR',
      badge: 'FORMATO PDF (A4)',
      image: 'https://i.ibb.co/Kp4xcC5Q/IMG-0077-1.jpg',
      fallbackImage: 'https://i.ibb.co/5gphXq1z/IMG-0077-1.jpg',
      description: 'Traçados pontilhados de alta definição, perfeitos para a criança treinar a coordenação motora e caligrafia.'
    },
    {
      id: 'caligrafia',
      title: 'Caderno Principal: +5.000 Atividades',
      category: 'ALFABETIZAÇÃO & CALIGRAFIA',
      badge: 'PRODUTO PRINCIPAL',
      image: 'https://i.ibb.co/B5mgjpYy/IMG-0076.jpg',
      fallbackImage: 'https://i.ibb.co/PvR54LVc/IMG-0076.jpg',
      description: 'Letras maiúsculas, minúsculas, palavras, frases, números e exercícios de coordenação motora fina.'
    },
    {
      id: 'matematica',
      title: 'Caderno de Matemática Infantil',
      category: '+400 CONTINHAS',
      badge: 'BÔNUS 01',
      image: 'https://i.ibb.co/v4VnPnRL/IMG-0075.jpg',
      fallbackImage: 'https://i.ibb.co/YBPskswf/IMG-0075.jpg',
      description: 'Atividades práticas de adição, subtração, multiplicação e divisão com apoio visual para fácil compreensão.'
    },
    {
      id: 'ingles',
      title: 'Desenhos em Inglês para Colorir',
      category: '+150 DESENHOS EDUCATIVOS',
      badge: 'BÔNUS 02',
      image: 'https://i.ibb.co/v4VnPnRL/IMG-0075.jpg',
      fallbackImage: 'https://i.ibb.co/YBPskswf/IMG-0075.jpg',
      description: 'Vocabulário ilustrado em inglês para aprender novas palavras colorindo e se divertindo.'
    },
    {
      id: 'corpo-humano',
      title: 'Corpo Humano Infantil',
      category: 'ANATOMIA & CIÊNCIAS',
      badge: 'BÔNUS 03',
      image: 'https://i.ibb.co/nNxqfJrz/IMG-0073.jpg',
      fallbackImage: 'https://i.ibb.co/wF5ZCmyM/IMG-0073.jpg',
      description: 'Material visual e intuitivo com os órgãos, esqueleto e partes do corpo humano para crianças.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Touch swipe support
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="previa-do-conteudo" className="py-16 sm:py-24 bg-gradient-to-b from-[#CCE3FD] via-[#D8EAFF] to-[#CCE3FD] relative overflow-hidden border-t border-blue-200/80">
      
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2E5C] tracking-tight leading-tight">
            Prévia do Nosso Conteúdo
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-50/50 rounded-3xl p-3 sm:p-6 md:p-8 border border-slate-200 shadow-[0_12px_45px_rgba(15,23,42,0.08)] mb-8"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide Visual Display */}
          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/9] flex items-center justify-center">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-2 sm:p-4 ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (slide.fallbackImage) {
                      e.currentTarget.src = slide.fallbackImage;
                    }
                  }}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl drop-shadow-md select-none"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 bg-[#2563EB]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center max-w-md mx-auto">
          <a
            id="fcfe40bb-5f75-45de-3b94-238f804ce929"
            href={getCheckoutUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>QUERO RECEBER O KIT COMPLETO</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

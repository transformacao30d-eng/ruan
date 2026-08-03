import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_INFO } from '../config';

export const StickyMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down past initial hero section (e.g. 250px)
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl animate-in slide-in-from-bottom duration-200">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="text-left pl-1">
          <span className="text-[10px] uppercase font-extrabold text-[#22C55E] tracking-wider block flex items-center gap-1">
            <Zap className="w-3 h-3 fill-[#22C55E]" /> Acesso Imediato
          </span>
          <span className="text-xs font-black text-slate-900 block leading-tight">
            Kit +5000 Atividades
          </span>
        </div>

        <a
          href={CHECKOUT_URL}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs sm:text-sm shadow-md active:scale-[0.98] transition-transform text-center whitespace-nowrap"
        >
          <span>QUERO ACESSAR POR R$ 14,90</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
};

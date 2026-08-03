import React, { useState, useEffect } from 'react';
import { Pencil, Star, Menu, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_INFO } from '../config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' 
        : 'bg-slate-50/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Brand */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="flex items-center gap-2.5 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F7DF3] to-[#7B9EFA] flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
            <Pencil className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div>
            <span className="text-lg font-bold text-slate-800 tracking-tight block leading-none">
              +5000 <span className="text-[#4F7DF3]">Caligrafia</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 mt-0.5">
              <Star className="w-3 h-3 fill-[#FFD95A] text-[#FFD95A]" /> Material Educativo Digital
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button 
            onClick={() => scrollToSection('o-que-vai-receber')} 
            className="hover:text-[#4F7DF3] transition-colors cursor-pointer"
          >
            O que vai receber
          </button>
          <button 
            onClick={() => scrollToSection('oferta')} 
            className="hover:text-[#4F7DF3] transition-colors cursor-pointer"
          >
            Plano R$ 14,90
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')} 
            className="hover:text-[#4F7DF3] transition-colors cursor-pointer"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-[#4F7DF3] transition-colors cursor-pointer"
          >
            Perguntas Frequentes
          </button>
        </nav>

        {/* Desktop Header CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-[0.98]"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Garantir por {PRODUCT_INFO.priceCurrent}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('o-que-vai-receber')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4F7DF3]"
            >
              O que você vai receber
            </button>
            <button
              onClick={() => scrollToSection('oferta')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4F7DF3]"
            >
              Oferta Especial (R$ 14,90)
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4F7DF3]"
            >
              Depoimentos de Pais e Professores
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4F7DF3]"
            >
              Perguntas Frequentes
            </button>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <a
              href={CHECKOUT_URL}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2563EB] text-white font-bold text-center shadow-md hover:bg-[#1D4ED8] transition-all"
            >
              <span>QUERO RECEBER AS ATIVIDADES POR {PRODUCT_INFO.priceCurrent}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

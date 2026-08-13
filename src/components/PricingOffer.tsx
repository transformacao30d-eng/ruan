import React from 'react';
import { Check, Shield, AlertTriangle, Sparkles, Lock, Zap, Gift } from 'lucide-react';
import { PRODUCT_INFO } from '../config';
import { getCheckoutUrl } from '../utils/checkout';

export const PricingOffer: React.FC = () => {
  const planBenefits = [
    "+5000 Atividades Prontas Para Imprimir",
    "Receba o Material Direto no WhatsApp e E-mail",
    "Coordenação Motora e Exercícios de Tracejado",
    "Alfabeto Completo (Letras Maiúsculas, Minúsculas e Cursivas)",
    "Sílabas, Palavras e Frases para Treinar a Escrita",
    "Coleção Completa de 2 a 10 Anos",
    "Arquivos Digitais em Alta Resolução (PDF)",
    "Acesso Vitalício + Atualizações Inclusas",
    "Suporte VIP via WhatsApp",
    "Garantia de Satisfação de 7 Dias"
  ];

  const bonusItems = [
    "+500 Continhas de Matemática Infantil",
    "+150 Desenhos em Inglês para Colorir",
    "Corpo Humano Infantil",
    "Aprendendo as Horas e o Relógio",
    "Países da Copa do Mundo para Colorir"
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#2B66EC] relative overflow-hidden">
      {/* Background Decorative Soft Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Main Offer Card */}
        <div className="bg-white rounded-[32px] shadow-2xl shadow-blue-900/40 p-6 sm:p-10 relative mt-4 border border-white/20">
          
          {/* Top Badge Attached to Card Border */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00BBA7] text-white px-5 py-2 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>RECOMENDADO POR PEDAGOGOS</span>
          </div>

          {/* Title inside card */}
          <div className="mt-4 mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight uppercase">
              GUIA COMPLETO
            </h3>
          </div>

          {/* Product Image Mockup */}
          <div className="relative w-full max-w-[240px] sm:max-w-[280px] mx-auto mb-5 flex items-center justify-center p-0 overflow-visible">
            <img
              src="https://i.ibb.co/gZhyYgKP/image.png"
              alt={PRODUCT_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-w-[200px] sm:max-w-[240px] object-contain mx-auto mix-blend-multiply drop-shadow-xl transition-all duration-300"
              style={{ imageRendering: 'auto' }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.step) {
                  target.dataset.step = '1';
                  target.src = 'https://i.ibb.co/1fYFfgVB/mokcup.png';
                } else if (target.dataset.step === '1') {
                  target.dataset.step = '2';
                  target.src = 'https://i.ibb.co/bgjcg0hY/mokcup.png';
                }
              }}
            />
          </div>

          {/* Price Section */}
          <div className="text-center mb-6">
            <p className="text-xs sm:text-sm font-bold text-slate-400 line-through">
              De R$ 67,00
            </p>
            <div className="text-4xl sm:text-5xl font-black text-[#00C853] tracking-tight my-1">
              {PRODUCT_INFO.priceCurrent}
            </div>
          </div>

          {/* Benefits Checklist */}
          <div className="space-y-3 mb-6 text-left max-w-lg mx-auto border-t border-slate-100 pt-6">
            {planBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#00C853] border border-[#00C853]/30 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Exclusive Bonuses List */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/90 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-amber-200/80">
              <Gift className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="font-extrabold text-xs sm:text-sm text-amber-900 uppercase tracking-wide">
                🎁 BÔNUS EXCLUSIVOS INCLUSOS HOJE:
              </span>
            </div>
            <div className="space-y-2.5">
              {bonusItems.map((bonus, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 text-[10px] font-black">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {bonus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <a
              href={getCheckoutUrl()}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black text-lg sm:text-xl tracking-wide uppercase shadow-xl shadow-blue-900/30 hover:shadow-blue-900/40 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>QUERO O MATERIAL COMPLETO</span>
            </a>

            {/* Security note below button */}
            <p className="text-[11px] sm:text-xs font-bold text-slate-400 flex items-center justify-center gap-1.5 uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>SITE SEGURO • SEUS DADOS CRIPTOGRAFADOS</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};


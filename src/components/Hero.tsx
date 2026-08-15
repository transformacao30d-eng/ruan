import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';

interface HeroProps {
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSampleModal }) => {
  const [timeLeft, setTimeLeft] = useState(7 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <section id="hero" className="relative pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#CBE0FD] via-[#D8EAFF] to-[#CCE4FD]">
      {/* Top Countdown Bar */}
      <div className="w-full bg-[#4F7DF3] text-white py-2.5 px-4 shadow-sm text-center text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 mb-8">
        <span className="text-sm sm:text-base animate-bounce">🔥</span>
        <span>
          Atenção: Esta oferta especial expira em{' '}
          <span className="bg-white/20 text-white font-mono px-2 py-0.5 rounded tracking-wider font-extrabold ml-1 inline-block">
            {formatTime(timeLeft)}
          </span>
        </span>
      </div>

      {/* Decorative playful soft background elements */}
      <div className="absolute top-12 left-10 w-64 h-64 bg-[#4F7DF3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFD95A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Mais de <span className="text-[#4F7DF3] underline decoration-[#FFD95A] decoration-wavy decoration-2">5.000 Atividades</span> de Caligrafia Para Seu Filho Aprender Brincando
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg text-slate-600 leading-snug max-w-2xl mx-auto">
            Ajude a criança a melhorar a letra, desenvolver a coordenação motora e aprender a escrever com atividades divertidas, educativas e prontas para imprimir.
          </p>

          {/* Image Banner */}
          <div className="w-full max-w-lg mx-auto py-2">
            <img
              src="https://i.ibb.co/1fYFfgVB/mokcup.png"
              alt="Kit +5000 Atividades de Caligrafia"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain mx-auto mix-blend-multiply drop-shadow-xl"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedMedium) {
                  target.dataset.triedMedium = 'true';
                  target.src = 'https://i.ibb.co/bgjcg0hY/mokcup.png';
                }
              }}
            />
          </div>

          {/* CTA Box */}
          <div className="pt-4 space-y-4 w-full flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href="#oferta"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-lg sm:text-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                <span>QUERO O MATERIAL COMPLETO</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 border-t border-slate-100 max-w-md w-full">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Compra segura</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#4F7DF3]" />
                <span>Envio no WhatsApp e E-mail</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FF8FA3]" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

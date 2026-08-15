import React from 'react';
import garantiaImg from '../assets/images/garantia_7_dias_1786556442569.jpg';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#D4E7FC] px-4 sm:px-6 border-t border-blue-200/80">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[28px] shadow-xl shadow-slate-200/60 p-6 sm:p-10 md:p-12 text-center border border-slate-100/80">
          
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6 sm:mb-8">
            Sua Compra Totalmente Livre de Riscos
          </h2>

          <div className="w-full h-px bg-slate-100 mb-8 sm:mb-10" />

          {/* Grid with 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative items-start">
            
            {/* Middle Divider Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-slate-100 -translate-x-1/2" />

            {/* Left Column: 7 Days Guarantee */}
            <div className="flex flex-col items-center text-center">
              {/* Gold 7 Days Seal Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 relative flex items-center justify-center shrink-0">
                <img
                  src={garantiaImg}
                  alt="Selo Garantia 7 Dias"
                  className="w-full h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-wide uppercase mb-2">
                GARANTIA INCONDICIONAL 7 DIAS
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                Você tem 7 dias inteiros para testar o material com seu filho. Se não amar a mudança, devolvemos tudo. Simples assim.
              </p>
            </div>

            {/* Right Column: Ambiente 100% Seguro */}
            <div className="flex flex-col items-center text-center">
              {/* SSL Badge Icon */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 flex flex-col items-center justify-center shrink-0">
                {/* Yellow Lock */}
                <div className="mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-amber-400 stroke-amber-500 stroke-1 drop-shadow-sm">
                    <path d="M12 2C9.24 2 7 4.24 7 7V10H6C4.9 10 4 10.9 4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12C20 10.9 19.1 10 18 10H17V7C17 4.24 14.76 2 12 2ZM9 7C9 5.34 10.34 4 12 4C13.66 4 15 5.34 15 7V10H9V7ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z" />
                  </svg>
                </div>

                {/* Green Box Pill for SSL */}
                <div className="flex flex-col items-center bg-[#70C043] text-white px-3.5 py-1.5 rounded-lg shadow-sm border border-[#5ca334]">
                  <span className="font-black text-[10px] sm:text-[11px] tracking-wider uppercase leading-none mb-1">
                    SITE SEGURO
                  </span>
                  <div className="bg-[#5CA334] px-2 py-0.5 rounded text-[8.5px] sm:text-[9.5px] font-black tracking-tight leading-none uppercase">
                    SSL CERTIFICADO
                  </div>
                </div>
              </div>

              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-wide uppercase mb-2">
                AMBIENTE 100% SEGURO
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                Usamos criptografia avançada SSL de nível bancário. Suas informações estão totalmente blindadas e protegidas.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

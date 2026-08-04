import React from 'react';
import { PRODUCT_INFO } from '../config';

export const WhatsAppSupport: React.FC = () => {
  const rawPhone = PRODUCT_INFO.supportWhatsApp.replace(/\D/g, '');
  const whatsappUrl = rawPhone
    ? `https://wa.me/55${rawPhone}?text=Olá!%20Gostaria%20de%20suporte%20sobre%20as%205000%20Atividades%20de%20Caligrafia.`
    : `https://wa.me/?text=Olá!%20Gostaria%20de%20suporte%20sobre%20as%205000%20Atividades%20de%20Caligrafia.`;

  return (
    <div className="fixed bottom-20 right-3 sm:right-6 md:bottom-6 z-50 flex flex-row items-center gap-2 sm:gap-3 pointer-events-none select-none">
      {/* Speech Pill Banner */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 sm:gap-2.5 bg-white px-3.5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-slate-300/40 border border-slate-100 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#52D89C] shrink-0 animate-pulse" />
        <span className="font-extrabold text-slate-800 text-xs sm:text-sm tracking-tight whitespace-nowrap">
          Suporte
        </span>
      </a>

      {/* Circle Icon Button with Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#52D89C] text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
      >
        {/* Soft halo glow */}
        <span className="absolute -inset-2 rounded-full bg-[#52D89C]/20 -z-10 group-hover:scale-110 transition-transform" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.878-9.874 2.637 0 5.116 1.028 6.98 2.892a9.827 9.827 0 012.888 6.983c-.001 5.447-4.431 9.878-9.882 9.878m0-18.167c-4.57 0-8.288 3.717-8.288 8.289 0 1.46.381 2.886 1.104 4.14l.173.301-.733 2.678 2.74-.718.287.171a8.253 8.253 0 004.712 1.442h.004c4.568 0 8.286-3.718 8.287-8.289 0-2.215-.863-4.298-2.432-5.866a8.232 8.232 0 00-5.87-2.439z"/>
        </svg>
      </a>
    </div>
  );
};


import React, { useState } from 'react';
import { Pencil, Heart, Lock, ShieldCheck } from 'lucide-react';
import { PRODUCT_INFO } from '../config';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4F7DF3] flex items-center justify-center text-white font-bold">
              <Pencil className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                {PRODUCT_INFO.name}
              </span>
              <span className="block text-xs text-slate-400">Material Digital Educativo</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-400">
            <button 
              onClick={() => setActiveModal('terms')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => setActiveModal('privacy')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => setActiveModal('contact')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contato & Suporte
            </button>
          </div>

        </div>

        {/* Legal Disclaimer and Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
            Este produto é um material digital de apoio educacional. Os resultados podem variar de acordo com a frequência de utilização, idade e nível de desenvolvimento de cada criança.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
            <p>
              © {new Date().getFullYear()} {PRODUCT_INFO.name}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>Checkout 100% Protegido</span>
            </div>
          </div>
        </div>

      </div>

      <LegalModal type={activeModal} onClose={() => setActiveModal(null)} />
    </footer>
  );
};

import React, { useState } from 'react';
import { X, Check, Printer, Download, ArrowRight, Sparkles, Eye } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_INFO } from '../config';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'alphabet' | 'motor' | 'numbers' | 'words'>('alphabet');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 relative shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#4F7DF3] font-extrabold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Amostra do Kit Digital em PDF</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Exemplo de Atividades de Caligrafia
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Veja como as atividades são organizadas e com traçados ideais para impressão A4.
          </p>
        </div>

        {/* Sample Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 text-xs font-bold scrollbar-none">
          <button
            onClick={() => setActiveTab('alphabet')}
            className={`px-3.5 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
              activeTab === 'alphabet' ? 'bg-[#4F7DF3] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ✏️ Letras Pontilhadas (A-B-C)
          </button>
          <button
            onClick={() => setActiveTab('motor')}
            className={`px-3.5 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
              activeTab === 'motor' ? 'bg-[#4F7DF3] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            〰️ Coordenação Motora
          </button>
          <button
            onClick={() => setActiveTab('numbers')}
            className={`px-3.5 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
              activeTab === 'numbers' ? 'bg-[#4F7DF3] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🔢 Números e Traçados
          </button>
          <button
            onClick={() => setActiveTab('words')}
            className={`px-3.5 py-2 rounded-xl transition-all shrink-0 cursor-pointer ${
              activeTab === 'words' ? 'bg-[#4F7DF3] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🐾 Palavras e Ilustrações
          </button>
        </div>

        {/* Preview Worksheet Content Canvas Card */}
        <div className="my-5 p-6 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 relative">
          
          {/* Printable Page Simulation */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4 max-w-md mx-auto text-center font-sans">
            
            {/* Header of simulated page */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-[11px] font-semibold text-slate-500">
              <span>NOME: ______________________</span>
              <span>DATA: ___/___/___</span>
            </div>

            {activeTab === 'alphabet' && (
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl font-extrabold text-[#4F7DF3]">Aa</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">ALFABETO</span>
                </div>
                <p className="text-xs text-slate-600">Cubra os pontilhados e pratique a escrita da letra A:</p>
                
                {/* Dotted Lines Simulation */}
                <div className="space-y-3 font-mono text-2xl tracking-widest text-slate-400 select-none">
                  <div className="p-2 border-b border-slate-200 bg-slate-50/50 rounded flex justify-around font-bold">
                    <span>A</span><span>A</span><span>A</span><span>A</span><span>A</span>
                  </div>
                  <div className="p-2 border-b border-slate-200 bg-slate-50/50 rounded flex justify-around border-dashed">
                    <span className="opacity-60 border-b border-slate-400">a</span>
                    <span className="opacity-60 border-b border-slate-400">a</span>
                    <span className="opacity-60 border-b border-slate-400">a</span>
                    <span className="opacity-60 border-b border-slate-400">a</span>
                    <span className="opacity-60 border-b border-slate-400">a</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'motor' && (
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl font-bold text-slate-800">Exercício de Traço & Linhas</span>
                </div>
                <p className="text-xs text-slate-600">Ajude a abelhinha a chegar na flor cobrindo as ondas:</p>

                {/* Motor curves simulation */}
                <div className="p-4 bg-slate-50 rounded-xl space-y-4">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>🐝</span>
                    <span className="text-lg tracking-widest border-b-2 border-dashed border-[#4F7DF3] px-4 text-[#4F7DF3]">
                      〜〜〜〜〜
                    </span>
                    <span>🌸</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>🚗</span>
                    <span className="text-lg tracking-widest border-b-2 border-dotted border-[#22C55E] px-4 text-[#22C55E]">
                      - - - - - -
                    </span>
                    <span>🏁</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'numbers' && (
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl font-extrabold text-[#22C55E]">1 2 3</span>
                </div>
                <p className="text-xs text-slate-600">Siga os números pontilhados e pinte as maçãs:</p>

                <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-around font-mono text-xl text-slate-400 font-bold">
                  <div className="text-center">
                    <span className="block text-[#4F7DF3]">🍎</span>
                    <span className="border-b border-dashed border-slate-400 px-2">1</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[#22C55E]">🍎🍎</span>
                    <span className="border-b border-dashed border-slate-400 px-2">2</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[#FF8FA3]">🍎🍎🍎</span>
                    <span className="border-b border-dashed border-slate-400 px-2">3</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'words' && (
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-[#FF8FA3]">GATO</span>
                  <span className="text-xl">🐱</span>
                </div>
                <p className="text-xs text-slate-600">Cubra o nome do animalzinho e faça um lindo colorido:</p>

                <div className="p-3 bg-slate-50 rounded-xl space-y-2 font-mono text-lg text-slate-500 text-center font-bold">
                  <div className="border-b border-dashed border-slate-300 py-1 tracking-widest">
                    G - A - T - O
                  </div>
                  <div className="border-b border-dashed border-slate-300 py-1 tracking-widest opacity-60">
                    G - A - T - O
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-100 flex items-center justify-between">
              <span>+5000 ATIVIDADES DE CALIGRAFIA</span>
              <span>PÁGINA PRONTA EM PDF</span>
            </div>

          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="pt-2 space-y-3">
          <p className="text-xs font-semibold text-slate-600 text-center">
            Gostou? O kit inclui <strong className="text-slate-900">+5.000 modelos como este</strong> prontos para imprimir por apenas <span className="text-[#22C55E] font-extrabold">{PRODUCT_INFO.priceCurrent}</span>.
          </p>

          <a
            href={CHECKOUT_URL}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-base shadow-md transition-all"
          >
            <span>QUERO RECEBER O KIT COMPLETO</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

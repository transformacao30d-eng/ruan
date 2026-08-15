import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';
import { getCheckoutUrl } from '../utils/checkout';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      id: "1",
      question: "Como receberei o material?",
      answer: "Após a confirmação da compra, você receberá as instruções para acessar o material digital."
    },
    {
      id: "2",
      question: "O material é físico?",
      answer: "Não. O material é 100% digital. Você poderá acessar os arquivos e imprimir as atividades que desejar."
    },
    {
      id: "3",
      question: "Preciso imprimir todas as atividades?",
      answer: "Não. Você pode escolher e imprimir somente as páginas que serão utilizadas."
    },
    {
      id: "4",
      question: "Para qual idade o material é indicado?",
      answer: "O material é indicado principalmente para crianças em fase de alfabetização e desenvolvimento da escrita. O responsável ou professor pode escolher as atividades de acordo com o nível da criança."
    },
    {
      id: "6",
      question: "Posso acessar pelo celular?",
      answer: "Sim. O material pode ser acessado por celular, computador ou tablet. Para imprimir, é recomendado utilizar um computador ou enviar os arquivos para uma gráfica ou impressora."
    },
    {
      id: "7",
      question: "O pagamento é único?",
      answer: "Sim. O valor de R$ 14,90 é cobrado apenas uma vez. Não existe mensalidade."
    },
    {
      id: "8",
      question: "Quando terei acesso?",
      answer: "O acesso é enviado após a confirmação do pagamento."
    },
    {
      id: "10",
      question: "Existe garantia?",
      answer: "Sim. A compra possui garantia de 7 dias, conforme as condições apresentadas no momento da compra."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-[#CCE3FD] via-[#D8EAFF] to-[#C4DFFD] relative overflow-hidden border-t border-blue-200/80">
      {/* Decorative Brand Color Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-[#1E2E5C] font-bold text-xs uppercase tracking-wider shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#4F7DF3]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E2E5C] tracking-tight">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 mb-10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-300 shadow-md ring-2 ring-blue-500/10 bg-gradient-to-r from-blue-50/40 via-white to-white' 
                    : 'border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-base sm:text-lg pr-2 transition-colors ${isOpen ? 'text-[#1E2E5C]' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen 
                      ? 'bg-[#4F7DF3] text-white shadow-sm shadow-blue-500/30 rotate-180' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-blue-100/60 animate-in fade-in duration-200 text-left">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <a
            href={getCheckoutUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-lg sm:text-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
          >
            <span>QUERO O MATERIAL COMPLETO</span>
          </a>
        </div>

      </div>
    </section>
  );
};


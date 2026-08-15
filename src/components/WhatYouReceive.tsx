import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProductItem {
  id: string;
  typeTag: string;
  title: string;
  description: string;
  image: string;
  fallbackImage?: string;
  badge: string;
  accentColor: string;
  bgLight: string;
  borderHover: string;
  badgeBg: string;
  isMain?: boolean;
  tags: string[];
}

export const WhatYouReceive: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: '01',
      typeTag: 'PRODUTO PRINCIPAL',
      title: '+5000 Atividades de Caligrafia',
      description: 'Milhares de atividades para trabalhar caligrafia, alfabetização, coordenação motora, letras, números, palavras, tracejados e muito mais.',
      image: 'https://i.ibb.co/3yYp0jhr/image.png',
      fallbackImage: 'https://i.ibb.co/LzhxCcpk/image.png',
      badge: 'MAIS DE 5.000 ATIVIDADES',
      accentColor: '#2563EB',
      bgLight: 'bg-blue-50/80',
      borderHover: 'hover:border-blue-500',
      badgeBg: 'bg-[#2563EB]/10 text-[#2563EB]',
      isMain: true,
      tags: ['Pronto para imprimir', 'Atividades educativas', 'Coordenação motora']
    },
    {
      id: '02',
      typeTag: 'BÔNUS INCLUSO',
      title: '+400 Continhas de Matemática Infantil',
      description: 'Atividades de adição, subtração, multiplicação e divisão para desenvolver raciocínio lógico, concentração e habilidades matemáticas.',
      image: 'https://i.ibb.co/DDTn36tV/image.png',
      badge: 'MATEMÁTICA',
      accentColor: '#10B981',
      bgLight: 'bg-emerald-50/80',
      borderHover: 'hover:border-emerald-500',
      badgeBg: 'bg-[#10B981]/10 text-[#059669]',
      isMain: false,
      tags: ['Raciocínio lógico', 'Adição e Subtração', 'Pronto para imprimir']
    },
    {
      id: '03',
      typeTag: 'BÔNUS INCLUSO',
      title: '+150 Desenhos em Inglês para Colorir',
      description: 'Desenhos educativos para colorir enquanto a criança conhece novas palavras e amplia seu vocabulário em inglês de forma divertida.',
      image: 'https://i.ibb.co/B5YvtD2W/image.png',
      badge: 'INGLÊS + COLORIR',
      accentColor: '#F59E0B',
      bgLight: 'bg-amber-50/80',
      borderHover: 'hover:border-amber-500',
      badgeBg: 'bg-[#F59E0B]/10 text-[#D97706]',
      isMain: false,
      tags: ['Vocabulário em inglês', 'Desenhos para colorir', 'Aprendizado divertido']
    },
    {
      id: '04',
      typeTag: 'BÔNUS INCLUSO',
      title: 'Corpo Humano Infantil',
      description: 'Material educativo para conhecer partes do corpo, órgãos, esqueleto e outros conteúdos de forma simples, visual e divertida.',
      image: 'https://i.ibb.co/Lhv2nkF5/image.png',
      badge: 'CORPO HUMANO',
      accentColor: '#F43F5E',
      bgLight: 'bg-rose-50/80',
      borderHover: 'hover:border-rose-500',
      badgeBg: 'bg-[#F43F5E]/10 text-[#E11D48]',
      isMain: false,
      tags: ['Anatomia infantil', 'Ilustrado e didático', 'Material complementar']
    },
    {
      id: '05',
      typeTag: 'BÔNUS INCLUSO',
      title: 'Aprendendo as Horas e o Relógio',
      description: 'Atividades práticas e ilustradas para aprender a identificar as horas e compreender o relógio de maneira simples e divertida.',
      image: 'https://i.ibb.co/tPBKH1Z5/image.png',
      badge: 'HORAS & RELÓGIO',
      accentColor: '#6366F1',
      bgLight: 'bg-indigo-50/80',
      borderHover: 'hover:border-indigo-500',
      badgeBg: 'bg-[#6366F1]/10 text-[#4F46E5]',
      isMain: false,
      tags: ['Relógio analógico', 'Exercícios práticos', 'Aprenda brincando']
    },
    {
      id: '06',
      typeTag: 'BÔNUS INCLUSO',
      title: 'Países da Copa do Mundo para Colorir',
      description: 'Atividades para conhecer países, mapas, bandeiras e elementos relacionados à Copa do Mundo enquanto a criança aprende colorindo.',
      image: 'https://i.ibb.co/pvm0NwJn/image.png',
      badge: 'COPA DO MUNDO',
      accentColor: '#0EA5E9',
      bgLight: 'bg-sky-50/80',
      borderHover: 'hover:border-sky-500',
      badgeBg: 'bg-[#0EA5E9]/10 text-[#0284C7]',
      isMain: false,
      tags: ['Bandeiras e mapas', 'Conhecimento geral', 'Colorir e pintar']
    }
  ];

  return (
    <section id="o-que-voce-vai-receber" className="py-16 sm:py-24 bg-[#D3E6FC] relative overflow-hidden border-t border-blue-200/80">
      
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2E5C] tracking-tight leading-tight">
            O QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        {/* Cards Stack */}
        <div className="space-y-6 sm:space-y-7">
          {products.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-[22px] sm:rounded-[24px] border border-[#E2E8F0] p-5 sm:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] transition-all duration-300 ease-out hover:-translate-y-1 ${
                item.borderHover
              } ${
                item.isMain ? 'ring-2 ring-[#2563EB]/20 bg-gradient-to-r from-white via-white to-blue-50/20' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
                
                {/* Left Side: Product Image Container */}
                <div
                  className="w-full md:w-[32%] shrink-0 flex items-center justify-center relative min-h-[180px] sm:min-h-[200px] md:min-h-[210px] p-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[200px] sm:max-h-[220px] object-contain mx-auto rounded-2xl group-hover:scale-[1.03] transition-transform duration-300 ease-out drop-shadow-md"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (item.fallbackImage && !target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = item.fallbackImage;
                      }
                    }}
                  />
                </div>

                {/* Right Side: Product Details */}
                <div className="w-full md:w-[68%] flex flex-col justify-between text-left">
                  <div>
                    {/* Header Row: ID Capsule + Type Tag + Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {/* Number Capsule */}
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black text-white shrink-0 shadow-sm"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        {item.id}
                      </span>

                      {/* Type Tag */}
                      <span
                        className={`text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full ${
                          item.isMain
                            ? 'bg-[#2563EB] text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {item.typeTag}
                      </span>

                      {/* Specific Badge */}
                      <span
                        className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${item.badgeBg}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E2E5C] tracking-tight mb-2.5 group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>

                    {/* Product Description */}
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Microbenefits Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: item.accentColor }}
                        />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

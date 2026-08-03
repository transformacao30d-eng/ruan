import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WhatYouReceive } from './components/WhatYouReceive';
import { Testimonials } from './components/Testimonials';
import { PricingOffer } from './components/PricingOffer';
import { Faq } from './components/Faq';
import { StickyMobileBar } from './components/StickyMobileBar';
import { SampleModal } from './components/SampleModal';
import { WhatsAppSupport } from './components/WhatsAppSupport';

export default function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#4F7DF3] selection:text-white pb-16 md:pb-0">
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenSampleModal={() => setSampleModalOpen(true)} />

        {/* 2. Seção "O Que Você Vai Receber" */}
        <WhatYouReceive />

        {/* 3. Seção de Depoimentos */}
        <Testimonials />

        {/* 4. Seção "Nosso Plano de R$ 14,90" */}
        <PricingOffer />

        {/* 5. Seção FAQ & Chamada Final */}
        <Faq />
      </main>

      {/* Floating WhatsApp Support Button */}
      <WhatsAppSupport />

      {/* Sticky Mobile Bottom Button */}
      <StickyMobileBar />

      {/* Interactive Sample Activity Preview Modal */}
      <SampleModal 
        isOpen={sampleModalOpen} 
        onClose={() => setSampleModalOpen(false)} 
      />
    </div>
  );
}

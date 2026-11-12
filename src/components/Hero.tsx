import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL, heroPepitasCake } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            
            {/* Clean unboxed kicker with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#641322] font-semibold">
              <span>Confeitaria Artesanal</span>
              <span aria-hidden="true" className="text-[#C9AD91]">·</span>
              <span>Ourinhos, São Paulo</span>
              <span aria-hidden="true" className="text-[#C9AD91]">·</span>
              <span>Feito à Mão</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#641322] leading-[1.15] text-balance">
              Pequenos detalhes, grandes momentos.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#382323]/85 leading-relaxed font-sans max-w-2xl font-light">
              Confeitaria artesanal feita com carinho, ingredientes selecionados e muito cuidado em cada detalhe.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#641322] text-[#FFF8F0] font-medium text-sm tracking-wide rounded-md hover:bg-[#382323] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[#641322]"
              >
                <span>Conheça nosso cardápio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F4DFD2] text-[#641322] border border-[#C9AD91]/60 font-medium text-sm tracking-wide rounded-md hover:bg-[#C9AD91]/30 transition-all focus-visible:outline-2 focus-visible:outline-[#641322]"
              >
                <MessageCircle className="w-4 h-4 text-[#641322]" />
                <span>Faça seu pedido</span>
              </a>
            </div>

            {/* Editorial craft notice strip */}
            <div className="pt-6 border-t border-[#C9AD91]/40 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#382323]/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#641322]" />
                <span>Fornadas sob encomenda</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#641322]" />
                <span>Ingredientes puros & selecionados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#641322]" />
                <span>Retirada ou entrega em Ourinhos</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photograph with luxury editorial frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background decorative offset frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4 rounded-xl border border-[#C9AD91]/50 bg-[#F4DFD2]/40 -rotate-1 transform transition-transform"
              />

              {/* Main photograph */}
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-[#C9AD91]/40 aspect-[4/3] lg:aspect-[16/11] bg-[#F4DFD2]">
                <img
                  src={heroPepitasCake}
                  alt="Bolo artesanal da Pepitas Confeitaria em pedestal cerâmico com iluminação natural suave"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle scrim for editorial richness */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#382323]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Delicate caption plaque */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 bg-[#FFF8F0] border border-[#C9AD91]/70 px-4 py-2.5 rounded shadow-md text-left max-w-xs">
                <p className="font-serif italic text-sm text-[#641322] font-semibold">
                  Receitas de família com toque contemporâneo
                </p>
                <p className="text-[11px] text-[#382323]/70 font-sans tracking-wide">
                  Preparado diariamente com afeto
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

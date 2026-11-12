import React from 'react';
import { ExternalLink, MessageCircle, Clock, ShieldCheck, Bike, Sparkles } from 'lucide-react';
import { IFOOD_OFFICIAL_URL, WHATSAPP_BASE_URL } from '../data/products';

export const IFoodSection: React.FC = () => {
  return (
    <section id="ifood" className="py-20 bg-[#FFF8F0] border-t border-[#C9AD91]/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#EA1D2C] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#EA1D2C]" />
            <span>Loja Oficial no Aplicativo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#641322] text-balance">
            Peça também pelo iFood
          </h2>

          <p className="text-base sm:text-lg text-[#382323]/80 leading-relaxed font-sans font-light">
            A conveniência que você já conhece com o sabor artesanal inconfundível da Pepitas. Peça pelo app com rapidez ou faça encomendas especiais diretamente no nosso WhatsApp.
          </p>
        </div>

        {/* Main Banner: iFood Official Integration Showcase */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#FFF5F5] via-[#FFF8F0] to-[#F4DFD2]/60 border-2 border-[#EA1D2C]/20 shadow-md p-8 sm:p-12 mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: iFood Presentation & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* iFood Official Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EA1D2C] text-white shadow-xs">
                {/* SVG iFood Monogram / Smile Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.55 0 1 .45 1 1 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55.45-1 1-1s1 .45 1 1c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-.55.45-1 1-1z" />
                </svg>
                <span className="text-xs font-bold tracking-wider uppercase font-sans">
                  Loja Verificada iFood
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#382323]">
                  Pepitas Confeitaria no iFood Ourinhos
                </h3>
                <p className="text-sm sm:text-base text-[#382323]/80 font-sans leading-relaxed">
                  Acesse nossa loja oficial no iFood para conferir os itens disponíveis para pronta-entrega, fatias frescas do dia e promoções exclusivas da plataforma entregues na sua porta com total comodidade.
                </p>
              </div>

              {/* iFood Benefits Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#382323] bg-white/70 p-2.5 rounded-lg border border-[#C9AD91]/30">
                  <Bike className="w-4 h-4 text-[#EA1D2C] shrink-0" />
                  <span>Entrega rápida em Ourinhos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#382323] bg-white/70 p-2.5 rounded-lg border border-[#C9AD91]/30">
                  <Clock className="w-4 h-4 text-[#EA1D2C] shrink-0" />
                  <span>Rastreio em tempo real no app</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#382323] bg-white/70 p-2.5 rounded-lg border border-[#C9AD91]/30">
                  <ShieldCheck className="w-4 h-4 text-[#EA1D2C] shrink-0" />
                  <span>Pagamento seguro no iFood</span>
                </div>
              </div>

              {/* Prominent Official iFood Button */}
              <div className="pt-2">
                <a
                  href={IFOOD_OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EA1D2C] hover:bg-[#c91825] text-white text-base font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#EA1D2C] whitespace-nowrap"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.55 0 1 .45 1 1 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55.45-1 1-1s1 .45 1 1c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-.55.45-1 1-1z" />
                  </svg>
                  <span>Peça pelo iFood</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>

            </div>

            {/* Right: Visual card previewing the official store badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm bg-white p-6 rounded-xl border border-[#C9AD91]/50 shadow-lg text-center space-y-4">
                
                <div className="w-20 h-20 rounded-full bg-[#EA1D2C] mx-auto flex items-center justify-center text-white shadow-md">
                  <span className="font-serif text-3xl font-bold">P</span>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#EA1D2C] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Loja Oficial iFood</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#382323]">
                    Pepitas Confeitaria
                  </h4>
                  <p className="text-xs text-[#382323]/70 font-sans">
                    Vila São José / Vila Odilon · Ourinhos - SP
                  </p>
                </div>

                <div className="p-3 bg-[#FFF8F0] rounded-lg border border-[#C9AD91]/30 text-xs text-[#382323]/80 space-y-1">
                  <p className="font-semibold text-[#641322]">
                    Categoria: Doceria & Sobremesas
                  </p>
                  <p>
                    Confira a disponibilidade de fatias, bolos e doces do dia direto no app.
                  </p>
                </div>

                <a
                  href={IFOOD_OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#EA1D2C]/10 hover:bg-[#EA1D2C]/20 text-[#EA1D2C] text-xs font-bold rounded-md transition-colors"
                >
                  <span>Abrir cardápio no iFood</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* Section 6: Clarification on Channels (iFood vs. WhatsApp) */}
        <div className="p-6 sm:p-8 bg-[#F4DFD2]/40 rounded-xl border border-[#C9AD91]/50 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h4 className="font-serif text-xl font-bold text-[#641322]">
              Qual o melhor canal para o seu pedido?
            </h4>
            <p className="text-xs sm:text-sm text-[#382323]/80 font-sans">
              Entenda a diferença entre pedir pelo iFood ou encomendar direto pelo nosso WhatsApp:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Option A: iFood */}
            <div className="p-5 bg-white rounded-lg border border-[#EA1D2C]/30 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-[#EA1D2C] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA1D2C]" />
                  Peça pelo iFood se você procura:
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#EA1D2C]/10 text-[#EA1D2C]">
                  Entrega Rápida
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#382323]/80 list-disc list-inside">
                <li>Vontade imediata de saborear um doce artesanal hoje</li>
                <li>Fatias individuais e sobremesas prontas para consumo</li>
                <li>Pagamento direto pelo cartão cadastrado no aplicativo</li>
                <li>Acompanhamento da rota do entregador em tempo real</li>
              </ul>
              <div className="pt-2">
                <a
                  href={IFOOD_OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA1D2C] hover:underline"
                >
                  <span>Ir para o iFood da Pepitas →</span>
                </a>
              </div>
            </div>

            {/* Option B: WhatsApp */}
            <div className="p-5 bg-white rounded-lg border border-[#641322]/30 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-base text-[#641322] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#641322]" />
                  Peça pelo WhatsApp se você procura:
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#641322]/10 text-[#641322]">
                  Sob Encomenda
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#382323]/80 list-disc list-inside">
                <li>Bolos inteiros sob encomenda (Tamanho Tradicional ou Família)</li>
                <li>Agendamento com antecedência para aniversários e celebrações</li>
                <li>Pedidos personalizados ou sem ingredientes específicos</li>
                <li>Atendimento humanizado direto com a nossa equipe</li>
              </ul>
              <div className="pt-2">
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#641322] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chamar no WhatsApp →</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { MessageSquare, CalendarClock, Truck, CreditCard, ArrowRight } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/products';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      index: '01',
      title: 'Faça seu pedido pelo WhatsApp',
      description: 'Envie uma mensagem para a nossa equipe e escolha os bolos e tamanhos desejados do cardápio.',
      icon: MessageSquare,
    },
    {
      index: '02',
      title: 'Pedidos sob encomenda',
      description: 'Trabalhamos com pedidos feitos antecipadamente para garantir a qualidade impecável e o frescor artesanal.',
      icon: CalendarClock,
    },
    {
      index: '03',
      title: 'Entrega ou retirada',
      description: 'Escolha entre receber confortavelmente em casa, mediante taxa de entrega, ou retirar no local combinado em Ourinhos.',
      icon: Truck,
    },
    {
      index: '04',
      title: 'Formas de pagamento',
      description: 'Aceitamos Pix instantâneo, cartões de crédito e débito para sua total comodidade e segurança.',
      icon: CreditCard,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#FFF8F0] border-t border-[#C9AD91]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#641322] font-semibold">
            Passo a Passo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#641322]">
            Como fazer sua encomenda
          </h2>
          <p className="text-sm sm:text-base text-[#382323]/80 font-sans font-light">
            Um processo simples, pessoal e transparente para que você receba seu bolo perfeito no dia e horário combinado.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.index}
                className="relative p-6 bg-[#F4DFD2]/30 rounded-lg border border-[#C9AD91]/50 flex flex-col justify-between space-y-6 hover:border-[#641322]/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#641322]/40">
                      {step.index}
                    </span>
                    <div className="p-2.5 bg-[#FFF8F0] rounded text-[#641322] border border-[#C9AD91]/30 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#641322] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#382323]/80 leading-relaxed font-sans font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C9AD91]/30 flex items-center text-[11px] uppercase tracking-wider text-[#641322] font-semibold">
                  <span>Etapa {step.index}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#641322] text-[#FFF8F0] text-sm font-semibold rounded-md hover:bg-[#382323] transition-colors shadow-sm"
          >
            <span>Iniciar pedido agora pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Heart, Clock, Sparkles } from 'lucide-react';

export const EssenceSection: React.FC = () => {
  return (
    <section id="essencia" className="py-20 sm:py-28 bg-[#F4DFD2]/35 border-t border-[#C9AD91]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Central Manifest Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#641322] font-semibold">
            <span className="w-8 h-[1px] bg-[#641322]" />
            <span>Nossa Essência</span>
            <span className="w-8 h-[1px] bg-[#641322]" />
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#641322] leading-snug tracking-tight italic">
            “Em um mundo cada vez mais rápido e padronizado, o verdadeiro luxo está naquilo que é feito à mão, com tempo, cuidado e intenção.”
          </blockquote>

          <div className="w-16 h-[2px] bg-[#C9AD91] mx-auto my-4" />
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Craft photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-lg border border-[#641322]/20 bg-[#FFF8F0] rotate-1"
              />
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#C9AD91]/50 aspect-[4/3] bg-[#FFF8F0]">
                <img
                  src="/src/assets/images/bakery_craft_detail_1794497427989.jpg"
                  alt="Preparo artesanal e minucioso na bancada da Pepitas Confeitaria"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#641322]">
              Cada bolo conta uma história de afeto
            </h3>

            <div className="space-y-4 text-base text-[#382323]/85 font-sans leading-relaxed font-light">
              <p>
                A <strong>Pepitas Confeitaria Artesanal</strong> nasceu da convicção de que o afeto tem aroma, textura e sabor. Não acreditamos em processos industriais apressados, pré-misturas artificiais ou produções em massa sem alma.
              </p>
              <p>
                Aqui em Ourinhos, cada bolo é batido com ovos frescos, manteiga de verdade, frutas selecionadas no ponto exato e chocolates nobres. O forno é aquecido especialmente para a sua encomenda, garantindo aquela casquinha delicada e o miolo tenro que perfuma a casa inteira.
              </p>
              <p>
                Mais do que doces, entregamos pausas na rotina. Aquele momento sagrado do café passado na hora, a conversa boa à mesa e as lembranças doces que ficam gravadas na memória da família.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#C9AD91]/40">
              <div className="p-4 bg-[#FFF8F0] rounded border border-[#C9AD91]/40 space-y-1">
                <div className="flex items-center gap-2 text-[#641322]">
                  <Heart className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm">Feito com Alma</span>
                </div>
                <p className="text-xs text-[#382323]/70">
                  Atenção genuína a cada etapa, desde a pesagem dos grãos até o acabamento final.
                </p>
              </div>

              <div className="p-4 bg-[#FFF8F0] rounded border border-[#C9AD91]/40 space-y-1">
                <div className="flex items-center gap-2 text-[#641322]">
                  <Clock className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm">Tempo & Respeito</span>
                </div>
                <p className="text-xs text-[#382323]/70">
                  Respeitamos o descanso da massa e o ponto exato da caldas caseiras.
                </p>
              </div>

              <div className="p-4 bg-[#FFF8F0] rounded border border-[#C9AD91]/40 space-y-1">
                <div className="flex items-center gap-2 text-[#641322]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm">Frescor Genuíno</span>
                </div>
                <p className="text-xs text-[#382323]/70">
                  Produzido sob encomenda direta para chegar à sua mesa impecável e fresco.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

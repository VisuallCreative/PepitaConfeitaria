import React from 'react';
import { Eye, Camera } from 'lucide-react';
import {
  INSTAGRAM_URL,
  DISPLAY_INSTAGRAM,
  cakeCarrotGanache,
  bakeryCraftDetail,
  cakeCornmealGuava,
  cakeChocolateGanache,
  heroPepitasCake,
} from '../data/products';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface GallerySectionProps {
  onViewImage: (imageUrl: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewImage }) => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Bolo de Cenoura com Ganache Cremosa',
      category: 'Coberturas & Texturas',
      image: cakeCarrotGanache,
      description: 'O contraste da massa dourada fofa com a generosa calda de chocolate aveludada.',
    },
    {
      id: 'gal-2',
      title: 'Finalização & Cuidado Minucioso',
      category: 'Detalhes da Preparação',
      image: bakeryCraftDetail,
      description: 'Polvilhamento delicado de açúcar fino e seleção de frutas frescas.',
    },
    {
      id: 'gal-3',
      title: 'Fubá Mineiro com Goiabada Quente',
      category: 'Tradição Artesanal',
      image: cakeCornmealGuava,
      description: 'A cascata de goiabada cascão derretida abraçando a receita clássica caipira.',
    },
    {
      id: 'gal-4',
      title: 'Chocolate Intenso da Casa',
      category: 'Texturas & Caldas',
      image: cakeChocolateGanache,
      description: 'Cacau selecionado e raspas crocantes de chocolate nobre em camadas ricas.',
    },
    {
      id: 'gal-5',
      title: 'Bolo Artesanal Assinado Pepitas',
      category: 'Composição de Mesa',
      image: heroPepitasCake,
      description: 'Apresentação refinada em cerâmica para celebrações e cafés com a família.',
    },
    {
      id: 'gal-6',
      title: 'Massa Aerada & Aroma Caseiro',
      category: 'Frescor & Maciez',
      image: cakeCarrotGanache,
      description: 'Textura macia que desmancha a cada mordida, assado no ponto exato.',
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-[#F4DFD2]/30 border-t border-[#C9AD91]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#641322] font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Nossos Trabalhos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#641322]">
            Galeria de Criações
          </h2>
          <p className="text-sm sm:text-base text-[#382323]/80 font-sans font-light">
            Texturas, coberturas reluzentes e a dedicação artesanal que envolve cada fornada.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Visualizar foto ampliada de ${item.title}`}
              onClick={() => onViewImage(item.image, item.title)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onViewImage(item.image, item.title);
                }
              }}
              className="group relative rounded-lg overflow-hidden border border-[#C9AD91]/50 bg-[#FFF8F0] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer aspect-[4/3] focus-visible:outline-2 focus-visible:outline-[#641322]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#382323]/85 via-[#382323]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left pointer-events-none">
                <span className="text-[11px] uppercase tracking-wider text-[#F4DFD2] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#FFF8F0] mt-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#FFF8F0]/85 mt-1 font-sans line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#F4DFD2] font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Clique para ampliar</span>
                </div>
              </div>

              {/* Discreet permanent bottom badge for mobile */}
              <div className="group-hover:opacity-0 transition-opacity duration-200 absolute bottom-2 left-2 bg-[#FFF8F0]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#382323] border border-[#C9AD91]/40 pointer-events-none">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Invitation */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#382323]/70 font-sans">
            Acompanhe nossos bastidores e fornadas diárias no Instagram:{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#641322] font-semibold underline underline-offset-4 hover:text-[#382323] transition-colors"
            >
              {DISPLAY_INSTAGRAM}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

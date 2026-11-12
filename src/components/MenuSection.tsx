import React, { useState, useMemo } from 'react';
import { Search, Sparkles, HelpCircle } from 'lucide-react';
import { CAKE_PRODUCTS } from '../data/products';
import { CakeCategory, CakeProduct, CakeSize } from '../types';
import { ProductCard } from './ProductCard';
import { filterProducts } from '../utils/productFilter';

interface MenuSectionProps {
  onAddToCart: (product: CakeProduct, size: CakeSize) => void;
  onViewImage: (imageUrl: string, title: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onViewImage,
}) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | CakeCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return filterProducts(CAKE_PRODUCTS, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  const countSemCobertura = CAKE_PRODUCTS.filter((p) => p.category === 'sem-cobertura').length;
  const countComCobertura = CAKE_PRODUCTS.filter((p) => p.category === 'com-cobertura').length;

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-[#FFF8F0] border-t border-[#C9AD91]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#641322] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cardápio Artesanal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#641322] text-balance">
            Sabores que despertam memórias
          </h2>

          <p className="text-base sm:text-lg text-[#382323]/80 leading-relaxed font-sans font-light">
            Nossas fornadas são preparadas sob encomenda para garantir maciez absoluta, aroma marcante e frescor inconfundível.
          </p>
        </div>

        {/* Informative Table / Size Guide Strip */}
        <div className="mb-10 p-5 bg-[#F4DFD2]/40 rounded-lg border border-[#C9AD91]/50 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#382323]">
          <div className="space-y-1">
            <p className="font-serif font-bold text-[#641322] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#641322]" />
              Bolos Caseiros sem Cobertura
            </p>
            <p className="text-xs text-[#382323]/80 leading-normal">
              Tradicional: <strong className="font-semibold text-[#641322]">R$ 25,00</strong> (aprox. 18cm, 8-10 fatias) · Família: <strong className="font-semibold text-[#641322]">R$ 35,00</strong> (aprox. 22cm, 14-16 fatias)
            </p>
          </div>

          <div className="space-y-1 md:border-l md:border-[#C9AD91]/40 md:pl-5">
            <p className="font-serif font-bold text-[#641322] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#641322]" />
              Bolos com Cobertura Artesanal
            </p>
            <p className="text-xs text-[#382323]/80 leading-normal">
              Tradicional: <strong className="font-semibold text-[#641322]">R$ 35,00</strong> (aprox. 18cm, 8-10 fatias) · Família: <strong className="font-semibold text-[#641322]">R$ 45,00</strong> (aprox. 22cm, 14-16 fatias)
            </p>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Functional segmented category filter */}
          <div className="flex items-center p-1 bg-[#F4DFD2]/60 rounded-lg border border-[#C9AD91]/40 overflow-x-auto">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'todos'
                  ? 'bg-[#641322] text-[#FFF8F0] shadow-sm'
                  : 'text-[#382323] hover:text-[#641322]'
              }`}
            >
              Todos os Sabores ({CAKE_PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('sem-cobertura')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'sem-cobertura'
                  ? 'bg-[#641322] text-[#FFF8F0] shadow-sm'
                  : 'text-[#382323] hover:text-[#641322]'
              }`}
            >
              Sem Cobertura ({countSemCobertura})
            </button>
            <button
              onClick={() => setActiveCategory('com-cobertura')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === 'com-cobertura'
                  ? 'bg-[#641322] text-[#FFF8F0] shadow-sm'
                  : 'text-[#382323] hover:text-[#641322]'
              }`}
            >
              Com Cobertura ({countComCobertura})
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar sabor ou ingrediente..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-md bg-[#FFF8F0] border border-[#C9AD91]/70 text-[#382323] placeholder-[#382323]/50 focus:outline-none focus:ring-1 focus:ring-[#641322] focus:border-[#641322]"
            />
            <Search className="w-4 h-4 text-[#382323]/50 absolute left-3 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-xs text-[#382323]/60 hover:text-[#641322]"
              >
                Limpar
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewImage={onViewImage}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#F4DFD2]/30 rounded-lg border border-[#C9AD91]/40">
            <p className="font-serif text-xl text-[#641322] font-semibold">
              Nenhum sabor encontrado para "{searchQuery}"
            </p>
            <p className="text-sm text-[#382323]/70 mt-2">
              Tente buscar por "cenoura", "chocolate", "fubá" ou limpe a busca.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="mt-4 px-4 py-2 bg-[#641322] text-[#FFF8F0] text-xs font-semibold rounded-md"
            >
              Ver todos os sabores
            </button>
          </div>
        )}

        {/* Custom Order Callout Note */}
        <div className="mt-14 p-6 bg-[#FFF8F0] rounded-lg border border-[#C9AD91]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#F4DFD2] rounded-full text-[#641322] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#641322]">
                Deseja encomendar para um evento especial ou café corporativo?
              </h4>
              <p className="text-xs text-[#382323]/80">
                Atendemos encomendas personalizadas em Ourinhos sob agendamento prévio.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5514996477792?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+encomendas+especiais+da+Pepitas."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#641322] text-[#FFF8F0] text-xs font-semibold rounded-md hover:bg-[#382323] transition-colors whitespace-nowrap shrink-0"
          >
            Falar com a Confeitaria
          </a>
        </div>

      </div>
    </section>
  );
};

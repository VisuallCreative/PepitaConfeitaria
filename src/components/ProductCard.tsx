import React, { useState } from 'react';
import { MessageCircle, Plus, Check } from 'lucide-react';
import { CakeProduct, CakeSize } from '../types';
import { formatBRL, getProductPriceBySize, buildSingleProductWhatsAppUrl } from '../utils/orderCalculator';

interface ProductCardProps {
  product: CakeProduct;
  onAddToCart: (product: CakeProduct, size: CakeSize) => void;
  onViewImage: (imageUrl: string, title: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewImage,
}) => {
  const [selectedSize, setSelectedSize] = useState<CakeSize>('tradicional');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentPrice = getProductPriceBySize(product, selectedSize);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  const whatsAppUrl = buildSingleProductWhatsAppUrl(product, selectedSize);

  return (
    <div className="group relative flex flex-col bg-[#FFF8F0] rounded-lg border border-[#C9AD91]/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4DFD2]/60">
        <img
          src={product.image}
          alt={`Bolo artesanal ${product.name} da Pepitas Confeitaria`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={() => onViewImage(product.image, product.name)}
          referrerPolicy="no-referrer"
        />

        {/* Highlight badge if present */}
        {product.highlightBadge && (
          <span className="absolute top-3 left-3 bg-[#641322] text-[#FFF8F0] text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded shadow-sm">
            {product.highlightBadge}
          </span>
        )}

        {/* Category label unboxed */}
        <span className="absolute bottom-2 right-2 bg-[#FFF8F0]/90 backdrop-blur-xs text-[11px] text-[#382323] px-2 py-0.5 rounded border border-[#C9AD91]/30">
          {product.category === 'sem-cobertura' ? 'Sem cobertura' : 'Com cobertura'}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl font-bold text-[#641322] leading-snug">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-[#382323]/80 leading-relaxed font-sans min-h-[40px]">
            {product.description}
          </p>

          {product.servingSuggestion && (
            <p className="text-xs italic text-[#C9AD91] font-serif">
              {product.servingSuggestion}
            </p>
          )}
        </div>

        {/* Size Selection & Price */}
        <div className="pt-2 border-t border-[#C9AD91]/30 space-y-3">
          
          {/* Size segmented tabs */}
          <div className="flex items-center justify-between text-xs text-[#382323]/70">
            <span>Tamanho:</span>
            <div className="flex items-center gap-1 p-0.5 bg-[#F4DFD2]/60 rounded border border-[#C9AD91]/40">
              <button
                type="button"
                onClick={() => setSelectedSize('tradicional')}
                className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap font-medium ${
                  selectedSize === 'tradicional'
                    ? 'bg-[#641322] text-[#FFF8F0] shadow-xs'
                    : 'text-[#382323] hover:text-[#641322]'
                }`}
              >
                Tradicional
              </button>
              <button
                type="button"
                onClick={() => setSelectedSize('familia')}
                className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap font-medium ${
                  selectedSize === 'familia'
                    ? 'bg-[#641322] text-[#FFF8F0] shadow-xs'
                    : 'text-[#382323] hover:text-[#641322]'
                }`}
              >
                Família
              </button>
            </div>
          </div>

          {/* Price display with tabular nums */}
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-[#382323]/60 font-sans">
              {selectedSize === 'tradicional' ? 'Serve 8-10 fatias' : 'Serve 14-16 fatias'}
            </span>
            <div className="text-right">
              <span className="font-serif text-2xl font-bold text-[#641322] tabular-nums">
                {formatBRL(currentPrice)}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#641322] hover:bg-[#382323] text-[#FFF8F0] text-xs font-semibold rounded transition-colors text-center shadow-xs"
              title="Pedir este sabor diretamente pelo WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir no Zap</span>
            </a>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-[#C9AD91] text-xs font-semibold rounded transition-all text-center ${
                addedAnimation
                  ? 'bg-[#C9AD91] text-[#382323]'
                  : 'bg-[#F4DFD2]/60 hover:bg-[#F4DFD2] text-[#382323]'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#641322]" />
                  <span>Adicionado!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-[#641322]" />
                  <span>Na Sacola</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

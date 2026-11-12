import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#382323]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative max-w-4xl w-full bg-[#FFF8F0] rounded-xl overflow-hidden shadow-2xl border border-[#C9AD91]/50 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#F4DFD2]/50 border-b border-[#C9AD91]/30 flex items-center justify-between">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#641322] truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Fechar visualização de imagem"
            className="p-1.5 rounded-md text-[#382323] hover:text-[#641322] hover:bg-[#F4DFD2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#382323]/5 flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#FFF8F0] border-t border-[#C9AD91]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#382323]/80 gap-2">
          <p className="font-sans">
            Pepitas Confeitaria Artesanal · Ourinhos, SP
          </p>
          <a
            href="https://wa.me/5514996477792"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#641322] font-semibold hover:underline"
          >
            Encomende este bolo pelo WhatsApp →
          </a>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block bg-[#382323] text-[#FFF8F0] text-xs font-medium px-3.5 py-2 rounded shadow-lg border border-[#C9AD91]/40 whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="font-serif font-bold text-[#F4DFD2] block">Pepitas Confeitaria</span>
        <span>Peça seu bolo pelo WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={WHATSAPP_BASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Pepitas Confeitaria pelo WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#641322] hover:bg-[#382323] text-[#FFF8F0] shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-[#F4DFD2]/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#641322]/40"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFF8F0]" />
      </a>
    </aside>
  );
};

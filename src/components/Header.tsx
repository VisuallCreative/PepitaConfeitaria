import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_BASE_URL, IFOOD_OFFICIAL_URL } from '../data/products';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Nossa Essência', href: '#essencia' },
    { label: 'iFood', href: '#ifood', isIFood: true },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#C9AD91]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display serif) */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#641322] rounded-md"
        >
          <span className="w-10 h-10 rounded-full bg-[#641322] text-[#F4DFD2] flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform group-hover:scale-105">
            P
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#641322]">
              Pepitas
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#382323]/70 font-sans -mt-1">
              Confeitaria Artesanal
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#382323]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#641322] rounded flex items-center gap-1.5 ${
                link.isIFood
                  ? 'text-[#EA1D2C] hover:text-[#c91825] font-semibold after:bg-[#EA1D2C]'
                  : 'hover:text-[#641322] after:bg-[#641322]'
              }`}
            >
              {link.isIFood && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA1D2C]" />
              )}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Cart Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label={`Abrir sacola de encomendas com ${cartItemCount} itens`}
            className="relative p-2.5 rounded-full text-[#641322] hover:bg-[#F4DFD2]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#641322]"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#641322] text-[#FFF8F0] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cartItemCount}
              </span>
            )}
          </button>

          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#FFF8F0] bg-[#641322] hover:bg-[#382323] transition-colors rounded-md shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#641322]"
          >
            <span>Fazer Pedido</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-[#382323] hover:text-[#641322] rounded-md focus-visible:outline-2 focus-visible:outline-[#641322]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8F0] border-b border-[#C9AD91]/40 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 text-base font-medium text-[#382323]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 border-b border-[#C9AD91]/20 transition-colors flex items-center justify-between ${
                  link.isIFood
                    ? 'text-[#EA1D2C] font-semibold'
                    : 'hover:text-[#641322]'
                }`}
              >
                <span>{link.label}</span>
                {link.isIFood && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#EA1D2C]/10 text-[#EA1D2C]">
                    Delivery
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={IFOOD_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#EA1D2C] text-white font-semibold text-xs rounded-md tracking-wider uppercase transition-colors hover:bg-[#c91825] flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Peça pelo iFood</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#641322] text-[#FFF8F0] font-semibold text-xs rounded-md tracking-wider uppercase transition-colors hover:bg-[#382323] flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Pedir pelo WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

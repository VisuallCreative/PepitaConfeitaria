import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Clock, Heart } from 'lucide-react';
import {
  DISPLAY_PHONE,
  DISPLAY_INSTAGRAM,
  INSTAGRAM_URL,
  OFFICIAL_EMAIL,
  OFFICIAL_ADDRESS,
  WHATSAPP_BASE_URL,
  IFOOD_OFFICIAL_URL,
} from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#382323] text-[#F4DFD2] pt-16 pb-12 border-t border-[#641322]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F4DFD2]/15">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#641322] text-[#F4DFD2] flex items-center justify-center font-serif text-xl font-bold shadow-sm">
                P
              </span>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FFF8F0] block">
                  Pepitas
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9AD91] block -mt-1">
                  Confeitaria Artesanal
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F4DFD2]/80 font-sans leading-relaxed max-w-sm font-light">
              Bolos caseiros e artesanais assados sob encomenda. Ingredientes de verdade, tempo respeitado e muito carinho em cada detalhe.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Pepitas Confeitaria"
                className="p-2.5 rounded-full bg-[#641322] hover:bg-[#F4DFD2] hover:text-[#641322] text-[#FFF8F0] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Pepitas Confeitaria"
                className="p-2.5 rounded-full bg-[#641322] hover:bg-[#F4DFD2] hover:text-[#641322] text-[#FFF8F0] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                aria-label="Email da Pepitas Confeitaria"
                className="p-2.5 rounded-full bg-[#641322] hover:bg-[#F4DFD2] hover:text-[#641322] text-[#FFF8F0] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={IFOOD_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Loja oficial no iFood"
                title="Loja oficial no iFood"
                className="p-2.5 rounded-full bg-[#EA1D2C] hover:bg-white hover:text-[#EA1D2C] text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.55 0 1 .45 1 1 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55.45-1 1-1s1 .45 1 1c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-.55.45-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-base font-bold text-[#FFF8F0] tracking-wider uppercase text-xs">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#F4DFD2]/80">
              <li>
                <a href="#inicio" className="hover:text-[#FFF8F0] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#FFF8F0] transition-colors">
                  Cardápio Completo
                </a>
              </li>
              <li>
                <a href="#essencia" className="hover:text-[#FFF8F0] transition-colors">
                  Nossa Essência
                </a>
              </li>
              <li>
                <a href="#ifood" className="hover:text-[#FFF8F0] text-[#F4DFD2] font-semibold transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA1D2C]" />
                  <span>Loja Oficial iFood</span>
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#FFF8F0] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#FFF8F0] transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#FFF8F0] transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Official Info */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="font-serif text-base font-bold text-[#FFF8F0] tracking-wider uppercase text-xs">
              Atendimento & Endereço
            </h4>
            <div className="space-y-2.5 text-xs text-[#F4DFD2]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9AD91] shrink-0 mt-0.5" />
                <span>{OFFICIAL_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9AD91] shrink-0" />
                <span>Segunda a Sexta: 08h às 18h | Sábado: 08h às 11h</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C9AD91] shrink-0" />
                <span>WhatsApp: {DISPLAY_PHONE}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#C9AD91] shrink-0" />
                <span>Instagram: {DISPLAY_INSTAGRAM}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9AD91] shrink-0" />
                <span>{OFFICIAL_EMAIL}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Banner with Exact Required Institutional Quote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#F4DFD2]/70">
          <p className="font-serif text-sm text-[#FFF8F0] font-semibold italic">
            Pepitas Confeitaria Artesanal. Feito com tempo, cuidado e intenção.
          </p>

          <p className="text-[11px] text-[#C9AD91]">
            © {new Date().getFullYear()} Pepitas Confeitaria Artesanal · Ourinhos, SP. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

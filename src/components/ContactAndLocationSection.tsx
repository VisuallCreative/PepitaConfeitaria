import React from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  Clock,
  Car,
  CheckCircle2,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import {
  OFFICIAL_ADDRESS,
  DISPLAY_PHONE,
  DISPLAY_INSTAGRAM,
  INSTAGRAM_URL,
  OFFICIAL_EMAIL,
  WHATSAPP_BASE_URL,
} from '../data/products';
import { OFFICIAL_SCHEDULE, getBakeryScheduleInfo } from '../utils/businessHours';

export const ContactAndLocationSection: React.FC = () => {
  const scheduleInfo = getBakeryScheduleInfo();

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#FFF8F0] border-t border-[#C9AD91]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Call to Action Banner: "Vamos adoçar seu dia?" */}
        <div className="relative mb-20 p-8 sm:p-12 rounded-xl bg-[#641322] text-[#FFF8F0] shadow-lg overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F4DFD2] font-semibold">
              Atendimento Dedicado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Vamos adoçar seu dia?
            </h2>
            <p className="text-sm sm:text-base text-[#F4DFD2]/90 font-sans font-light leading-relaxed">
              Mande uma mensagem agora mesmo pelo WhatsApp, tire dúvidas, verifique disponibilidade de fornadas ou monte sua encomenda sob medida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F4DFD2] text-[#641322] hover:bg-[#FFF8F0] text-sm font-bold tracking-wider uppercase rounded-md shadow-md transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white"
            >
              <MessageCircle className="w-5 h-5 text-[#641322]" />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-[#F4DFD2]/50 text-[#F4DFD2] hover:bg-[#F4DFD2]/10 text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver Instagram</span>
            </a>
          </div>
        </div>

        {/* Contact Info & Location Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Contact & Schedule */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#641322] font-semibold">
                Informações Oficiais
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#641322]">
                Onde estamos e como nos encontrar
              </h3>
              <p className="text-sm text-[#382323]/80 font-sans font-light">
                Estamos localizados na Vila Odilon em Ourinhos, prontos para receber seu pedido com carinho.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              
              {/* WhatsApp */}
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-[#F4DFD2]/30 rounded-lg border border-[#C9AD91]/50 hover:border-[#641322] transition-colors flex items-start gap-4"
              >
                <div className="p-2.5 bg-[#641322] text-[#FFF8F0] rounded-md shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-semibold text-[#641322] uppercase tracking-wider">
                    WhatsApp para Encomendas
                  </p>
                  <p className="text-base font-bold text-[#382323] group-hover:text-[#641322] transition-colors">
                    {DISPLAY_PHONE}
                  </p>
                  <p className="text-xs text-[#382323]/70 mt-0.5">
                    Envie mensagem para consultar a disponibilidade do dia
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C9AD91] group-hover:text-[#641322] transition-colors shrink-0 mt-1" />
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-[#F4DFD2]/30 rounded-lg border border-[#C9AD91]/50 hover:border-[#641322] transition-colors flex items-start gap-4"
              >
                <div className="p-2.5 bg-[#641322] text-[#FFF8F0] rounded-md shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-semibold text-[#641322] uppercase tracking-wider">
                    Instagram Oficial
                  </p>
                  <p className="text-base font-bold text-[#382323] group-hover:text-[#641322] transition-colors">
                    {DISPLAY_INSTAGRAM}
                  </p>
                  <p className="text-xs text-[#382323]/70 mt-0.5">
                    Acompanhe fotos diárias, novidades e receitas
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#C9AD91] group-hover:text-[#641322] transition-colors shrink-0 mt-1" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="group p-4 bg-[#F4DFD2]/30 rounded-lg border border-[#C9AD91]/50 hover:border-[#641322] transition-colors flex items-start gap-4"
              >
                <div className="p-2.5 bg-[#641322] text-[#FFF8F0] rounded-md shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-semibold text-[#641322] uppercase tracking-wider">
                    E-mail
                  </p>
                  <p className="text-base font-bold text-[#382323] group-hover:text-[#641322] transition-colors break-all">
                    {OFFICIAL_EMAIL}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="p-4 bg-[#F4DFD2]/30 rounded-lg border border-[#C9AD91]/50 flex items-start gap-4">
                <div className="p-2.5 bg-[#641322] text-[#FFF8F0] rounded-md shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#641322] uppercase tracking-wider">
                    Endereço Completo
                  </p>
                  <p className="text-sm font-medium text-[#382323] leading-relaxed">
                    {OFFICIAL_ADDRESS}
                  </p>
                  <p className="text-xs text-[#382323]/70">
                    Ourinhos, São Paulo · CEP 19905-136
                  </p>
                </div>
              </div>

            </div>

            {/* Facilities & Services Grid */}
            <div className="p-5 bg-[#FFF8F0] rounded-lg border border-[#C9AD91]/60 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#641322]">
                Facilidades & Serviços
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#382323]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#641322] shrink-0" />
                  <span>Aceita Pix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#641322] shrink-0" />
                  <span>Cartões de Crédito & Débito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#641322] shrink-0" />
                  <span>Estacionamento na rua</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#641322] shrink-0" />
                  <span>Entrega mediante taxa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#641322] shrink-0" />
                  <span>Retirada no local combinado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#641322] shrink-0" />
                  <span>Pedidos sob encomenda</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Schedule & Google Maps Embed */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            
            {/* Business Hours Table with Live Status */}
            <div className="p-6 bg-[#FFF8F0] rounded-lg border border-[#C9AD91]/60 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#C9AD91]/30">
                <div className="flex items-center gap-2 text-[#641322]">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-serif text-lg font-bold">
                    Horários de Funcionamento
                  </h4>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded font-semibold border ${
                    scheduleInfo.isOpen
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-[#F4DFD2] text-[#641322] border-[#C9AD91]/60'
                  }`}
                >
                  {scheduleInfo.statusLabel}
                </span>
              </div>

              <div className="space-y-2 text-sm text-[#382323]">
                {OFFICIAL_SCHEDULE.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-1 border-b border-[#C9AD91]/15 last:border-b-0"
                  >
                    <span className="font-medium text-[#382323]">{item.day}</span>
                    <span
                      className={`tabular-nums ${
                        item.isClosed
                          ? 'text-[#641322] font-semibold'
                          : 'text-[#382323]/80'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-[#382323]/70 italic">
                * Para garantir a sua fornada fresquinha, recomendamos fazer pedidos com antecedência.
              </div>
            </div>

            {/* Location Map View */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#641322] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Localização em Ourinhos - SP</span>
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Domingos+Carmelingo+Calo+2123+Vila+Odilon+Ourinhos+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#641322] font-semibold hover:underline"
                >
                  <span>Abrir no Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-[#C9AD91]/60 shadow-sm aspect-[16/10] bg-[#F4DFD2]">
                <iframe
                  title="Localização da Pepitas Confeitaria Artesanal em Ourinhos"
                  src="https://maps.google.com/maps?q=Avenida%20Domingos%20Carmelingo%20Calo%202123%20Ourinhos%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

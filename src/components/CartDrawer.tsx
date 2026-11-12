import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Truck, MapPin, Calendar, CreditCard } from 'lucide-react';
import { CartItem, FulfillmentType, OrderOptions } from '../types';
import { calculateCartTotal, formatBRL, buildCartOrderWhatsAppUrl } from '../utils/orderCalculator';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [fulfillment, setFulfillment] = useState<FulfillmentType>('retirada');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credito' | 'debito'>('pix');
  const [observations, setObservations] = useState('');

  if (!isOpen) return null;

  const total = calculateCartTotal(items);

  const orderOptions: OrderOptions = {
    fulfillment,
    deliveryAddress,
    preferredDate,
    paymentMethod,
    observations,
  };

  const handleCheckoutWhatsApp = () => {
    const url = buildCartOrderWhatsAppUrl(items, orderOptions);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#382323]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF8F0] shadow-2xl flex flex-col border-l border-[#C9AD91]/40">
          
          {/* Drawer Header */}
          <div className="p-6 bg-[#F4DFD2]/40 border-b border-[#C9AD91]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#641322]" />
              <h3 className="font-serif text-xl font-bold text-[#641322]">
                Sua Sacola de Encomendas
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar sacola"
              className="p-1.5 rounded-md text-[#382323] hover:text-[#641322] hover:bg-[#F4DFD2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F4DFD2] mx-auto flex items-center justify-center text-[#641322]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#641322]">
                  Sua sacola está vazia
                </h4>
                <p className="text-xs text-[#382323]/70 font-sans max-w-xs mx-auto">
                  Explore nosso cardápio e adicione os sabores que deseja saborear com quem você ama.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 bg-[#641322] text-[#FFF8F0] text-xs font-semibold rounded-md"
                >
                  Explorar cardápio
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#382323]/70">
                    <span>Itens selecionados ({items.length})</span>
                    <button
                      onClick={onClearCart}
                      className="text-[#641322] hover:underline"
                    >
                      Esvaziar sacola
                    </button>
                  </div>

                  {items.map((item, index) => (
                    <div
                      key={`${item.product.id}-${item.size}-${index}`}
                      className="p-3.5 bg-[#FFF8F0] rounded-lg border border-[#C9AD91]/40 flex items-start justify-between gap-3 shadow-2xs"
                    >
                      <div className="space-y-1 flex-1">
                        <h5 className="font-serif font-bold text-sm text-[#641322]">
                          {item.product.name}
                        </h5>
                        <p className="text-xs text-[#382323]/70 font-sans">
                          {item.size === 'tradicional' ? 'Tamanho Tradicional (8-10 fatias)' : 'Tamanho Família (14-16 fatias)'}
                        </p>
                        <p className="text-xs font-semibold text-[#641322] tabular-nums">
                          {formatBRL(item.unitPrice)} cada
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(index)}
                          aria-label={`Remover ${item.product.name}`}
                          className="text-[#382323]/40 hover:text-red-700 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center border border-[#C9AD91]/60 rounded bg-[#F4DFD2]/40">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            aria-label="Diminuir quantidade"
                            className="p-1 hover:bg-[#F4DFD2] rounded-l text-[#382323]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#382323] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            aria-label="Aumentar quantidade"
                            className="p-1 hover:bg-[#F4DFD2] rounded-r text-[#382323]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fulfillment Options */}
                <div className="pt-4 border-t border-[#C9AD91]/30 space-y-3">
                  <label className="text-xs font-semibold text-[#641322] uppercase tracking-wider block">
                    Forma de Entrega / Retirada
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFulfillment('retirada')}
                      className={`p-2.5 text-xs font-semibold rounded-md border flex items-center justify-center gap-1.5 transition-colors ${
                        fulfillment === 'retirada'
                          ? 'bg-[#641322] text-[#FFF8F0] border-[#641322]'
                          : 'bg-[#F4DFD2]/40 text-[#382323] border-[#C9AD91]/50 hover:bg-[#F4DFD2]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Retirada no Local</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFulfillment('entrega')}
                      className={`p-2.5 text-xs font-semibold rounded-md border flex items-center justify-center gap-1.5 transition-colors ${
                        fulfillment === 'entrega'
                          ? 'bg-[#641322] text-[#FFF8F0] border-[#641322]'
                          : 'bg-[#F4DFD2]/40 text-[#382323] border-[#C9AD91]/50 hover:bg-[#F4DFD2]'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Entrega (+ taxa)</span>
                    </button>
                  </div>

                  {fulfillment === 'entrega' && (
                    <div className="space-y-1 animate-in fade-in duration-200">
                      <label className="text-[11px] text-[#382323]/80 block">
                        Endereço de entrega em Ourinhos:
                      </label>
                      <input
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Rua, número e bairro em Ourinhos"
                        className="w-full p-2 text-xs rounded border border-[#C9AD91] bg-white focus:outline-none focus:ring-1 focus:ring-[#641322]"
                      />
                    </div>
                  )}
                </div>

                {/* Date & Time */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#641322] uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Data ou Horário Desejado</span>
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="Ex: Sexta-feira às 15h, ou amanhã cedo"
                    className="w-full p-2 text-xs rounded border border-[#C9AD91] bg-white focus:outline-none focus:ring-1 focus:ring-[#641322]"
                  />
                </div>

                {/* Payment preference */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#641322] uppercase tracking-wider flex items-center gap-1">
                    <CreditCard className="w-3 h-3" />
                    <span>Previsão de Pagamento</span>
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    {(['pix', 'credito', 'debito'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`py-1.5 rounded border text-center font-medium capitalize ${
                          paymentMethod === method
                            ? 'bg-[#641322] text-[#FFF8F0] border-[#641322]'
                            : 'bg-white text-[#382323] border-[#C9AD91]/50 hover:bg-[#F4DFD2]/40'
                        }`}
                      >
                        {method === 'pix' ? 'Pix' : method === 'credito' ? 'Crédito' : 'Débito'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional notes */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#641322] uppercase tracking-wider block">
                    Observações Especiais
                  </label>
                  <textarea
                    rows={2}
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="Ex: É para presente, embrulhar com fita especial..."
                    className="w-full p-2 text-xs rounded border border-[#C9AD91] bg-white focus:outline-none focus:ring-1 focus:ring-[#641322]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-[#F4DFD2]/50 border-t border-[#C9AD91]/40 space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-sm font-bold text-[#382323]">
                  Subtotal Estimado:
                </span>
                <span className="font-serif text-2xl font-bold text-[#641322] tabular-nums">
                  {formatBRL(total)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 bg-[#641322] hover:bg-[#382323] text-[#FFF8F0] font-semibold text-xs rounded-md shadow-md flex items-center justify-center gap-2 uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar Encomenda no WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#382323]/70">
                Sua mensagem será pré-formatada e enviada diretamente para o WhatsApp oficial da Pepitas Confeitaria.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

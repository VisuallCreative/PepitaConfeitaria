import { CakeProduct, CakeSize, CartItem, OrderOptions } from '../types';
import { DISPLAY_PHONE, OFFICIAL_PHONE } from '../data/products';

export function getProductPriceBySize(product: CakeProduct, size: CakeSize): number {
  return size === 'tradicional' ? product.priceTradicional : product.priceFamilia;
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

export function calculateCartItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function buildSingleProductWhatsAppUrl(
  product: CakeProduct,
  size: CakeSize,
  customNote?: string
): string {
  const sizeLabel = size === 'tradicional' ? 'Tamanho Tradicional' : 'Tamanho Família';
  const price = getProductPriceBySize(product, size);
  const formattedPrice = formatBRL(price);

  const messageLines = [
    'Olá, Pepitas Confeitaria Artesanal! 🍰',
    '',
    'Gostaria de fazer uma encomenda pelo site:',
    `• *${product.name}* (${sizeLabel})`,
    `• Categoria: ${product.categoryLabel}`,
    `• Valor: ${formattedPrice}`,
  ];

  if (customNote && customNote.trim().length > 0) {
    messageLines.push(`• Observações: ${customNote.trim()}`);
  }

  messageLines.push('');
  messageLines.push('Poderiam me informar a disponibilidade e a previsão de entrega/retirada? Muito obrigado(a)!');

  const encodedMessage = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/${OFFICIAL_PHONE}?text=${encodedMessage}`;
}

export function buildCartOrderWhatsAppUrl(
  items: CartItem[],
  options: OrderOptions
): string {
  if (items.length === 0) {
    return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(
      'Olá, Pepitas Confeitaria Artesanal! Gostaria de tirar uma dúvida sobre encomendas.'
    )}`;
  }

  const messageLines: string[] = [
    'Olá, Pepitas Confeitaria Artesanal! 🍰',
    'Gostaria de confirmar minha encomenda artesanal:',
    '',
    '*Itens selecionados:*',
  ];

  items.forEach((item, index) => {
    const sizeName = item.size === 'tradicional' ? 'Tradicional' : 'Família';
    const subtotal = item.unitPrice * item.quantity;
    messageLines.push(
      `${index + 1}. *${item.product.name}* (${sizeName})`
    );
    messageLines.push(
      `   Qtd: ${item.quantity}x ${formatBRL(item.unitPrice)} = ${formatBRL(subtotal)}`
    );
  });

  const total = calculateCartTotal(items);
  messageLines.push('');
  messageLines.push(`*Subtotal estimado:* ${formatBRL(total)}`);

  if (options.fulfillment === 'entrega') {
    messageLines.push('• *Modalidade:* Entrega a domicílio (mediante taxa)');
    if (options.deliveryAddress && options.deliveryAddress.trim().length > 0) {
      messageLines.push(`• *Endereço de entrega:* ${options.deliveryAddress.trim()}`);
    }
  } else {
    messageLines.push('• *Modalidade:* Retirada no local combinado');
    messageLines.push('  (Av. Domingos Carmelíngo Caló, 2123, Ourinhos - SP)');
  }

  if (options.preferredDate && options.preferredDate.trim().length > 0) {
    messageLines.push(`• *Data/Horário desejado:* ${options.preferredDate.trim()}`);
  }

  if (options.paymentMethod) {
    const paymentNames = {
      pix: 'Pix',
      credito: 'Cartão de Crédito',
      debito: 'Cartão de Débito',
    };
    messageLines.push(`• *Forma de pagamento:* ${paymentNames[options.paymentMethod]}`);
  }

  if (options.observations && options.observations.trim().length > 0) {
    messageLines.push(`• *Observações:* ${options.observations.trim()}`);
  }

  messageLines.push('');
  messageLines.push('Aguardo confirmação da disponibilidade para agendarmos. Obrigado(a)!');

  const encoded = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/${OFFICIAL_PHONE}?text=${encoded}`;
}

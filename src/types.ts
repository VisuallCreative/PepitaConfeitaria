export type CakeCategory = 'sem-cobertura' | 'com-cobertura';

export type CakeSize = 'tradicional' | 'familia';

export interface CakeProduct {
  id: string;
  name: string;
  category: CakeCategory;
  categoryLabel: string;
  description: string;
  priceTradicional: number;
  priceFamilia: number;
  image: string;
  highlightBadge?: string;
  servingSuggestion?: string;
}

export interface CartItem {
  product: CakeProduct;
  size: CakeSize;
  quantity: number;
  unitPrice: number;
}

export type FulfillmentType = 'retirada' | 'entrega';

export interface OrderOptions {
  customerName?: string;
  fulfillment: FulfillmentType;
  deliveryAddress?: string;
  preferredDate?: string;
  paymentMethod?: 'pix' | 'credito' | 'debito';
  observations?: string;
}

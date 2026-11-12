import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getProductPriceBySize,
  calculateCartTotal,
  calculateCartItemCount,
  buildSingleProductWhatsAppUrl,
  buildCartOrderWhatsAppUrl,
  formatBRL,
} from './orderCalculator';
import { CakeProduct, CartItem, OrderOptions } from '../types';

const mockProduct: CakeProduct = {
  id: 'test-cake',
  name: 'Bolo de Cenoura com Ganache',
  category: 'com-cobertura',
  categoryLabel: 'Bolo com Cobertura Artesanal',
  description: 'Massa fofa com cobertura de chocolate nobre',
  priceTradicional: 35.0,
  priceFamilia: 45.0,
  image: '/test.jpg',
};

test('getProductPriceBySize returns correct price for both sizes', () => {
  assert.equal(getProductPriceBySize(mockProduct, 'tradicional'), 35.0);
  assert.equal(getProductPriceBySize(mockProduct, 'familia'), 45.0);
});

test('calculateCartTotal and calculateCartItemCount calculate accurately', () => {
  const items: CartItem[] = [
    {
      product: mockProduct,
      size: 'tradicional',
      quantity: 2,
      unitPrice: 35.0,
    },
    {
      product: mockProduct,
      size: 'familia',
      quantity: 1,
      unitPrice: 45.0,
    },
  ];

  assert.equal(calculateCartItemCount(items), 3);
  assert.equal(calculateCartTotal(items), 115.0);
});

test('buildSingleProductWhatsAppUrl generates valid wa.me link with encoded details', () => {
  const url = buildSingleProductWhatsAppUrl(mockProduct, 'familia');
  assert.ok(url.startsWith('https://wa.me/5514996477792?text='));
  assert.ok(url.includes(encodeURIComponent('Bolo de Cenoura com Ganache')));
  assert.ok(url.includes(encodeURIComponent('Tamanho Família')));
});

test('buildCartOrderWhatsAppUrl formats multi-item order with fulfillment details', () => {
  const items: CartItem[] = [
    {
      product: mockProduct,
      size: 'tradicional',
      quantity: 1,
      unitPrice: 35.0,
    },
  ];
  const options: OrderOptions = {
    fulfillment: 'entrega',
    deliveryAddress: 'Rua das Flores, 123',
    paymentMethod: 'pix',
  };

  const url = buildCartOrderWhatsAppUrl(items, options);
  assert.ok(url.startsWith('https://wa.me/5514996477792?text='));
  assert.ok(url.includes(encodeURIComponent('Rua das Flores, 123')));
  assert.ok(url.includes(encodeURIComponent('Pix')));
});

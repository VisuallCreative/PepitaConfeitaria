import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { IFoodSection } from './components/IFoodSection';
import { EssenceSection } from './components/EssenceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GallerySection } from './components/GallerySection';
import { ContactAndLocationSection } from './components/ContactAndLocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ImageModal } from './components/ImageModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CakeProduct, CakeSize, CartItem } from './types';
import { calculateCartItemCount, getProductPriceBySize } from './utils/orderCalculator';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const cartCount = calculateCartItemCount(cartItems);

  const handleAddToCart = (product: CakeProduct, size: CakeSize) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      const unitPrice = getProductPriceBySize(product, size);
      return [
        ...prev,
        {
          product,
          size,
          quantity: 1,
          unitPrice,
        },
      ];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        quantity: newQty,
      };
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenImage = (url: string, title: string) => {
    setModalImage({
      isOpen: true,
      url,
      title,
    });
  };

  const handleCloseImage = () => {
    setModalImage((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#382323] paper-texture">
      {/* Top Navigation Bar */}
      <Header
        cartItemCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Complete Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onViewImage={handleOpenImage}
        />

        {/* Official iFood Store Integration */}
        <IFoodSection />

        {/* Institutional Essence Section */}
        <EssenceSection />

        {/* How It Works (Ordering process) */}
        <HowItWorksSection />

        {/* Visual Work Gallery */}
        <GallerySection
          onViewImage={handleOpenImage}
        />

        {/* Contact, Map, Schedule, and Call-to-action */}
        <ContactAndLocationSection />
      </main>

      {/* Sophisticated Footer */}
      <Footer />

      {/* Order Bag / Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Image Lightbox Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={handleCloseImage}
        imageUrl={modalImage.url}
        title={modalImage.title}
      />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

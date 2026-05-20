import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { WhatsAppLogo } from './WhatsAppLogo';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = "Hi Mercy! 👋 I'd like to place a food order!";
    openWhatsApp(message);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-white shadow-[0_12px_40px_rgba(37,211,102,0.38)] ring-1 ring-[#25D366]/25 backdrop-blur transition-all duration-300 hover:scale-110 hover:shadow-[0_18px_48px_rgba(37,211,102,0.5)] active:scale-95 sm:bottom-6 sm:right-6 md:h-16 md:w-16"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppLogo className="h-8 w-8 md:h-10 md:w-10" glow />
    </button>
  );
};

import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#090909]/95 backdrop-blur-xl border-t border-[#C9A227]/40 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]"
      id="sticky-mobile-bar"
    >
      <div className="flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-3 px-4 rounded-full bg-[#171717] border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 active:scale-95 transition-transform"
          id="sticky-mobile-call-btn"
        >
          <Phone className="w-4 h-4 text-[#C9A227]" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(201,162,39,0.4)] flex items-center justify-center space-x-2 active:scale-95 transition-transform"
          id="sticky-mobile-book-btn"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};

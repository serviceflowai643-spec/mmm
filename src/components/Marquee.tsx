import React from 'react';
import { MARQUEE_ITEMS } from '../data/shopData';
import { Scissors } from 'lucide-react';

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#121212] py-4 border-y border-[#C9A227]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" id="brand-marquee">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 mx-4">
            <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#CFCFCF] font-semibold">
              {item}
            </span>
            <Scissors className="w-3.5 h-3.5 text-[#C9A227] rotate-45 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
};

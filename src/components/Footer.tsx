import React from 'react';
import { Scissors, ArrowUp, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#FAFAFA] border-t border-white/10 pt-16 pb-12 relative overflow-hidden" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                <Scissors className="w-5 h-5 rotate-45" />
              </div>
              <div>
                <span className="block font-cinzel text-lg font-bold uppercase tracking-wider text-white">
                  Precision Barbers
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#C9A227]">
                  LEEDS • LS8 5AJ
                </span>
              </div>
            </div>

            <p className="text-xs text-[#CFCFCF] font-light leading-relaxed">
              Precision Cuts. Premium Style. Trusted Barbers in Leeds. High-quality haircuts, sharp skin fades, and expert beard grooming at 107 Roundhay Rd, Harehills.
            </p>

            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-[#C9A227] hover:underline"
            >
              <Instagram className="w-4 h-4" />
              <span>@precision_barber1</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-widest text-[#C9A227]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#CFCFCF]">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Master Barbers</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Visual Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Online</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-widest text-[#C9A227]">
              Find Us
            </h4>
            <ul className="space-y-2 text-xs text-[#CFCFCF] font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.city} {BUSINESS_INFO.postcode}, UK</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-mono">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-widest text-[#C9A227]">
              Shop Hours
            </h4>
            <div className="space-y-1 text-xs text-[#CFCFCF] font-mono">
              <p>Mon - Wed: 09:00 - 18:30</p>
              <p>Thu - Fri: 09:00 - 19:00</p>
              <p>Sat: 08:30 - 18:00</p>
              <p>Sun: 10:00 - 16:00</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CFCFCF]/60 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Precision Barbers Leeds. All rights reserved. 107 Roundhay Rd, Harehills, LS8 5AJ.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C9A227] hover:text-white transition-colors"
            id="back-to-top-btn"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Navigation, Instagram, MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

interface FloatingActionButtonProps {
  onOpenBooking: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);

      // Check footer visibility
      const footer = document.getElementById('site-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const secondaryActions = [
    {
      id: 'call',
      label: 'Call Now',
      icon: Phone,
      action: () => {
        window.location.href = `tel:${BUSINESS_INFO.phone}`;
      }
    },
    {
      id: 'directions',
      label: 'Get Directions',
      icon: Navigation,
      action: () => {
        window.open(BUSINESS_INFO.googleMapsUrl, '_blank');
      }
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      action: () => {
        window.open(BUSINESS_INFO.instagram, '_blank');
      }
    },
    {
      id: 'contact',
      label: 'Contact Us',
      icon: MessageSquare,
      action: () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ease-out ${
        isFooterVisible ? 'bottom-20 md:bottom-24 right-5 md:right-8' : 'bottom-5 md:bottom-8 right-5 md:right-8'
      }`}
      id="floating-action-container"
    >
      {/* Secondary Quick Actions Menu (Expands Upward) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex flex-col space-y-2 items-end"
          >
            {secondaryActions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setIsOpen(false);
                    item.action();
                  }}
                  className="flex items-center space-x-3 px-4 py-2.5 rounded-full glass-card-gold gold-border-glow text-white hover:text-[#C9A227] shadow-xl hover:scale-105 transition-all group backdrop-blur-2xl"
                >
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-white group-hover:text-[#C9A227]">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#171717] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                    <Icon className="w-4 h-4" />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <div className="relative group">
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          <div className="px-3 py-1.5 rounded-lg bg-[#171717]/95 border border-[#C9A227]/40 text-[#C9A227] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shadow-xl backdrop-blur-md">
            Book Appointment
          </div>
        </div>

        <motion.button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              onOpenBooking();
            }
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          animate={{
            scale: isScrolledDown ? 0.92 : 1,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full glass-card-gold gold-border-glow text-[#090909] shadow-[0_0_25px_rgba(201,162,39,0.4)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#C9A227] via-[#E6C865] to-[#C9A227]`}
          title="Book Appointment"
          id="main-fab-btn"
        >
          {/* Animated Shimmer Line */}
          <div className="absolute inset-0 animate-gold-shimmer pointer-events-none opacity-40" />

          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6 text-[#090909] font-bold" />
          ) : (
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#090909] shrink-0" />
          )}
        </motion.button>

        {/* Secondary Menu Toggle Trigger Dot */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#171717] border border-[#C9A227] flex items-center justify-center text-[#C9A227] text-[10px] font-bold shadow-md hover:scale-110 transition-transform"
            title="More Options"
          >
            +
          </button>
        )}
      </div>

    </div>
  );
};

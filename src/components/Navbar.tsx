import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Phone, MapPin, Menu, X, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Barbers', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#090909]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#090909]/90 via-[#090909]/40 to-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center space-x-3 group text-left"
            id="nav-logo-link"
          >
            <div className="relative w-10 h-10 rounded-full bg-[#171717] border border-[#C9A227]/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:border-[#C9A227] shadow-[0_0_15px_rgba(201,162,39,0.15)]">
              <Scissors className="w-5 h-5 text-[#C9A227] rotate-45 transition-transform duration-500 group-hover:rotate-90" />
            </div>
            <div>
              <span className="block font-cinzel text-lg sm:text-xl font-bold tracking-[0.15em] uppercase text-white group-hover:text-gold-gradient transition-colors">
                SCISSORHANDS
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-[#C9A227] font-semibold -mt-1">
                BARBER • LEEDS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#CFCFCF] hover:text-[#C9A227] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-2 text-xs text-[#CFCFCF] hover:text-white px-3 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all bg-[#171717]/40 backdrop-blur-md"
              id="nav-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span className="font-mono text-[11px]">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:shadow-[0_0_30px_rgba(201,162,39,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              id="nav-book-cta"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider bg-[#C9A227] text-[#090909] rounded-full shadow-md"
              id="mobile-nav-book-cta"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#171717] border border-white/10 text-[#FAFAFA] hover:text-[#C9A227] transition-colors"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#090909]/98 border-b border-[#C9A227]/30 backdrop-blur-2xl overflow-hidden"
            id="mobile-drawer-menu"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs text-[#C9A227] pb-3 border-b border-white/10">
                <MapPin className="w-4 h-4" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.city} {BUSINESS_INFO.postcode}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base uppercase tracking-[0.2em] text-[#FAFAFA] hover:text-[#C9A227] py-2 transition-colors font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] shadow-lg flex items-center justify-center space-x-2"
                  id="mobile-drawer-book-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Online</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border border-white/20 text-[#FAFAFA] flex items-center justify-center space-x-2 bg-[#171717]"
                  id="mobile-drawer-call-btn"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

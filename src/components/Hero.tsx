import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Star, MapPin, ChevronDown, Award, Coffee, Facebook, ExternalLink, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#090909]" id="hero-section">
      
      {/* Background Cinematic Visual with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85"
          alt="Hussain Barbers Shop Interior in Hyde Park Leeds"
          className="w-full h-full object-cover object-center scale-105 opacity-30 filter brightness-90 contrast-110"
        />
        {/* Layered Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-[#090909]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,162,39,0.18)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Location & Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-[#171717]/80 border border-[#C9A227]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(201,162,39,0.2)]"
        >
          <div className="flex items-center space-x-1 text-[#C9A227]">
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <span className="font-bold text-xs text-white ml-1">{BUSINESS_INFO.rating}</span>
          </div>
          <span className="text-white/30 text-xs">•</span>
          <span className="text-xs uppercase tracking-wider text-[#CFCFCF] font-semibold">{BUSINESS_INFO.reviewsCount} Google Reviews</span>
          <span className="text-white/30 text-xs">•</span>
          <span className="flex items-center space-x-1 text-xs text-[#C9A227] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.address}, Hyde Park, Leeds</span>
          </span>
        </motion.div>

        {/* Hero Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.08em] leading-[1.05] text-white">
            Hussain Barbers
          </h1>
          
          <p className="font-syne text-lg sm:text-2xl text-[#C9A227] font-bold uppercase tracking-wider">
            Professional Haircuts & Skin Fades in Leeds
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#CFCFCF] font-light leading-relaxed">
            Welcome to Hussain Barbers, where premium barbering meets exceptional customer service. Whether you're looking for a sharp skin fade, classic haircut, beard grooming or a complete restyle, our experienced team delivers outstanding results in a friendly and welcoming environment.
          </p>
        </motion.div>

        {/* Action Buttons with Prominent Facebook Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 pt-2"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#C9A227] via-[#E6C865] to-[#C9A227] text-[#090909] shadow-[0_0_35px_rgba(201,162,39,0.4)] hover:shadow-[0_0_50px_rgba(201,162,39,0.7)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group"
            id="hero-book-cta"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>Book Appointment</span>
          </button>

          <a
            href={BUSINESS_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-bold uppercase tracking-[0.15em] bg-[#1877F2] text-white shadow-[0_0_25px_rgba(24,119,242,0.4)] hover:bg-[#166FE5] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2.5 group"
            id="hero-facebook-cta"
          >
            <Facebook className="w-5 h-5 fill-current" />
            <span>Follow Us on Facebook</span>
            <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
          </a>

          <a
            href="#team"
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.15em] border border-white/20 text-[#FAFAFA] hover:border-[#C9A227] hover:text-[#C9A227] bg-[#171717]/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2.5 group"
            id="hero-team-link"
          >
            <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Meet The Team</span>
          </a>
        </motion.div>

        {/* Highlight Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 max-w-4xl mx-auto text-left"
        >
          <div className="p-4 rounded-xl bg-[#171717]/50 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <Star className="w-4 h-4 fill-[#C9A227]" />
              <span className="text-xs uppercase font-bold tracking-wider">4.8★ Rating</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">158+ Google Reviews</p>
          </div>

          <div className="p-4 rounded-xl bg-[#171717]/50 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <Coffee className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Hospitality</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">Complimentary Tea & Coffee</p>
          </div>

          <div className="p-4 rounded-xl bg-[#171717]/50 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Hyde Park</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">65 Brudenell Grove, LS6</p>
          </div>

          <div className="p-4 rounded-xl bg-[#171717]/50 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <Heart className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">2500+ Clients</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">100% Satisfaction</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex flex-col items-center pt-6 text-xs text-[#CFCFCF]/60 hover:text-[#C9A227] transition-colors uppercase tracking-[0.2em]"
        >
          <span className="mb-2 text-[10px]">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 text-[#C9A227]" />
        </motion.a>

      </div>
    </section>
  );
};

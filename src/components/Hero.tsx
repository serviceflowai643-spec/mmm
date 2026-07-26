import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Star, MapPin, ChevronDown, Award, Coffee } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090909]" id="hero-section">
      
      {/* Background Cinematic Visual with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85"
          alt="Lords' Barbering Shop Interior at 7 Grand Arcade Leeds"
          className="w-full h-full object-cover object-center scale-105 opacity-30 filter brightness-90 contrast-110"
        />
        {/* Layered Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-[#090909]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,162,39,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Location & Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-[#171717]/80 border border-[#C9A227]/30 backdrop-blur-xl shadow-[0_0_20px_rgba(201,162,39,0.15)]"
        >
          <div className="flex items-center space-x-1 text-[#C9A227]">
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <Star className="w-4 h-4 fill-[#C9A227]" />
            <span className="font-bold text-xs text-white ml-1">4.6</span>
          </div>
          <span className="text-white/30 text-xs">•</span>
          <span className="text-xs uppercase tracking-wider text-[#CFCFCF] font-medium">127+ Google Reviews</span>
          <span className="text-white/30 text-xs">•</span>
          <span className="flex items-center space-x-1 text-xs text-[#C9A227] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>107 Roundhay Rd, Harehills, Leeds</span>
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
            Precision Barbers
          </h1>
          
          <p className="font-syne text-lg sm:text-2xl text-[#C9A227] font-bold uppercase tracking-wider">
            Professional Haircuts & Skin Fades in Harehills, Leeds
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#CFCFCF] font-light leading-relaxed">
            Experience premium barbering at Precision Barbers, where expert craftsmanship meets outstanding customer service. From sharp skin fades and beard grooming to classic cuts and modern styling, our skilled team delivers precision with every appointment.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
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
            href="#team"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.2em] border border-white/20 text-[#FAFAFA] hover:border-[#C9A227] hover:text-[#C9A227] bg-[#171717]/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-3 group"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left"
        >
          <div className="p-4 rounded-xl bg-[#171717]/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Expert Barbers</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">Heady, Sam & Marco</p>
          </div>

          <div className="p-4 rounded-xl bg-[#171717]/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <Coffee className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">High Quality</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">Craftsmanship & Service</p>
          </div>

          <div className="p-4 rounded-xl bg-[#171717]/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Harehills</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">107 Roundhay Rd, Leeds</p>
          </div>

          <div className="p-4 rounded-xl bg-[#171717]/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[#C9A227] mb-1">
              <Star className="w-4 h-4 fill-[#C9A227]" />
              <span className="text-xs uppercase font-bold tracking-wider">4.6★ Rated</span>
            </div>
            <p className="text-xs text-[#CFCFCF]">127+ Google Reviews</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex flex-col items-center pt-8 text-xs text-[#CFCFCF]/60 hover:text-[#C9A227] transition-colors uppercase tracking-[0.2em]"
        >
          <span className="mb-2 text-[10px]">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 text-[#C9A227]" />
        </motion.a>

      </div>
    </section>
  );
};

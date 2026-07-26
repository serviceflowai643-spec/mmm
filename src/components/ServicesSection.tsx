import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/shopData';
import { Clock, CheckCircle2, Sparkles, ArrowRight, Scissors } from 'lucide-react';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cuts', 'Beard', 'Combos', 'Packages', 'Junior'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section className="relative py-24 bg-[#0d0d0d] text-[#FAFAFA] overflow-hidden" id="services">
      {/* Background Radial Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>Bespoke Menu & Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Services <span className="text-gold-gradient">& Packages</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#CFCFCF] font-light"
          >
            Every service includes a tailored style consultation, scalp refresh wash, precision finishing, and complimentary artisan coffee.
          </motion.p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="service-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] shadow-[0_0_20px_rgba(201,162,39,0.3)] font-bold scale-105'
                  : 'bg-[#171717] text-[#CFCFCF] hover:text-white border border-white/10 hover:border-[#C9A227]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group ${
                  service.isPopular
                    ? 'glass-card-gold gold-border-glow'
                    : 'glass-card hover:border-[#C9A227]/50'
                }`}
              >
                {/* Popular Badge */}
                {service.isPopular && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] font-bold text-[10px] uppercase tracking-[0.2em] shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Signature Choice</span>
                  </div>
                )}

                <div>
                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-gold-gradient transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1 text-xs text-[#C9A227]">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="font-mono">{service.duration}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-gold-gradient">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#CFCFCF] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-2 mb-6">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A227] font-bold">Includes:</span>
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-[#FAFAFA]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Action */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-[0.15em] bg-[#171717] hover:bg-[#C9A227] text-white hover:text-[#090909] border border-white/10 hover:border-[#C9A227] transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

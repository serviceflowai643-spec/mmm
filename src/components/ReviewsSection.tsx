import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS, BRAND_STATS } from '../data/shopData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section className="relative py-24 bg-[#090909] text-[#FAFAFA] overflow-hidden" id="reviews">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Brand Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#171717]/80 border border-[#C9A227]/30 backdrop-blur-xl shadow-2xl mb-20">
          {BRAND_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center space-y-1 border-r last:border-0 border-white/10 pr-2"
            >
              <span className="block font-cinzel text-3xl sm:text-5xl font-black text-gold-gradient">
                {stat.value}
              </span>
              <span className="block text-xs uppercase tracking-widest text-[#CFCFCF] font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Client Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            What Our <span className="text-gold-gradient">Clients Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card-gold gold-border-glow rounded-3xl p-8 sm:p-12 relative shadow-2xl"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-[#C9A227]/10 pointer-events-none" />

              {/* Stars */}
              <div className="flex items-center space-x-1 text-[#C9A227] mb-6">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A227]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-2xl font-serif text-white leading-relaxed mb-8 italic">
                "{activeReview.text}"
              </p>

              {/* Author Details */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center space-x-4">
                  {/* Monogram Initials Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#171717] border border-[#C9A227] flex items-center justify-center text-[#C9A227] font-bold text-sm tracking-wider shadow-md shrink-0 font-mono">
                    {activeReview.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white flex items-center space-x-2">
                      <span>{activeReview.author}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                    </h3>
                    <p className="text-xs text-[#C9A227] font-mono">{activeReview.service}</p>
                  </div>
                </div>

                <span className="text-xs text-[#CFCFCF]/60 font-mono hidden sm:inline-block">
                  {activeReview.date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-[#171717] border border-white/10 hover:border-[#C9A227] text-white hover:text-[#C9A227] transition-all shadow-md"
              aria-label="Previous Review"
              id="prev-review-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-[#C9A227] w-6' : 'bg-white/20'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-[#171717] border border-white/10 hover:border-[#C9A227] text-white hover:text-[#C9A227] transition-all shadow-md"
              aria-label="Next Review"
              id="next-review-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ShieldCheck, Scissors, Sparkles, MapPin, HeartHandshake, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/shopData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Scissors,
      title: 'Precision Barbering',
      description: 'Expert skin fades, classic scissor haircuts, restyles, and razor line-ups tailored to your individual style.'
    },
    {
      icon: Coffee,
      title: 'Complimentary Hot Drinks',
      description: 'Enjoy fresh, comforting tea or coffee with every haircut in a friendly, welcoming environment.'
    },
    {
      icon: Star,
      title: '4.8★ Google Rating',
      description: 'Proudly backed by 158+ glowing Google reviews from satisfied students, locals, and regulars in Leeds.'
    },
    {
      icon: ShieldCheck,
      title: 'Affordable Excellence',
      description: 'Unbeatable value for students and locals alike without ever compromising on quality or attention to detail.'
    }
  ];

  return (
    <section className="relative py-24 bg-[#090909] text-[#FAFAFA] overflow-hidden" id="about">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Hussain Barbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Trusted Barbershop in <span className="text-gold-gradient">Hyde Park, Leeds</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#CFCFCF] font-light leading-relaxed"
          >
            Hussain Barbers is one of Leeds' most trusted neighbourhood barbershops, proudly maintaining a 4.8-star Google rating from 158 satisfied customers.
          </motion.p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Image Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                    alt="Hussain Barbers Shop Interior"
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-[#C9A227] tracking-widest uppercase">Hyde Park, Leeds</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80"
                    alt="Warm Welcome at Hussain Barbers"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-[#C9A227] tracking-widest uppercase">Free Tea & Coffee</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
                    alt="Sharp Skin Fade"
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-[#C9A227] tracking-widest uppercase">Sharp Skin Fades</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                    alt="65 Brudenell Grove Location"
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-[#C9A227] tracking-widest uppercase">LS6 1HR</span>
                </div>
              </div>
            </div>

            {/* Floating Gold Emblem Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-5 rounded-2xl glass-card-gold gold-border-glow text-center shadow-2xl">
              <span className="block font-cinzel text-3xl font-black text-gold-gradient">4.8★</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#FAFAFA] font-bold mt-1">158 Reviews</span>
            </div>
          </motion.div>

          {/* Text Story Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Known For Outstanding Hospitality & Great Value
              </h3>
              <p className="text-[#CFCFCF] text-sm sm:text-base leading-relaxed font-light">
                Known for outstanding hospitality, affordable prices and consistently excellent haircuts, our experienced barbers ensure every client leaves looking and feeling their best.
              </p>
              <p className="text-[#CFCFCF] text-sm sm:text-base leading-relaxed font-light">
                Complimentary tea, coffee and a warm welcome make every visit enjoyable. Whether you are a student returning for term or a local resident looking for a reliable haircut, you'll feel right at home at Hussain Barbers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#171717]/80 border border-[#C9A227]/30 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">65 Brudenell Grove, Leeds LS6 1HR, United Kingdom</h4>
                  <p className="text-xs text-[#CFCFCF]">Conveniently located in Hyde Park, Leeds</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Feature Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-[#171717]/60 border border-white/10 hover:border-[#C9A227]/50 transition-all duration-500 hover:-translate-y-1 shadow-lg group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#090909] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-4 group-hover:scale-110 group-hover:border-[#C9A227] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-syne text-lg font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#CFCFCF] leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C9A227]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

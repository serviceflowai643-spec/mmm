import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../data/shopData';
import { Star, Calendar, Award, CheckCircle } from 'lucide-react';

interface TeamSectionProps {
  onSelectBarber: (barberId: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectBarber }) => {
  return (
    <section className="relative py-24 bg-[#090909] text-[#FAFAFA] overflow-hidden" id="team">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Master Craftsmen</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Meet The <span className="text-gold-gradient">Master Barbers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#CFCFCF] font-light max-w-2xl mx-auto"
          >
            Our dedicated barbers bring years of expertise, precision skills, and warm hospitality to every single haircut in Hyde Park, Leeds.
          </motion.p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative rounded-2xl bg-[#171717]/80 border border-white/10 hover:border-[#C9A227] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Barber Portrait Header */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#090909]">
                  <img
                    src={barber.image}
                    alt={`${barber.name} - ${barber.role} at Hussain Barbers Leeds`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-90" />

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#090909]/80 backdrop-blur-md border border-[#C9A227]/40 flex items-center space-x-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
                    <span className="text-xs font-bold text-white">{barber.rating}</span>
                    <span className="text-[10px] text-[#CFCFCF]">({barber.reviewsCount})</span>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#C9A227] text-[#090909] font-bold text-[10px] uppercase tracking-wider">
                    {barber.experience}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-cinzel text-2xl font-bold text-white group-hover:text-gold-gradient transition-colors">
                      {barber.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold mt-0.5">
                      {barber.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#CFCFCF] font-light leading-relaxed">
                    {barber.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A227] font-bold mb-2">Specialties:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {barber.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#090909] border border-white/10 text-[10px] text-[#FAFAFA]/80 flex items-center space-x-1"
                        >
                          <CheckCircle className="w-2.5 h-2.5 text-[#C9A227]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking CTA Button */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => onSelectBarber(barber.id)}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] hover:shadow-[0_0_25px_rgba(201,162,39,0.5)] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book With {barber.name}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

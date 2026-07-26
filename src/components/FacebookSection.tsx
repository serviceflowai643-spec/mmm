import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, ThumbsUp, MessageSquare, Share2, ExternalLink, CheckCircle, X } from 'lucide-react';
import { BUSINESS_INFO, FACEBOOK_POSTS } from '../data/shopData';
import { FacebookPost } from '../types';

export const FacebookSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<FacebookPost | null>(null);

  return (
    <section id="facebook" className="py-24 bg-[#090909] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1877F2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#1877F2]/40 text-xs text-[#1877F2] font-semibold tracking-[0.2em] uppercase"
          >
            <Facebook className="w-4 h-4 fill-current" />
            <span>Official Facebook Page</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Latest From Our <span className="text-gold-gradient">Facebook Feed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#CFCFCF] font-light max-w-2xl mx-auto"
          >
            Stay connected with the latest haircut transformations, special offers, student deals and announcements from Hussain Barbers.
          </motion.p>

          {/* Official Page Banner CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#CFCFCF]"
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#171717]/80 border border-white/10">
              <CheckCircle className="w-4 h-4 text-[#1877F2]" />
              <span className="font-semibold text-white">Hussain Barbers Official</span>
              <span className="text-white/40">• Leeds LS6</span>
            </div>

            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#1877F2] text-white shadow-[0_0_20px_rgba(24,119,242,0.4)] hover:bg-[#166FE5] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>Follow Us on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
            </a>
          </motion.div>
        </div>

        {/* Facebook Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACEBOOK_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedPost(post)}
              className="group relative rounded-2xl overflow-hidden bg-[#171717] border border-white/10 hover:border-[#1877F2]/60 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-black">
                <img
                  src={post.image}
                  alt={`Hussain Barbers Facebook update ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#1877F2] text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1">
                  <Facebook className="w-3 h-3 fill-current" />
                  <span>Facebook Update</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#C9A227] font-mono uppercase tracking-wider block">
                    {post.date}
                  </span>
                  <p className="text-xs text-[#FAFAFA] font-light leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                </div>

                {/* Footer Reactions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#CFCFCF]">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1 text-[#1877F2]">
                      <ThumbsUp className="w-3.5 h-3.5 fill-[#1877F2]" />
                      <span className="font-semibold">{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-sky-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{post.comments}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-emerald-400">
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{post.shares}</span>
                    </span>
                  </div>

                  <span className="text-[#1877F2] font-bold flex items-center space-x-0.5 group-hover:underline">
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Prominent CTA */}
        <div className="mt-16 text-center">
          <a
            href={BUSINESS_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#1877F2] text-white hover:bg-[#166FE5] transition-all duration-300 shadow-2xl group"
            id="facebook-section-btn"
          >
            <Facebook className="w-5 h-5 fill-current" />
            <span>Visit Hussain Barbers Official Facebook Page</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#171717] border border-[#1877F2]/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#1877F2] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="md:w-1/2 aspect-square md:aspect-auto w-full bg-black">
                <img
                  src={selectedPost.image}
                  alt="Hussain Barbers Facebook Post Detail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6 bg-[#171717]">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#1877F2]/20 border border-[#1877F2] flex items-center justify-center text-[#1877F2]">
                      <Facebook className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Hussain Barbers</h4>
                      <p className="text-[10px] text-[#C9A227] uppercase tracking-wider font-mono">65 Brudenell Grove, Leeds</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#CFCFCF] font-light leading-relaxed">
                    {selectedPost.caption}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#CFCFCF]">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1.5 text-[#1877F2] font-semibold">
                        <ThumbsUp className="w-4 h-4 fill-current" />
                        <span>{selectedPost.likes} Likes</span>
                      </span>
                      <span className="flex items-center space-x-1.5 text-sky-400 font-semibold">
                        <MessageSquare className="w-4 h-4" />
                        <span>{selectedPost.comments}</span>
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-white/50">{selectedPost.date}</span>
                  </div>

                  <a
                    href={selectedPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#1877F2] text-white hover:bg-[#166FE5] transition-all shadow-lg"
                  >
                    <Facebook className="w-4 h-4 fill-current" />
                    <span>View Post on Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

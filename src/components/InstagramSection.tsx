import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink, X, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_POSTS } from '../data/shopData';
import { InstagramPost } from '../types';

export const InstagramSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram" className="py-24 bg-[#090909] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Social Proof */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <Instagram className="w-4 h-4 text-[#C9A227]" />
            <span>@hussainbarbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Follow Our <span className="text-gold-gradient">Instagram Feed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#CFCFCF] font-light max-w-2xl mx-auto"
          >
            Stay updated with our latest skin fades, beard transformations, and barbershop culture in Hyde Park, Leeds.
          </motion.p>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#CFCFCF]"
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#171717]/80 border border-white/10">
              <CheckCircle className="w-4 h-4 text-[#C9A227]" />
              <span className="font-semibold text-white">@hussainbarbers</span>
              <span className="text-white/40">• Official Page</span>
            </div>

            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* 6 Posts Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedPost(post)}
              className="group relative rounded-2xl overflow-hidden bg-[#171717] border border-white/10 hover:border-[#C9A227]/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[#C9A227]/10"
            >
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden relative">
                <img
                  src={post.image}
                  alt={`Hussain Barbers Instagram post ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Bar with Instagram Icon */}
                  <div className="flex justify-between items-center text-xs text-[#C9A227]">
                    <span className="flex items-center space-x-1 font-mono uppercase tracking-wider">
                      <Instagram className="w-4 h-4" />
                      <span>HUSSAIN BARBERS</span>
                    </span>
                    <span className="text-white/60 font-mono text-[10px]">{post.date}</span>
                  </div>

                  {/* Caption Preview */}
                  <p className="text-white font-sans text-sm line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>

                  {/* Bottom Stats & CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-white text-xs">
                    <div className="flex items-center space-x-4 font-semibold">
                      <span className="flex items-center space-x-1.5 text-rose-400">
                        <Heart className="w-4 h-4 fill-rose-400" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1.5 text-sky-400">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    <span className="inline-flex items-center space-x-1 text-[11px] uppercase tracking-wider font-bold text-[#C9A227] group-hover:underline">
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Prominent CTA */}
        <div className="mt-16 text-center">
          <a
            href={BUSINESS_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-[#171717] border-2 border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#090909] transition-all duration-300 shadow-xl group"
          >
            <Instagram className="w-5 h-5 text-[#C9A227] group-hover:text-[#090909] transition-colors" />
            <span>Follow @hussainbarbers on Instagram</span>
            <ExternalLink className="w-4 h-4" />
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
              className="bg-[#171717] border border-[#C9A227]/30 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#C9A227] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="md:w-1/2 aspect-square md:aspect-auto w-full bg-black">
                <img
                  src={selectedPost.image}
                  alt="Hussain Barbers Instagram post detail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6 bg-[#171717]">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">@hussainbarbers</h4>
                      <p className="text-[10px] text-[#C9A227] uppercase tracking-wider font-mono">Hyde Park, Leeds</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#CFCFCF] font-light leading-relaxed">
                    {selectedPost.caption}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#CFCFCF]">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1.5 text-rose-400 font-semibold">
                        <Heart className="w-4 h-4 fill-rose-400" />
                        <span>{selectedPost.likes} likes</span>
                      </span>
                      <span className="flex items-center space-x-1.5 text-sky-400 font-semibold">
                        <MessageCircle className="w-4 h-4" />
                        <span>{selectedPost.comments}</span>
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-white/50">{selectedPost.date}</span>
                  </div>

                  <a
                    href={selectedPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white hover:brightness-110 transition-all shadow-lg"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>View Post on Instagram</span>
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data/shopData';
import { GalleryItem } from '../types';
import { Camera, Maximize2, X, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const tabs = ['All', 'Interior & Shop', 'Skin Fades & Cuts', 'Beard Grooming'];

  const filteredItems = activeTab === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeTab);

  return (
    <section className="relative py-24 bg-[#0d0d0d] text-[#FAFAFA] overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#C9A227]/30 text-xs text-[#C9A227] font-semibold tracking-[0.2em] uppercase"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Imagery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.05em] text-white"
          >
            Visual <span className="text-gold-gradient">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#CFCFCF] font-light"
          >
            A visual showcase of real craftsmanship, friendly atmosphere, and everyday life at 31a Great George St, Leeds.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#C9A227] to-[#E6C865] text-[#090909] font-bold shadow-md'
                  : 'bg-[#171717] text-[#CFCFCF] hover:text-white border border-white/10 hover:border-[#C9A227]/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#171717] border border-white/10 hover:border-[#C9A227] cursor-pointer shadow-xl h-72 sm:h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-[#C9A227] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#CFCFCF] line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
              id="gallery-lightbox"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#171717] border border-[#C9A227]/40 rounded-3xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#C9A227] border border-white/20 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                </div>

                <div className="p-6 bg-[#171717] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A227]">
                      {lightboxItem.category}
                    </span>
                    {lightboxItem.location && (
                      <span className="flex items-center space-x-1 text-xs text-[#CFCFCF]">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                        <span>{lightboxItem.location}</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-sm text-[#CFCFCF] font-light leading-relaxed">
                    {lightboxItem.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

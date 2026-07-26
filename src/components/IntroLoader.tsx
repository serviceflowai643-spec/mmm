import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'line' | 'logo' | 'text' | 'expand'>('line');

  useEffect(() => {
    // Timeline sequence
    const timer1 = setTimeout(() => setStage('logo'), 1000);
    const timer2 = setTimeout(() => setStage('text'), 2000);
    const timer3 = setTimeout(() => setStage('expand'), 3200);
    const timer4 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 'expand' ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090909] text-[#FAFAFA] overflow-hidden select-none bg-noise"
      id="intro-loader"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Skip Intro Button */}
      <button
        onClick={onComplete}
        className="absolute top-8 right-8 z-10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#CFCFCF]/60 hover:text-[#C9A227] transition-colors border border-white/10 rounded-full hover:border-[#C9A227]/40 backdrop-blur-md"
        id="skip-intro-btn"
      >
        Skip Intro
      </button>

      {/* Centerpiece Container */}
      <div className="relative flex flex-col items-center justify-center max-w-xl px-6 w-full text-center">
        
        {/* Monogram / Icon Emblem */}
        <AnimatePresence>
          {(stage === 'logo' || stage === 'text' || stage === 'expand') && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-full border border-[#C9A227]/40 flex items-center justify-center bg-[#171717]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(201,162,39,0.25)]">
                <Scissors className="w-7 h-7 text-[#C9A227] rotate-45" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-dashed border-[#C9A227]/20 pointer-events-none"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Brand Name Title */}
        <AnimatePresence>
          {(stage === 'logo' || stage === 'text' || stage === 'expand') && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.2em] uppercase text-gold-gradient mb-3"
            >
              LORDS' BARBERING
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Single Gold Razor Line SVG drawing animation */}
        <div className="relative w-full max-w-xs h-1 my-4 flex items-center justify-center">
          <svg className="w-full h-2 overflow-visible" viewBox="0 0 300 2">
            <motion.path
              d="M 0 1 L 300 1"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A227" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#FFF0B3" stopOpacity="1" />
                <stop offset="100%" stopColor="#C9A227" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Tagline */}
        <AnimatePresence>
          {(stage === 'text' || stage === 'expand') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 mt-2"
            >
              <p className="font-syne text-xs sm:text-sm uppercase tracking-[0.4em] text-[#CFCFCF] font-semibold">
                CRAFTED. NOT RUSHED.
              </p>
              <p className="text-[10px] sm:text-xs text-[#C9A227]/80 tracking-[0.2em] font-light">
                7 GRAND ARCADE • LEEDS LS1
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient Sound Wave Visualizer Pulse */}
        <div className="flex items-end justify-center space-x-1.5 h-6 mt-8">
          {[0.4, 0.8, 0.5, 0.9, 0.6, 0.3, 0.7].map((heightScale, index) => (
            <motion.div
              key={index}
              animate={{
                height: ['20%', `${heightScale * 100}%`, '20%'],
              }}
              transition={{
                duration: 1 + index * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-0.5 bg-[#C9A227]/60 rounded-full"
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
};

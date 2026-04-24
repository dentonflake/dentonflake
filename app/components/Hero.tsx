"use client";

import { motion, Variants } from "framer-motion";
import InteractiveBackground from "./InteractiveBackground";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end hero-pad overflow-hidden">
      <InteractiveBackground />
      
      {/* Decorative noise/gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-bg opacity-40 pointer-events-none" />

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Label */}
        <motion.div 
          className="flex items-center gap-4 mb-8"
          variants={itemVariants}
        >
          <span className="w-12 h-px bg-accent" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">
            Software developer
          </span>
        </motion.div>

        {/* Massive Headline */}
        <div className="mb-12 overflow-hidden">
          <motion.h1 
            className="font-display font-black leading-[0.85] tracking-tighter"
            variants={titleVariants}
          >
            DENTON <br />
            <span className="text-muted/20 outline-text">FLAKE</span>
          </motion.h1>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div className="max-w-md" variants={itemVariants}>
            <p className="font-body text-xl md:text-2xl text-muted leading-relaxed">
              A <span className="text-white italic">software developer</span> obsessed with 
              crafting high-fidelity digital experiences that bridge the gap 
              between <span className="text-accent">logic</span> and <span className="text-accent-secondary">emotion</span>.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-6"
            variants={itemVariants}
          >
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('scroll-to', { detail: '#projects' }))}
              className="btn-premium group"
            >
              <span>Explore Work</span>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('scroll-to', { detail: '#contact' }))}
              className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted hover:text-white transition-colors cursor-pointer"
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-muted rotate-90">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-accent"
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
      `}</style>
    </section>
  );
}

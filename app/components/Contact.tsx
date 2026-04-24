"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive Call to Action */}
        <div className="mb-32">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">Next Steps</span>
          </motion.div>
          
          <motion.h2 
            className="font-display font-black leading-[0.85] tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            READY TO <br />
            <span className="text-accent-secondary italic font-light">ELEVATE</span> YOUR <br />
            DIGITAL PRESENCE?
          </motion.h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32">
          
          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-8">Direct</h4>
            <a href="mailto:inbox@dentonflake.com" className="font-display font-bold text-2xl lg:text-3xl hover:text-accent transition-colors duration-300">
              inbox<br/>@dentonflake.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-8">Social</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/dentonflake" target="_blank" rel="noopener noreferrer" className="font-body text-xl text-white hover:text-accent-secondary transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/dentonflake" target="_blank" rel="noopener noreferrer" className="font-body text-xl text-white hover:text-accent-secondary transition-colors duration-300">
                GitHub
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="font-body text-xl text-white hover:text-accent-secondary transition-colors duration-300">
                X / Twitter
              </a>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-8">Status</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="font-body text-xl text-white">Open for new projects</p>
            </div>
          </motion.div>

        </div>

        {/* Footer Credits */}
        <div className="mt-48 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            © 2026 DENTON FLAKE — ALL RIGHTS RESERVED
          </p>
        </div>

      </div>

      {/* Background Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent opacity-[0.03] blur-[120px] pointer-events-none" />
    </section>
  );
}

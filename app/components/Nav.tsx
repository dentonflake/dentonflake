"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const handleScrollStart = () => {
      isProgrammaticScroll.current = true;
      setIsVisible(true);
    };

    const handleScrollComplete = () => {
      // Small timeout to ensure the scroll event loop finishes
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 100);
    };

    window.addEventListener('scroll-start' as any, handleScrollStart);
    window.addEventListener('scroll-complete' as any, handleScrollComplete);

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 50);

      // Skip hiding logic if we are in a programmatic scroll
      if (isProgrammaticScroll.current) {
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide/Show logic for manual scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener('scroll-start' as any, handleScrollStart);
      window.removeEventListener('scroll-complete' as any, handleScrollComplete);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[5000] p-6 flex justify-center pointer-events-none"
        >
          <div 
            className={`flex items-center gap-12 px-8 py-4 rounded-full glass transition-all duration-500 pointer-events-auto
              ${isScrolled ? 'scale-90 border-accent/20' : 'scale-100'}`}
          >
            {/* Logo */}
            <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('scroll-to', { detail: 'html' }));
              }}
              className="font-display font-black text-xl tracking-tighter hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              DF<span className="text-accent">.</span>
            </button>

            {/* Divider */}
            <div className="w-px h-4 bg-border" />

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              {LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const target = document.querySelector(link.href);
                    if (target) {
                      window.dispatchEvent(new CustomEvent('scroll-to', { detail: link.href }));
                    }
                  }}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-white transition-colors cursor-pointer px-2"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('scroll-to', { detail: '#contact' }));
              }}
              className="px-4 py-2 bg-white text-bg rounded-full font-mono text-[9px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer border-none"
            >
              Let's Talk
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

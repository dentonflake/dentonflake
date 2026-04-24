"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Image with Parallax-like reveal */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl border border-border bg-elevated">
              <Image 
                src="/profile.png" 
                alt="Denton Flake" 
                fill 
                className="object-cover grayscale"
              />
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent m-4 pointer-events-none" />
            </div>
            
            {/* Floating Stat Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass p-6 rounded-xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Location</p>
              <p className="font-display font-bold text-lg">Arizona, USA</p>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-accent" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">The Philosophy</span>
              </div>
              
              <h2 className="font-display font-black tracking-tighter mb-12">
                MERGING <br />
                <span className="italic font-light text-muted-foreground">FORM + FUNCTION</span>
              </h2>

              <div className="space-y-8 font-body text-xl text-muted leading-relaxed">
                <p>
                  I'm a <span className="text-white">Full-Stack Developer</span> with a passion for building internal tools and high-performance APIs. Currently, I'm working at <span className="text-accent">Nellis Auction</span> while pursuing a degree in Software Development at <span className="text-accent">Brigham Young University – Idaho</span>.
                </p>
                <p>
                  With over 5 years of self-taught experience and a year of professional enterprise development, I specialize in <span className="text-accent-secondary">Next.js</span>, <span className="text-accent-secondary">TypeScript</span>, and <span className="text-accent-secondary">PostgreSQL</span>. I thrive on bridging the gap between complex logic and clean, intuitive design.
                </p>
                
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">Core Stack</h4>
                    <ul className="space-y-2 font-mono text-xs text-white">
                      <li>TypeScript / React / Next.js</li>
                      <li>Node.js / Express</li>
                      <li>PostgreSQL / MongoDB</li>
                      <li>Tailwind CSS / GSAP</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">Focus Areas</h4>
                    <ul className="space-y-2 font-mono text-xs text-white">
                      <li>Design Systems</li>
                      <li>Interactive Motion</li>
                      <li>Full-Stack Architecture</li>
                      <li>Performance Optimization</li>
                    </ul>
                  </div>
                </div>

                {/* Contributions moved to app/page.tsx for server-side rendering */}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

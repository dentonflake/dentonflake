"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EXPERIENCE = [
  {
    company: "Nellis Auction",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    description: "Building critical internal tools and high-performance APIs to streamline auction operations and inventory management.",
    points: ["Internal tool development", "API orchestration", "Workflow automation"]
  },
  {
    company: "Brigham Young University – Idaho",
    role: "B.S. Software Development Student",
    period: "2022 — Present",
    description: "Deepening expertise in software engineering principles, algorithm design, and data architecture.",
    points: ["Computer Science fundamentals", "Scalable systems", "Collaborative engineering"]
  },
  {
    company: "Freelance",
    role: "Full-Stack Engineer",
    period: "2018 — 2023",
    description: "Architected custom digital solutions for diverse clients, mastering a wide range of libraries and modern frameworks.",
    points: ["Full-stack architecture", "Custom client solutions", "Rapid prototyping"]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section-pad bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">Career Path</span>
          </motion.div>
          <motion.h2 
            className="font-display font-black tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            EVOLUTION OF <br />
            <span className="text-muted/40 italic">CRAFT</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent -translate-x-1/2 origin-top hidden md:block"
            style={{ scaleY: pathLength }}
          />

          <div className="space-y-24 md:space-y-32">
            {EXPERIENCE.map((item, idx) => (
              <ExperienceItem key={item.company} item={item} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ExperienceItem({ item, index }: { item: typeof EXPERIENCE[0], index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`relative flex flex-col md:flex-row gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Node */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-2 border-accent bg-bg -translate-x-1/2 z-10 hidden md:block">
        <motion.div 
          className="w-full h-full rounded-full bg-accent"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Content Side */}
      <div className="md:w-1/2 md:px-16">
        <div className={isEven ? 'md:text-left' : 'md:text-right'}>
          <p className="font-mono text-xs text-accent-secondary mb-2">{item.period}</p>
          <h3 className="font-display font-bold text-3xl mb-2">{item.company}</h3>
          <p className="font-body text-xl text-white italic mb-6">{item.role}</p>
          <p className="text-muted leading-relaxed font-body max-w-md mx-auto md:mx-0 md:ml-auto">
            {item.description}
          </p>
        </div>
      </div>

      {/* Points Side */}
      <div className="md:w-1/2 md:px-16 flex flex-col justify-center">
        <div className={`space-y-4 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          {item.points.map((point) => (
            <div key={point} className={`flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Habit Tracker",
    description: "A precision-engineered platform for tracking daily habits with advanced analytics.",
    image: "/habit-tracker.png",
    tags: ["React", "TypeScript", "Tailwind"],
    size: "large",
  },
  {
    title: "Lacy Coombs Hairstylist",
    description: "Boutique digital experience for a professional hair stylist.",
    image: "/lacycoombshairstylist.png",
    tags: ["Next.js", "Prisma"],
    size: "small",
    url: "https://www.lacycoombshairstylist.com"
  },
  {
    title: "My Family",
    description: "A secure, private social network for families to share memories.",
    image: "/my-family.png",
    tags: ["HTML", "CSS", "JS"],
    size: "small",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-8 h-px bg-accent-secondary" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent-secondary">Selected Works</span>
            </motion.div>
            <motion.h2 
              className="font-display font-black tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              CRAFTING <br />
              <span className="text-muted/40">DIGITAL LEGACIES</span>
            </motion.h2>
          </div>
          <motion.p 
            className="max-w-xs text-muted font-body text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of projects where technical rigor meets aesthetic intentionality.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const isLarge = project.size === "large";

  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-xl bg-elevated border border-border ${isLarge ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`flex flex-col ${isLarge ? 'md:flex-row' : ''} h-full`}>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isLarge ? 'md:w-2/3' : 'aspect-[16/10]'}`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <Image 
              src={project.image} 
              alt={project.title}
              width={1200}
              height={800}
              className="object-contain w-full h-full grayscale hover:grayscale-0 transition-[filter] duration-700 p-4"
            />
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className={`p-8 md:p-12 flex flex-col justify-between ${isLarge ? 'md:w-1/3' : ''}`}>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          <div className="mt-8">
            {project.url && <a target="_blank" href={project.url} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white hover:text-accent transition-colors">
              View Project <span className="text-lg">→</span>
            </a>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

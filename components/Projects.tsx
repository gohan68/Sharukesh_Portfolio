import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
           <h2 className="text-[10vw] md:text-[6vw] font-display font-black leading-none text-neutral-200 dark:text-neutral-900 uppercase">
             Selected Works
           </h2>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              {/* Content - Switches side every other project */}
              <div className={`order-2 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono border border-neutral-300 dark:border-neutral-800 px-3 py-1 rounded-full text-neutral-500 uppercase">
                    {project.period}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    / {project.techStack[0]}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white mb-6 group-hover:underline decoration-1 underline-offset-8 decoration-neutral-400">
                  {project.title}
                </h3>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-md">
                  {project.description}
                </p>

                <ul className="mb-8 space-y-2">
                  {project.features?.slice(0, 2).map((feat, i) => (
                    <li key={i} className="text-sm text-neutral-500 font-mono flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6">
                  <a href={project.links.demo} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-500 transition-colors">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                  <a href={project.links.github} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-500 transition-colors">
                    Codebase
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className={`order-1 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} relative`}>
                <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-neutral-100 dark:bg-neutral-900">
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative Number */}
                <span className="absolute -top-12 -left-4 text-9xl font-display font-black text-transparent text-outline opacity-30 select-none pointer-events-none">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

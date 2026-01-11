import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
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

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center gap-2 px-5 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Eye size={16} />
                      View Details
                    </button>
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-500 transition-colors py-3">
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Image - Clickable */}
                <div
                  className={`order-1 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} relative cursor-pointer`}
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3] rounded-lg bg-neutral-100 dark:bg-neutral-900">
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 dark:bg-black/90 px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Click to Expand
                      </motion.div>
                    </div>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Decorative Number */}
                  <span className="absolute -bottom-8 -right-4 text-[8rem] font-display font-black text-neutral-200 dark:text-neutral-800 opacity-60 select-none pointer-events-none z-20">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-[10%] bg-neutral-900 rounded-2xl z-[101] overflow-hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
                            {/* Image */}
                            <div className="lg:w-1/2 h-64 lg:h-full flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="lg:w-1/2 p-6 md:p-10 overflow-y-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-sm font-mono text-neutral-500 mb-2 block">
                                        {project.period}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300 border border-neutral-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 text-neutral-300">
                                                    <ChevronRight size={18} className="text-neutral-500 mt-1 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Highlight */}
                                    <div className="mb-8 p-4 bg-neutral-800/50 rounded-lg border-l-2 border-white">
                                        <p className="text-neutral-200 italic">{project.highlight}</p>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 border border-neutral-600 text-white rounded-full font-bold hover:bg-neutral-800 transition-colors"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;

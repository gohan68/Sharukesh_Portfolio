import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-neutral-100 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8">
              (002) Experience
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-neutral-300 dark:border-neutral-800 pb-16 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-black dark:text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-neutral-500 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-6">
                  {exp.role}
                </h4>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

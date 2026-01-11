import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-neutral-100 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12">

          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8"
            >
              (002) Experience
            </motion.h2>
          </div>

          <div className="lg:col-span-8 relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neutral-300 dark:from-neutral-700 via-neutral-400 dark:via-neutral-600 to-transparent origin-top hidden md:block"
            />

            <div className="space-y-12 md:space-y-16">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative md:pl-16"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="absolute left-0 md:left-2 top-2 w-6 h-6 rounded-full bg-black dark:bg-white border-4 border-neutral-100 dark:border-[#0a0a0a] hidden md:flex items-center justify-center z-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="w-2 h-2 rounded-full bg-neutral-100 dark:bg-[#0a0a0a]"
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-lg group-hover:translate-x-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-black dark:text-white">
                        {exp.company}
                      </h3>
                      <span className="text-sm font-mono text-neutral-500 mt-2 md:mt-0 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-4 flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-neutral-400 dark:bg-neutral-600"></span>
                      {exp.role}
                    </h4>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

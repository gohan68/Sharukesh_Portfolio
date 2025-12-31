import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const iconSlugMap: Record<string, string> = {
  "React": "react",
  "Next.js 15": "nextdotjs",
  "TypeScript": "typescript",
  "Tailwind CSS": "tailwindcss",
  "Framer Motion": "framer",
  "JavaScript": "javascript",
  "Node.js": "nodedotjs",
  "PostgreSQL": "postgresql",
  "Supabase": "supabase",
  "Python": "python",
  "Drupal": "drupal",
  "Docker": "docker",
  "Git": "git",
  "Vercel": "vercel",
  "Hostinger": "hostinger",
  "AI Tools (Gemini, Emergent)": "google" 
};

const Skills: React.FC = () => {
  // Flatten all skills into a single array for the marquee
  const allSkills = SKILLS.flatMap(cat => cat.skills);

  const getIconUrl = (skillName: string) => {
    const slug = iconSlugMap[skillName];
    if (slug) {
      return `https://cdn.simpleicons.org/${slug}/white`;
    }
    return null; 
  };

  return (
    <section className="py-24 bg-black text-white overflow-hidden border-y border-neutral-800 relative">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 container mx-auto px-6 md:px-12"
      >
         <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">( Tech Stack )</h2>
         <p className="text-xl md:text-2xl font-light text-neutral-300 max-w-2xl">
           A comprehensive toolkit designed for speed, scalability, and seamless user experiences.
         </p>
      </motion.div>

      {/* Marquee Effect */}
      <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1, delay: 0.2 }}
         className="relative flex overflow-x-hidden group mb-24 opacity-50 hover:opacity-100 transition-opacity duration-500"
      >
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 items-center">
          {allSkills.map((skill, index) => (
            <span key={`s1-${index}`} className="text-5xl md:text-8xl font-display font-black text-neutral-900 stroke-text select-none cursor-default">
              {skill}
            </span>
          ))}
          {allSkills.map((skill, index) => (
            <span key={`s2-${index}`} className="text-5xl md:text-8xl font-display font-black text-neutral-900 stroke-text select-none cursor-default">
              {skill}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 md:gap-32 items-center ml-16 md:ml-32">
           {/* Seamless Loop Duplicate */}
        </div>
      </motion.div>

      {/* Categorized Skills Grid - LOGOS */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILLS.map((category, catIndex) => (
            <div key={category.title} className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="text-neutral-500 text-xs font-bold uppercase tracking-widest border-b border-neutral-900 pb-4"
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const iconUrl = getIconUrl(skill);
                  return (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.2 + (catIndex * 0.1) + (skillIndex * 0.05),
                        ease: "easeOut" 
                      }}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:bg-neutral-800 group-hover:border-neutral-600 transition-all duration-300 relative overflow-hidden">
                        {iconUrl ? (
                          <img 
                            src={iconUrl} 
                            alt={skill} 
                            className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
                          />
                        ) : (
                          <span className="text-xs text-center font-mono leading-none">{skill.slice(0, 2)}</span>
                        )}
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
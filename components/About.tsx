import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-neutral-100 dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8"
                >
                  (001) About Me
                </motion.h2>

                {/* Profile Image - Desktop Sidebar */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:block relative w-full max-w-[280px] aspect-[4/5] rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50"
                >
                   <div className="absolute inset-0 bg-neutral-900/20 dark:bg-black/20 z-10 hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                   <img 
                      src="/sharukesh.jpg" 
                      alt="Sharukesh P" 
                      className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-700 ease-out"
                   />
                </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
               
               {/* Profile Image - Mobile/Tablet Inline */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="lg:hidden w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden mb-8"
               >
                 <img 
                    src="/sharukesh.jpg" 
                    alt="Sharukesh P" 
                    className="w-full h-full object-cover filter grayscale contrast-110"
                 />
               </motion.div>

              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-display font-bold leading-tight text-black dark:text-white"
              >
                Engineering sophisticated web solutions for the next generation of businesses.
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-12 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I am a Fullstack Developer and Team Lead at DUTUK based in Chennai. My approach combines technical precision with a design-first mentality. I don't just write code; I architect digital ecosystems that are scalable, secure, and intuitive.
                </motion.p>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Leveraging cutting-edge stacks like Next.js 16 and Supabase, alongside AI-augmented workflows, I deliver enterprise-grade applications at unprecedented speeds. My recent work includes complex B2B commerce engines and professional networking platforms built in weeks, not months.
                </motion.p>
              </div>

              <div className="mt-16 pt-12 border-t border-neutral-300 dark:border-neutral-800 flex flex-wrap gap-8 md:gap-24">
                 {[
                    { val: "2.5", suffix: "wks", label: "Record Delivery" },
                    { val: "10", suffix: "+", label: "Projects Shipped" },
                    { val: "100", suffix: "%", label: "Commitment" }
                 ].map((stat, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                     >
                        <span className="block text-4xl font-bold text-black dark:text-white mb-2">{stat.val}<span className="text-xl align-top">{stat.suffix}</span></span>
                        <span className="text-sm uppercase tracking-wider text-neutral-500">{stat.label}</span>
                     </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
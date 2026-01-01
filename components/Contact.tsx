import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Submitting:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Message Sent.");
    reset();
  };

  return (
    <section ref={containerRef} id="contact" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Parallax Background Blobs */}
      <motion.div 
        style={{ y: yBg }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: yBg2 }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-[-10%] left-[-20%] w-[500px] h-[500px] bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] lg:text-[6vw] leading-[0.8] font-display font-black tracking-tighter mb-12"
            >
              LET'S <br /> WORK <br /> <span className="text-neutral-800">TOGETHER</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 mb-16"
            >
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="block text-2xl md:text-3xl hover:text-neutral-400 transition-colors">
                {SOCIAL_LINKS.email}
              </a>
              <a href={`tel:${SOCIAL_LINKS.phone}`} className="block text-xl md:text-2xl text-neutral-500">
                {SOCIAL_LINKS.phone}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mb-12"
            >
              <a href={SOCIAL_LINKS.github} className="uppercase tracking-widest text-sm font-bold border-b border-transparent hover:border-white pb-1 transition-all">GitHub</a>
              <a href={SOCIAL_LINKS.linkedin} className="uppercase tracking-widest text-sm font-bold border-b border-transparent hover:border-white pb-1 transition-all">LinkedIn</a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <a 
                  href={SOCIAL_LINKS.resume} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-neutral-800 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Download Resume
                  <Download className="group-hover:translate-y-1 transition-transform duration-300" size={18} />
                </a>
            </motion.div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-12 mt-12 lg:mt-0 relative z-20"
          >
             <div className="relative">
                <input 
                  {...register("name", { required: true })}
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-neutral-900/50 border-b border-neutral-800 px-4 py-6 text-xl focus:outline-none focus:border-white focus:bg-neutral-900 transition-all placeholder:text-neutral-600 text-white rounded-t-lg"
                />
             </div>
             <div className="relative">
                <input 
                  {...register("email", { required: true })}
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-neutral-900/50 border-b border-neutral-800 px-4 py-6 text-xl focus:outline-none focus:border-white focus:bg-neutral-900 transition-all placeholder:text-neutral-600 text-white rounded-t-lg"
                />
             </div>
             <div className="relative">
                <textarea 
                  {...register("message", { required: true })}
                  rows={4}
                  placeholder="Brief Description"
                  className="w-full bg-neutral-900/50 border-b border-neutral-800 px-4 py-6 text-xl focus:outline-none focus:border-white focus:bg-neutral-900 transition-all placeholder:text-neutral-600 resize-none text-white rounded-t-lg"
                ></textarea>
             </div>

             <button type="submit" className="group flex items-center gap-4 text-xl uppercase tracking-widest font-bold hover:gap-6 transition-all pt-8 pl-4">
                Send Message <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
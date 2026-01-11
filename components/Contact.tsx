import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowUpRight, Download, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import emailjs from '@emailjs/browser';

type FormData = {
  from_name: string;
  from_email: string;
  message: string;
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!formRef.current) return;

    setSubmitStatus('loading');

    try {
      // EmailJS Configuration
      // Get your Template ID and Public Key from EmailJS dashboard:
      // 1. Template ID: Email Templates → Your Template → Settings → Template ID
      // 2. Public Key: Account → API Keys → Public Key

      await emailjs.sendForm(
        'service_yrtv6ns',          // Your EmailJS Service ID
        'template_rs3gpfb',         // Your EmailJS Template ID
        formRef.current,
        'E_DRe2dfm8pBQ5B1r'         // Your EmailJS Public Key
      );

      setSubmitStatus('success');
      reset();

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-40 items-start">

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] lg:text-[4vw] leading-[0.9] font-display font-black tracking-tighter mb-12"
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
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-sm font-bold border-b border-transparent hover:border-white pb-1 transition-all">GitHub</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-sm font-bold border-b border-transparent hover:border-white pb-1 transition-all">LinkedIn</a>
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
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 mt-8 lg:mt-0 lg:pt-8 relative z-20"
          >
            <div className="relative">
              <input
                {...register("from_name", { required: "Name is required" })}
                type="text"
                placeholder="Your Name"
                className={`w-full bg-neutral-900/50 border-b ${errors.from_name ? 'border-red-500' : 'border-neutral-800'} px-4 py-6 text-xl focus:outline-none focus:border-white focus:bg-neutral-900 transition-all placeholder:text-neutral-600 text-white rounded-t-lg`}
              />
              {errors.from_name && <span className="text-red-500 text-sm mt-1">{errors.from_name.message}</span>}
            </div>
            <div className="relative">
              <input
                {...register("from_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="Your Email"
                className={`w-full bg-neutral-900/50 border-b ${errors.from_email ? 'border-red-500' : 'border-neutral-800'} px-4 py-6 text-xl focus:outline-none focus:border-white focus:bg-neutral-900 transition-all placeholder:text-neutral-600 text-white rounded-t-lg`}
              />
              {errors.from_email && <span className="text-red-500 text-sm mt-1">{errors.from_email.message}</span>}
            </div>
            <div className="relative">
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={4}
                placeholder="Brief Description"
                className={`w-full bg-neutral-900/50 border-b ${errors.message ? 'border-red-500' : 'border-neutral-800'} px-4 py-6 text-xl focus:outline-none focus:border-white focus:bg-neutral-900 transition-all placeholder:text-neutral-600 resize-none text-white rounded-t-lg`}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            {/* Submit Button with Status */}
            <div className="pt-8 pl-4">
              <AnimatePresence mode="wait">
                {submitStatus === 'idle' && (
                  <motion.button
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="submit"
                    className="group flex items-center gap-4 text-xl uppercase tracking-widest font-bold hover:gap-6 transition-all cursor-pointer"
                  >
                    Send Message <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                )}

                {submitStatus === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4 text-xl uppercase tracking-widest font-bold text-neutral-400"
                  >
                    <Loader2 className="animate-spin" size={24} />
                    Sending...
                  </motion.div>
                )}

                {submitStatus === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4 text-xl uppercase tracking-widest font-bold text-green-500"
                  >
                    <CheckCircle size={24} />
                    Message Sent!
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4 text-xl uppercase tracking-widest font-bold text-red-500"
                  >
                    <XCircle size={24} />
                    Failed. Try Again.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
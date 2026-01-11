import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]); // Parallax effect for background

  // Staggered letter animation variants for Main Title
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  // Subtitle Typing Animation Variants
  const subtitleContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 1.5, // Start as title is settling
      },
    },
  };

  const subtitleCharVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    },
  };

  // CTA Button Animation
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 3.5, ease: "easeOut" } // Appears after typing
    }
  };

  const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => (
    <motion.div
      className={`overflow-hidden flex ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span variants={letterVariants} key={index} className="inline-block origin-bottom">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  const TypingSpan = ({ text, className = "" }: { text: string, className?: string }) => (
    <span className={className}>
      {text.split(" ").map((word, index, arr) => (
        <React.Fragment key={index}>
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span key={charIndex} variants={subtitleCharVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
          {index < arr.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-white dark:bg-[#050505]">

      {/* Dynamic Background Gradient with Parallax */}
      <motion.div
        style={{ y: yBg }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto mt-20 md:mt-0 z-10">
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-wide uppercase mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-neutral-400"></span>
            Chennai, India
          </motion.p>
        </div>

        <div className="flex flex-col relative">
          <AnimatedText
            text="SHARUKESH"
            className="text-[8vw] leading-[0.85] font-display font-black text-neutral-900 dark:text-white tracking-tighter"
          />
        </div>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light text-balance">
              Fullstack Developer building scalable enterprise-grade SaaS platforms and modern web experiences with{' '}
              <span className="font-semibold text-black dark:text-white border-b border-black dark:border-white pb-0.5">Next.js</span>
              {' & '}
              <span className="font-semibold text-black dark:text-white border-b border-black dark:border-white pb-0.5">AI tools</span>.
            </p>
          </motion.div>

          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4"
          >
            <MagneticButton href="#projects" strength={0.4}>
              <span className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold overflow-hidden shadow-lg hover:shadow-xl transition-all inline-flex items-center">
                <span className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">View Selected Work</span>
                <div className="absolute inset-0 bg-white dark:bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-neutral-400"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
        Scroll to Explore
      </motion.div>
    </section>
  );
};

export default Hero;
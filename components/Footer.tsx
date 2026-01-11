import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-8 bg-black text-neutral-600 text-center uppercase tracking-widest text-xs font-medium border-t border-neutral-900"
    >
      <p>&copy; 2026 Sharukesh.</p>
    </motion.footer>
  );
};

export default Footer;
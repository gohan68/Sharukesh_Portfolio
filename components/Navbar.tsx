import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference text-white">
      <div className="flex justify-end items-center max-w-7xl mx-auto">
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:line-through decoration-1 underline-offset-4 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 border border-white/30 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            Let's Talk
          </a>
          <button 
             onClick={toggleTheme}
             className="ml-4 opacity-70 hover:opacity-100 transition-opacity"
           >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
           </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={toggleTheme} className="opacity-80">
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
           </button>
           <button onClick={() => setIsOpen(!isOpen)} className="opacity-80">
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-neutral-900 text-white flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-light tracking-tight hover:text-neutral-400"
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-light tracking-tight hover:text-neutral-400"
              >
                Contact
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
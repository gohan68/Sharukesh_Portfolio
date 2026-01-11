import React from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
            className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
            {/* Animated Logo */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter"
                >
                    SHARUKESH
                </motion.h1>

                {/* Loading bar */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[2px] bg-white mt-4 origin-left"
                />
            </motion.div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-neutral-500 text-sm uppercase tracking-widest mt-6"
            >
                Fullstack Developer
            </motion.p>
        </motion.div>
    );
};

export default Preloader;

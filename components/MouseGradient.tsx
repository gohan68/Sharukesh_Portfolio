import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseGradient: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Hide on mobile
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    // Don't render on mobile
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed pointer-events-none z-[1] mix-blend-soft-light"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                opacity: isVisible ? 0.6 : 0,
            }}
            transition={{ opacity: { duration: 0.3 } }}
        >
            <div
                className="w-[400px] h-[400px] rounded-full blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                }}
            />
        </motion.div>
    );
};

export default MouseGradient;

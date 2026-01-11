import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    href,
    onClick,
    strength = 0.3,
}) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = (e.clientX - centerX) * strength;
        const distY = (e.clientY - centerY) * strength;

        setPosition({ x: distX, y: distY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const content = (
        <motion.div
            ref={buttonRef}
            className={`inline-block ${className}`}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                {content}
            </a>
        );
    }

    return (
        <div onClick={onClick} className="inline-block cursor-pointer">
            {content}
        </div>
    );
};

export default MagneticButton;

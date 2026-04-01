'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse positions
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring for the outer ring
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            // Check if hovering over interactive elements
            const target = e.target;
            const isClickable = 
                target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' || 
                target.onclick || 
                target.closest('a') || 
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.body.style.cursor = 'none';

        setMounted(true);
        setIsMobile('ontouchstart' in window);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, [mouseX, mouseY, isVisible]);

    if (!mounted || isMobile) {
        return null;
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Outer Ring */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovered ? 80 : 40,
                    height: isHovered ? 80 : 40,
                    opacity: isVisible ? 1 : 0,
                    backgroundColor: isHovered ? 'rgba(20, 184, 166, 0.1)' : 'transparent',
                    borderColor: isHovered ? 'rgba(20, 184, 166, 0.5)' : 'rgba(15, 23, 42, 0.3)',
                    borderWidth: isHovered ? 1 : 2,
                }}
                className="absolute rounded-full border border-slate-900/30 mix-blend-difference"
            />

            {/* Inner Dot */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                className="absolute w-2 h-2 bg-teal-500 rounded-full mix-blend-difference"
            />
        </div>
    );
};

export default CustomCursor;

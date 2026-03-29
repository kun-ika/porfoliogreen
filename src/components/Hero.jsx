"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: '#FAF9F6' }}>
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-100 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[120px] opacity-30"></div>
            </div>

            <motion.div
                className="container relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 pt-24 pb-32 md:pb-12 md:pt-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left Side: Heading & Email */}
                <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left z-20 order-2 md:order-1 mt-12 md:mt-0">
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.05] mb-6"
                        variants={itemVariants}
                    >
                        Hey There, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">I'm Kunika</span>
                    </motion.h1>

                    <motion.a
                        href="mailto:kunikajain@gmail.com"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, originX: 0 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-teal-600 font-semibold text-lg hover:text-emerald-700 transition-colors inline-block relative border-b-2 border-transparent hover:border-emerald-600 pb-1"
                    >
                        kunikajain@gmail.com
                    </motion.a>
                </div>

                {/* Center: Image */}
                <motion.div
                    className="w-full md:w-1/3 flex justify-center items-center relative z-10 order-1 md:order-2 mt-8 md:mt-0 px-4"
                    variants={itemVariants}
                >
                    <motion.div
                        className="relative w-full max-w-sm flex items-center justify-center my-4 md:my-8 transform scale-110 md:scale-125 lg:scale-150 origin-center z-10 overflow-visible"
                    >
                        <div className="absolute inset-0 bg-teal-500/10 rounded-full filter blur-[60px] transform scale-75 animate-pulse"></div>
                        <img
                            src="/kunika-main.png"
                            alt="Kunika Jain"
                            className="w-full h-auto object-contain drop-shadow-2xl relative z-20"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Side: Description */}
                <motion.div
                    className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right z-20 order-3 mt-12 md:mt-0 pl-0 md:pl-8 mb-16 md:mb-0"
                    variants={itemVariants}
                >
                    <p className="text-slate-600 text-lg md:text-xl max-w-[260px] font-medium leading-relaxed">
                        I design simple, intuitive, and engaging digital experiences.
                    </p>
                    <motion.div
                        className="mt-6 w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    ></motion.div>
                </motion.div>
            </motion.div>

            {/* Full Width Animated SVG Clouds Base */}
            <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] pointer-events-none z-30 overflow-hidden">

                {/* SVG Cloud Definition (Reused) */}
                <svg width="0" height="0" className="absolute">
                    <defs>
                        <path id="cloud-path" d="M 0 100 C 0 70, 20 60, 40 65 C 45 35, 80 20, 100 40 C 130 10, 170 30, 170 60 C 190 60, 200 75, 200 100 Z" />
                    </defs>
                </svg>

                {/* Back Layer - Emerald Tinted Clouds */}
                <motion.div
                    className="absolute -bottom-4 left-[-20%] w-[140%] flex text-emerald-100/60 drop-shadow-xl"
                    animate={{ x: ["0%", "-20%"] }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                </motion.div>

                {/* Middle Layer - Teal Tinted Clouds */}
                <motion.div
                    className="absolute -bottom-8 left-[-30%] w-[160%] flex text-teal-100/80 drop-shadow-2xl"
                    animate={{ x: ["-10%", "10%"] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 200 100" className="w-1/4 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/4 h-auto fill-current transform scale-x-[-1]" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/4 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/4 h-auto fill-current transform scale-x-[-1]" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                </motion.div>

                {/* Front Layer - Pure White Clouds */}
                <motion.div
                    className="absolute -bottom-10 left-[-10%] w-[120%] flex text-white drop-shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
                    animate={{ x: ["0%", "-10%"] }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current transform scale-x-[-1]" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                    <svg viewBox="0 0 200 100" className="w-1/3 h-auto fill-current" preserveAspectRatio="none"><use href="#cloud-path" /></svg>
                </motion.div>

                {/* Solid White Base Floor to eliminate bottom gaps */}
                <div className="absolute -bottom-1 w-full h-[40px] bg-white z-20"></div>
                <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-[#0a0f1c]/10 to-transparent z-20"></div>
            </div>
        </section>
    );
};

export default Hero;

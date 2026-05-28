"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { Github, Download } from 'lucide-react';

const SafetyPin = () => (
    <svg className="absolute -top-7 left-12 w-16 h-16 drop-shadow-md z-30 select-none pointer-events-none rotate-[-20deg]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Safety pin body */}
        <path d="M75 15 C85 15, 90 25, 80 40 L45 85 C35 95, 20 90, 25 75 L60 25 C65 15, 55 10, 50 20 L20 65" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        {/* Coiled loop at bottom */}
        <circle cx="25" cy="75" r="8" stroke="#64748b" strokeWidth="4" fill="#cbd5e1" />
        {/* Cap at top */}
        <path d="M70 10 C75 5, 85 10, 80 22 C75 30, 65 30, 60 20 Z" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
    </svg>
);

const Hero = () => {
    return (
        <section 
            id="home" 
            className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-24 lg:pt-32 lg:pb-20 notebook-stripes overflow-hidden"
        >
            {/* Subtle Dot Grid Background */}
            <div 
                className="absolute inset-0 pointer-events-none z-0 opacity-15"
                style={{ 
                    backgroundImage: 'radial-gradient(#8FAEC7 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            ></div>

            {/* Massive Outline Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.08]">
                <h2 className="text-[22vw] md:text-[25vw] font-black select-none leading-none tracking-tighter"
                    style={{ 
                        color: 'transparent',
                        WebkitTextStroke: '1px md:1.5px rgba(78, 54, 41, 0.08)', 
                    }}
                >
                    KUNIKA
                </h2>
            </div>

            <div className="container relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-12 gap-12 lg:gap-0">
                
                {/* Top Side (Mobile): Heading & Email */}
                <motion.div 
                    className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 order-1 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative mb-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                        {/* Oval Badge 2026 */}
                        <div className="inline-block px-6 py-2 bg-[#8FAEC7] text-white rounded-full text-2xl font-bold font-sans tracking-wide rotate-[-8deg] shadow-md border-2 border-white mb-6">
                            2026
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl font-sans font-bold text-[#4E3629] mb-2 leading-tight">
                            Hey There, I&apos;m Kunika
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <motion.a
                            href="https://github.com/kunika-jain"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-[#4E3629] text-[#FAF9F6] px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base border border-[#3D2B1F] shadow-xl transition-all hover:bg-[#3D2B1F]"
                        >
                            <Github size={20} className="group-hover:rotate-12 transition-transform" />
                            <span>GitHub</span>
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-[#FAF9F6] text-[#4E3629] px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base border-2 border-[#4E3629] shadow-xl transition-all hover:bg-[#E9F0F6]"
                        >
                            <div className="p-1 rounded-lg bg-[#E9F0F6] text-[#4E3629] group-hover:bg-[#d5e4f0] transition-colors">
                                <Download size={18} />
                            </div>
                            <span>Resume</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Center: Image */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center items-center relative z-10 order-2 lg:order-2 h-full py-10">
                    <motion.div
                        className="relative w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] aspect-[4/5] p-3 pb-8 bg-white rounded-xl shadow-2xl border-[3px] border-[#8FAEC7]/30 flex flex-col origin-center z-10 overflow-visible cursor-pointer hover:scale-[1.03] transition-all duration-500"
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        animate={{ opacity: 1, y: 0, rotate: "4deg" }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    >
                        {/* Safety Pin */}
                        <SafetyPin />
                        
                        <div className="relative w-full aspect-[4/4.6] rounded-lg overflow-hidden bg-[#e9f0f6] border border-[#8FAEC7]/20">
                            <Link href="/projects" className="block w-full h-full">
                                <img
                                    src="/kunika-main.png"
                                    alt="Kunika Jain"
                                    className="w-full h-full object-cover object-top scale-[1.12] translate-y-[6%] origin-top grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                                />
                            </Link>
                        </div>
                        
                        {/* Handwriting label on the Polaroid */}
                        <div className="text-center mt-3 font-[family-name:var(--font-cursive)] text-3xl font-bold text-[#4E3629] leading-none select-none">
                            Kunika Jain ✨
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Description */}
                <motion.div
                    className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right z-20 order-3 lg:pl-8 mt-0 pt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-[#6B5548] text-base sm:text-lg md:text-lg lg:text-base xl:text-lg max-w-[200px] sm:max-w-[240px] md:max-w-[260px] font-medium leading-relaxed">
                        I design simple, intuitive, and engaging digital experiences.
                    </p>
                    <motion.div
                        className="mt-4 w-16 h-1.5 bg-[#8FAEC7] rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

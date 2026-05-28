"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { Github, Download } from 'lucide-react';

const FloatingSkill = ({ skill, progress, isMobile }) => {
    const yTransform = useTransform(progress, [0.4, 0.85], ["120%", skill.yOff]);
    const opacityTransform = useTransform(progress, [0.5, 0.75], [0, 1]);
    const rotateTransform = useTransform(progress, [0.4, 1], [0, (skill.id % 2 === 0 ? 10 : -10)]);

    // For mobile, we render a simpler version that sits in the flow
    if (isMobile) {
        return (
            <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/40 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center p-2.5 z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + (skill.id % 2), repeat: Infinity, ease: "easeInOut" }}
            >
                <img src={skill.icon} alt="skill" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" />
            </motion.div>
        );
    }

    return (
        <motion.div
            key={skill.id}
            className="absolute w-12 h-12 md:w-20 lg:w-16 xl:w-20 rounded-[1.25rem] md:rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center p-2.5 md:p-4 lg:p-3 xl:p-5 z-10 pointer-events-none"
            animate={{ 
                y: [0, -10, 0],
                rotate: [0, skill.id % 2 === 0 ? 5 : -5, 0]
            }}
            transition={{
                duration: 3 + (skill.id % 3),
                repeat: Infinity,
                ease: "easeInOut"
            }}
            style={{
                left: skill.x,
                top: "78%", 
                x: "-50%",
                y: yTransform,
                opacity: opacityTransform,
                rotate: rotateTransform,
            }}
        >
            <img src={skill.icon} alt="skill" className="w-8 h-8 md:w-16 md:h-16 object-contain drop-shadow-md" />
        </motion.div>
    );
};


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
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // Tablet and Mobile
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Use smooth spring for nicer transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 1. Image Entrance (0% to 1.0% scroll)
    const imageY = useTransform(smoothProgress, [0, 0.8], ["40vh", "20vh"]);
    const imageScale = useTransform(smoothProgress, [0, 0.8], [1, 1.2]);
    const imageOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
    
    // 2. Text Content Reveal (0.4 to 0.85 scroll)
    const leftTextOpacity = useTransform(smoothProgress, [0.35, 0.65], [0, 1]);
    const leftTextX = useTransform(smoothProgress, [0.35, 0.65], [-50, 0]);
    
    const rightTextOpacity = useTransform(smoothProgress, [0.45, 0.75], [0, 1]);
    const rightTextX = useTransform(smoothProgress, [0.45, 0.75], [50, 0]);
    
    // 3. Decorative Background Text (0 to 1.0 scroll)
    const bgTextOpacity = useTransform(smoothProgress, [0, 0.4], [0.08, 0.15]);
    const bgTextScale = useTransform(smoothProgress, [0, 1], [0.95, 1.15]);
    const bgTextY = useTransform(smoothProgress, [0, 1], [10, -50]);

    // Background dot pattern Reveal
    const gridOpacity = useTransform(smoothProgress, [0, 0.4], [0, 0.2]);

    // Description underline animation
    const underlineScaleX = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);

    const floatingSkills = [
        { id: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", x: "8%", yOff: "0%" },
        { id: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", x: "22%", yOff: "8%" },
        { id: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", x: "36%", yOff: "-5%" },
        { id: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", x: "50%", yOff: "12%" },
        { id: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", x: "64%", yOff: "-2%" },
        { id: 6, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", x: "78%", yOff: "10%" },
        { id: 7, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", x: "92%", yOff: "0%" },
        { id: 8, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", x: "15%", yOff: "18%" },
        { id: 9, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", x: "30%", yOff: "22%" },
        { id: 10, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", x: "70%", yOff: "20%" },
        { id: 11, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", x: "85%", yOff: "18%" },
        { id: 12, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", x: "45%", yOff: "25%" },
    ];

    return (
        <section 
            id="home" 
            ref={containerRef}
            className={`relative w-full ${isMobile ? 'h-auto pt-28 pb-24' : 'h-[180vh] md:h-[220vh] xl:h-[250vh]'} notebook-stripes`}
        >
            {/* Sticky/Relative Wrapper */}
            <div className={`${isMobile ? 'relative py-0' : 'sticky top-0 h-screen'} w-full flex items-center justify-center overflow-hidden bg-transparent`}>
                
                {/* Subtle Dot Grid Background */}
                <motion.div 
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ 
                        opacity: gridOpacity,
                        backgroundImage: 'radial-gradient(#8FAEC7 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                ></motion.div>

                {/* Massive Outline Background Text */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
                    style={isMobile ? { opacity: 0.1, scale: 1, y: 0 } : { opacity: bgTextOpacity, scale: bgTextScale, y: bgTextY }}
                >
                    <h2 className="text-[22vw] md:text-[25vw] font-black select-none leading-none tracking-tighter"
                        style={{ 
                            color: 'transparent',
                            WebkitTextStroke: '1px md:1.5px rgba(78, 54, 41, 0.08)', 
                        }}
                    >
                        KUNIKA
                    </h2>
                </motion.div>

                {/* Bottom Horizontal Skill Cloud (Desktop Only - handled absolutely) */}
                {!isMobile && floatingSkills.map((skill) => (
                    <FloatingSkill key={skill.id} skill={skill} progress={smoothProgress} isMobile={isMobile} />
                ))}

                <div className={`container relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-12 ${isMobile ? 'h-auto gap-0 pb-12' : 'min-h-screen pt-32 pb-20 lg:pt-20 lg:pb-0 gap-12 lg:gap-0'}`}>
                    
                    {/* Top Side (Mobile): Heading & Email */}
                    <motion.div 
                        className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 order-1 lg:order-1"
                        style={isMobile ? { opacity: 1, x: 0 } : { opacity: leftTextOpacity, x: { base: 0, lg: leftTextX } }}
                    >
                        <div className="relative mb-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                            {/* Oval Badge 2026 */}
                            <div className="inline-block px-6 py-2 bg-[#8FAEC7] text-white rounded-full text-2xl font-bold font-sans tracking-wide rotate-[-8deg] shadow-md border-2 border-white mb-6">
                                2026
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl font-sans font-bold text-[#4E3629] mb-3 leading-none">
                                Hey There, I&apos;m Kunika
                            </h1>
                            
                            <span className="font-[family-name:var(--font-cursive)] text-[#4E3629] text-7xl sm:text-8xl select-none font-bold italic block -mb-4 pl-4 drop-shadow-sm leading-none">
                                Creative
                            </span>
                            
                            <span className="text-5xl sm:text-7xl font-headline tracking-tighter uppercase font-black block text-[#4E3629] leading-none">
                                Portfolio
                            </span>
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
                    <div className={`w-full lg:w-1/3 flex flex-col justify-center items-center relative z-10 order-2 lg:order-2 h-full ${isMobile ? 'pt-16 pb-0' : 'py-10'}`}>
                        {/* Scroll Hint (Hidden on Mobile/Tablet) */}
                        <motion.div 
                            className="absolute top-1/4 left-1/2 -translate-x-1/2 z-40 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
                            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                        >
                            <span className="text-[#4E3629] font-bold tracking-widest text-xs uppercase bg-[#FAF9F6]/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-[#8FAEC7]/30">
                                Scroll Down
                            </span>
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-6 h-10 border-2 border-[#4E3629] rounded-full flex justify-center p-1"
                            >
                                <motion.div 
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1.5 h-1.5 bg-[#4E3629] rounded-full"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative w-[280px] sm:w-[320px] aspect-[4/5] p-4 pb-12 bg-white rounded-xl shadow-2xl border-[3px] border-[#8FAEC7]/30 flex flex-col justify-between origin-center z-10 overflow-visible cursor-pointer hover:scale-[1.03] transition-all duration-500"
                            style={isMobile ? { rotate: "4deg", scale: 1.05 } : { 
                                rotate: "4deg",
                                scale: imageScale, 
                                y: imageY,
                                opacity: imageOpacity,
                            }}
                        >
                            {/* Safety Pin */}
                            <SafetyPin />
                            
                            <div className="relative w-full h-[85%] rounded-lg overflow-hidden bg-[#e9f0f6] border border-[#8FAEC7]/20 flex items-center justify-center">
                                <Link href="/projects" className="w-full h-full">
                                    <img
                                        src="/kunika-main.png"
                                        alt="Kunika Jain"
                                        className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                                    />
                                </Link>
                            </div>
                            
                            {/* Handwriting label on the Polaroid */}
                            <div className="text-center pt-4 font-[family-name:var(--font-cursive)] text-3xl font-bold text-[#4E3629] leading-none select-none">
                                Kunika Jain ✨
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Description */}
                    <motion.div
                        className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right z-20 order-3 lg:pl-8 mt-0 pt-0"
                        style={isMobile ? { opacity: 1, x: 0 } : { opacity: rightTextOpacity, x: rightTextX }}
                    >
                        <p className="text-[#6B5548] text-base sm:text-lg md:text-lg lg:text-base xl:text-lg max-w-[200px] sm:max-w-[240px] md:max-w-[260px] font-medium leading-relaxed">
                            I design simple, intuitive, and engaging digital experiences.
                        </p>
                        <motion.div
                            className="mt-4 w-16 h-1.5 bg-[#8FAEC7] rounded-full"
                            style={isMobile ? { scaleX: 1 } : { scaleX: underlineScaleX }}
                        ></motion.div>

                        {/* Skill Icons Section for Mobile (Inside flow) */}
                        {isMobile && (
                            <div className="mt-8 flex flex-col gap-6 w-full">
                                <div className="flex flex-wrap justify-center gap-4">
                                    {floatingSkills.slice(0, 6).map((skill) => (
                                        <FloatingSkill key={skill.id} skill={skill} progress={smoothProgress} isMobile={true} />
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {floatingSkills.slice(6, 12).map((skill) => (
                                        <FloatingSkill key={skill.id} skill={skill} progress={smoothProgress} isMobile={true} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

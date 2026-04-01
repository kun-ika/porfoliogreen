"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
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
    const imageY = useTransform(smoothProgress, [0, 0.8], ["65vh", "40vh"]);
    const imageScale = useTransform(smoothProgress, [0, 0.8], [1.2, 1.8]);
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
    const gridOpacity = useTransform(smoothProgress, [0, 0.4], [0, 0.4]);

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
            className="relative h-[250vh] w-full" 
            style={{ backgroundColor: '#FAF9F6' }}
        >
            {/* Sticky Wrapper */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
                
                {/* Subtle Dot Grid Background */}
                <motion.div 
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ 
                        opacity: gridOpacity,
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                ></motion.div>

                {/* Subtle Gradient Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-100 rounded-full blur-[100px] opacity-40"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[120px] opacity-30"></div>
                </div>

                {/* Massive Outline Background Text */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
                    style={{ opacity: bgTextOpacity, scale: bgTextScale, y: bgTextY }}
                >
                    <h2 className="text-[30vw] md:text-[25vw] font-black select-none leading-none tracking-tighter"
                        style={{ 
                            color: 'transparent',
                            WebkitTextStroke: '1px md:1.5px rgba(13, 148, 136, 0.12)', 
                        }}
                    >
                        KUNIKA
                    </h2>
                </motion.div>

                {/* Bottom Horizontal Skill Cloud */}
                {floatingSkills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="absolute w-14 h-14 md:w-20 lg:w-16 xl:w-20 rounded-[1.5rem] md:rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center p-3 md:p-4 lg:p-3 xl:p-5 z-10 pointer-events-none"
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
                            top: "84%",
                            x: "-50%",
                            y: useTransform(smoothProgress, [0.4, 0.85], ["120%", skill.yOff]),
                            opacity: useTransform(smoothProgress, [0.5, 0.75], [0, 1]),
                            rotate: useTransform(smoothProgress, [0.4, 1], [0, (skill.id % 2 === 0 ? 10 : -10)]),
                        }}
                    >
                        <img src={skill.icon} alt="skill" className="w-10 h-10 md:w-16 md:h-16 object-contain drop-shadow-md" />
                    </motion.div>
                ))}

                <div className="container relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 h-screen pt-20">
                    
                    {/* Left Side: Heading & Email */}
                    <motion.div 
                        className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left z-20 order-2 md:order-1 mt-auto md:mt-0 pb-12 md:pb-0"
                        style={{ opacity: leftTextOpacity, x: { base: 0, md: leftTextX } }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
                            Hey There, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">I'm Kunika</span>
                        </h1>

                        <motion.a
                            href="mailto:jainkunika91@gmail.com"
                            whileHover={{ scale: 1.05, originX: 0 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-teal-600 font-bold text-base md:text-lg lg:text-base xl:text-lg hover:text-emerald-700 transition-colors inline-block relative border-b-2 border-transparent hover:border-emerald-600 pb-1"
                        >
                            jainkunika91@gmail.com
                        </motion.a>
                    </motion.div>

                    {/* Center: Image */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center items-center relative z-10 order-1 md:order-2 h-full py-10">
                        {/* Scroll Hint */}
                        <motion.div 
                            className="absolute top-1/4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
                            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                        >
                            <span className="text-teal-600 font-bold tracking-widest text-xs uppercase bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-teal-100">
                                Scroll Down
                            </span>
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-6 h-10 border-2 border-teal-500 rounded-full flex justify-center p-1"
                            >
                                <motion.div 
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1.5 h-1.5 bg-teal-500 rounded-full"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative w-full flex items-center justify-center origin-bottom z-10 overflow-visible"
                            style={{ 
                                scale: imageScale, 
                                y: imageY,
                                opacity: imageOpacity,
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <img
                                src="/kunika-main.png"
                                alt="Kunika Jain"
                                className="w-full aspect-[4/5] object-cover relative z-20"
                                style={{
                                    maskImage: 'url(/kunika-mask.png)',
                                    WebkitMaskImage: 'url(/kunika-mask.png)',
                                    maskMode: 'luminance',
                                    WebkitMaskMode: 'luminance',
                                    maskSize: '100% 100%',
                                    maskPosition: 'top center',
                                    WebkitMaskPosition: 'top center'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Description */}
                    <motion.div
                        className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right z-20 order-3 md:pl-8"
                        style={{ opacity: rightTextOpacity, x: rightTextX }}
                    >
                        <p className="text-slate-600 text-lg md:text-lg lg:text-base xl:text-lg max-w-[240px] md:max-w-[260px] font-medium leading-relaxed">
                            I design simple, intuitive, and engaging digital experiences.
                        </p>
                        <motion.div
                            className="mt-6 w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                            style={{ scaleX: underlineScaleX }}
                        ></motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

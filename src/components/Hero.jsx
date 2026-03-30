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

    // 1. Image Entrance (0% to 40% scroll)
    // Starting slightly lower (300px) and settling at 120px to clear the navbar
    const imageY = useTransform(smoothProgress, [0, 0.4], [300, 120]);
    const imageScale = useTransform(smoothProgress, [0, 0.5], [1.3, 1.6]);
    
    // 2. Text Content Reveal (40% to 85% scroll)
    const leftTextOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
    const leftTextX = useTransform(smoothProgress, [0.4, 0.8], [-100, 0]);
    
    const rightTextOpacity = useTransform(smoothProgress, [0.5, 0.9], [0, 1]);
    const rightTextX = useTransform(smoothProgress, [0.5, 0.9], [100, 0]);
    
    // Description underline animation
    const underlineScaleX = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.3 }
        }
    };

    return (
        <section 
            id="home" 
            ref={containerRef}
            className="relative h-[250vh] w-full" 
            style={{ backgroundColor: '#FAF9F6' }}
        >
            {/* Sticky Wrapper */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                {/* Subtle Gradient Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-100 rounded-full blur-[100px] opacity-40"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[120px] opacity-30"></div>
                </div>

                <div className="container relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 h-screen pt-20">
                    
                    {/* Left Side: Heading & Email */}
                    <motion.div 
                        className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left z-20 order-2 md:order-1"
                        style={{ opacity: leftTextOpacity, x: leftTextX }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.05] mb-6">
                            Hey There, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">I'm Kunika</span>
                        </h1>

                        <motion.a
                            href="mailto:jainkunika91@gmail.com"
                            whileHover={{ scale: 1.05, originX: 0 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-teal-600 font-semibold text-lg hover:text-emerald-700 transition-colors inline-block relative border-b-2 border-transparent hover:border-emerald-600 pb-1"
                        >
                            jainkunika91@gmail.com
                        </motion.a>
                    </motion.div>

                    {/* Center: Image */}
                    <div className="w-full md:w-1/3 flex justify-center items-center relative z-10 order-1 md:order-2 h-full">
                        {/* Scroll Hint - Visible only at the start */}
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
                            className="relative w-full flex items-center justify-center origin-bottom z-30 overflow-visible"
                            style={{ 
                                scale: imageScale, 
                                y: imageY,
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className="absolute inset-0 bg-teal-500/10 rounded-full filter blur-[60px] transform scale-75 animate-pulse"></div>
                            <img
                                src="/kunika-main.png"
                                alt="Kunika Jain"
                                className="w-full aspect-[4/5] object-cover drop-shadow-2xl relative z-20"
                                style={{
                                    maskImage: 'url(/kunika-mask.png)',
                                    WebkitMaskImage: 'url(/kunika-mask.png)',
                                    maskMode: 'luminance',
                                    WebkitMaskMode: 'luminance',
                                    maskSize: 'cover',
                                    WebkitMaskSize: 'cover',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    objectPosition: 'top',
                                    maskPosition: 'top',
                                    WebkitMaskPosition: 'top'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Description */}
                    <motion.div
                        className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right z-20 order-3 md:pl-8"
                        style={{ opacity: rightTextOpacity, x: rightTextX }}
                    >
                        <p className="text-slate-600 text-lg md:text-xl max-w-[260px] font-medium leading-relaxed">
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

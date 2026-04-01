"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Contact = () => {
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowGreeting(prev => !prev);
        }, 3000); // 3s loop
        return () => clearInterval(interval);
    }, []);

    const slideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="contact" className="relative font-sans pt-24 pb-16 bg-white min-h-[80vh] flex items-center">
            <div className="container max-w-[1200px] mx-auto px-6 md:px-12 w-full">
                {/* 6. Let's Work Together PRO FORM */}
                <div className="flex flex-col w-full gap-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start w-full mb-8"
                    >
                        <h3 className="text-[45px] sm:text-[65px] md:text-[85px] lg:text-[100px] leading-[0.9] font-black text-slate-950 mb-6 font-[family-name:var(--font-headline)] tracking-tighter uppercase">
                            LET'S WORK TOGETHER
                        </h3>
                        <p className="text-base md:text-lg text-slate-700 leading-[1.6] max-w-xl">
                            Let's build something impactful together—whether it's your brand, your website, or your next big idea.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-[60px] lg:gap-[100px] items-start w-full">
                        {/* Left Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[450px] aspect-[4/5] mx-auto lg:mx-0"
                        >
                            <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-sm">
                                <Image 
                                    src="/kunika-main.png" 
                                    alt="Let's work together" 
                                    fill 
                                    className="object-cover scale-[1.4]" 
                                    style={{
                                        maskImage: 'url(/kunika-mask.png)',
                                        WebkitMaskImage: 'url(/kunika-mask.png)',
                                        maskMode: 'luminance',
                                        WebkitMaskMode: 'luminance',
                                        maskSize: 'cover',
                                        WebkitMaskSize: 'cover',
                                        objectPosition: 'top',
                                        maskPosition: 'top',
                                        WebkitMaskPosition: 'top'
                                    }}
                                />
                            </div>
                            {/* Blue Hand Bubble Overlay */}
                            <div className="absolute -left-6 -bottom-6 md:-left-8 md:-bottom-8 w-24 h-24 md:w-32 md:h-32 bg-[#0d9488] rounded-full flex items-center justify-center shadow-2xl">
                                <AnimatePresence mode="wait">
                                    {!showGreeting ? (
                                        <motion.div
                                            key="hand"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center justify-center"
                                        >
                                            <motion.div
                                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1] }}
                                                className="origin-bottom-right"
                                                style={{ transformOrigin: "70% 70%" }}
                                            >
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[50px] md:h-[50px]">
                                                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                                                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                                                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                                                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                                                </svg>
                                            </motion.div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="text"
                                            initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.5, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-white font-[family-name:var(--font-headline)] tracking-wider text-2xl md:text-[40px] font-bold leading-none"
                                        >
                                            Hi
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Right Contact Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full flex flex-col"
                        >
                            <form className="flex flex-col gap-6 w-full">
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="flex flex-col w-full gap-3">
                                        <label className="text-[#0d9488] text-sm md:text-base ml-4 font-medium">Name :</label>
                                        <input type="text" placeholder="John Smith" className="w-full bg-[#F5F5F5] placeholder:text-gray-400 border border-transparent rounded-full px-6 md:px-8 py-4 outline-none focus:border-[#0d9488] transition-all text-slate-950" />
                                    </div>
                                    <div className="flex flex-col w-full gap-3">
                                        <label className="text-[#0d9488] text-sm md:text-base ml-4 font-medium">Email :</label>
                                        <input type="email" placeholder="johnsmith@gmail.com" className="w-full bg-[#F5F5F5] placeholder:text-gray-400 border border-transparent rounded-full px-6 md:px-8 py-4 outline-none focus:border-[#0d9488] transition-all text-slate-950" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 w-full mt-2">
                                    <label className="text-[#0d9488] text-sm md:text-base ml-4 font-medium">Service Needed ?</label>
                                    <div className="relative w-full">
                                        <select defaultValue="" className="w-full appearance-none bg-[#F5F5F5] border border-transparent rounded-full px-6 md:px-8 py-4 outline-none focus:border-[#0d9488] transition-all text-slate-600 cursor-pointer">
                                            <option value="" disabled>Select...</option>
                                            <option value="uiux">UI / UX Design</option>
                                            <option value="web">Web Design</option>
                                            <option value="graphic">Graphic Design</option>
                                            <option value="branding">Branding</option>
                                        </select>
                                        <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none text-slate-500">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 w-full mt-2">
                                    <label className="text-[#0d9488] text-sm md:text-base ml-4 font-medium">What Can I Help You...</label>
                                    <textarea placeholder="Hello, I'd like to enquire about..." className="w-full bg-[#F5F5F5] placeholder:text-gray-400 border border-transparent rounded-[32px] px-6 md:px-8 py-6 h-[180px] resize-none outline-none focus:border-[#0d9488] transition-all text-slate-950"></textarea>
                                </div>

                                <div className="mt-4">
                                    <button type="submit" className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-full px-10 py-3 md:px-12 md:py-4 uppercase tracking-[0.05em] font-medium hover:scale-105 transition-transform duration-400 w-auto inline-block shadow-lg">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

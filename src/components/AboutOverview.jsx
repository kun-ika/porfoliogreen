"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2, Palette, Code, Zap, User } from 'lucide-react';

const AboutOverview = () => {
    const highlights = [
        { icon: <MousePointer2 size={24} className="text-teal-500" />, title: "UI/UX Design", text: "Creating intuitive and user-centered interfaces that balance aesthetics with functionality." },
        { icon: <Palette size={24} className="text-emerald-500" />, title: "Graphic Design", text: "Crafting visual identities and cohesive branding that effectively communicates your message." },
        { icon: <Code size={24} className="text-teal-600" />, title: "Web Design", text: "Building responsive, accessible, and high-performance websites with premium digital flow." },
        { icon: <Zap size={24} className="text-emerald-600" />, title: "Branding", text: "Establishing a strong brand voice and visual language that resonates deeply with users." },
    ];

    return (
        <section id="about-overview" className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Massive Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none overflow-hidden select-none flex justify-center opacity-[0.02]">
                <h1 
                    className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[350px] font-black leading-none tracking-tighter uppercase" 
                    style={{ WebkitTextStroke: '2px #0d9488', color: 'transparent' }}
                >
                    KUNIKA
                </h1>
            </div>

            {/* Subtle Gradient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <motion.div 
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8"
                    >
                        <User size={16} className="text-teal-600" />
                        <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-teal-800">Who is Kunika?</span>
                    </motion.div>

                    <h2 className="text-[45px] sm:text-[65px] md:text-[85px] lg:text-[110px] leading-[0.85] font-black text-slate-950 mb-10 font-[family-name:var(--font-headline)] tracking-tight uppercase">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">ME</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-slate-700 mb-16 leading-relaxed font-medium max-w-3xl">
                        A UI/UX designer with an <span className="text-teal-600 font-bold">engineering mindset</span>, focused on transforming complex problems into simple, meaningful experiences. I blend research, structure, and visual design to create solutions that are both <span className="text-emerald-600 font-bold">functional and engaging</span>.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 w-full">
                        {highlights.map((item, i) => (
                            <Link key={i} href="/about" className="block w-full">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex flex-col items-center gap-4 py-8 px-6 rounded-[32px] bg-[#FAF9F6] border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wider font-[family-name:var(--font-headline)]">
                                        {item.title}
                                    </h4>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <Link href="/about">
                        <button className="group relative px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-xl flex items-center gap-4 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 tracking-wider">LEARN MORE ABOUT ME</span>
                            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutOverview;

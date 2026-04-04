"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail, ArrowUpRight, ArrowUp, Globe, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/kunika-jain', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
        { icon: <Github size={24} />, href: 'https://github.com/kunika-jain', label: 'GitHub', color: 'hover:text-white' },
        { icon: <Mail size={24} />, href: 'mailto:jainkunika91@gmail.com', label: 'Email', color: 'hover:text-teal-400' },
        { icon: <Instagram size={24} />, href: '#', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#03060b] relative rounded-t-[40px] md:rounded-t-[60px] mt-12 overflow-hidden text-white pt-16 md:pt-20 pb-8 border-t border-white/5">
            {/* Dynamic Background Glows */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[80px] -z-10"></div>

            {/* Massive Background Typography - Reduced Size */}
            <div className="absolute top-[50%] left-0 w-full -translate-y-1/2 pointer-events-none overflow-hidden select-none flex justify-center opacity-[0.02]">
                <h1 
                    className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[280px] font-black leading-none tracking-tighter uppercase" 
                    style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
                >
                    KUNIKA
                </h1>
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start text-left">
                
                {/* Status Indicator Pill - Moved to Left */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400">Available for hire</span>
                </motion.div>

                {/* CTA Row - Left & Right alignment */}
                <div className="w-full max-w-7xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight uppercase whitespace-nowrap pr-4"
                    >
                        HAVE AN <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 bg-[length:200%_auto] animate-gradient-x underline decoration-teal-500/30 underline-offset-4 px-1">IDEA?</span>
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="shrink-0"
                    >
                        <Link 
                            href="/contact"
                            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-teal-500 to-emerald-500"
                        >
                            <span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-[#03060b] rounded-[10px] group-hover:bg-opacity-0 text-base md:text-xl font-black flex items-center gap-3">
                                START A PROJECT
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* Location & Socials Row - Location Left, Socials Right */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-y border-white/5 mb-8">
                    <div className="flex items-center gap-2 text-slate-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">
                        <Globe size={14} className="animate-spin-slow" />
                        <span>Based in India, working worldwide</span>
                    </div>

                    <div className="flex items-center gap-6 md:gap-10">
                        {/* Highlights Social Icons */}
                        <div className="flex items-center gap-4 md:gap-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.2 }}
                                    className={`relative group p-2.5 rounded-xl bg-white/0 hover:bg-white/5 transition-all duration-300 text-slate-400 ${social.color} border border-transparent hover:border-white/10 overflow-hidden`}
                                    aria-label={social.label}
                                >
                                    {/* Subtle Hover Glow */}
                                    <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>
                                    <div className="relative z-10">
                                        {React.cloneElement(social.icon, { size: 22 })}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Divider for Desktop */}
                        <div className="hidden md:block w-px h-8 bg-white/10"></div>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-[#03060b] transition-all duration-300"
                        >
                            <ArrowUp size={18} />
                        </motion.button>
                    </div>
                </div>

                {/* Bottom Strip - Reduced gap */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between text-slate-500 font-bold text-[9px] md:text-[10px] tracking-widest uppercase gap-2">
                    <p>© {new Date().getFullYear()} KUNIKA JAIN. DESIGNED FOR THE BOLD.</p>
                    <div className="opacity-60">
                        MADE WITH <span className="text-emerald-500 animate-pulse">PRECISION</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

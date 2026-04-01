"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Experience', href: '/experience' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
        { icon: <Github size={20} />, href: '#', label: 'GitHub' },
        { icon: <Mail size={20} />, href: 'mailto:jainkunika91@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="w-full bg-[#0a0f1c] relative rounded-t-[40px] md:rounded-t-[80px] mt-10 overflow-hidden text-white pt-24 md:pt-32 pb-8 border-t border-slate-800">
            {/* Massive Background Typography */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none overflow-hidden select-none flex justify-center opacity-5">
                <h1 
                    className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[350px] font-black leading-none font-[family-name:var(--font-headline)] tracking-tighter" 
                    style={{ WebkitTextStroke: '1px sm:2px white', color: 'transparent' }}
                >
                    KUNIKA
                </h1>
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-16 mb-24 md:mb-32">
                
                {/* Left Side: Massive CTA */}
                <div className="flex-1 max-w-2xl">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-widest font-[family-name:var(--font-headline)] uppercase"
                    >
                        HAVE AN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">IDEA?</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link 
                            href="/contact"
                            className="inline-flex items-center gap-4 text-xl md:text-3xl font-bold pb-2 border-b-2 border-teal-500/30 hover:border-teal-400 transition-colors group text-slate-300 hover:text-white"
                        >
                            Let's build it together 
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-teal-400" size={32} />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side: Links Grid */}
                <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
                    
                    {/* Navigation */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Navigation</h4>
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                            >
                                <Link 
                                    href={link.href}
                                    className="text-lg md:text-xl font-bold hover:text-teal-400 transition-colors relative group w-fit flex pb-1"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Socials</h4>
                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={social.label}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                            >
                                <a
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 text-lg md:text-xl font-bold text-slate-300 hover:text-white transition-colors w-fit"
                                >
                                    <span className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-[#0a0f1c] transition-colors border border-slate-700/50">
                                        {social.icon}
                                    </span>
                                    {social.label}
                                </a>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Copyright Strip */}
            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm md:text-base">
                <p>© {new Date().getFullYear()} Kunika Jain. All rights reserved.</p>
                <div className="mt-4 md:mt-0 flex items-center gap-2">
                    Designed & Built with 
                    <motion.span 
                        animate={{ scale: [1, 1.2, 1] }} 
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-rose-500 inline-block"
                    >
                        ❤️
                    </motion.span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

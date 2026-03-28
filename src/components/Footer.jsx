"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Experience', href: '/experience' },
        { name: 'Resume', href: '/resume.pdf', isExternal: true },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: <Linkedin size={22} />, href: '#', label: 'LinkedIn' },
        { icon: <Github size={22} />, href: '#', label: 'GitHub' },
        { icon: <Mail size={22} />, href: 'mailto:kunikajain@gmail.com', label: 'Email' },
    ];

    return (
        <motion.footer 
            className="w-full bg-white relative pt-20 pb-8 mt-auto border-t border-slate-100 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
            <div className="absolute top-12 -right-24 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>

            <div className="container relative z-10 max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    {/* Name & Title */}
                    <Link href="/" className="text-3xl font-extrabold font-heading text-slate-800 tracking-tight mb-3 hover:text-teal-600 transition-colors">
                        Kunika <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Jain</span>
                    </Link>
                    <p className="text-slate-500 font-medium text-lg px-4 max-w-md">
                        UI/UX Designer & Frontend Developer
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
                    {navLinks.map((link) => (
                        link.isExternal ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-teal-600 font-semibold text-[15px] transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-teal-600 font-semibold text-[15px] transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                            </Link>
                        )
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mb-16">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-600 hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 hover:text-white hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <span className="group-hover:scale-110 transition-transform duration-300">
                                {social.icon}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm font-medium">
                    <p>© {new Date().getFullYear()} Kunika Jain. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-1.5">
                        Designed & Built with <span className="text-rose-500 animate-pulse">❤️</span>
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;

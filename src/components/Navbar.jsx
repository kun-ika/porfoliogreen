"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Experience', href: '/experience' },
        { name: 'Resume', href: '/resume.pdf', isExternal: true },
    ];

    return (
        <motion.nav 
            className="fixed w-full top-5 z-50 px-4 flex justify-center transition-all duration-300 pointer-events-none"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
            <div className={`w-full max-w-5xl pointer-events-auto bg-teal-800/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-8 py-2.5 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'translate-y-0 shadow-teal-900/10' : '-translate-y-1'}`}>
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 text-xl font-bold font-heading text-white tracking-tighter">
                    KJ<span className="text-teal-400">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-x-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        if (link.isExternal) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[14px] font-medium transition-all duration-300 relative py-1 hover:text-white text-white/70"
                                >
                                    {link.name}
                                </a>
                            );
                        }
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[14px] font-medium transition-all duration-300 relative py-1 hover:text-white ${isActive ? 'text-white' : 'text-white/70'
                                    }`}
                            >
                                {link.name}
                                {/* Active indicator line */}
                                <span
                                    className={`absolute left-1/2 -bottom-1 h-[2px] bg-teal-400 rounded-full transition-all duration-300 transform -translate-x-1/2 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Right Side: Contact Button */}
                <div className="hidden md:block flex-shrink-0">
                    <Link
                        href="/contact"
                        className="bg-white text-teal-800 hover:bg-teal-50 hover:text-teal-700 px-6 py-2 rounded-full text-[14px] font-bold transition-all inline-block shadow-sm"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden pointer-events-auto flex items-center text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden pointer-events-auto absolute top-[calc(100%+16px)] left-4 right-4 bg-teal-800/95 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
                    <div className="flex flex-col py-4 px-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            if (link.isExternal) {
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3.5 font-medium text-lg border-b border-white/10 last:border-0 text-white/80"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`py-3.5 font-medium text-lg border-b border-white/10 last:border-0 ${isActive ? 'text-teal-300' : 'text-white/80'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className="mt-5 mb-2 text-center bg-white text-teal-800 py-3.5 rounded-full font-bold transition-colors hover:bg-teal-50 shadow-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;

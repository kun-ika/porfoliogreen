"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
        { name: 'Resume', href: 'https://drive.google.com/uc?export=download&id=1pdx9AJ4WVwtI7ky34wldsFMXBwxgLZ9l', isExternal: true },
    ];

    return (
        <motion.nav 
            className="fixed w-full top-5 z-50 px-4 flex justify-center transition-all duration-300 pointer-events-none"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
            <div className={`w-full max-w-5xl pointer-events-auto bg-teal-800/90 backdrop-blur-lg border border-white/20 shadow-2xl rounded-full px-5 md:px-8 py-2.5 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'translate-y-0 shadow-teal-900/20' : '-translate-y-1'}`}>
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
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden pointer-events-auto absolute top-[calc(100%+12px)] left-4 right-4 bg-teal-900/95 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden z-50"
                    >
                        <div className="flex flex-col py-6 px-8">
                            {navLinks.map((link, idx) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        {link.isExternal ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-4 font-bold text-xl border-b border-white/5 last:border-0 text-white/70 hover:text-white block"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={`py-4 font-bold text-xl border-b border-white/5 last:border-0 block transition-colors ${isActive ? 'text-teal-400' : 'text-white/70 hover:text-white'
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="/contact"
                                    className="mt-8 mb-2 text-center bg-white text-teal-950 py-4 rounded-full font-black text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-xl block"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Me
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

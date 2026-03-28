"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy submit
        alert(`Thank you for your message, ${formData.name}! (This is a demo)`);
        setFormData({ name: '', email: '', message: '' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { type: "spring", stiffness: 100, damping: 15 } 
        }
    };

    return (
        <section id="contact" className="section relative bg-white py-20 overflow-hidden">
            <div className="container relative z-10">
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl font-medium">
                        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div 
                        className="flex flex-col justify-center space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={itemVariants} className="glass-card flex items-center gap-5 p-4 border border-slate-100 rounded-2xl hover:border-teal-200 transition-all duration-300 group bg-white shadow-sm hover:shadow-md cursor-pointer">
                            <motion.div 
                                className="w-14 h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-teal-50"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Mail className="text-teal-500" size={24} />
                            </motion.div>
                            <div className="overflow-hidden">
                                <h3 className="text-lg font-extrabold text-slate-800 mb-0.5">Email</h3>
                                <a href="mailto:kunika.jain@example.com" className="text-slate-600 hover:text-teal-500 font-semibold transition-colors text-sm break-all">
                                    hello@kunikajain.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass-card flex items-center gap-5 p-4 border border-slate-100 rounded-2xl hover:border-emerald-200 transition-all duration-300 group bg-white shadow-sm hover:shadow-md cursor-pointer">
                            <motion.div 
                                className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-emerald-50"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Phone className="text-emerald-500" size={24} />
                            </motion.div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800 mb-0.5">Phone</h3>
                                <p className="text-slate-600 font-semibold text-sm">
                                    +91 (XXX) XXX-XXXX
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass-card flex items-center gap-5 p-4 border border-slate-100 rounded-2xl hover:border-teal-200 transition-all duration-300 group bg-white shadow-sm hover:shadow-md cursor-pointer">
                            <motion.div 
                                className="w-14 h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-teal-50"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <MapPin className="text-teal-500" size={24} />
                            </motion.div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800 mb-0.5">Location</h3>
                                <p className="text-slate-600 font-semibold text-sm">
                                    Ujjain, India
                                </p>
                                <p className="text-xs font-bold text-teal-500 mt-1 uppercase tracking-wide">Open to relocation</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4 mt-6 justify-center lg:justify-start">
                            <motion.a 
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="#" 
                                className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 hover:text-white transition-all duration-300 hover:shadow-lg"
                            >
                                <Linkedin size={26} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="#" 
                                className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 hover:shadow-lg"
                            >
                                <Mail size={26} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="glass-card p-8 lg:p-10 border border-slate-100 border-t-8 border-t-teal-500 rounded-3xl bg-white shadow-xl relative overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none"></div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-8 relative z-10">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-colors font-medium text-slate-800"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-colors font-medium text-slate-800"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-teal-500 focus:bg-white transition-colors font-medium text-slate-800 resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <motion.button 
                                type="submit" 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl group flex items-center justify-center shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all"
                            >
                                Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

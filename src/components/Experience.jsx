"use client";
import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section relative py-20 bg-slate-50 overflow-hidden">
            <div className="container relative z-10 flex flex-col items-center">
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Education</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
                    {/* Experience Column */}
                    <motion.div 
                        className="w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                            <span className="p-2.5 bg-teal-100 rounded-xl text-teal-600 shadow-sm"><Briefcase size={22} /></span> Work Experience
                        </h3>

                        <div className="relative pl-8 border-l-2 border-teal-200 space-y-12">
                            <motion.div 
                                className="relative group"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-teal-500 shadow-md transition-all duration-300"></div>
                                <div className="bg-white rounded-2xl p-6 border-2 border-transparent hover:border-teal-100 transition-colors shadow-sm hover:shadow-lg relative overflow-hidden">
                                    <h4 className="text-xl font-bold text-slate-800 mb-1">Intern - UI/UX & Frontend</h4>
                                    <h5 className="text-lg text-teal-600 font-bold mb-4">BigInIT Technologies</h5>

                                    <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 mb-4 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 inline-flex">
                                        <span className="flex items-center gap-1.5"><Calendar size={16} className="text-teal-400" /> Apr 2025 - Jul 2025</span>
                                        <span className="w-px h-4 bg-slate-200"></span>
                                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-teal-400" /> Indore, India</span>
                                    </div>

                                    <ul className="space-y-2 text-slate-600 font-medium list-disc list-inside">
                                        <li>Designed user-centered wireframes and prototypes in Figma.</li>
                                        <li>Developed responsive frontend UI components.</li>
                                        <li>Ensured high visual quality and consistency across products.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div 
                        className="w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                            <span className="p-2.5 bg-emerald-100 rounded-xl text-emerald-600 shadow-sm"><GraduationCap size={22} /></span> Education
                        </h3>

                        <div className="relative pl-8 border-l-2 border-emerald-200 space-y-12">
                            <motion.div 
                                className="relative group"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-500 shadow-md transition-all duration-300"></div>
                                <div className="bg-white rounded-2xl p-6 border-2 border-transparent hover:border-emerald-100 transition-colors shadow-sm hover:shadow-lg relative overflow-hidden">
                                    <h4 className="text-xl font-bold text-slate-800 mb-1">B.Tech - Computer Science</h4>
                                    <h5 className="text-lg text-emerald-600 font-bold mb-4">Avantika University</h5>

                                    <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 mb-4 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 inline-flex">
                                        <span className="flex items-center gap-1.5"><Calendar size={16} className="text-emerald-400" /> 2023 - 2027</span>
                                        <span className="w-px h-4 bg-slate-200"></span>
                                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-emerald-400" /> Ujjain, India</span>
                                    </div>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Specialization in UI/UX Design and Frontend Development. Focus on practical web technologies and creative problem solving.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

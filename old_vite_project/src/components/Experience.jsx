import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section relative py-20 bg-slate-50">
            <div className="container relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
                    {/* Experience Column */}
                    <div className="w-full">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                            <span className="p-2.5 bg-indigo-100 rounded-xl text-indigo-500 shadow-sm"><Briefcase size={22} /></span> Work Experience
                        </h3>

                        <div className="relative pl-8 border-l-2 border-indigo-200 space-y-12">
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-md group-hover:scale-125 transition-all duration-300"></div>
                                <div className="glass-card p-6 border-2 border-transparent hover:border-indigo-100 transition-colors shadow-sm bg-white relative overflow-hidden">
                                    <h4 className="text-xl font-bold text-slate-800 mb-1">Intern - UI/UX & Frontend</h4>
                                    <h5 className="text-lg text-indigo-500 font-bold mb-4">BigInIT Technologies</h5>

                                    <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 mb-4 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 inline-flex">
                                        <span className="flex items-center gap-1.5"><Calendar size={16} className="text-indigo-400" /> Apr 2025 - Jul 2025</span>
                                        <span className="w-px h-4 bg-slate-200"></span>
                                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-indigo-400" /> Indore, India</span>
                                    </div>

                                    <ul className="space-y-2 text-slate-600 font-medium list-disc list-inside">
                                        <li>Designed user-centered wireframes and prototypes in Figma.</li>
                                        <li>Developed responsive frontend UI components.</li>
                                        <li>Ensured high visual quality and consistency across products.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="w-full">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                            <span className="p-2.5 bg-fuchsia-100 rounded-xl text-fuchsia-500 shadow-sm"><GraduationCap size={22} /></span> Education
                        </h3>

                        <div className="relative pl-8 border-l-2 border-fuchsia-200 space-y-12">
                            <div className="relative group">
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-fuchsia-500 shadow-md group-hover:scale-125 transition-all duration-300"></div>
                                <div className="glass-card p-6 border-2 border-transparent hover:border-fuchsia-100 transition-colors shadow-sm bg-white relative overflow-hidden">
                                    <h4 className="text-xl font-bold text-slate-800 mb-1">B.Tech - Computer Science</h4>
                                    <h5 className="text-lg text-fuchsia-500 font-bold mb-4">Avantika University</h5>

                                    <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 mb-4 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 inline-flex">
                                        <span className="flex items-center gap-1.5"><Calendar size={16} className="text-fuchsia-400" /> 2023 - 2027</span>
                                        <span className="w-px h-4 bg-slate-200"></span>
                                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-fuchsia-400" /> Ujjain, India</span>
                                    </div>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Specialization in UI/UX Design and Frontend Development. Focus on practical web technologies and creative problem solving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

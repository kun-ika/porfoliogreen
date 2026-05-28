"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const ExperienceOverview = () => {
    const journeyHighlights = [
        {
            type: "Experience",
            title: "Intern - UI/UX & Frontend",
            subtitle: "BigInIT Technologies",
            date: "2025",
            location: "Indore, India",
            icon: <Briefcase size={22} className="text-[#8FAEC7]" />,
            gradient: "from-[#8FAEC7] to-[#4E3629]"
        },
        {
            type: "Education",
            title: "B.Tech - Computer Science",
            subtitle: "Avantika University",
            date: "2023 - 2027",
            location: "Ujjain, India",
            icon: <GraduationCap size={22} className="text-[#8FAEC7]" />,
            gradient: "from-[#4E3629] to-[#8FAEC7]"
        }
    ];

    return (
        <section id="experience-overview" className="relative py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8FAEC7]/5 rounded-full blur-[120px] -z-10"></div>
            
            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
                
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-black leading-[0.95] text-[#4E3629] mb-6 font-[family-name:var(--font-headline)] tracking-tight uppercase translate-x-2">
                        MY <span className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] normal-case pl-2 select-none">Journey</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-[1.6]">
                        A timeline of my professional experience and academic foundation, demonstrating a continuous pursuit of design excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
                    {journeyHighlights.map((item, index) => (
                        <Link key={index} href="/experience" className="block w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1 }}
                                className="group h-full relative p-8 rounded-[32px] bg-white border-2 border-[#8FAEC7]/30 shadow-sm hover:shadow-xl hover:shadow-[#4E3629]/5 transition-all duration-500 cursor-pointer overflow-hidden"
                            >
                                {/* Inner Glow */}
                                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-[40px] transition-opacity duration-700`}></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[#E9F0F6] flex items-center justify-center shadow-inner text-[#8FAEC7] group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm font-black text-slate-300 uppercase tracking-[0.2em]">{item.type}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-[#4E3629] tracking-tight mb-2 font-[family-name:var(--font-headline)] uppercase leading-none">{item.title}</h3>
                                    <h4 className={`text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.gradient} mb-6`}>{item.subtitle}</h4>

                                    <div className="flex flex-wrap gap-4 text-xs md:text-sm font-bold text-slate-400">
                                        <span className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
                                            <Calendar size={16} /> {item.date}
                                        </span>
                                        <span className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
                                            <MapPin size={16} /> {item.location}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Link href="/experience">
                        <button className="group relative px-10 py-5 bg-[#4E3629] text-[#FAF9F6] border border-[#3D2B1F] rounded-full font-bold text-xl flex items-center gap-4 overflow-hidden shadow-xl hover:shadow-2xl hover:bg-[#3D2B1F] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="relative z-10 tracking-wider font-[family-name:var(--font-headline)] uppercase">View Full Timeline</span>
                            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default ExperienceOverview;

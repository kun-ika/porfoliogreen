"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
    {
        id: "uiux",
        title: "UI/UX Design",
        gradient: "from-teal-500 to-emerald-400",
        borderHover: "hover:border-teal-300",
        icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
        ],
        description: "Crafting intuitive user journeys and stunning visual prototypes."
    },
    {
        id: "frontend",
        title: "Frontend Development",
        gradient: "from-emerald-500 to-teal-400",
        borderHover: "hover:border-emerald-300",
        icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        ],
        description: "Building blazing-fast, responsive, and highly interactive web apps."
    },
    {
        id: "backend",
        title: "Backend & Fundamentals",
        gradient: "from-teal-600 to-emerald-500",
        borderHover: "hover:border-teal-400",
        icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        ],
        description: "Developing robust data structures and reliable server architectures."
    }
];

const HomeExpertise = () => {
    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
                
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[40px] sm:text-[60px] md:text-[65px] lg:text-[75px] xl:text-[90px] leading-[0.95] font-black text-slate-950 mb-6 font-[family-name:var(--font-headline)] tracking-tight uppercase">
                        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">EXPERTISE</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-[1.6]">
                        A curated selection of my core competencies, blending creative design with powerful engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                    {categories.map((category, index) => (
                        <Link key={category.id} href="/skills" className="block w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group h-full relative overflow-hidden rounded-[30px] bg-slate-50 border-2 border-slate-100 ${category.borderHover} p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer`}
                            >
                                {/* Glow */}
                                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-[30px] transition-opacity duration-700`}></div>

                                {/* Floating Icons */}
                                <div className="flex justify-center items-center gap-4 mb-10">
                                    {category.icons.map((iconStr, i) => (
                                        <motion.div 
                                            key={i}
                                            className="w-16 h-16 rounded-2xl bg-white shadow-md flex justify-center items-center overflow-hidden border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <img src={iconStr} alt="skill logo" className="w-10 h-10 object-contain drop-shadow-sm" />
                                        </motion.div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-wider font-[family-name:var(--font-headline)] uppercase leading-none">{category.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{category.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Link href="/skills">
                        <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-xl flex items-center gap-4 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 tracking-wider">View Full Arsenal</span>
                            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default HomeExpertise;

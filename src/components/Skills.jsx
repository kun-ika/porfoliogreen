"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Figma, PenTool, Layers, Waypoints, UserCheck, Brush, 
    FileCode2, FileJson, Atom, Smartphone, Wind, 
    Flame, Database, Github, Globe, TerminalSquare, 
    Code, Blocks, Network, Framer 
} from 'lucide-react';

const categories = [
    {
        id: "uiux",
        title: "UI/UX Design",
        gradient: "from-teal-500 to-emerald-400",
        bgGlow: "bg-teal-500/10",
        skills: [
            { name: "Figma", level: 90, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { 
                name: "FigJam", 
                level: 85, 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10 object-contain drop-shadow-sm">
                        <path fill="#0acf83" d="M36.1 84.4c0-9.8 8-17.8 17.8-17.8h16.2v16.2c0 14.8-12 26.8-26.8 26.8-4 0-7.2-3.2-7.2-7.2v-18z"/>
                        <path fill="#a259ff" d="M36 49.3c0-9.6 7.8-17.4 17.4-17.4h17v17.4c0 9.6-7.8 17.4-17.4 17.4H36v-17.4z"/>
                        <path fill="#f24e1e" d="M36 15c0-4 3.2-7.2 7.2-7.2h27.2v17H43.2C39.2 24.8 36 21.6 36 17.6v-2.6z"/>
                        <path fill="#ff7262" d="M70.4 7.8h23.2c4 0 7.2 3.2 7.2 7.2v2.6c0 4-3.2 7.2-7.2 7.2H70.4V7.8z"/>
                        <path fill="#1abcfe" d="M70.5 49.3c0-9.6 7.8-17.4 17.4-17.4h6c4 0 7.2 3.2 7.2 7.2v17H88c-9.7.1-17.5-7.7-17.5-17.3z"/>
                    </svg>
                )
            },
            { 
                name: "Framer", 
                level: 80, 
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 21" className="w-8 h-8 object-contain drop-shadow-sm text-slate-800" fill="currentColor">
                        <path d="M0 0h14v7H7zm0 7h14l-7 7H0zm7 7h7v7l-7-7z" />
                    </svg>
                ) 
            },
            { name: "Wireframing", level: 85, icon: <PenTool size={36} className="text-emerald-500" /> },
            { name: "Prototyping", level: 85, icon: <Layers size={36} className="text-teal-500" /> },
            { name: "User Flows", level: 80, icon: <Waypoints size={36} className="text-emerald-400" /> },
            { name: "Usability Design", level: 80, icon: <UserCheck size={36} className="text-teal-400" /> },
            { name: "Canva", level: 95, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-10 h-10 object-contain drop-shadow-sm" /> }
        ]
    },
    {
        id: "frontend",
        title: "Frontend Development",
        gradient: "from-emerald-500 to-teal-400",
        bgGlow: "bg-emerald-500/10",
        skills: [
            { name: "HTML5 & CSS3", level: 90, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "JavaScript", level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "React", level: 80, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "React Native", level: 75, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Native" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "Tailwind CSS", level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-10 h-10 object-contain drop-shadow-sm" /> }
        ]
    },
    {
        id: "backend",
        title: "Backend & Tools",
        gradient: "from-teal-600 to-emerald-500",
        bgGlow: "bg-teal-600/10",
        skills: [
            { name: "Firebase", level: 75, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "MySQL", level: 70, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "GitHub", level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "Netlify", level: 80, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt="Netlify" className="w-10 h-10 object-contain drop-shadow-sm" /> }
        ]
    },
    {
        id: "fundamentals",
        title: "Fundamentals",
        gradient: "from-emerald-600 to-teal-500",
        bgGlow: "bg-emerald-600/10",
        skills: [
            { name: "C / C++", level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "Python", level: 80, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-10 h-10 object-contain drop-shadow-sm" /> },
            { name: "OOPs", level: 85, icon: <Blocks size={36} className="text-teal-600" /> },
            { name: "Data Structures", level: 75, icon: <Network size={36} className="text-emerald-500" /> }
        ]
    }
];

const SkillCard = ({ skill, index, gradient }) => {
    return (
        <motion.div 
            variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 20 }
                },
                exit: { opacity: 0, scale: 0.9, y: -20 }
            }}
            className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200/60 p-8 shadow-sm transition-all duration-500 cursor-default"
        >
            {/* Soft background glow */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-[40px] transition-all duration-700`}></div>
            
            <div className="flex justify-between items-start mb-10 w-full relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 transition-colors shadow-inner border border-slate-100 duration-500">
                    {skill.icon}
                </div>
            </div>

            <h4 className="text-2xl font-bold text-slate-800 mb-6 tracking-wider relative z-10 font-[family-name:var(--font-headline)]">
                {skill.name}
            </h4>
            
            {/* Thick Animated Premium Progress Track */}
            <div className="relative w-full h-4 rounded-full bg-slate-100 overflow-hidden shadow-inner z-10">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, type: 'spring', bounce: 0.2, delay: 0.2 + index * 0.1 }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${gradient} shadow-sm`}
                >
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:15px_15px] opacity-0 animate-[pulse_2s_infinite]"></div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="skills" className="relative py-24 md:py-32 bg-[#FAF9F6] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Accent */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] transition-colors duration-1000 -z-10 ${categories[activeTab].bgGlow}`}></div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div 
                    className="flex flex-col items-center text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.9] font-black text-slate-950 mb-6 font-[family-name:var(--font-headline)] tracking-tighter uppercase">
                        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">EXPERTISE</span>
                    </h2>
                </motion.div>

                {/* Highly modern Interactive Tabs */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-bold transition-all duration-300 ${activeTab === index ? 'text-white' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}`}
                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.gradient} shadow-lg`}
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    style={{ zIndex: -1 }}
                                />
                            )}
                            <span className="relative z-10">{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* Staggered Grid of Massive Skill Cards */}
                <div className="w-full min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { 
                                    opacity: 1, 
                                    transition: { staggerChildren: 0.1 } 
                                },
                                exit: { 
                                    opacity: 0,
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 } 
                                }
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
                        >
                            {categories[activeTab].skills.map((skill, index) => (
                                <SkillCard 
                                    key={skill.name} 
                                    skill={skill} 
                                    index={index} 
                                    gradient={categories[activeTab].gradient} 
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;

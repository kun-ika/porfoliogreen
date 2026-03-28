"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, gradient }) => (
    <motion.div 
        className="glass-card transition-all duration-300 relative overflow-hidden group bg-white shadow-sm border border-slate-100 rounded-2xl p-6"
        whileHover={{ y: -5, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-20 filter blur-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150 bg-gradient-to-br ${gradient}`}></div>
        <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b border-gray-200/60 pb-4 relative">{title}</h3>
        <div className="space-y-6 relative">
            {skills.map((skill, index) => (
                <div key={index} className="group/skill">
                    <div className="flex justify-between mb-2 hover:translate-x-1 transition-transform">
                        <span className="text-secondary font-semibold text-slate-700 group-hover/skill:text-teal-600 transition-colors">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className={`h-full rounded-full flex items-center shadow-sm relative bg-gradient-to-r ${gradient}`}
                        >
                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "UI/UX Design",
            gradient: "from-teal-500 to-emerald-400",
            skills: [
                { name: "Figma", level: 90 },
                { name: "Wireframing", level: 85 },
                { name: "Prototyping", level: 85 },
                { name: "User Flows", level: 80 },
                { name: "Usability Design", level: 80 },
                { name: "Canva", level: 95 }
            ]
        },
        {
            title: "Frontend Development",
            gradient: "from-emerald-500 to-teal-400",
            skills: [
                { name: "HTML5 & CSS3", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "React", level: 80 },
                { name: "React Native", level: 75 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            title: "Backend & Tools",
            gradient: "from-teal-600 to-emerald-500",
            skills: [
                { name: "Firebase", level: 75 },
                { name: "MySQL", level: 70 },
                { name: "GitHub", level: 85 },
                { name: "Netlify", level: 80 }
            ]
        },
        {
            title: "Programming Fundamentals",
            gradient: "from-emerald-600 to-teal-500",
            skills: [
                { name: "C / C++", level: 85 },
                { name: "Python", level: 80 },
                { name: "Object Oriented Programming", level: 85 },
                { name: "Data Structures", level: 75 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 100, damping: 20 } 
        }
    };

    return (
        <section id="skills" className="section relative py-20 bg-slate-50">
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
            <div className="container relative z-10">
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-800">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Skills</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl font-medium">
                        A comprehensive overview of my technical expertise and proficiency across design, frontend, and backend technologies.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {categories.map((category, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <SkillCard title={category.title} skills={category.skills} gradient={category.gradient} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

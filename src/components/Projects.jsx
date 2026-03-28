"use client";
import React from 'react';
import { ExternalLink, MonitorPlay, Layers, FileText, LayoutTemplate, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "smart-solar",
        title: "Smart Solar Cutter",
        subtitle: "IoT Automation",
        type: "Hardware & IoT",
        tags: ["Arduino", "IoT", "C++", "Sensors"],
        icon: <Box size={28} className="text-teal-600" />,
        description: "An autonomous solar-powered grass cutter reducing manual effort via ultrasonic sensors and Bluetooth control."
    },
    {
        id: "shabdayudh",
        title: "ShabdaYudh",
        subtitle: "Typing Speed App",
        type: "Desktop App",
        tags: ["Python", "Tkinter", "SQLite"],
        icon: <MonitorPlay size={28} className="text-emerald-600" />,
        description: "A Python desktop application designed to improve typing speed and accuracy with live WPM calculation and leaderboards."
    },
    {
        id: "quick-salon",
        title: "Quick Salon",
        subtitle: "Booking App",
        type: "Mobile App",
        tags: ["React Native", "Firebase"],
        icon: <Layers size={28} className="text-teal-500" />,
        description: "Mobile application for salon bookings with user authentication and appointment scheduling."
    },
    {
        id: "medicare",
        title: "Medicare App",
        subtitle: "UI/UX Concept",
        type: "UI/UX Design",
        tags: ["Figma", "Prototyping"],
        icon: <LayoutTemplate size={28} className="text-emerald-500" />,
        description: "Healthcare UI/UX design project featuring user-centered wireframes and high-fidelity prototypes."
    },
    {
        id: "gutenberg",
        title: "Gutenberg Redesign",
        subtitle: "Web UI Design",
        type: "Web Development",
        tags: ["HTML", "CSS", "JS"],
        icon: <FileText size={28} className="text-teal-600" />,
        description: "Redesigned the Gutenberg website to improve navigation, accessibility, and overall responsiveness."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
};

const Projects = () => {
    return (
        <section id="projects" className="section relative py-20 bg-white">
            <div className="container relative z-10 flex flex-col items-center">
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl font-medium">
                        A selection of my recent work across physical computing, software development, and UI/UX design.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id} 
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="bg-white rounded-2xl p-6 flex flex-col items-start border-t-4 border-t-teal-500 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full filter blur-xl group-hover:bg-teal-500/20 transition-all duration-500 scale-150 group-hover:scale-100"></div>

                            <div className="flex items-center gap-4 mb-5 relative z-10">
                                <motion.div 
                                    className="p-3 bg-teal-50 rounded-xl"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    {project.icon}
                                </motion.div>
                                <div>
                                    <p className="text-xs font-bold text-teal-600 tracking-wider uppercase mb-0.5">{project.type}</p>
                                    <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-teal-700 transition-colors">{project.title}</h3>
                                </div>
                            </div>

                            <h4 className="text-sm font-semibold text-slate-500 mb-4 relative z-10">{project.subtitle}</h4>

                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto relative z-10">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md group-hover:bg-teal-50 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 w-full pt-4 border-t border-slate-100/50 relative z-10">
                                <motion.button 
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 font-semibold rounded-lg transition-colors border border-slate-200"
                                >
                                    <ExternalLink size={18} /> View
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

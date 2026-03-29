"use client"; // reload trigger
import React, { useRef } from 'react';
import { ExternalLink, MonitorPlay, Layers, FileText, LayoutTemplate, Box } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        id: "smart-solar",
        title: "Smart Solar Cutter",
        subtitle: "IoT Automation",
        type: "Hardware & IoT",
        tags: ["Arduino", "IoT", "C++", "Sensors"],
        icon: <Box size={28} className="text-teal-600" />,
        image: "/projects/robot.jpeg",
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

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="group relative h-full w-full rounded-2xl bg-white border border-slate-200/60 p-6 shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500/10"
        >
            {/* 3D Content Container */}
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full items-start relative z-10">
                
                {/* Image Section (For First Card or Any that has an image) */}
                {project.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-md border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                )}

                <div className="flex items-center gap-4 mb-5" style={{ transform: "translateZ(30px)" }}>
                    <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition-colors">
                        {project.icon}
                    </div>
                    <div>
                        <p className="text-xs font-bold text-teal-600 tracking-wider uppercase mb-0.5">{project.type}</p>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-tight">{project.title}</h3>
                    </div>
                </div>

                <h4 className="text-sm font-semibold text-slate-500 mb-4" style={{ transform: "translateZ(20px)" }}>{project.subtitle}</h4>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow" style={{ transform: "translateZ(10px)" }}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto" style={{ transform: "translateZ(40px)" }}>
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="w-full pt-4 border-t border-slate-100/50" style={{ transform: "translateZ(20px)" }}>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <ExternalLink size={18} /> View Project
                    </motion.button>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full filter blur-3xl group-hover:bg-teal-500/10 transition-all duration-500 -z-10"></div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section relative py-20 bg-slate-50/50 overflow-hidden">
            <div className="container relative z-10 flex flex-col items-center mx-auto px-6">
                <motion.div 
                    className="flex flex-col items-center mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[50px] md:text-[70px] lg:text-[90px] leading-[0.9] font-[700] text-slate-900 mb-6 font-[family-name:var(--font-headline)] tracking-[0.05em] uppercase">
                        MY FEATURED <span className="text-teal-600">PROJECTS</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                    <p className="mt-8 text-lg text-slate-600 max-w-2xl font-medium">
                        Explore a collection of my creative work spanning across multiple disciplines and technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/5 rounded-full filter blur-[120px] -z-10"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[120px] -z-10"></div>
        </section>
    );
};

export default Projects;

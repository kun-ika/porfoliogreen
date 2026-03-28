import React from 'react';
import { ExternalLink, Github, MonitorPlay, Layers, FileText, LayoutTemplate, Box } from 'lucide-react';

const projects = [
    {
        id: "smart-solar",
        title: "Smart Solar Cutter",
        subtitle: "IoT Automation",
        type: "Hardware & IoT",
        tags: ["Arduino", "IoT", "C++", "Sensors"],
        icon: <Box size={28} className="text-indigo-500" />,
        description: "An autonomous solar-powered grass cutter reducing manual effort via ultrasonic sensors and Bluetooth control."
    },
    {
        id: "shabdayudh",
        title: "ShabdaYudh",
        subtitle: "Typing Speed App",
        type: "Desktop App",
        tags: ["Python", "Tkinter", "SQLite"],
        icon: <MonitorPlay size={28} className="text-purple-500" />,
        description: "A Python desktop application designed to improve typing speed and accuracy with live WPM calculation and leaderboards."
    },
    {
        id: "quick-salon",
        title: "Quick Salon",
        subtitle: "Booking App",
        type: "Mobile App",
        tags: ["React Native", "Firebase"],
        icon: <Layers size={28} className="text-pink-500" />,
        description: "Mobile application for salon bookings with user authentication and appointment scheduling."
    },
    {
        id: "medicare",
        title: "Medicare App",
        subtitle: "UI/UX Concept",
        type: "UI/UX Design",
        tags: ["Figma", "Prototyping"],
        icon: <LayoutTemplate size={28} className="text-indigo-500" />,
        description: "Healthcare UI/UX design project featuring user-centered wireframes and high-fidelity prototypes."
    },
    {
        id: "gutenberg",
        title: "Gutenberg Redesign",
        subtitle: "Web UI Design",
        type: "Web Development",
        tags: ["HTML", "CSS", "JS"],
        icon: <FileText size={28} className="text-purple-500" />,
        description: "Redesigned the Gutenberg website to improve navigation, accessibility, and overall responsiveness."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section relative py-20 bg-white">
            <div className="container relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
                    <p className="mt-8 text-lg md:text-xl text-secondary max-w-2xl font-medium">
                        A selection of my recent work across physical computing, software development, and UI/UX design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                    {projects.map((project) => (
                        <div key={project.id} className="glass-card hover:-translate-y-2 flex flex-col items-start border-t-4 border-t-indigo-500 relative overflow-hidden group shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full filter blur-xl group-hover:bg-indigo-500/10 transition-colors"></div>

                            <div className="flex items-center gap-4 mb-5">
                                <div className="p-3 bg-indigo-50 rounded-xl">
                                    {project.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-indigo-500 tracking-wider uppercase mb-0.5">{project.type}</p>
                                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{project.title}</h3>
                                </div>
                            </div>

                            <h4 className="text-sm font-semibold text-slate-500 mb-4">{project.subtitle}</h4>

                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 w-full pt-4 border-t border-slate-100/50">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 font-semibold rounded-lg transition-colors border border-slate-200">
                                    <Github size={18} /> Code
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-600 font-semibold rounded-lg transition-colors border border-slate-200">
                                    <ExternalLink size={18} /> View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

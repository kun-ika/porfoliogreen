import React from 'react';
import { PenTool, BrainCircuit, Users, LayoutDashboard, CodeXml } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: <PenTool className="text-secondary mb-6" size={40} />, title: "UI/UX Thinking", desc: "Crafting intuitive and aesthetically pleasing interfaces based on user needs." },
        { icon: <BrainCircuit className="text-primary mb-6" size={40} />, title: "Problem Solving", desc: "Analyzing complex challenges to create elegant and practical digital solutions." },
        { icon: <Users className="text-accent mb-6" size={40} />, title: "User Research", desc: "Understanding user behavior to drive data-informed design decisions." },
        { icon: <LayoutDashboard className="text-secondary mb-6" size={40} />, title: "Wireframing", desc: "Building structural models and interactive prototypes." },
        { icon: <CodeXml className="text-primary mb-6" size={40} />, title: "Frontend Implementation", desc: "Translating designs into clean, responsive code." }
    ];

    return (
        <section id="about" className="section relative py-20 bg-white">
            <div className="container relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        My <span className="text-gradient">Expertise</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>

                <div className="glass-card max-w-4xl mx-auto w-full text-center mb-16 shadow-lg border-t-4 border-t-indigo-500">
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-6">
                        "I come from an engineering background, which allows me to understand both the design and technical aspects of digital products."
                    </p>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        "My goal is to design intuitive user experiences that are not only visually appealing but also practical, scalable, and performance-oriented."
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {highlights.map((item, index) => (
                        <div key={index} className="glass-card hover:-translate-y-2 group flex flex-col items-center text-center">
                            <div className="transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

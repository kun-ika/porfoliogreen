"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Box, MonitorPlay, Layers } from 'lucide-react';

const featuredProjects = [
    {
        id: "smart-solar",
        title: "Smart Solar Cutter",
        category: "Hardware & IoT",
        image: "/projects/robot.jpeg",
        icon: <Box size={24} className="text-teal-400" />
    },
    {
        id: "quick-salon",
        title: "Quick Salon",
        category: "Mobile App",
        image: "/projects/quick-salon.jpg",
        icon: <Layers size={24} className="text-teal-400" />
    }
];

const FeaturedCard = ({ project }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
            className="group relative w-full h-full rounded-[40px] bg-slate-900 border border-slate-800 p-8 shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-teal-500/20"
        >
            <div className="absolute inset-0 z-0">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/50 to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end" style={{ transform: "translateZ(40px)" }}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 backdrop-blur-md flex items-center justify-center border border-slate-700/50">
                        {project.icon}
                    </div>
                    <span className="text-teal-400 font-mono text-sm tracking-wider uppercase">{project.category}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white font-[family-name:var(--font-headline)] tracking-wider leading-[1.1] mb-2">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

const FeaturedProjects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    
    // Smooth horizontal translation based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);
    
    return (
        <section ref={targetRef} className="relative h-[220vh] md:h-[300vh] bg-[#0a0f1c] font-sans">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 md:gap-24 px-6 md:px-32 items-center">
                    
                    {/* Big Heading inside the slider */}
                    <div className="flex-shrink-0 flex items-center justify-start w-[85vw] md:w-[60vw]">
                        <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[180px] xl:text-[220px] font-black font-[family-name:var(--font-headline)] leading-[0.85] tracking-tighter uppercase whitespace-nowrap md:whitespace-normal">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">MY</span><br/>
                            <span className="text-white">WORK</span>
                        </h2>
                    </div>

                    {/* Project Cards */}
                    {featuredProjects.map((p) => (
                        <div key={p.id} className="flex-shrink-0 w-[85vw] md:w-[650px] lg:w-[550px] xl:w-[650px] h-[60vh] md:h-[65vh] lg:h-[60vh] xl:h-[70vh] cursor-pointer">
                            <Link href={`/projects/${p.id}`}>
                                <FeaturedCard project={p} />
                            </Link>
                        </div>
                    ))}

                    {/* View All Projects Linking Card */}
                    <div className="flex-shrink-0 w-[60vw] md:w-[400px] h-[60vh] md:h-[70vh] flex items-center justify-center pr-12 md:pr-32">
                        <Link href="/projects" className="group flex flex-col items-center justify-center gap-6">
                            <div className="w-32 h-32 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-500 transition-all duration-500 group-hover:scale-110 shadow-xl">
                                <ArrowUpRight size={50} className="text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                            </div>
                            <span className="text-3xl text-slate-300 group-hover:text-white font-[family-name:var(--font-headline)] tracking-wider uppercase transition-colors duration-300">
                                View All
                            </span>
                        </Link>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;

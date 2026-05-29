"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Box, MonitorPlay, Layers, LayoutTemplate, FileText, Sparkles } from 'lucide-react';

const featuredProjects = [
    {
        id: "paws-care",
        title: "Paws & Care",
        category: "Full-Stack Web App",
        image: "/projects/paws-care.png",
        icon: <Sparkles size={24} className="text-[#8FAEC7]" />,
        description: "A premium bidirectional marketplace linking pet parents with professional caregivers, featuring digital wallets, booking limits, and dual dashboards."
    },
    {
        id: "smart-solar",
        title: "Smart Solar Cutter",
        category: "Hardware & IoT",
        image: "/projects/robot.jpeg",
        icon: <Box size={24} className="text-[#8FAEC7]" />,
        description: "An autonomous solar-powered grass cutter reducing manual effort via ultrasonic sensors and Bluetooth control."
    },
    {
        id: "quick-salon",
        title: "Quick Salon",
        category: "Mobile App",
        image: "/projects/quick-salon.jpg",
        icon: <Layers size={24} className="text-[#8FAEC7]" />,
        description: "Mobile application for salon bookings with user authentication and appointment scheduling."
    },
    {
        id: "screen-free",
        title: "Screen-Free Learning",
        category: "IoT & UX Research",
        image: "/projects/screen-free/ideation-concept.png",
        icon: <Box size={24} className="text-[#8FAEC7]" />,
        description: "An IoT-enabled educational shape & coloring toy system designed to reduce early childhood screen dependency."
    },
    {
        id: "medicare",
        title: "Medicare App",
        category: "UI/UX Design",
        image: "/projects/medicare.jpg",
        icon: <LayoutTemplate size={24} className="text-[#8FAEC7]" />,
        description: "Healthcare UI/UX design project featuring user-centered wireframes and high-fidelity prototypes."
    },
    {
        id: "gutenberg",
        title: "Gutenberg Redesign",
        category: "Web Development",
        image: "/projects/gutenberg.jpg",
        icon: <FileText size={24} className="text-[#8FAEC7]" />,
        description: "Redesigned the Gutenberg website to improve navigation, accessibility, and overall responsiveness."
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
            className="group relative w-full h-full rounded-[40px] bg-[#2D1E16] border border-[#8FAEC7]/20 p-10 shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-[#8FAEC7]/10"
        >
            <div className="absolute inset-0 z-0">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E140F] via-[#1E140F]/50 to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end" style={{ transform: "translateZ(40px)" }}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1E140F]/80 backdrop-blur-md flex items-center justify-center border border-[#8FAEC7]/20 group-hover:bg-[#8FAEC7] transition-colors duration-500 group-hover:text-[#1E140F]">
                        {project.icon}
                    </div>
                    <span className="text-[#8FAEC7] font-mono text-sm tracking-wider uppercase">{project.category}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FAF9F6] font-[family-name:var(--font-headline)] tracking-tight leading-[1.1] mb-6">
                    {project.title}
                </h3>
                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl line-clamp-2 md:line-clamp-3 mb-2 group-hover:text-[#FAF9F6] transition-colors duration-500">
                    {project.description}
                </p>
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
    // -115% accommodates the 6-project slide to ensure the last item is visible at the end
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-115%"]);
    
    return (
        <section ref={targetRef} className="relative h-[250vh] md:h-[300vh] bg-[#1E140F] font-sans">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 md:gap-24 px-6 md:px-32 items-center">
                    
                    {/* Big Heading inside the slider */}
                    <div className="flex-shrink-0 flex items-center justify-start w-[85vw] md:w-[60vw]">
                        <h2 className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[180px] xl:text-[220px] font-black font-[family-name:var(--font-headline)] leading-[0.85] tracking-tight uppercase whitespace-nowrap md:whitespace-normal">
                            <span className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] normal-case select-none">My</span><br/>
                            <span className="text-[#FAF9F6]">WORK</span>
                        </h2>
                    </div>

                    {/* Project Cards */}
                    {featuredProjects.map((p) => (
                        <div key={p.id} className="flex-shrink-0 w-[85vw] md:w-[750px] h-[65vh] md:h-[75vh] cursor-pointer">
                            <Link href={`/projects/${p.id}`}>
                                <FeaturedCard project={p} />
                            </Link>
                        </div>
                    ))}

                    {/* View All Projects Linking Card */}
                    <div className="flex-shrink-0 w-[60vw] md:w-[500px] h-[60vh] md:h-[70vh] flex items-center justify-center pr-12 md:pr-32">
                        <Link href="/projects" className="group flex flex-col items-center justify-center gap-6">
                            <div className="w-40 h-40 rounded-full border border-[#8FAEC7]/20 bg-[#2D1E16]/50 flex items-center justify-center group-hover:bg-[#8FAEC7] group-hover:border-[#8FAEC7] transition-all duration-500 group-hover:scale-110 shadow-2xl">
                                <ArrowUpRight size={65} className="text-slate-400 group-hover:text-[#1E140F] group-hover:rotate-45 transition-all duration-500" />
                            </div>
                            <span className="text-4xl text-[#FAF9F6] group-hover:text-[#8FAEC7] font-[family-name:var(--font-headline)] tracking-wider uppercase transition-colors duration-300">
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

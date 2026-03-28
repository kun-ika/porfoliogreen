"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, Instagram, Dribbble, Figma, Component, PenBox, Layers } from 'lucide-react';

const AccordionItem = ({ number, title, text, tags, image }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Smooth cursor tracking for the floating image preview
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Spring physics for the image following the cursor precisely
    const scaleConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const left = useSpring(mouseX, scaleConfig);
    const top = useSpring(mouseY, scaleConfig);

    const handleMouseMove = (e) => {
        // Center the landscape image exactly on the cursor
        mouseX.set(e.clientX - 160); // Half of 320px width
        mouseY.set(e.clientY - 95);  // Half of 190px height
    };

    return (
        <div 
            className="border-t border-gray-200/20 group cursor-pointer relative" 
            onClick={() => setIsOpen(!isOpen)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            {/* Floating Image Preview (Exactly matching reference: Landscape, centered, slight left rotation) */}
            <motion.div
                style={{ left, top }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    scale: isHovered ? 1 : 0.8,
                    rotate: isHovered ? -8 : -4
                }}
                transition={{ 
                    opacity: { duration: 0.3 }, 
                    scale: { duration: 0.3, type: "spring", bounce: 0.4 },
                    rotate: { duration: 0.5, type: "spring", bounce: 0.5 }
                }}
                className="fixed z-50 w-[320px] h-[190px] rounded-[16px] overflow-hidden pointer-events-none shadow-2xl"
            >
                <Image src={image} alt={title} fill className="object-cover" />
            </motion.div>

            <div className="py-6 md:py-8 flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-8">
                    <span className={`text-lg md:text-xl font-light font-sans transition-colors duration-400 ${isOpen ? 'text-[#5662F6]' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-gray-300'}`}>
                        {number}.
                    </span>
                    <h4 className={`text-[28px] md:text-[36px] font-[400] transition-colors duration-400 font-[family-name:var(--font-headline)] uppercase leading-[1] ${isOpen || isHovered ? 'text-[#5662F6]' : 'text-slate-800 dark:text-gray-200'}`}>
                        {title}
                    </h4>
                </div>
                <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }} 
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <ChevronDown className={`text-gray-400 transition-colors duration-400 ${isOpen || isHovered ? 'text-[#5662F6]' : ''}`} size={28} />
                </motion.div>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 max-w-2xl pl-[3.5rem] md:pl-[4.5rem] pb-10">
                            <p className="text-base text-slate-500 dark:text-gray-400 leading-[1.6]">
                                {text}
                            </p>
                            
                            {/* Inner Dropdown Tag Design from Reference */}
                            {tags && (
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {tags.map((tag, i) => (
                                        <div key={i} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] text-slate-800 dark:text-gray-300 text-sm font-medium shadow-sm flex items-center justify-center">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Process Card Component for the Strategy Grid
const ProcessCard = ({ num, title, text, bgClass, textClass, isSpan }) => (
    <div className={`w-full rounded-[32px] p-8 md:p-12 min-h-[440px] flex flex-col justify-between ${bgClass} ${textClass} ${isSpan ? 'md:col-span-2' : ''} hover:scale-[1.02] transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]`}>
        <span className="text-[60px] md:text-[80px] leading-[0.8] font-[400] font-[family-name:var(--font-headline)]">
            {num}
        </span>
        <div className="flex flex-col gap-4">
            <h4 className="text-[24px] md:text-[32px] leading-[1] font-[400] font-[family-name:var(--font-headline)] uppercase">
                {title}
            </h4>
            <p className={`text-sm md:text-base leading-[1.6] ${bgClass.includes('F1F1F1') ? 'text-slate-600 dark:text-gray-800' : 'text-gray-300'} ${isSpan ? 'max-w-2xl' : ''}`}>
                {text}
            </p>
        </div>
    </div>
);

const About = () => {
    // State to track which left-column section is currently dominating the viewport
    const [activeSection, setActiveSection] = useState(1);

    const slideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const expertise = [
        { 
            title: "UI/UX DESIGN", 
            text: "Creating intuitive and user-centered interfaces that balance aesthetics with functionality. Every interaction is mapped to ensure seamless experiences across all devices and touchpoints.",
            tags: ["Wireframing", "Prototyping", "User Research", "Interaction Design"],
            image: "/kunika.png"
        },
        { 
            title: "GRAPHIC DESIGN", 
            text: "Crafting visual identities, marketing assets, and cohesive branding that effectively communicates your core message and engages your target audience.",
            tags: ["Brand Identity", "Marketing Assets", "Typography", "Visual Language"],
            image: "/kunika.png"
        },
        { 
            title: "WEB DESIGN", 
            text: "Building responsive, accessible, and high-performance websites. Combining structured development with advanced design principles to output premium digital platforms.",
            tags: ["Responsive Layouts", "Web Accessibility", "Framer", "Next.js"],
            image: "/kunika.png"
        },
        { 
            title: "BRANDING", 
            text: "Establishing a strong brand voice and visual language that resonates deeply with users. Focusing on consistent representation across multiple channels.",
            tags: ["Brand Strategy", "Logo Design", "Style Guides", "Art Direction"],
            image: "/kunika.png"
        }
    ];

    const techStack = [
        { title: "Figma", desc: "My go-to for UI/UX design—perfect for wireframing, prototyping, and collaborating in real time.", icon: <Figma size={28} className="text-white" /> },
        { title: "React & Next.js", desc: "My trusted solution for scalable, interactive web development and production-grade software.", icon: <Component size={28} className="text-white" /> },
        { title: "Framer", desc: "My creative playground for building interactive and responsive websites—fast, flexible, and aesthetic.", icon: <Layers size={28} className="text-white" /> }
    ];

    const experiences = [
        { role: "CREATIVE ART DIRECTOR", company: "NovaWorks Agency", period: "2023 - Present" },
        { role: "SENIOR UI/UX DESIGNER", company: "BrightLabs Digital", period: "2020 - 2023" },
        { role: "UI DESIGNER", company: "PixelForge Interactive", period: "2018 - 2020" }
    ];

    const processes = [
        { num: "01.", title: "RESEARCH & STRATEGY", text: "In this phase, I dive deep into understanding your business, target audience, and project goals. Through research and strategic planning, I create a clear roadmap to guide the entire design process.", bgClass: "bg-[#1A1A1A] dark:bg-[#0A0A0A]", textClass: "text-white" },
        { num: "02.", title: "CONCEPT & IDEATION", text: "Here, I brainstorm and develop creative concepts that align with your vision. Initial sketches and ideas are refined into tangible wireframes, setting the direction for design and functionality.", bgClass: "bg-[#5662F6]", textClass: "text-white" },
        { num: "03.", title: "FEEDBACK & REFINEMENT", text: "Collaboration is key. I review the design with you, gather feedback, and refine the work to align with your expectations and goals. This ensures the design reflects your vision.", bgClass: "bg-[#F1F1F1] dark:bg-slate-200", textClass: "text-slate-900", isSpan: true },
        { num: "04.", title: "TESTING & OPTIMIZATION", text: "I conduct thorough testing to identify and resolve any performance or usability issues. This phase ensures the design works seamlessly across devices and meets user experience standards.", bgClass: "bg-[#5662F6]", textClass: "text-white" },
        { num: "05.", title: "LAUNCH & DELIVERY", text: "Once everything is finalized, the project is launched and delivered to you. I also provide guidance or support for ongoing maintenance to ensure long-term success.", bgClass: "bg-[#1A1A1A] dark:bg-[#0A0A0A]", textClass: "text-white" }
    ];

    // Dummy array of images that crossfade during the sticky scroll
    // In a real project, replace these paths with unique assets for each section.
    const stickyImages = {
        1: "/kunika.png",
        2: "/kunika.png",
        3: "/kunika.png"
    };

    return (
        <React.Fragment>
            <section id="about" className="relative font-sans pt-24 md:pt-32 pb-16 overflow-hidden">
                <div className="container max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 w-full">
                    
                    {/* 1. Hero Section (Scale UNCHANGED) */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-[50px] items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                            className="flex flex-col items-start"
                        >
                            <motion.h1 variants={slideUp} className="text-[120px] md:text-[160px] leading-[0.9] font-[400] text-slate-900 dark:text-white mb-6 font-[family-name:var(--font-headline)]">
                                ABOUT ME
                            </motion.h1>
                            <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-[400] uppercase text-slate-800 dark:text-gray-300 mb-8 font-[family-name:var(--font-headline)]">
                                KUNIKA JAIN
                            </motion.h2>
                            <motion.div variants={slideUp} className="text-lg md:text-xl text-slate-500 dark:text-gray-400 leading-[1.6] font-[400] max-w-xl mb-12">
                                <p className="mb-6">I’m a digital designer passionate about crafting meaningful, user-centered experiences.</p>
                                <p>With a strong foundation in visual design and a deep understanding of interactive systems, I bring ideas to life through thoughtful design, smooth animations, and responsive layouts.</p>
                            </motion.div>
                            
                            <motion.div variants={slideUp} className="flex items-center gap-6">
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 outline outline-1 outline-gray-200/20 hover:scale-110 transition-transform duration-300"><Instagram size={20} /></a>
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 outline outline-1 outline-gray-200/20 hover:scale-110 transition-transform duration-300"><PenBox size={20} /></a>
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 outline outline-1 outline-gray-200/20 hover:scale-110 transition-transform duration-300"><Dribbble size={20} /></a>
                            </motion.div>
                        </motion.div>

                        <div className="flex justify-start lg:justify-end w-full">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-full max-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden group shadow-sm bg-slate-100 dark:bg-slate-900"
                            >
                                <Image 
                                    src="/kunika.png" 
                                    alt="Kunika Jain Profile" 
                                    fill 
                                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* UNIFIED STICKY SCROLL CONTAINER (Sections 2, 3, 4) */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-[50px] relative items-start w-full">
                        
                        {/* LEFT COLUMN: Scrollable Text Content Blocks */}
                        <div className="flex flex-col gap-32 w-full h-full relative z-10">
                            
                            {/* BLOCK 1: Expertise */}
                            <motion.div 
                                onViewportEnter={() => setActiveSection(1)}
                                viewport={{ margin: "-40% 0px -40% 0px" }}
                                initial="hidden"
                                whileInView="visible"
                                variants={staggerContainer}
                                className="flex flex-col items-start w-full"
                            >
                                <motion.h3 variants={slideUp} className="text-[60px] md:text-[80px] leading-[0.9] font-[400] text-slate-900 dark:text-white mb-6 font-[family-name:var(--font-headline)]">
                                    WHAT I CAN DO<br/>FOR YOU
                                </motion.h3>
                                <motion.p variants={slideUp} className="text-base md:text-lg text-slate-500 dark:text-gray-400 leading-[1.6] font-[400] max-w-xl mb-12">
                                    As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
                                </motion.p>
                                
                                <div className="w-full flex flex-col pt-4 border-b border-gray-200/20">
                                    {expertise.map((item, idx) => (
                                        <motion.div key={idx} variants={slideUp}>
                                            <AccordionItem 
                                                number={idx + 1} 
                                                title={item.title} 
                                                text={item.text}
                                                tags={item.tags}
                                                image={item.image}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* BLOCK 2: Tech Stack */}
                            <motion.div 
                                onViewportEnter={() => setActiveSection(2)}
                                viewport={{ margin: "-40% 0px -40% 0px" }}
                                initial="hidden"
                                whileInView="visible"
                                variants={staggerContainer}
                                className="flex flex-col items-start w-full pt-12 md:pt-0"
                            >
                                <motion.h3 variants={slideUp} className="text-[60px] md:text-[80px] leading-[0.9] font-[400] text-slate-900 dark:text-white mb-6 font-[family-name:var(--font-headline)]">
                                    MY TECH STACK
                                </motion.h3>
                                <motion.p variants={slideUp} className="text-base md:text-lg text-slate-500 dark:text-gray-400 leading-[1.6] font-[400] max-w-xl mb-12">
                                    I build with intention. Framer for fast, interactive web design. Figma for clean interfaces. Custom code for complex logic. Each tool supports how I think and design.
                                </motion.p>
                                
                                <div className="w-full flex flex-col gap-0 border-t border-gray-200/20 pt-4">
                                    {techStack.map((tech, idx) => (
                                        <motion.div 
                                            key={idx}
                                            variants={slideUp}
                                            className="flex items-center gap-6 border-b border-gray-200/20 py-6"
                                        >
                                            <div className="w-[64px] h-[64px] min-w-[64px] rounded-[20px] bg-slate-900 dark:bg-slate-800 flex items-center justify-center shadow-md">
                                                {tech.icon}
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[20px] md:text-[24px] font-[400] text-slate-900 dark:text-white font-[family-name:var(--font-headline)] uppercase leading-[1]">
                                                    {tech.title}
                                                </h4>
                                                <p className="text-slate-500 dark:text-gray-400 text-base">
                                                    {tech.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* BLOCK 3: Experience Journey */}
                            <motion.div 
                                onViewportEnter={() => setActiveSection(3)}
                                viewport={{ margin: "-40% 0px -40% 0px" }}
                                initial="hidden"
                                whileInView="visible"
                                variants={staggerContainer}
                                className="flex flex-col items-start w-full pt-12 md:pt-0 pb-12"
                            >
                                <motion.h3 variants={slideUp} className="text-[60px] md:text-[80px] leading-[0.9] font-[400] text-slate-900 dark:text-white mb-6 font-[family-name:var(--font-headline)]">
                                    DISCOVER MY<br/>JOURNEY IN<br/>DESIGN
                                </motion.h3>
                                <motion.p variants={slideUp} className="text-base md:text-lg text-slate-500 dark:text-gray-400 leading-[1.6] font-[400] max-w-xl mb-12">
                                    From curious creator to full-time designer, my path has been shaped by a passion for crafting purposeful, user-centered digital experiences.
                                </motion.p>
                                
                                <div className="w-full flex flex-col gap-0 text-left border-t border-gray-200/20 pt-4">
                                    {experiences.map((exp, idx) => (
                                        <motion.div 
                                            key={idx}
                                            variants={slideUp}
                                            className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-gray-200/20 py-6 md:py-8"
                                        >
                                            <h4 className="text-[24px] md:text-[32px] leading-[1] font-[400] text-slate-800 dark:text-white mb-4 lg:mb-0 font-[family-name:var(--font-headline)]">
                                                {exp.role}
                                            </h4>
                                            <div className="flex flex-col lg:items-end">
                                                <span className="text-lg font-[600] text-[#5662F6] font-[family-name:var(--font-jakarta)] mb-1">
                                                    {exp.company}
                                                </span>
                                                <span className="text-slate-400 font-[400] text-xs font-sans uppercase tracking-wider">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>

                        {/* RIGHT COLUMN: The Sticky Element Viewport */}
                        <div className="hidden lg:flex flex-col items-end w-full h-full relative">
                            {/* Sticky Box tracking scroll bounds */}
                            <div className="sticky top-24 pt-8 w-full max-w-[400px] flex justify-end pb-[10vh]">
                                <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-sm bg-slate-100 dark:bg-slate-900 border border-gray-100 dark:border-white/5">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeSection} // changing this animates the crossfade
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            {/* Re-using same image for structure but keys force morph transition effect */}
                                            <Image 
                                                src={stickyImages[activeSection]} 
                                                alt={`Scroll Preview ${activeSection}`} 
                                                fill 
                                                className="object-cover opacity-90 saturate-50 mix-blend-multiply dark:mix-blend-normal"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 5. Design With Strategy Banner & Bento Grid */}
                    <div className="flex flex-col w-full gap-12 md:gap-16 relative z-10 pt-10">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                            className="flex flex-col items-start w-full"
                        >
                            <motion.h3 variants={slideUp} className="text-[70px] md:text-[100px] leading-[0.9] font-[400] text-slate-900 dark:text-white mb-6 font-[family-name:var(--font-headline)] max-w-[800px]">
                                DESIGN WITH STRATEGY AND CREATIVITY
                            </motion.h3>
                            <motion.p variants={slideUp} className="text-lg md:text-xl text-slate-500 dark:text-gray-400 leading-[1.6] max-w-2xl">
                                My process blends strategy and creativity to address challenges, craft solutions, and deliver designs that effectively communicate your message.
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
                        >
                            <motion.div variants={slideUp} className="w-full">
                                <ProcessCard {...processes[0]} />
                            </motion.div>
                            <motion.div variants={slideUp} className="relative w-full min-h-[440px] rounded-[32px] overflow-hidden group">
                                <Image src="/kunika.png" alt="Process Step 1" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                            </motion.div>
                            <motion.div variants={slideUp} className="w-full">
                                <ProcessCard {...processes[1]} />
                            </motion.div>

                            <motion.div variants={slideUp} className="relative w-full min-h-[440px] rounded-[32px] overflow-hidden group">
                                <Image src="/kunika.png" alt="Process Step 2" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                            </motion.div>
                            <motion.div variants={slideUp} className="w-full md:col-span-2">
                                <ProcessCard {...processes[2]} />
                            </motion.div>

                            <motion.div variants={slideUp} className="w-full">
                                <ProcessCard {...processes[3]} />
                            </motion.div>
                            <motion.div variants={slideUp} className="w-full">
                                <ProcessCard {...processes[4]} />
                            </motion.div>
                            <motion.div variants={slideUp} className="relative w-full min-h-[440px] rounded-[32px] overflow-hidden group">
                                <Image src="/kunika.png" alt="Process Step 3" fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* 6. Let's Work Together PRO FORM */}
                    <div className="flex flex-col w-full gap-8 relative z-10 pt-24 pb-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start w-full mb-8"
                        >
                            <h3 className="text-[70px] md:text-[100px] leading-[0.9] font-[400] text-slate-900 dark:text-white mb-6 font-[family-name:var(--font-headline)]">
                                LET'S WORK TOGETHER
                            </h3>
                            <p className="text-base md:text-lg text-slate-500 dark:text-gray-400 leading-[1.6] max-w-xl">
                                Let's build something impactful together—whether it's your brand, your website, or your next big idea.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-[60px] lg:gap-[100px] items-start w-full">
                            {/* Left Image Side */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative w-full max-w-[450px] aspect-[4/5] mx-auto lg:mx-0"
                            >
                                <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-sm">
                                    <Image src="/kunika.png" alt="Let's work together" fill className="object-cover" />
                                </div>
                                {/* Blue Hand Bubble Overlay */}
                                <div className="absolute -left-6 -bottom-6 md:-left-8 md:-bottom-8 w-24 h-24 md:w-32 md:h-32 bg-[#5662F6] rounded-full flex items-center justify-center shadow-2xl">
                                    {/* Using SVG similar to the waving hand illustration */}
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[50px] md:h-[50px]">
                                        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
                                        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
                                        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
                                        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Right Contact Form Side */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full flex flex-col"
                            >
                                <form className="flex flex-col gap-6 w-full">
                                    <div className="flex flex-col md:flex-row gap-6 w-full">
                                        <div className="flex flex-col w-full gap-3">
                                            <label className="text-[#5662F6] text-sm md:text-base ml-4 font-medium">Name :</label>
                                            <input type="text" placeholder="John Smith" className="w-full bg-[#EAEAEA] placeholder:text-gray-400 dark:bg-[#111111] border border-transparent rounded-full px-6 md:px-8 py-4 outline-none focus:border-[#5662F6] transition-all text-slate-800 dark:text-gray-200" />
                                        </div>
                                        <div className="flex flex-col w-full gap-3">
                                            <label className="text-[#5662F6] text-sm md:text-base ml-4 font-medium">Email :</label>
                                            <input type="email" placeholder="johnsmith@gmail.com" className="w-full bg-[#EAEAEA] placeholder:text-gray-400 dark:bg-[#111111] border border-transparent rounded-full px-6 md:px-8 py-4 outline-none focus:border-[#5662F6] transition-all text-slate-800 dark:text-gray-200" />
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 w-full mt-2">
                                        <label className="text-[#5662F6] text-sm md:text-base ml-4 font-medium">Service Needed ?</label>
                                        <div className="relative w-full">
                                            <select defaultValue="" className="w-full appearance-none bg-[#EAEAEA] dark:bg-[#111111] border border-transparent rounded-full px-6 md:px-8 py-4 outline-none focus:border-[#5662F6] transition-all text-gray-500 cursor-pointer">
                                                <option value="" disabled>Select...</option>
                                                <option value="uiux">UI / UX Design</option>
                                                <option value="web">Web Design</option>
                                                <option value="graphic">Graphic Design</option>
                                                <option value="branding">Branding</option>
                                            </select>
                                            <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none text-slate-500">
                                                <ChevronDown size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 w-full mt-2">
                                        <label className="text-[#5662F6] text-sm md:text-base ml-4 font-medium">What Can I Help You...</label>
                                        <textarea placeholder="Hello, I'd like to enquire about..." className="w-full bg-[#EAEAEA] placeholder:text-gray-400 dark:bg-[#111111] border border-transparent rounded-[32px] px-6 md:px-8 py-6 h-[180px] resize-none outline-none focus:border-[#5662F6] transition-all text-slate-800 dark:text-gray-200"></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button type="submit" className="border border-[#5662F6] text-[#5662F6] bg-transparent rounded-full px-10 py-3 md:px-12 md:py-4 uppercase tracking-[0.05em] font-medium hover:bg-[#5662F6] hover:text-white transition-colors duration-400 w-auto inline-block">
                                            SUBMIT
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 7. Solid Blue Footer (Full Width) */}
            <div className="w-full bg-[#5662F6] pt-20 pb-12 px-6 md:px-12 text-white">
                <div className="container max-w-[1200px] mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 justify-between items-start mb-20">
                        <div className="flex flex-col gap-2">
                            <span className="text-white/80 text-sm font-medium tracking-wide">Email :</span>
                            <a href="mailto:designer@example.com" className="text-xl md:text-2xl font-medium hover:opacity-80 transition-opacity">designer@example.com</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-white/80 text-sm font-medium tracking-wide">Call Today :</span>
                            <a href="tel:+15551234567" className="text-xl md:text-2xl font-medium hover:opacity-80 transition-opacity">+1 (555) 123-4567</a>
                        </div>
                        <div className="flex flex-col gap-4 md:items-end w-full">
                            <span className="text-white/80 text-sm font-medium tracking-wide">Social :</span>
                            <div className="flex items-center gap-6">
                                {/* X/Twitter Icon SVG */}
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.974H5.078z"/>
                                    </svg>
                                </a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram size={24} /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><Dribbble size={24} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80 font-light">
                        <p>© Copyright 2026. All Rights Reserved by <span className="underline decoration-white/30 underline-offset-4 cursor-pointer hover:text-white transition-colors">Kunika Jain</span></p>
                        <p>Created by <span className="underline decoration-white/30 underline-offset-4 font-medium text-white cursor-pointer hover:opacity-80 transition-colors">Kunika Jain</span></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;

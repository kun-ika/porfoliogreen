"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    CheckCircle2, 
    Calendar, 
    Bell, 
    CreditCard, 
    UserCheck, 
    Layout, 
    Smartphone, 
    Zap,
    Clock,
    ShieldCheck,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Trophy,
    Target,
    Activity,
    Users,
    Lightbulb,
    PenTool
} from 'lucide-react';

const SectionHeader = ({ title, subtitle, light = false }) => (
    <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <h2 className={`text-[35px] md:text-[55px] font-[800] ${light ? 'text-white' : 'text-slate-900'} leading-[1] font-[family-name:var(--font-headline)] tracking-tight mb-4 uppercase`}>
            {title}
        </h2>
        {subtitle && <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-500'} font-medium tracking-wide`}>{subtitle}</p>}
        <div className="w-20 h-1.5 bg-teal-600 mt-6 rounded-full"></div>
    </motion.div>
);

const ImageBox = ({ src, alt, caption }) => (
    <div className="w-full relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-[40px] blur-[60px] -z-10 group-hover:bg-teal-500/20 transition-all duration-700"></div>
        <div className="relative w-full rounded-[40px] overflow-hidden bg-slate-50 border-[4px] border-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image 
                src={src} 
                alt={alt} 
                width={1600} 
                height={900} 
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" 
            />
        </div>
        {caption && <p className="text-center text-slate-500 text-sm font-bold tracking-widest uppercase mt-6">{caption}</p>}
    </div>
);

const MedicarePage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const roles = ["UX Research", "User Interviews & Surveys", "Wireframing", "UI Design", "Prototyping"];

    return (
        <main className="bg-white min-h-screen font-sans pb-32 overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 container max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                <motion.div 
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 shadow-sm">
                        UI/UX Design Concept
                    </div>
                    <h1 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] font-[900] text-slate-950 font-[family-name:var(--font-headline)] tracking-tight uppercase">
                        MEDICARE<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">APP UI/UX</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-xl leading-relaxed">
                        Student Healthcare Experience. Improving access to campus medical services through user-centered design.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                           <ShieldCheck size={20} className="text-emerald-500" />
                           <span className="font-bold text-slate-700">Figma</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                           <Layout size={20} className="text-teal-500" />
                           <span className="font-bold text-slate-700">Prototyping</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="flex-1 w-full relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <ImageBox src="/projects/medicare/hero-ui.png" alt="Medicare UI Screens" />
                </motion.div>
            </section>

            {/* 2. OVERVIEW & 4. MY ROLE */}
            <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
                <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeader title="Overview" subtitle="About this Project" />
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            This project focuses on improving the healthcare experience for students on campus. 
                            Through detailed user research and responsive design, the primary goal was to make medical 
                            services more accessible, efficient, and user-friendly for the entire student body.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeader title="My Role" subtitle="Core Responsibilities" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roles.map((role, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0"></div>
                                    <h4 className="font-bold text-slate-800">{role}</h4>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. THE PROBLEM & 5. RESEARCH */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <SectionHeader title="The Problem" subtitle="Why it matters" />
                    <p className="text-lg text-slate-600 mb-8 font-medium">Students face multiple challenges while accessing medical services:</p>
                    <div className="space-y-4">
                        {[
                            "Medical facilities are far from campus",
                            "Emergency response is slow",
                            "Limited availability of doctors",
                            "Lack of awareness and communication"
                        ].map((prob, i) => (
                            <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <Target size={24} className="text-teal-500 shrink-0" />
                                <span className="font-bold text-slate-800 text-lg">{prob}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <SectionHeader title="Research" subtitle="Insights & Data" />
                    <div className="bg-gradient-to-br from-teal-600 to-emerald-700 p-10 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -z-0"></div>
                        <div className="relative z-10 space-y-8">
                            <p className="text-xl font-medium leading-relaxed italic opacity-90">
                                "We conducted detailed User Interviews with students & staff and deployed a survey with ~25 responses to validate our assumptions."
                            </p>
                            <h4 className="text-2xl font-black uppercase tracking-widest mt-8 mb-4">Key Insights</h4>
                            <div className="grid grid-cols-1 gap-6 pt-2">
                                {[
                                    "Students struggle immensely in emergencies",
                                    "Routine healthcare is not easily accessible",
                                    "A communication gap exists with providers"
                                ].map((res, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-bold">
                                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={16} className="text-teal-200" />
                                        </div>
                                        <span>{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 6. DEFINING THE EXPERIENCE */}
            <section className="py-24 bg-slate-950 text-white rounded-[60px] mx-6 md:mx-12 overflow-hidden relative my-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] -z-10"></div>
                <div className="container max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
                    <SectionHeader title="Defining the Experience" subtitle="Empathy & User Behavior" light />
                    <p className="text-xl text-slate-300 font-medium max-w-3xl mb-16 leading-relaxed">
                        To better understand users, we created detailed user personas and designed user journey maps. 
                        This helped critically identify pain points and opportunities for improvement.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-16 w-full mt-10">
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-[48px]">
                                <Image 
                                    src="/projects/medicare/persona.png" 
                                    alt="User Persona" 
                                    width={1600} 
                                    height={900} 
                                    className="w-full h-auto rounded-[32px]" 
                                />
                            </div>
                            <p className="mt-6 text-teal-400 font-bold tracking-widest uppercase">Persona Profile</p>
                        </motion.div>
                        
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-[48px]">
                                <Image 
                                    src="/projects/medicare/journey.png" 
                                    alt="User Journey Map" 
                                    width={1600} 
                                    height={900} 
                                    className="w-full h-auto rounded-[32px]" 
                                />
                            </div>
                            <p className="mt-6 text-teal-400 font-bold tracking-widest uppercase">User Journey Mapping</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. IDEATION */}
            <section className="pt-32 pb-12 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="Ideation" subtitle="Feature Exploration" />
                <p className="text-xl text-slate-600 mb-16 max-w-4xl font-medium leading-relaxed">
                    We explored multiple solutions through aggressive brainstorming, mind mapping, and feature mapping.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <ImageBox src="/projects/medicare/mindmap.jpg" alt="Mind Mapping" />
                        <h4 className="text-2xl font-black text-center mt-6 uppercase tracking-tight">Mind Mapping</h4>
                    </motion.div>
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <ImageBox src="/projects/medicare/brainstorming.jpg" alt="Brainstorming" />
                        <h4 className="text-2xl font-black text-center mt-6 uppercase tracking-tight">Brainstorming</h4>
                    </motion.div>
                </div>

            </section>

            {/* 8. USER FLOW */}
            <section className="pt-12 pb-32 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="User Flow" subtitle="Architecture & Navigation" />
                <p className="text-xl text-slate-600 mb-16 max-w-4xl font-medium leading-relaxed">
                    A comprehensive interaction architecture to map system usability seamlessly across all primary screens.
                </p>
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <ImageBox src="/projects/medicare/flowchart.png" alt="User Flow Architecture" />
                </motion.div>

                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20">
                    <div className="bg-slate-50 border border-slate-200 p-12 md:p-16 rounded-[40px] text-center">
                        <h3 className="text-3xl font-black mb-10 text-slate-900 uppercase">Key Features Identified</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {["Appointment Booking", "Emergency Support", "Medical Records", "Doctor Availability"].map((feat, i) => (
                                <div key={i} className="px-8 py-4 bg-white rounded-full shadow-sm border border-slate-100 flex items-center gap-3">
                                    <Lightbulb className="text-teal-500" size={20} />
                                    <span className="font-bold text-slate-800 text-lg sm:text-xl">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 9. DESIGN PROCESS */}
            <section className="py-32 bg-slate-50 overflow-hidden relative">
                <div className="container max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader title="Design Process" subtitle="Low Fidelity Structure" />
                    
                    <div className="mt-16">
                        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Wireframes</h3>
                            <p className="text-xl text-slate-600 mb-10 font-medium max-w-3xl">Basic structure and layout planning created efficiently to refine the layouts before investing in visuals.</p>
                            <ImageBox src="/projects/medicare/wireframes.png" alt="Low Fidelity Wireframes" />
                            <p className="mt-12 text-center text-teal-600 font-black tracking-widest uppercase text-xl">All designs created locally in Figma</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. FINAL DESIGN */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="Final Design" subtitle="High Fidelity Outcomes" />
                <p className="text-xl text-slate-600 mb-16 max-w-3xl font-medium leading-relaxed">
                    The final design provides a clean and simple interface, easy navigation, quick access to medical services, and an emergency support system.
                </p>

                <div className="space-y-16">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <ImageBox src="/projects/medicare/final-ui-2.png" alt="Final UI Screens" />
                    </motion.div>
                </div>
            </section>

            {/* 10. SOLUTION & 11. IMPACT */}
            <section className="container max-w-7xl mx-auto px-6 mb-32">
                <div className="p-12 md:p-20 rounded-[60px] bg-slate-950 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] -z-0"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-center lg:text-left">
                        <div className="space-y-8">
                            <SectionHeader title="The Solution" subtitle="User-Centered App" light />
                            <p className="text-xl text-slate-300 font-medium leading-relaxed mb-6">
                                A mobile-based healthcare system created for real students that:
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Simplifies appointment booking",
                                    "Provides emergency assistance",
                                    "Improves communication",
                                    "Enhances overall user experience"
                                ].map((res, i) => (
                                    <div key={i} className="flex gap-4 justify-center lg:justify-start">
                                        <CheckCircle2 size={24} className="text-teal-400 shrink-0" />
                                        <span className="font-bold text-xl uppercase tracking-tight">{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative lg:pl-12 pt-8 lg:pt-0">
                            <motion.div 
                                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[48px] p-10 md:p-14 space-y-10 relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -z-10"></div>
                                <h4 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-8">
                                    The <span className="text-teal-400">Impact</span>
                                </h4>
                                <ul className="space-y-8">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">📉</div>
                                        <h5 className="text-xl font-bold tracking-tight">Reduced confusion in accessing services</h5>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">⚡</div>
                                        <h5 className="text-xl font-bold tracking-tight">Faster response experience</h5>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">✅</div>
                                        <h5 className="text-xl font-bold tracking-tight">Improved usability and accessibility</h5>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. LEARNINGS & 13. FINAL LINE */}
            <section className="py-24 container max-w-5xl mx-auto px-6 text-center space-y-20">
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <SectionHeader title="Learnings" subtitle="Takeaways" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-12">
                        {[
                            "Importance of user research",
                            "Designing for real-world problems",
                            "Creating user-centered solutions",
                            "Understanding complete UX workflow"
                        ].map((learn, i) => (
                            <div key={i} className="bg-white border-2 border-slate-100 p-8 pt-10 rounded-[32px] flex flex-col gap-4 relative group hover:border-teal-300 transition-colors">
                                <div className="absolute -top-6 left-8 p-3 bg-teal-50 rounded-2xl group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                    <PenTool />
                                </div>
                                <p className="text-xl font-black text-slate-800 uppercase tracking-tight">{learn}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="p-12 md:p-16 rounded-[40px] border border-slate-200 bg-slate-50"
                >
                    <p className="text-2xl md:text-3xl font-black text-slate-800 leading-tight italic">
                        "This project includes a complete UX process where low-fidelity, mid-fidelity and high-fidelity designs were created using Figma to build a scalable, user-centered solution."
                    </p>
                </motion.div>

                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-12">
                    <Link href="/projects" className="inline-flex items-center gap-6 text-[28px] md:text-[42px] font-black text-slate-900 hover:text-teal-600 transition-all group">
                        Explore More Projects
                        <ArrowRight size={48} className="group-hover:translate-x-6 transition-transform text-teal-500" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default MedicarePage;

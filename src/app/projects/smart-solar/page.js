"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Cpu, 
    ShieldCheck, 
    Battery, 
    Zap, 
    Settings, 
    Navigation2, 
    AlertTriangle 
} from 'lucide-react';

const SectionHeader = ({ title, subtitle }) => (
    <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <h2 className="text-[40px] md:text-[60px] font-[700] text-slate-900 leading-[1] font-[family-name:var(--font-headline)] tracking-[0.05em] mb-4 uppercase">
            {title}
        </h2>
        {subtitle && <p className="text-lg text-slate-500 font-medium tracking-wide">{subtitle}</p>}
        <div className="w-20 h-1 bg-teal-500 mt-6 rounded-full"></div>
    </motion.div>
);

const SmartSolarPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const features = [
        { name: "Solar Powered System", icon: <Zap className="text-yellow-500" /> },
        { name: "Automatic Navigation", icon: <Navigation2 className="text-blue-500" /> },
        { name: "Obstacle Detection", icon: <AlertTriangle className="text-orange-500" /> },
        { name: "Battery Backup", icon: <Battery className="text-emerald-500" /> },
        { name: "Blade Control", icon: <Settings className="text-slate-500" /> },
        { name: "Safety Mechanism", icon: <ShieldCheck className="text-teal-600" /> },
    ];

    const techStack = ["Arduino UNO", "Ultrasonic Sensor", "Motor Driver", "Bluetooth Module", "Solar Panel", "Battery System"];

    return (
        <main className="bg-[#FAF9F6] min-h-screen font-sans pb-32 overflow-x-hidden">
            {/* STICKY NAV */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
                <Link href="/projects" className="pointer-events-auto inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-all group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold tracking-wider uppercase text-sm">Back to Projects</span>
                </Link>
            </nav>

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 container max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <motion.div 
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-teal-600 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                        INTERNET OF THINGS
                    </div>
                    <h1 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] font-[700] text-slate-950 font-[family-name:var(--font-headline)] tracking-[0.05em] uppercase">
                        SMART SOLAR<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">GRASS CUTTER</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-xl leading-relaxed">
                        An IoT-based automated grass cutting system powered by solar energy.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="flex-1 relative aspect-square w-full max-w-[600px]"
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-[60px] blur-[80px] -z-10"></div>
                    <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform duration-700">
                        <Image 
                            src="/projects/robot.jpeg" 
                            alt="Smart Solar Grass Cutter" 
                            fill 
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </section>

            {/* PROJECT OVERVIEW */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <SectionHeader title="Project Overview" />
                    <motion.p 
                        className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        This project focuses on building an eco-friendly and automated grass cutting system using solar energy. 
                        It reduces manual effort, avoids fuel usage, and improves safety with smart obstacle detection.
                    </motion.p>
                </div>
            </section>

            {/* VISUAL ANALYSIS GRID */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
                
                {/* 4. Mind Mapping */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <SectionHeader title="Project Understanding" subtitle="Mind Mapping Section" />
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            The system integrates multiple functionalities like automation, obstacle detection, and solar power to create an efficient and smart grass cutting solution.
                        </p>
                    </div>
                    <motion.div 
                        className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-white"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Image 
                            src="/projects/smart-solar/mind-mapping.png" 
                            alt="Mind Mapping" 
                            fill 
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* 5. Product Lifecycle */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
                    <motion.div 
                        className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-white order-2 lg:order-1"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Image 
                            src="/projects/smart-solar/lifecycle.png" 
                            alt="Product Lifecycle" 
                            fill 
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <SectionHeader title="Product Lifecycle" subtitle="From Creation to Sustainability" />
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            The lifecycle includes designing, assembling, using, and sustainable disposal of components, ensuring an environmentally friendly approach.
                        </p>
                    </div>
                </div>

                {/* 6. Problem Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <SectionHeader title="Problem & Solution Analysis" subtitle="Addressing Core Challenges" />
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            This project addresses real-world issues such as manual labor, fuel consumption, and safety risks by introducing an automated and sustainable solution.
                        </p>
                    </div>
                    <motion.div 
                        className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-white"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Image 
                            src="/projects/smart-solar/problem-analysis.png" 
                            alt="Problem Analysis" 
                            fill 
                            className="object-cover"
                        />
                    </motion.div>
                </div>

            </section>

            {/* FEATURES SECTION */}
            <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] -z-10"></div>
                <div className="container max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <h2 className="text-[40px] md:text-[60px] font-[700] text-white leading-[1] font-[family-name:var(--font-headline)] tracking-tight mb-4 uppercase">
                            CORE FEATURES
                        </h2>
                        <div className="w-20 h-1 bg-teal-400 mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-6 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                                    {React.cloneElement(feature.icon, { size: 32 })}
                                </div>
                                <span className="text-xl font-bold tracking-wide">{feature.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS, TECH STACK, ROLE, RESULT */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
                
                {/* 8. Working Process */}
                <div className="space-y-12">
                    <SectionHeader title="Working Process" />
                    <div className="space-y-8">
                        {[
                            "Solar panel charges battery",
                            "Arduino controls system",
                            "Sensors detect obstacles",
                            "Motor moves and cuts grass",
                            "Direction changes automatically"
                        ].map((step, i) => (
                            <motion.div key={i} className="flex gap-6 items-start" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="w-10 h-10 min-w-[40px] rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-lg shadow-lg">
                                    {i + 1}
                                </div>
                                <p className="text-xl text-slate-800 font-bold self-center">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 9. Tech Stack */}
                <div className="space-y-12">
                    <SectionHeader title="Tech Stack" />
                    <div className="flex flex-wrap gap-4">
                        {techStack.map((tech, i) => (
                            <motion.div 
                                key={i}
                                className="px-8 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-lg font-bold text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-all cursor-default"
                                whileHover={{ y: -5 }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 10. My Role */}
                <div className="space-y-12">
                    <SectionHeader title="My Role" />
                    <div className="space-y-6">
                        {[
                            "Designed full concept",
                            "Built hardware model",
                            "Integrated components",
                            "Tested and improved system"
                        ].map((role, i) => (
                            <div key={i} className="flex items-center gap-4 text-xl font-bold text-slate-800">
                                <CheckCircle2 className="text-teal-600 shrink-0" size={28} />
                                <span>{role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 11. Result */}
                <div className="p-12 md:p-16 rounded-[48px] bg-gradient-to-br from-[#0d9488] to-[#10b981] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -z-0"></div>
                    <div className="relative z-10 space-y-8">
                        <SectionHeader title="The Result" subtitle="Positive Impact & Success" />
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                "Reduced manual effort",
                                "Eco-friendly solution",
                                "Improved safety",
                                "Efficient performance"
                            ].map((res, i) => (
                                <div key={i} className="flex items-center gap-4 text-2xl font-black">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                    <span>{res}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* FINAL CTA */}
            <section className="py-24 container max-w-7xl mx-auto px-6 text-center">
                <Link href="/projects" className="inline-flex items-center gap-4 text-[24px] md:text-[32px] font-black text-slate-900 hover:text-teal-600 transition-colors group">
                    View More Projects
                    <ArrowRight size={36} className="group-hover:translate-x-4 transition-transform" />
                </Link>
            </section>

        </main>
    );
};

export default SmartSolarPage;

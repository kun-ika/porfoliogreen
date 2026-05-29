"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Smartphone, 
    Heart, 
    ShieldAlert, 
    Lightbulb, 
    User, 
    Smile, 
    LineChart,
    Sparkles,
    Settings,
    FileText
} from 'lucide-react';

const SectionHeader = ({ title, subtitle, light = false }) => (
    <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <h2 className={`text-[32px] md:text-[50px] font-black ${light ? 'text-[#FAF9F6]' : 'text-[#4E3629]'} leading-[1.1] font-[family-name:var(--font-headline)] tracking-tight uppercase`}>
            {title}
        </h2>
        {subtitle && <p className={`text-xl md:text-2xl ${light ? 'text-[#8FAEC7]' : 'text-[#6B5548]'} font-[family-name:var(--font-cursive)] font-bold italic mt-2`}>{subtitle}</p>}
        <div className="w-20 h-1.5 bg-[#8FAEC7] mt-5 rounded-full"></div>
    </motion.div>
);

const ScreenFreePage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const rolesList = [
        "Secondary Research & Literature Review",
        "Parent Survey & Quantitative Analysis",
        "Hypothesis Validation & Persona Empathy Mapping",
        "User Journey Mapping & Intervention Points",
        "Product Concept Ideation & Workshop Facilitation",
        "Smart Toy Physical Prototyping & IoT Architecture"
    ];

    const keyFindings = [
        "Most children are exposed to screens before age 2.",
        "Parents use phones to calm children during daily activities.",
        "Screen dependency often leads to tantrums when devices are removed.",
        "Parents actively seek engaging screen-free alternatives.",
        "Physical and sensory learning remains highly effective for early childhood development."
    ];

    const earlyModels = [
        { country: "Finland", detail: "Emphasizes play-based learning, high outdoor time, and zero early academic pressure." },
        { country: "Japan", detail: "Fosters group harmony, independence, sensory integration, and physical responsibility." },
        { country: "Ireland", detail: "Focuses heavily on standard developmental milestones paired with rich narrative storytelling." }
    ];

    const finalFeatures = [
        { title: "Shape Recognition", desc: "Allows tactile learning by identifying blocks physically." },
        { title: "Color Identification", desc: "Teaches colors through responsive feedback loops." },
        { title: "Interactive Audio Feedback", desc: "Plays music, guides instructions, and congratulates the child." },
        { title: "Reward-Based Interaction", desc: "Builds healthy emotional regulation through positive loops." },
        { title: "IoT Cloud Integration", desc: "Transfers usage stats to parents quietly behind the scenes." }
    ];

    return (
        <main className="bg-[#FAF9F6] min-h-screen font-sans pb-32 overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 container max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                <motion.div 
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-4 py-2 bg-[#E9F0F6] border border-[#8FAEC7]/20 rounded-full text-[#4E3629] font-bold tracking-[0.2em] text-xs uppercase mb-4">
                        IoT & UX Research Case Study
                    </div>
                    <h1 className="text-[55px] md:text-[80px] lg:text-[95px] leading-[0.9] font-black text-[#4E3629] font-[family-name:var(--font-headline)] tracking-tight uppercase">
                        SCREEN-FREE<br/>
                        <span className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] normal-case">Learning System</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#6B5548] font-medium max-w-2xl leading-relaxed">
                        A research-driven interactive technology system designed to reduce screen dependency among children aged 1–6 years.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="flex-grow w-full max-w-[550px] relative aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform duration-700"
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image 
                        src="/projects/screen-free/ideation-concept.png" 
                        alt="Smart Shape & Coloring Toy Ideation" 
                        fill 
                        className="object-contain p-6 bg-white"
                        priority
                    />
                </motion.div>
            </section>

            {/* OVERVIEW & PROBLEM */}
            <section className="py-24 bg-white border-y border-[#8FAEC7]/20">
                <div className="container max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <SectionHeader title="Project Overview" subtitle="Cozy & Screen-Free Alternative" />
                        <p className="text-lg text-[#6B5548] leading-relaxed">
                            Designed to address the growing screen addiction epidemic among young kids, this project presents an interactive physical toy system. 
                            By merging physical interaction, sensory learning, and smart IoT-enabled feedback, we encourage healthy cognitive and behavioral development without emitting harmful screen light.
                        </p>
                    </div>
                    <div className="space-y-6 bg-[#FAF9F6] p-8 md:p-10 rounded-[32px] border-2 border-[#8FAEC7]/20">
                        <h3 className="text-2xl font-bold text-[#4E3629] flex items-center gap-3">
                            <ShieldAlert className="text-[#8FAEC7]" /> The Problem
                        </h3>
                        <p className="text-base text-[#6B5548] leading-relaxed">
                            Parents increasingly rely on smartphones during mealtime, travel, and busy daily routines to keep their toddlers engaged. 
                            However, early-age screen exposure decreases attention spans, triggers emotional outbursts, impairs physical motor skills, and limits real-life physical social learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* KEY FINDINGS */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="Secondary Research Findings" subtitle="Insights from developmental science" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {keyFindings.map((finding, idx) => (
                        <motion.div 
                            key={idx}
                            className="bg-white p-8 rounded-[32px] border-2 border-[#8FAEC7]/30 hover:border-[#8FAEC7] transition-all duration-300 shadow-sm flex flex-col justify-between"
                            whileHover={{ y: -5 }}
                        >
                            <p className="text-[#6B5548] text-lg font-bold leading-relaxed">{finding}</p>
                            <span className="text-sm font-bold text-[#8FAEC7] mt-6 tracking-widest uppercase">Finding 0{idx + 1}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* GLOBAL RESEARCH MODELS */}
            <section className="py-24 bg-white border-y border-[#8FAEC7]/20">
                <div className="container max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader title="Global Learning Models" subtitle="Pedagogical models we analyzed" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        {earlyModels.map((model, idx) => (
                            <div key={idx} className="p-8 bg-[#FAF9F6] rounded-[32px] border-2 border-[#8FAEC7]/10 flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#E9F0F6] flex items-center justify-center font-black text-xl text-[#4E3629]">
                                    {idx + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-[#4E3629]">{model.country} Model</h3>
                                <p className="text-base text-[#6B5548] leading-relaxed">{model.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USER PERSONAS */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="Target Personas" subtitle="Whom we designed for" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    
                    {/* Aarav Card */}
                    <div className="bg-white p-8 rounded-[40px] border-2 border-[#8FAEC7]/30 shadow-sm flex flex-col gap-6">
                        <div className="relative w-full aspect-[1.8/1] rounded-[24px] overflow-hidden">
                            <Image 
                                src="/projects/screen-free/child-persona.png" 
                                alt="Child Persona Aarav" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#4E3629] mb-1">Aarav (4 Years Old)</h3>
                            <p className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] text-xl font-bold">Child Profile</p>
                            <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                Aarav gets heavily engaged with video content during travel and meals. He is prone to temper tantrums if the tablet or mobile screen is taken away abruptly.
                            </p>
                        </div>
                    </div>

                    {/* Megha Card */}
                    <div className="bg-white p-8 rounded-[40px] border-2 border-[#8FAEC7]/30 shadow-sm flex flex-col gap-6">
                        <div className="relative w-full aspect-[1.8/1] rounded-[24px] overflow-hidden">
                            <Image 
                                src="/projects/screen-free/parent-persona.png" 
                                alt="Parent Persona Megha" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#4E3629] mb-1">Megha (Working Mother)</h3>
                            <p className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] text-xl font-bold">Parent Profile</p>
                            <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                Wants to minimize screens but uses smartphones to secure peace of mind during highly demanding work-from-home tasks and feeding routines.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* USER JOURNEY SCENARIO */}
            <section className="py-24 bg-white border-y border-[#8FAEC7]/20">
                <div className="container max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                    <SectionHeader title="User Scenario Storyboard" subtitle="Visualizing Aarav & Megha's daily screen cycle" />
                    <div className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                        <Image 
                            src="/projects/screen-free/user-scenario.png" 
                            alt="User Scenario Storyboard" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* PRODUCT USE CASE */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                <SectionHeader title="Storyline & Use Case" subtitle="Connecting physical toys with cloud feedback" />
                <div className="relative w-full aspect-[1.2/1] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                    <Image 
                        src="/projects/screen-free/storyline.png" 
                        alt="Product Use Case & Storyline" 
                        fill 
                        className="object-cover"
                    />
                </div>
            </section>

            {/* DESIGN PROCESS & MY ROLE */}
            <section className="py-24 bg-white border-y border-[#8FAEC7]/20">
                <div className="container max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16">
                    
                    {/* Roles list */}
                    <div className="space-y-8">
                        <SectionHeader title="Design Scope & Role" subtitle="My core contributions" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {rolesList.map((role, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-xl bg-[#E9F0F6] flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={16} className="text-[#8FAEC7]" />
                                    </div>
                                    <span className="text-[#6B5548] text-sm font-bold leading-relaxed">{role}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Design opportunities */}
                    <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-[40px] border-2 border-[#8FAEC7]/30 flex flex-col justify-center space-y-6">
                        <h3 className="text-3xl font-black text-[#4E3629] leading-tight">Design Opportunities</h3>
                        <ul className="space-y-4 text-base text-[#6B5548]">
                            <li>💡 How might we support tactile shape & color learning without digital screens?</li>
                            <li>🎨 How might we introduce positive behavior rewards that feel as exciting as digital games?</li>
                            <li>🔄 How might we let busy parents monitor child progress quietly from their smartphones?</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* SELECTED CONCEPT DETAILS */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="The Final Concept" subtitle="Smart Shape & Coloring Toy System" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">
                    
                    <div className="space-y-8">
                        <p className="text-xl text-[#6B5548] leading-relaxed">
                            Our final selection is a <strong>smart, screen-free tactile console</strong>. It combines real shape blocks, smart identification sensors, and customizable coloring worksheets. 
                            Children receive direct audio and light rewards instantly upon correct completion, guiding them like a supportive tutor.
                        </p>
                        
                        <div className="space-y-4">
                            {finalFeatures.map((feat, idx) => (
                                <div key={idx} className="p-5 bg-white rounded-2xl border-2 border-[#8FAEC7]/20">
                                    <h4 className="font-bold text-[#4E3629] mb-1">{feat.title}</h4>
                                    <p className="text-sm text-slate-500">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square w-full rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-white">
                        <Image 
                            src="/projects/screen-free/ideation-concept.png" 
                            alt="Final Product Sketch" 
                            fill 
                            className="object-contain p-6"
                        />
                    </div>

                </div>
            </section>

            {/* IMPACT */}
            <section className="py-24 bg-[#1E140F] text-white rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8FAEC7]/10 rounded-full blur-[120px] -z-10"></div>
                <div className="container max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    <div className="space-y-6">
                        <SectionHeader title="For the Children" subtitle="Healthy cognitive growth" light />
                        <ul className="space-y-4 text-slate-300 text-lg">
                            <li>🌱 <strong>-75% screen time</strong> during key developmental hours.</li>
                            <li>🎨 Encourages tangible and sensory play discovery.</li>
                            <li>🤝 Teaches early emotional regulation through calm audio prompts.</li>
                            <li>🦁 Promotes active motor and creative drawing exploration.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <SectionHeader title="For the Parents" subtitle="Real-life helper" light />
                        <ul className="space-y-4 text-slate-300 text-lg">
                            <li>💼 Practical hands-on toy that keeps children busy independently.</li>
                            <li>❤️ Eliminates parent guilt associated with digital babysitting.</li>
                            <li>📈 Auto-syncs daily playtime habits to parent's phone.</li>
                            <li>🍀 Safe, child-friendly build materials.</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 container max-w-7xl mx-auto px-6 text-center">
                <Link href="/projects" className="inline-flex items-center gap-6 text-[28px] md:text-[42px] font-black text-[#4E3629] hover:text-[#8FAEC7] transition-all group">
                    Explore More Projects
                    <ArrowRight size={48} className="group-hover:translate-x-6 transition-transform text-[#8FAEC7]" />
                </Link>
            </section>

        </main>
    );
};

export default ScreenFreePage;

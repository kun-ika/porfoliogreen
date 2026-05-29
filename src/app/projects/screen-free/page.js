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
    FileText,
    Layers,
    ChevronLeft,
    ChevronRight
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

const CompanionAppMockups = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const mockups = [
        {
            title: "Onboarding Flow",
            subtitle: "Splash Screen & Sign-up Verification",
            desc: "Designed with simplified forms and OTP entry. Seamlessly introduces parents to the screen-free ecosystem.",
            image: "/projects/screen-free/app-mockup-1.png"
        },
        {
            title: "Identity & Profile Setup",
            subtitle: "Sign-in Screen & Children Profile details",
            desc: "Collects early age demographics (name, age, gender) to customize specific tactile tasks dynamically.",
            image: "/projects/screen-free/app-mockup-2.png"
        },
        {
            title: "Device Connection",
            subtitle: "QR Scan Screen & Parent's Main Dashboard",
            desc: "Synchronizes the physical toy with the cloud database using a quick and easy QR Code pairing interface.",
            image: "/projects/screen-free/app-mockup-3.png"
        },
        {
            title: "Analytics & History",
            subtitle: "Detailed Learning Logs & Activity Charts",
            desc: "Allows parents to analyze round-by-round correct answers, total active play duration, and child accuracy metrics.",
            image: "/projects/screen-free/app-mockup-4.png"
        },
        {
            title: "Custom Learning Creator",
            subtitle: "Creating customized task configurations",
            desc: "Enables parents to build personalized learning sessions by choosing custom targets, shape lists, and active levels.",
            image: "/projects/screen-free/app-mockup-5.png"
        }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % mockups.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + mockups.length) % mockups.length);

    return (
        <section className="py-24 bg-white border-y border-[#8FAEC7]/20">
            <div className="container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="High Fidelity App Mockups" subtitle="Smart Learning Companion Mobile Application" />

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center mt-12">
                    
                    {/* Active Mockup Image Display */}
                    <div className="relative w-full aspect-[16/10] bg-[#FAF9F6] rounded-[36px] overflow-hidden border-4 border-[#8FAEC7]/30 shadow-2xl p-6 group">
                        <motion.div 
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full h-full"
                        >
                            <Image 
                                src={mockups[activeIndex].image} 
                                alt={mockups[activeIndex].title} 
                                fill 
                                className="object-contain"
                            />
                        </motion.div>

                        {/* Arrows */}
                        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 border border-[#8FAEC7]/20 flex items-center justify-center text-[#4E3629] shadow-lg hover:bg-[#8FAEC7] hover:text-white transition-all">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 border border-[#8FAEC7]/20 flex items-center justify-center text-[#4E3629] shadow-lg hover:bg-[#8FAEC7] hover:text-white transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Meta/Description Details */}
                    <div className="space-y-8">
                        <div className="flex gap-2">
                            {mockups.map((_, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-10 bg-[#8FAEC7]' : 'w-2 bg-[#FAF9F6] border border-[#8FAEC7]/30'}`}
                                />
                            ))}
                        </div>

                        <div className="space-y-4">
                            <span className="px-4 py-1.5 bg-[#FAF9F6] border border-[#8FAEC7]/20 rounded-full text-xs font-bold uppercase tracking-widest text-[#4E3629]">
                                Screen 0{activeIndex + 1} of 0{mockups.length}
                            </span>
                            <h3 className="text-3xl font-black text-[#4E3629] uppercase leading-none tracking-tight">
                                {mockups[activeIndex].title}
                            </h3>
                            <h4 className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] text-2xl font-bold italic">
                                {mockups[activeIndex].subtitle}
                            </h4>
                            <p className="text-[#6B5548] text-lg font-medium leading-relaxed pt-2">
                                {mockups[activeIndex].desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#8FAEC7]/20">
                            <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-[#8FAEC7]/10">
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold">Platform</span>
                                <span className="font-bold text-[#4E3629]">React Native (iOS & Android)</span>
                            </div>
                            <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-[#8FAEC7]/10">
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold">Design Assets</span>
                                <span className="font-bold text-[#4E3629]">Figma UX Kit</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

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

            {/* HIGH FIDELITY COMPANION APP MOCKUPS */}
            <CompanionAppMockups />

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

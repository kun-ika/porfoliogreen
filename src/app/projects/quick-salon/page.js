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
    Activity
} from 'lucide-react';

const ScreenSlider = ({ screens }) => {
    const [current, setCurrent] = React.useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % screens.length);
    const prev = () => setCurrent((prev) => (prev - 1 + screens.length) % screens.length);

    return (
        <div className="relative group">
            <div className="relative aspect-[9/19] w-full bg-slate-900 rounded-[32px] overflow-hidden border-[6px] border-slate-800 shadow-2xl">
                {/* Mobile Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                
                <motion.div 
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative w-full h-full"
                >
                    <Image 
                        src={screens[current]} 
                        alt={`Screen ${current + 1}`} 
                        fill 
                        className="object-cover"
                    />
                </motion.div>

                {/* Slider Controls */}
                {screens.length > 1 && (
                    <>
                        <button 
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button 
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30"
                        >
                            <ChevronRight size={16} />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                            {screens.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-teal-400 w-4' : 'bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

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

const QuickSalonPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const features = [
        { name: "Appointment Booking", icon: <Calendar className="text-teal-500" /> },
        { name: "Real-time Notifications", icon: <Bell className="text-emerald-500" /> },
        { name: "Digital Payments", icon: <CreditCard className="text-blue-500" /> },
        { name: "User Authentication", icon: <UserCheck className="text-teal-600" /> },
        { name: "Booking Management", icon: <Layout className="text-emerald-600" /> },
        { name: "Smooth UI/UX", icon: <Smartphone className="text-teal-500" /> },
    ];

    const techStack = ["React Native", "Firebase", "Expo", "Fast2SMS (OTP)", "Stripe / UPI", "Redux Toolkit"];

    const screenCategories = [
        { 
            title: "Authentication", 
            desc: "Secure login, signup, and OTP verification flow.",
            screens: [
                "/projects/quick-salon/auth/signin.jpg",
                "/projects/quick-salon/auth/signup.jpg",
                "/projects/quick-salon/auth/otp.jpg",
                "/projects/quick-salon/auth/forgot.jpg",
                "/projects/quick-salon/auth/logout.jpg"
            ]
        },
        { 
            title: "Home & Discovery", 
            desc: "Live service catalog and categorized browsing.",
            screens: [
                "/projects/quick-salon/home/home1.jpg",
                "/projects/quick-salon/home/home2.jpg",
                "/projects/quick-salon/home/home3.jpg",
                "/projects/quick-salon/home/home4.jpg",
                "/projects/quick-salon/home/home5.jpg",
                "/projects/quick-salon/home/home6.jpg"
            ] 
        },
        { 
            title: "Booking Journey", 
            desc: "Step-by-step reservation and scheduling.",
            screens: [
                "/projects/quick-salon/booking/booking1.jpg",
                "/projects/quick-salon/booking/booking2.jpg",
                "/projects/quick-salon/booking/booking3.jpg",
                "/projects/quick-salon/booking/booking4.jpg",
                "/projects/quick-salon/booking/booking5.jpg"
            ] 
        },
        { 
            title: "Expert Profile", 
            desc: "Personalized history and account management.",
            screens: [
                "/projects/quick-salon/profile/profile1.jpg",
                "/projects/quick-salon/profile/profile2.jpg"
            ] 
        },
    ];

    return (
        <main className="bg-white min-h-screen font-sans pb-32 overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 container max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                <motion.div 
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 shadow-sm">
                        Mobile Application
                    </div>
                    <h1 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] font-[900] text-slate-950 font-[family-name:var(--font-headline)] tracking-tight uppercase">
                        QUICK<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">SALON APP</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-xl leading-relaxed">
                        A digital booking ecosystem providing real-time availability, secure payments, and a frictionless interface for salon enthusiasts.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                           <ShieldCheck size={20} className="text-emerald-500" />
                           <span className="font-bold text-slate-700">React Native</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                           <Zap size={20} className="text-amber-500" />
                           <span className="font-bold text-slate-700">Firebase Real-time</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="flex-1 relative aspect-square w-full max-w-[600px] lg:max-w-none"
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-[60px] blur-[80px] -z-10"></div>
                    <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white shadow-2xl hover:scale-[1.05] transition-transform duration-700">
                        <Image 
                            src="/projects/quick-salon/hero-final.png" 
                            alt="Quick Salon Tight Mockup" 
                            fill 
                            className="object-contain scale-125"
                            priority
                        />
                    </div>
                </motion.div>
            </section>

            {/* PROBLEM & SOLUTION SECTION */}
            <section className="py-24 bg-slate-50/50 border-y border-slate-100 overflow-hidden relative">
                <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    <motion.div 
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <SectionHeader title="The Problem" subtitle="Manual scheduling constraints" />
                        <div className="space-y-6">
                            {[
                                { title: "Manual Booking System", desc: "Paper-based or call-based bookings lead to mismanaged schedules." },
                                { title: "Service Discovery Issues", desc: "Customers struggle to find available time slots and service details." },
                                { title: "Overbooking Conflicts", desc: "No centralized system causes frequent double-booking errors." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-2.5 shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <SectionHeader title="The Solution" subtitle="Engineering digital efficiency" />
                        <div className="bg-gradient-to-br from-teal-600 to-emerald-700 p-8 md:p-12 rounded-[40px] text-white shadow-2xl shadow-teal-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -z-0"></div>
                            <div className="relative z-10 space-y-8">
                                <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-90">
                                    "A complete digital transformation that automates the booking lifecycle, from initial service discovery to secure payment."
                                </p>
                                <div className="grid grid-cols-1 gap-6 pt-4">
                                    {[
                                        "Unified Service Dashboard",
                                        "Automated OTP Verification",
                                        "Real-time Booking Calendar",
                                        "Secure Digital Payments"
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
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-24 bg-slate-950 text-white rounded-[60px] mx-6 md:mx-12 overflow-hidden relative my-12">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] -z-10"></div>
                <div className="container max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="mb-20 text-center flex flex-col items-center">
                        <SectionHeader title="Key Features" light />
                        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={i}
                                className="p-10 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex flex-col items-center text-center gap-6 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-5 bg-white/10 rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    {React.cloneElement(feature.icon, { size: 40 })}
                                </div>
                                <span className="text-2xl font-[800] tracking-tight uppercase leading-none">{feature.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE SCREENS */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeader title="Application Screens" subtitle="Native mobile experience built from the ground up" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {screenCategories.map((category, i) => (
                        <motion.div 
                            key={i}
                            className="bg-slate-50 rounded-[48px] p-6 border border-slate-100 hover:shadow-2xl hover:shadow-teal-500/10 transition-all group"
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <ScreenSlider screens={category.screens} />
                            <div className="mt-8 px-2 text-center">
                                <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase leading-tight">{category.title}</h4>
                                <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase tracking-widest">{category.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DESIGN PROCESS - Clean Slate-50 background */}
            <section className="py-32 bg-slate-50">
                <div className="container max-w-5xl mx-auto px-6 text-center space-y-16">
                    <SectionHeader title="Design Process" subtitle="User-Centric UI/UX Framework" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Low-Fidelity", desc: "Created basic structure and navigation flow in Figma." },
                            { title: "High-Fidelity", desc: "Designed premium layouts with focus on usability and brand feel." },
                            { title: "Fluid Layout", desc: "Ensured consistent experience across various device aspect ratios." }
                        ].map((process, i) => (
                            <motion.div 
                                key={i}
                                className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm space-y-6"
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{process.title}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed">{process.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNICAL DETAILS */}
            <section className="py-32 container max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
                {/* Tech Stack */}
                <div className="space-y-12">
                    <SectionHeader title="Tech Stack" />
                    <div className="flex flex-wrap gap-4">
                        {techStack.map((tech, i) => (
                            <motion.div 
                                key={i}
                                className="px-8 py-5 bg-white border-2 border-slate-100 rounded-[28px] shadow-sm text-lg font-black text-slate-800 hover:border-teal-300 hover:text-teal-600 transition-all cursor-default"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Working Flow */}
                <div className="space-y-12">
                    <SectionHeader title="Working Flow" />
                    <div className="space-y-8 relative">
                        {[
                            "User Selects Service",
                            "Chooses Available Time",
                            "Secure Payment (Stripe/UPI)",
                            "Confirmation Notification"
                        ].map((step, i) => (
                            <motion.div key={i} className="flex gap-8 items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="w-12 h-12 min-w-[48px] rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-xl shadow-lg">
                                    {i + 1}
                                </div>
                                <p className="text-xl text-slate-900 font-bold tracking-tight uppercase leading-none">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESULT */}
            <section className="container max-w-7xl mx-auto px-6 mb-32">
                <div className="p-12 md:p-20 rounded-[60px] bg-slate-950 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px] -z-0"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
                        <div className="space-y-8">
                            <SectionHeader title="The Result" subtitle="Scalable Mobile Solutions" light />
                            <div className="space-y-6">
                                {[
                                    "Improved booking efficiency",
                                    "Reduced customer wait time",
                                    "Seamless Digital Experience",
                                    "Secure and reliable platform"
                                ].map((res, i) => (
                                    <div key={i} className="flex gap-4 justify-center lg:justify-start">
                                        <CheckCircle2 size={24} className="text-teal-400 shrink-0" />
                                        <span className="font-bold text-xl uppercase tracking-tight">{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative lg:pl-12">
                            <motion.div 
                                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[48px] p-10 md:p-16 space-y-10 relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -z-10"></div>
                                
                                <div className="space-y-4">
                                    <h4 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                                        Empowering <span className="text-teal-400">Local Salons</span> With Global Tech
                                    </h4>
                                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                                        Successfully bridged the gap between traditional salon services and modern digital convenience, resulting in a 40% increase in booking efficiency.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <Trophy className="text-teal-500 mb-4" size={32} />
                                        <h5 className="text-2xl font-black">98%</h5>
                                        <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Uptime Rate</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <Activity className="text-emerald-500 mb-4" size={32} />
                                        <h5 className="text-2xl font-black">1.2s</h5>
                                        <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Avg. Response</p>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                    <Target className="text-teal-600" />
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-300">Phase 1: Deployment Success</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 container max-w-7xl mx-auto px-6 text-center">
                <Link href="/projects" className="inline-flex items-center gap-6 text-[28px] md:text-[42px] font-black text-slate-900 hover:text-teal-600 transition-all group">
                    Explore More Projects
                    <ArrowRight size={48} className="group-hover:translate-x-6 transition-transform text-teal-500" />
                </Link>
            </section>

        </main>
    );
};

export default QuickSalonPage;

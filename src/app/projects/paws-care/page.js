"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    Calendar, 
    MessageSquare, 
    CreditCard, 
    ShieldCheck, 
    ArrowRight, 
    ChevronLeft, 
    Activity, 
    Users, 
    Lightbulb, 
    Sparkles, 
    Database, 
    ExternalLink, 
    Laptop, 
    Server, 
    Key, 
    Star, 
    DollarSign, 
    Layers, 
    Heart, 
    MapPin, 
    Zap 
} from 'lucide-react';

const SectionHeader = ({ title, subtitle, light = false }) => (
    <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <h2 className={`text-[35px] md:text-[55px] font-[800] ${light ? 'text-[#FAF9F6]' : 'text-[#4E3629]'} leading-[1] font-[family-name:var(--font-headline)] tracking-tight mb-4 uppercase`}>
            {title}
        </h2>
        {subtitle && <p className={`text-lg ${light ? 'text-[#8FAEC7]' : 'text-[#6B5548]'} font-[family-name:var(--font-cursive)] text-2xl font-bold italic mt-2`}>{subtitle}</p>}
        <div className="w-20 h-1.5 bg-[#8FAEC7] mt-6 rounded-full"></div>
    </motion.div>
);

const ImageBox = ({ src, alt, caption }) => (
    <div className="w-full relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8FAEC7]/10 to-[#4E3629]/10 rounded-[40px] blur-[60px] -z-10 group-hover:bg-[#8FAEC7]/20 transition-all duration-700"></div>
        <div className="relative w-full rounded-[40px] overflow-hidden bg-slate-50 border-[4px] border-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <Image 
                src={src} 
                alt={alt} 
                width={1600} 
                height={900} 
                className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-700" 
            />
        </div>
        {caption && <p className="text-center text-slate-500 text-sm font-bold tracking-widest uppercase mt-6">{caption}</p>}
    </div>
);

const PawsCarePage = () => {
    const [activeTab, setActiveTab] = useState('owners');

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const techStack = [
        { name: "Next.js (App Router)", type: "Frontend Framework", icon: <Laptop className="text-[#8FAEC7]" />, desc: "React framework with robust static rendering & server actions." },
        { name: "PostgreSQL", type: "Relational Database", icon: <Database className="text-[#4E3629]" />, desc: "Enterprise SQL database ensuring reliable asset & booking logs." },
        { name: "Prisma ORM", type: "Database Layer", icon: <Layers className="text-[#8FAEC7]" />, desc: "Type-safe database client representing linked pet schema relations." },
        { name: "NextAuth.js", type: "Secure Auth", icon: <Key className="text-[#4E3629]" />, desc: "JWT & Credentials credentials and credential provider flows." },
        { name: "Tailwind CSS", type: "Styling System", icon: <Sparkles className="text-[#8FAEC7]" />, desc: "Custom configuration supporting the portfolio's signature blue-brown palette." },
        { name: "Framer Motion", type: "Fluid Animations", icon: <Activity className="text-[#4E3629]" />, desc: "Smooth micro-interactions and premium backdrop transitions." }
    ];

    const pricingTiers = [
        {
            name: "Basic Paw",
            price: "₹0",
            period: "/month",
            desc: "Standard caregivers discovery",
            features: ["2 active bookings / month", "Standard caregiver profiles", "Basic email support"],
            popular: false,
            color: "border-slate-200 bg-white text-slate-900"
        },
        {
            name: "Premium Pet",
            price: "₹400",
            period: "/month",
            desc: "Perfect for regular pet parents",
            features: ["Unlimited active bookings", "24/7 Veterinary chat support", "Priority sitter matching", "0% platform booking fees", "Exclusive Pro Badge search filter"],
            popular: true,
            color: "border-[#8FAEC7] bg-white ring-2 ring-[#8FAEC7]/20 text-slate-900"
        },
        {
            name: "Ultimate Care",
            price: "₹800",
            period: "/month",
            desc: "The ultimate royal treatment",
            features: ["Premium Pet features included", "Expert custom diet plans", "Monthly free grooming sessions", "Direct video consults with vets", "VIP emergency matching priority"],
            popular: false,
            color: "border-[#8FAEC7]/40 bg-[#2D1E16] text-[#FAF9F6]"
        }
    ];

    const schemaTables = [
        {
            name: "User Table",
            desc: "Auth credentials, digital wallet credits, user roles (Owner/Sitter), and subscription metadata.",
            connections: ["Pets (1:N)", "Bookings (1:N)", "Transactions (1:N)"]
        },
        {
            name: "Pet Table",
            desc: "Age, breed, vaccine schedules, dietary notes, medical histories, and photo metadata.",
            connections: ["User (N:1)", "Bookings (1:N)"]
        },
        {
            name: "Sitter Table",
            desc: "Hourly sitting/boarding rates, bio details, ratings average, and geographical service area.",
            connections: ["User (1:1)", "Bookings (1:N)", "Reviews (1:N)"]
        },
        {
            name: "Booking Table",
            desc: "Tracks service types (sitting, walking, grooming), costs, dates, and dynamic statuses.",
            connections: ["User (N:1)", "Sitter (N:1)", "Pets (N:M)"]
        },
        {
            name: "Transaction Table",
            desc: "Financial ledger tracking deposits, platform payouts, caregiver credits, and booking refunds.",
            connections: ["User (N:1)"]
        },
        {
            name: "Review Table",
            desc: "Evaluations, qualitative feedback, and stars ratings left by pet parents.",
            connections: ["Sitter (N:1)", "Booking (1:1)"]
        }
    ];

    return (
        <main className="bg-[#FAF9F6] min-h-screen font-sans pb-32 overflow-x-hidden notebook-stripes">
            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 container max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                <motion.div 
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-6 py-2 bg-[#8FAEC7] border-2 border-white rounded-full text-white font-bold tracking-[0.2em] text-xs uppercase mb-4 shadow-sm rotate-[-3deg]">
                        Full-Stack bidirectional marketplace
                    </div>
                    <h1 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] font-[900] text-[#4E3629] font-[family-name:var(--font-headline)] tracking-tight uppercase">
                        <span className="text-[#8FAEC7] font-[family-name:var(--font-cursive)] normal-case pr-2 select-none">Paws &</span><br/>
                        <span className="text-[#4E3629]">Care Web App</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#6B5548] font-medium max-w-xl leading-relaxed">
                        Connecting passionate pet owners with professional local sitters. A comprehensive trust-based marketplace.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link 
                            href="https://pet-care-app-sigma.vercel.app/" 
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3.5 bg-[#4E3629] text-[#FAF9F6] border border-[#3D2B1F] hover:bg-[#3D2B1F] font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                        >
                            <ExternalLink size={20} />
                            <span>Launch Live Site</span>
                        </Link>
                        <div className="flex items-center gap-2 px-6 py-3.5 bg-[#FAF9F6] text-[#4E3629] border-2 border-[#8FAEC7]/30 shadow-md font-bold text-slate-700">
                           <ShieldCheck size={20} className="text-[#8FAEC7]" />
                           <span>Aadhar Verified</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="flex-1 w-full relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <ImageBox src="/projects/paws-care.png" alt="Paws & Care Live Interface mockup" />
                </motion.div>
            </section>

            {/* 2. OVERVIEW & RESPONSIBILITIES */}
            <section className="py-24 bg-[#E9F0F6]/30 border-y border-[#8FAEC7]/20 relative">
                <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeader title="Overview" subtitle="Connecting Hearts & Paws" />
                        <p className="text-xl text-[#6B5548] leading-relaxed font-medium mb-6">
                            Paws & Care solves a vital challenge for Indian pet parents: finding secure, reliable, Aadhar-verified caregivers when traveling. 
                            It serves as a fully functional, bidirectional marketplace bridging pet caregivers (who gain tools to manage bookings and set rates) 
                            and owners (who gain complete digital records, simulated wallets, and 24/7 matching support).
                        </p>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            Built securely using Next.js serverless architecture and a complex PostgreSQL schema, the site delivers a micro-SaaS platform complete with booking limitations, dual dashboards, and beautiful fluid animations.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <SectionHeader title="Tech Stack" subtitle="Core Systems & Frameworks" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white rounded-3xl border-2 border-[#8FAEC7]/20 hover:border-[#8FAEC7]/40 hover:shadow-md transition-all">
                                    <div className="p-3 rounded-2xl bg-[#E9F0F6]/50 shrink-0 h-fit">
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#4E3629] leading-tight">{tech.name}</h4>
                                        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{tech.type}</p>
                                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{tech.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. DUAL DASHBOARD Tabs */}
            <section className="py-32 container max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionHeader title="Dual Dashboards" subtitle="Tailored experiences for owners & caregivers" />
                    <p className="text-lg text-[#6B5548] font-medium">
                        The application adapts dynamically to the current authenticated role, rendering fully separate ecosystems with specialized workflows.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12">
                    <button 
                        onClick={() => setActiveTab('owners')}
                        className={`px-8 py-3.5 rounded-full font-bold text-lg shadow-sm border transition-all ${activeTab === 'owners' ? 'bg-[#4E3629] border-[#4E3629] text-[#FAF9F6] scale-[1.02]' : 'bg-white border-[#8FAEC7]/20 text-[#6B5548] hover:border-[#8FAEC7]/40'}`}
                    >
                        🐶 Pet Owners Experience
                    </button>
                    <button 
                        onClick={() => setActiveTab('sitters')}
                        className={`px-8 py-3.5 rounded-full font-bold text-lg shadow-sm border transition-all ${activeTab === 'sitters' ? 'bg-[#4E3629] border-[#4E3629] text-[#FAF9F6] scale-[1.02]' : 'bg-white border-[#8FAEC7]/20 text-[#6B5548] hover:border-[#8FAEC7]/40'}`}
                    >
                        💼 Professional Caregivers
                    </button>
                </div>

                <div className="bg-white border-2 border-[#8FAEC7]/30 rounded-[48px] p-8 md:p-12 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#8FAEC7]/5 rounded-full blur-[100px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4E3629]/5 rounded-full blur-[100px] -z-10"></div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'owners' ? (
                            <motion.div 
                                key="owners"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black text-[#4E3629] leading-tight">Complete Control Over Your Pet&apos;s Wellness</h3>
                                    <p className="text-lg text-[#6B5548] leading-relaxed font-medium">
                                        Pet parents gain access to an intuitive dashboard designed to take the friction out of booking sitters:
                                    </p>
                                    <ul className="space-y-4 pt-2">
                                        {[
                                            "Dynamic Pet Profiles detailing dietary constraints and vaccine checklists.",
                                            "Integrated Wallet system enabling immediate simulated deposits and checkout debits.",
                                            "Live Sitter Discovery maps matching proximity, ratings, and rates instantly.",
                                            "Comprehensive Transaction log tracking precise costs, history, and status updates."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <CheckCircle2 size={24} className="text-[#8FAEC7] shrink-0 mt-0.5" />
                                                <span className="font-bold text-[#6B5548] leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-[#E9F0F6]/30 rounded-[32px] border border-[#8FAEC7]/20 space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#8FAEC7]/20">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#E9F0F6] flex items-center justify-center font-bold text-[#8FAEC7]">🐕</div>
                                                <div>
                                                    <h5 className="font-bold text-[#4E3629]">Sherlock</h5>
                                                    <p className="text-xs text-slate-400 font-bold">Golden Retriever • 2 Years</p>
                                                </div>
                                            </div>
                                            <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">Vaccinated</span>
                                        </div>
                                        <p className="text-xs text-[#6B5548] leading-relaxed">Diet: Strict chicken & rice. Prefers evening walks around 6:00 PM.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#8FAEC7]/20">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-[#6B5548] uppercase tracking-wider">Wallet Balance</span>
                                            <Zap size={16} className="text-amber-500" />
                                        </div>
                                        <div className="text-3xl font-black text-[#4E3629]">₹4,250.00</div>
                                        <div className="mt-4 flex gap-2">
                                            <button className="flex-1 py-2 bg-[#4E3629] text-[#FAF9F6] font-bold rounded-xl text-xs hover:bg-[#3D2B1F] transition-colors">+ Add Funds</button>
                                            <button className="flex-1 py-2 bg-[#FAF9F6] border border-[#8FAEC7]/20 text-[#4E3629] font-bold rounded-xl text-xs hover:bg-[#E9F0F6] transition-colors">History</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="sitters"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black text-[#4E3629] leading-tight">Elevating Caregivers into Professional Sitters</h3>
                                    <p className="text-lg text-[#6B5548] leading-relaxed font-medium">
                                        Professional sitters can fully run their micro-businesses directly through their localized profile dashboard:
                                    </p>
                                    <ul className="space-y-4 pt-2">
                                        {[
                                            "Hourly Rate controls allowing customized service price tiers.",
                                            "One-click Availability toggles for immediate active/inactive scheduling.",
                                            "Detailed Review feeds aggregating user stars and qualitative feedback.",
                                            "Caregiver Revenue graphs tracking active bookings, deposits, and payouts."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <CheckCircle2 size={24} className="text-[#8FAEC7] shrink-0 mt-0.5" />
                                                <span className="font-bold text-[#6B5548] leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-[#E9F0F6]/30 rounded-[32px] border border-[#8FAEC7]/20 space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#8FAEC7]/20">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#E9F0F6] flex items-center justify-center font-bold text-[#8FAEC7]">👩‍⚕️</div>
                                                <div>
                                                    <h5 className="font-bold text-[#4E3629]">Dr. Priya Sharma</h5>
                                                    <p className="text-xs text-slate-400 font-bold">Bangalore • Veterinary Specialist</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-md">
                                                <Star size={12} fill="currentColor" />
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 border-t border-[#8FAEC7]/10">
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hourly Rate</p>
                                                <p className="text-lg font-black text-[#4E3629]">₹650/hr</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Availability</p>
                                                <span className="px-2 py-0.5 bg-[#FAF9F6] text-[#8FAEC7] border border-[#8FAEC7]/30 text-[10px] font-bold rounded-full uppercase tracking-wider">Active</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#8FAEC7]/20">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-[#6B5548] uppercase tracking-wider">Caregiver Earnings</span>
                                            <DollarSign size={16} className="text-[#8FAEC7]" />
                                        </div>
                                        <div className="text-3xl font-black text-[#4E3629]">₹14,920.00</div>
                                        <div className="mt-4 flex gap-2">
                                            <button className="flex-1 py-2 bg-[#4E3629] text-[#FAF9F6] font-bold rounded-xl text-xs hover:bg-[#3D2B1F] transition-colors">Request Payout</button>
                                            <button className="flex-1 py-2 bg-[#FAF9F6] border border-[#8FAEC7]/20 text-[#4E3629] font-bold rounded-xl text-xs hover:bg-[#E9F0F6] transition-colors">Review Logs</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* 4. DATABASE SCHEMA RELATIONS SECTION */}
            <section className="py-24 bg-[#1E140F] text-[#FAF9F6] rounded-[60px] mx-6 md:mx-12 overflow-hidden relative my-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8FAEC7]/10 rounded-full blur-[150px] -z-10"></div>
                <div className="container max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
                    <SectionHeader title="Database Architecture" subtitle="Complex PostgreSQL Relational Schema" light />
                    <p className="text-xl text-slate-300 font-medium max-w-3xl mb-16 leading-relaxed">
                        To maintain high data integrity across wallets and check bookings constraints, Paws & Care implements Prisma and PostgreSQL with robust model relations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 text-left">
                        {schemaTables.map((table, i) => (
                            <motion.div 
                                key={i}
                                className="bg-[#2D1E16] border border-[#8FAEC7]/20 p-8 rounded-[32px] space-y-4 hover:border-[#8FAEC7]/40 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-2xl font-black text-[#8FAEC7] font-[family-name:var(--font-headline)]">{table.name}</h4>
                                    <Database size={20} className="text-slate-500" />
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{table.desc}</p>
                                <div className="pt-4 border-t border-[#8FAEC7]/20 space-y-2">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Relational Connections</p>
                                    <div className="flex flex-wrap gap-2">
                                        {table.connections.map((conn, idx) => (
                                            <span key={idx} className="px-2.5 py-1 bg-[#1E140F] text-[#8FAEC7] border border-[#8FAEC7]/20 text-xs font-mono rounded-md font-bold font-sans">
                                                {conn}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. MICRO-SAAS SUBSCRIPTION PRICING */}
            <section className="py-32 container max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <SectionHeader title="Micro-SaaS Subscriptions" subtitle="Optimized for direct platform monetization" />
                    <p className="text-lg text-[#6B5548] font-medium">
                        Paws & Care caps free bookings to restrict usage, driving upgrades into premium plan limits featuring priority medical matching.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                    {pricingTiers.map((tier, i) => (
                        <motion.div 
                            key={i}
                            className={`p-10 rounded-[48px] border shadow-lg flex flex-col justify-between relative overflow-hidden hover:shadow-2xl transition-all duration-500 ${tier.color}`}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {tier.popular && (
                                <div className="absolute top-5 right-5 px-4 py-1.5 bg-[#8FAEC7] text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                    Popular
                                </div>
                            )}
                            <div>
                                <h4 className="text-xl font-bold uppercase tracking-widest mb-6">{tier.name}</h4>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl font-black">{tier.price}</span>
                                    <span className="text-slate-400 font-bold">{tier.period}</span>
                                </div>
                                <p className="text-sm text-slate-400 font-bold mb-8">{tier.desc}</p>
                                <div className="w-full h-px bg-[#8FAEC7]/10 my-6"></div>
                                <ul className="space-y-4">
                                    {tier.features.map((feat, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm font-bold text-[#6B5548]">
                                            <CheckCircle2 size={18} className="text-[#8FAEC7] shrink-0 mt-0.5" />
                                            <span className="leading-relaxed opacity-90">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-8">
                                <Link 
                                    href="https://pet-care-app-sigma.vercel.app/subscription"
                                    target="_blank"
                                    className={`w-full py-4 rounded-2xl font-bold transition-all text-sm block text-center ${tier.name === 'Ultimate Care' ? 'bg-[#4E3629] hover:bg-[#3D2B1F] text-[#FAF9F6]' : 'bg-[#FAF9F6] border border-[#8FAEC7]/30 text-[#4E3629] hover:bg-[#E9F0F6]'}`}
                                >
                                    Choose Plan
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. BUSINESS IMPACT & DESIGN */}
            <section className="container max-w-7xl mx-auto px-6 mb-32">
                <div className="p-12 md:p-20 rounded-[60px] bg-[#1E140F] text-[#FAF9F6] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8FAEC7]/10 rounded-full blur-[120px] -z-0"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <SectionHeader title="Business Impact" subtitle="Scalability & Peer Platform Conversion" light />
                            <p className="text-xl text-slate-300 font-medium leading-relaxed mb-6">
                                Paws & Care delivers measurable outcomes that demonstrate production-grade business value:
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Monetization Plan built directly around transaction matching and Micro-SaaS pricing tiers.",
                                    "Increased Trust through strict ratings, detailed pet profiles, and live caregiver reviews.",
                                    "Fluid Performance leveraging Next.js static pages delivering sub-second page rendering.",
                                    "Aadhar Verification trust badges driving peer-to-peer transaction volumes in safety."
                                ].map((res, i) => (
                                    <div key={i} className="flex gap-4">
                                        <CheckCircle2 size={24} className="text-[#8FAEC7] shrink-0 mt-1" />
                                        <span className="font-bold text-lg leading-relaxed">{res}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative lg:pl-12 pt-8 lg:pt-0">
                            <motion.div 
                                className="bg-[#2D1E16] border border-[#8FAEC7]/20 backdrop-blur-xl rounded-[48px] p-10 md:p-14 space-y-10 relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8FAEC7]/10 rounded-full blur-[80px] -z-10"></div>
                                <h4 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-8">
                                    Premium <span className="text-[#8FAEC7]">UI/UX Decisions</span>
                                </h4>
                                <ul className="space-y-8">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">🎨</div>
                                        <div>
                                            <h5 className="text-xl font-bold tracking-tight">Soft Palette</h5>
                                            <p className="text-sm text-slate-400 leading-relaxed font-bold mt-1">Dusty blue and chocolate cocoa theme accents replacing basic flat browser colors.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">✨</div>
                                        <div>
                                            <h5 className="text-xl font-bold tracking-tight">Glassmorphism & Micro-Scales</h5>
                                            <p className="text-sm text-slate-400 leading-relaxed font-bold mt-1">Soft card scale transitions and blur backgrounds mapping modern premium standards.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">📱</div>
                                        <div>
                                            <h5 className="text-xl font-bold tracking-tight">Perfect Mobile Design</h5>
                                            <p className="text-sm text-slate-400 leading-relaxed font-bold mt-1">Highly readable typography scales responsive for smartphone and desktop views.</p>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. MORE PROJECTS LINK */}
            <section className="py-24 container max-w-5xl mx-auto px-6 text-center">
                <motion.div 
                    variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="pt-12"
                >
                    <Link href="/projects" className="inline-flex items-center gap-6 text-[28px] md:text-[42px] font-black text-[#4E3629] hover:text-[#8FAEC7] transition-all group">
                        Explore More Projects
                        <ArrowRight size={48} className="group-hover:translate-x-6 transition-transform text-[#8FAEC7]" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default PawsCarePage;



"use client";
import React, { useRef } from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ExperienceCard = ({ type, title, subtitle, date, location, description, gradient, borderHover, icon }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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

    // Stagger items for lists
    const listVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 100, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className={`group relative overflow-hidden rounded-[40px] bg-white border-2 border-slate-100/60 hover:${borderHover} p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-500 w-full cursor-default`}
        >
            {/* Absolute Glow Background */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-full blur-[50px] transition-opacity duration-700`}></div>
            
            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-800 transition-colors shadow-inner border border-slate-100 group-hover:scale-110 duration-500">
                        {icon}
                    </div>
                    <span className="text-xl md:text-2xl font-black text-slate-300 uppercase tracking-widest">{type}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-[900] text-slate-800 tracking-tight mb-2 font-[family-name:var(--font-headline)]">{title}</h3>
                <h4 className="text-xl md:text-2xl font-bold mb-6 pb-6 border-b border-slate-100">
                    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{subtitle}</span>
                </h4>

                <div className="flex flex-wrap gap-4 text-sm md:text-base font-bold text-slate-500 mb-8">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                        <Calendar size={18} className="text-slate-400 group-hover:text-teal-500 transition-colors" /> {date}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                        <MapPin size={18} className="text-slate-400 group-hover:text-emerald-500 transition-colors" /> {location}
                    </span>
                </div>

                {Array.isArray(description) ? (
                    <motion.ul 
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-4 text-slate-600 font-medium text-lg leading-relaxed"
                    >
                        {description.map((item, i) => (
                            <motion.li key={i} variants={itemVariants} className="flex items-start gap-4">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-teal-500 flex-shrink-0 transition-colors"></span>
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                ) : (
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-600 font-medium text-lg leading-relaxed pt-2"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
            {/* Deep Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
                <motion.div 
                    className="flex flex-col items-center mb-32 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[60px] md:text-[80px] lg:text-[100px] leading-[0.9] font-[700] text-slate-950 mb-6 font-[family-name:var(--font-headline)] tracking-tighter">
                        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">JOURNEY</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-medium leading-[1.6]">
                        A timeline of my professional experience and academic foundation, demonstrating a continuous pursuit of design excellence and technical mastery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
                    <ExperienceCard 
                        type="Experience"
                        title="Intern - UI/UX & Frontend"
                        subtitle="BigInIT Technologies"
                        date="Apr 2025 - Jul 2025"
                        location="Indore, India"
                        gradient="from-teal-500 to-emerald-400"
                        borderHover="border-teal-300"
                        icon={<Briefcase size={32} />}
                        description={[
                            "Designed user-centered wireframes and prototypes in Figma.",
                            "Developed responsive frontend UI components.",
                            "Ensured high visual quality and consistency across products."
                        ]}
                    />

                    <ExperienceCard 
                        type="Education"
                        title="B.Tech - Computer Science"
                        subtitle="Avantika University"
                        date="2023 - 2027"
                        location="Ujjain, India"
                        gradient="from-emerald-500 to-teal-400"
                        borderHover="border-emerald-300"
                        icon={<GraduationCap size={32} />}
                        description="Specialization in UI/UX Design and Frontend Development. Focus on practical web technologies, systems design, and creative problem solving."
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;

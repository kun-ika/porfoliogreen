import React from 'react';

const SkillCard = ({ title, skills, gradient }) => (
    <div className="glass-card hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
        <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-20 filter blur-2xl transition-all duration-500 group-hover:opacity-40 bg-gradient-to-br ${gradient}`}></div>
        <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b border-gray-200/60 pb-4 relative">{title}</h3>
        <div className="space-y-6 relative">
            {skills.map((skill, index) => (
                <div key={index} className="group/skill">
                    <div className="flex justify-between mb-2">
                        <span className="text-secondary font-semibold text-slate-700 group-hover/skill:text-indigo-600 transition-colors">{skill.name}</span>
                        <span className="text-indigo-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out flex items-center shadow-sm relative bg-gradient-to-r ${gradient}`}
                            style={{ width: `${skill.level}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const categories = [
        {
            title: "UI/UX Design",
            gradient: "from-pink-500 to-rose-400",
            skills: [
                { name: "Figma", level: 90 },
                { name: "Wireframing", level: 85 },
                { name: "Prototyping", level: 85 },
                { name: "User Flows", level: 80 },
                { name: "Usability Design", level: 80 },
                { name: "Canva", level: 95 }
            ]
        },
        {
            title: "Frontend Development",
            gradient: "from-indigo-500 to-blue-400",
            skills: [
                { name: "HTML5 & CSS3", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "React", level: 80 },
                { name: "React Native", level: 75 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            title: "Backend & Tools",
            gradient: "from-purple-500 to-fuchsia-400",
            skills: [
                { name: "Firebase", level: 75 },
                { name: "MySQL", level: 70 },
                { name: "GitHub", level: 85 },
                { name: "Netlify", level: 80 }
            ]
        },
        {
            title: "Programming Fundamentals",
            gradient: "from-emerald-400 to-teal-400",
            skills: [
                { name: "C / C++", level: 85 },
                { name: "Python", level: 80 },
                { name: "Object Oriented Programming", level: 85 },
                { name: "Data Structures", level: 75 }
            ]
        }
    ];

    return (
        <section id="skills" className="section relative py-20 bg-slate-50">
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
            <div className="container relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-800">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full"></div>
                    <p className="mt-8 text-lg md:text-xl text-secondary max-w-2xl font-medium">
                        A comprehensive overview of my technical expertise and proficiency across design, frontend, and backend technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <SkillCard key={index} title={category.title} skills={category.skills} gradient={category.gradient} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Settings, Code2 } from 'lucide-react';

interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        title: 'Front-End',
        icon: <Layout className="w-5 h-5" />,
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'JavaScript (ES6+)', level: 85 },
            { name: 'HTML5 & CSS3', level: 95 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Material UI (MUI)', level: 85 },
            { name: 'Bootstrap', level: 80 },
            { name: 'Next.js & Vite', level: 80 },
        ]
    },
    {
        id: 'backend',
        title: 'Back-End',
        icon: <Server className="w-5 h-5" />,
        skills: [
            { name: 'Java', level: 85 },
            { name: 'Spring Boot', level: 80 },
            { name: 'REST APIs', level: 85 },
            { name: 'Swagger / OpenAPI', level: 85 },
        ]
    },
    {
        id: 'database',
        title: 'Databases',
        icon: <Database className="w-5 h-5" />,
        skills: [
            { name: 'PostgreSQL', level: 80 },
            { name: 'MySQL', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'Firebase', level: 75 },
            { name: 'DBeaver', level: 85 },
        ]
    },
    {
        id: 'tools',
        title: 'Tools',
        icon: <Settings className="w-5 h-5" />,
        skills: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'Postman', level: 85 },
            { name: 'Swagger UI', level: 85 },
            { name: 'IntelliJ & VS Code', level: 90 },
            { name: 'Eclipse IDE', level: 80 },
        ]
    },
    {
        id: 'languages',
        title: 'Languages',
        icon: <Code2 className="w-5 h-5" />,
        skills: [
            { name: 'Java', level: 85 },
            { name: 'JavaScript', level: 85 },
            { name: 'Python', level: 75 },
            { name: 'PHP', level: 70 },
        ]
    }
];

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-12 text-center font-serif text-outline-active"
                >
                    Technical <span className="text-brand-primary text-outline-active">Skills</span>
                </motion.h2>

                {/* Categories Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold border transition-all duration-300 hover:-translate-y-0.5 ${
                                activeTab === category.id
                                    ? 'bg-brand-primary border-brand-primary text-white shadow-glow'
                                    : 'bg-brand-accent/5 border-brand-accent/10 text-brand-accent hover:bg-brand-primary/10 hover:border-brand-primary/30'
                            }`}
                        >
                            {category.icon}
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-xl min-h-[380px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {activeCategory.skills.map((skill, index) => (
                                <div key={skill.name} className="relative">
                                    <div className="flex justify-between items-center mb-2 font-medium">
                                        <span className="text-brand-accent text-lg font-serif">{skill.name}</span>
                                        <span className="text-brand-primary font-mono">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-brand-accent/5 rounded-full h-3 overflow-hidden relative border border-brand-accent/20 dark:border-brand-accent/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.8, delay: index * 0.05 }}
                                            className="bg-brand-primary h-full rounded-full shadow-glow"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;

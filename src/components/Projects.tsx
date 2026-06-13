import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Multi-Tenant Hospital Management System',
        description: 'A robust multi-tenant healthcare administration platform designed to support multiple independent clinical organizations. Features customized dashboards, integrated billing, and optimized appointment scheduling.',
        tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Material UI', 'Swagger'],
        liveLink: '#',
        codeLink: '#',
    },
    {
        title: 'Car Price Prediction – AI/ML Application',
        description: 'A machine learning system that predicts resale vehicle valuations based on multi-dimensional attributes. Built with an interactive Streamlit UI and real-time Firebase database logging.',
        tags: ['Python', 'Firebase', 'Streamlit', 'Machine Learning'],
        liveLink: '#',
        codeLink: '#',
    },
    {
        title: 'GAMEX – Gaming Community Web Application',
        description: 'A comprehensive gaming network platform presenting real-time industry articles, gaming quizzes, player highlight pages, and automated gamer rankings based on achievements.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        liveLink: '#',
        codeLink: '#',
    },
];

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

const Projects: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState('All');

    const filteredProjects = selectedTag === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(selectedTag));

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-8 text-center font-serif text-outline-active"
                >
                    Featured <span className="text-brand-primary text-outline-active">Projects</span>
                </motion.h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-300 hover:-translate-y-0.5 ${
                                selectedTag === tag
                                    ? 'bg-brand-primary border-brand-primary text-white shadow-glow'
                                    : 'bg-brand-accent/5 border-brand-accent/10 text-brand-accent hover:bg-brand-primary/10 hover:border-brand-primary/30'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="glass-panel rounded-[2rem] overflow-hidden shadow-lg hover:shadow-glow transition-all flex flex-col group"
                            >
                                <div className="h-48 bg-gradient-to-br from-brand-section to-brand-bg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors"></div>
                                    <h3 className="text-brand-accent/60 group-hover:text-brand-primary font-serif transition-colors transform group-hover:scale-110 duration-500 text-center px-4">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold mb-3 font-serif">{project.title}</h3>
                                    <p className="text-brand-accent/70 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-xs font-bold border border-brand-secondary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.liveLink} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary hover:text-white transition-all shadow-glow hover:-translate-y-1">
                                            <ExternalLink size={18} /> Live
                                        </a>
                                        <a href={project.codeLink} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-xl transition-all hover:-translate-y-1 font-bold">
                                            <Github size={18} /> Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

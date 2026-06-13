import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Full Stack Developer Intern',
        company: 'Neeyum Solutions LLP',
        period: 'Jan 2025 – Jun 2025',
        description: 'Developed and maintained web applications using React.js and Spring Boot. Built responsive, user-friendly interfaces with React.js and Material UI. Managed PostgreSQL databases with DBeaver, integrated REST APIs, and utilized Swagger UI for documentation and testing.',
    },
    {
        role: 'Web Development Intern',
        company: 'CodSoft',
        period: '1 Month',
        description: 'Designed and implemented responsive web user interfaces. Collaborated on implementing dynamic elements, ensuring clean layout designs and cross-browser performance.',
    },
    {
        role: 'Web Development Intern',
        company: 'OctaNet',
        period: '1 Month',
        description: 'Worked on front-end web layouts, focusing on coding best practices, structural accessibility, and implementing visual effects with modern CSS/JS.',
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-16 text-center font-serif text-outline-active"
                >
                    Work <span className="text-brand-primary text-outline-active">Experience</span>
                </motion.h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-primary before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-primary bg-brand-bg shadow-glow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase size={18} className="text-brand-primary" />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-[2rem] shadow-lg hover:shadow-glow transition-all hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-brand-accent font-serif">{exp.role}</h3>
                                    <div className="flex items-center text-sm text-brand-primary mt-1 sm:mt-0 font-medium">
                                        <Calendar size={14} className="mr-1" />
                                        {exp.period}
                                    </div>
                                </div>
                                <h4 className="text-lg text-brand-accent/70 mb-4">{exp.company}</h4>
                                <p className="text-brand-accent/80 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

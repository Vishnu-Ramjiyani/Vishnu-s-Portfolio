import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educations = [
    {
        degree: 'Master of Science (M.Sc.) Information Technology',
        institution: 'SIES College of Arts, Science and Commerce',
        period: '2024 - 2026',
        description: 'Deepening expertise in Software Development, Database Management, and Cloud Technologies. Achieved CGPA: 8.62 / 10.',
    },
    {
        degree: 'Bachelor of Science (B.Sc.) Computer Science',
        institution: 'Mulund College of Commerce, Mulund',
        period: '2021 - 2024',
        description: 'Core coursework in Algorithms, Data Structures, Object-Oriented Programming, and Web Technologies. Achieved CGPA: 7.78 / 10.',
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'R. K. Talreja Junior College, Ulhasnagar',
        period: '2021',
        description: 'Focused on Science stream (Mathematics and Physics). Achieved overall score: 88.50%.',
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Heaven Bell Convent High School',
        period: '2019',
        description: 'Completed secondary school curriculum with focus on science and mathematics. Achieved score: 79.00%.',
    }
];

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-16 text-center font-serif text-outline-active"
                >
                    Education <span className="text-brand-primary text-outline-active">Journey</span>
                </motion.h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-primary before:to-transparent">
                    {educations.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-primary bg-brand-bg shadow-glow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <GraduationCap size={18} className="text-brand-primary" />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl shadow-lg hover:shadow-glow transition-all hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-brand-accent font-serif">{edu.degree}</h3>
                                    <div className="flex items-center text-sm text-brand-primary mt-1 sm:mt-0 font-medium">
                                        <Calendar size={14} className="mr-1" />
                                        {edu.period}
                                    </div>
                                </div>
                                <h4 className="text-lg text-brand-accent/70 mb-4">{edu.institution}</h4>
                                <p className="text-brand-accent/80 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

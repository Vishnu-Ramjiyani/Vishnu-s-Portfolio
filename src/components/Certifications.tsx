import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Heart } from 'lucide-react';

const certifications = [
    { name: 'Microsoft Cyber Security Fundamentals', issuer: 'Microsoft' },
    { name: 'Microsoft Azure Data Fundamentals', issuer: 'Microsoft' },
    { name: 'Robotic Process Automation (RPA)', issuer: 'RPA Academy' },
    { name: 'Tableau Fundamentals', issuer: 'Tableau' },
    { name: 'Ruby on Rails', issuer: 'Online Academy' },
    { name: 'Unity Programming', issuer: 'Unity' },
];

const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Analytical Thinking',
    'Adaptability',
    'Time Management',
    'Technical Aptitude'
];

const achievements = [
    'Successfully developed and deployed multiple web applications using React.js and Java technologies.',
    'Completed multiple industry-focused internships in Web Development and Full Stack Development.',
    'Built real-world applications involving AI/ML, Healthcare Management, and Community Platforms.',
    'Continuously learning modern full-stack technologies and software engineering practices.'
];

const Certifications: React.FC = () => {
    return (
        <section id="certificates" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-16 text-center font-serif text-outline-active"
                >
                    Accomplishments & <span className="text-brand-primary text-outline-active">Skills</span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Achievements Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel p-8 rounded-[2rem] shadow-xl relative overflow-hidden h-full"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-12 -mt-12"></div>
                        <h3 className="text-2xl font-bold mb-6 font-serif flex items-center gap-3">
                            <Award className="text-brand-primary" /> Key Achievements
                        </h3>
                        
                        <div className="space-y-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="p-1.5 mt-0.5 bg-brand-primary/10 text-brand-primary rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <p className="text-brand-accent/80 leading-relaxed font-light text-base">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications & Soft Skills Column */}
                    <div className="space-y-8 h-full flex flex-col justify-between">
                        
                        {/* Certifications Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-panel p-8 rounded-[2rem] shadow-xl relative overflow-hidden flex-1"
                        >
                            <h3 className="text-2xl font-bold mb-6 font-serif flex items-center gap-3">
                                <Award className="text-brand-secondary" /> Professional Certifications
                            </h3>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -5 }}
                                        className="p-4 bg-brand-accent/5 hover:bg-brand-primary/10 rounded-2xl border border-brand-accent/15 dark:border-brand-accent/5 hover:border-brand-primary/20 transition-all cursor-default group"
                                    >
                                        <h4 className="text-sm font-bold text-brand-accent font-serif group-hover:text-brand-primary transition-colors">
                                            {cert.name}
                                        </h4>
                                        <p className="text-xs text-brand-accent/60 mt-1">{cert.issuer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Soft Skills Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-panel p-8 rounded-[2rem] shadow-xl relative overflow-hidden"
                        >
                            <h3 className="text-2xl font-bold mb-4 font-serif flex items-center gap-3">
                                <Heart className="text-brand-primary fill-brand-primary/10" /> Soft Skills
                            </h3>
                            
                            <div className="flex flex-wrap gap-2.5">
                                {softSkills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-brand-secondary/10 hover:bg-brand-secondary/25 text-brand-primary hover:text-brand-accent rounded-full text-sm font-bold border border-brand-secondary/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-16 text-center font-serif text-outline-active"
                >
                    About <span className="text-brand-primary text-outline-active">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main About Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 glass-panel p-8 rounded-[2rem] shadow-xl hover:shadow-glow transition-all hover:-translate-y-2 group"
                    >
                        <p className="text-brand-accent/80 leading-relaxed text-lg font-light">
                            A motivated and detail-oriented Java Full Stack Developer with hands-on experience in designing and developing scalable web applications. Proficient in building responsive user interfaces with React.js, designing robust REST APIs using Spring Boot, and managing relational databases.
                        </p>
                        <p className="text-brand-accent/80 leading-relaxed text-lg mt-4 font-light">
                            I am skilled in full-stack development, database integration, and software engineering best practices, with a strong focus on delivering efficient, user-friendly solutions that enhance business processes.
                        </p>
                        <div className="mt-8">
                            <a 
                                href="/resume.pdf" 
                                download="Vishnu_Ramjiyani_CV.pdf"
                                className="inline-block px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded-xl hover:bg-brand-accent hover:text-brand-bg transition-all shadow-glow hover:shadow-glow-lg"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-brand-section glass-panel p-8 rounded-[2rem] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-brand-primary/20"></div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary font-bold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-brand-accent/80 font-medium">Location</h4>
                                    <p className="font-bold text-brand-accent font-serif">Badlapur, Maharashtra</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-brand-secondary/15 rounded-lg text-brand-secondary font-bold">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-brand-accent/80 font-medium">Experience</h4>
                                    <p className="font-bold text-brand-accent font-serif">Intern & M.Sc IT</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary font-bold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-brand-accent/80 font-medium">Email</h4>
                                    <p className="font-bold text-brand-accent font-serif break-all">vishnuramjiyani09@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

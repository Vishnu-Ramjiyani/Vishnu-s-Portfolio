import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-16 text-center font-serif text-outline-active"
                >
                    Get In <span className="text-brand-primary text-outline-active">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold font-serif">Let's Connect</h3>
                        <p className="text-brand-accent/70 leading-relaxed font-light">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-2 text-brand-accent/80 font-light text-sm">
                            <p>📍 Badlapur, Maharashtra</p>
                            <p>📱 +91 9146812533</p>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/Vishnu-Ramjiyani" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-accent/5 rounded-full hover:bg-brand-primary hover:text-white transition-all hover:shadow-glow hover:-translate-y-1" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/vishnu-ramjiyani" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-accent/5 rounded-full hover:bg-brand-primary hover:text-white transition-all hover:shadow-glow hover:-translate-y-1" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="tel:+919146812533" className="p-3 bg-brand-accent/5 rounded-full hover:bg-brand-primary hover:text-white transition-all hover:shadow-glow hover:-translate-y-1" aria-label="Phone">
                                <Phone size={24} />
                            </a>
                            <a href="mailto:vishnuramjiyani09@gmail.com" className="p-3 bg-brand-accent/5 rounded-full hover:bg-brand-primary hover:text-white transition-all hover:shadow-glow hover:-translate-y-1" aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 glass-panel p-8 rounded-[2rem]"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-brand-accent/5 border border-brand-accent/20 dark:border-brand-accent/10 rounded-xl px-4 py-3 text-brand-accent placeholder-brand-accent/40 font-light focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-brand-accent/5 border border-brand-accent/20 dark:border-brand-accent/10 rounded-xl px-4 py-3 text-brand-accent placeholder-brand-accent/40 font-light focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full bg-brand-accent/5 border border-brand-accent/20 dark:border-brand-accent/10 rounded-xl px-4 py-3 text-brand-accent placeholder-brand-accent/40 font-light focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-secondary hover:shadow-glow transition-all flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

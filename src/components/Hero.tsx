import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/15 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <ParticleBackground />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-brand-primary font-medium tracking-[0.2em] mb-4 text-sm uppercase">HELLO, I AM</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight font-serif text-outline-active">
                        Vishnu <br />
                        Ramjiyani <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">
                            Java Full Stack Dev
                        </span>
                    </h1>
                    <p className="text-brand-accent/70 text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed">
                        Building robust, scalable backends and modern, high-performance frontends with a focus on seamless user experience.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-accent hover:text-brand-bg transition-all shadow-glow hover:shadow-glow-lg hover:-translate-y-1">
                            View Projects
                        </a>
                        <a 
                            href="/Vishnu_Ramjiyani_CV.pdf" 
                            download="Vishnu_Ramjiyani_CV.pdf" 
                            className="px-8 py-4 border border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-brand-bg transition-all hover:-translate-y-1 flex items-center gap-2"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Floating Elements */}
                <div className="relative h-[420px] md:h-[550px] flex items-center justify-center mt-8 md:mt-0">
                    {/* Central Floating Shape */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] glass-panel rounded-[2rem] sm:rounded-[3rem] rotate-12 flex items-center justify-center p-3 sm:p-5 overflow-hidden group cursor-pointer"
                    >
                        <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-glow-lg">
                            <img 
                                src="/profile.jpg" 
                                alt="Profile" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                    {/* Orbiting Icons */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[520px] h-[520px] border border-brand-accent/15 dark:border-brand-accent/5 rounded-full border-dashed hidden md:block"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-brand-section-light border border-brand-accent/25 dark:border-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent shadow-lg shadow-black/5 dark:shadow-glow backdrop-blur-md">
                            <span className="text-xs font-bold font-serif">JAVA</span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-brand-section-light border border-brand-accent/25 dark:border-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent shadow-lg shadow-black/5 dark:shadow-glow backdrop-blur-md">
                            <span className="text-xs font-bold font-serif">REACT</span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[660px] h-[660px] border border-brand-accent/15 dark:border-brand-accent/5 rounded-full hidden md:block"
                    >
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-brand-primary border border-brand-accent/30 dark:border-brand-accent/20 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/5 dark:shadow-glow backdrop-blur-md">
                            <span className="text-xs font-bold font-serif">SPRING</span>
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-brand-secondary border border-brand-accent/30 dark:border-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent shadow-lg shadow-black/5 dark:shadow-glow backdrop-blur-md">
                            <span className="text-xs font-bold font-serif">SQL</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

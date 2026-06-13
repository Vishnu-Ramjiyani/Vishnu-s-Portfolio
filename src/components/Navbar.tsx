import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certificates', 'contact'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-brand-primary origin-left z-[60]"
                style={{ scaleX }}
            />
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/80 backdrop-blur-md py-4 shadow-lg shadow-black/10 dark:shadow-black' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-2xl font-black text-brand-accent hover:text-brand-primary transition-colors font-serif">
                        VISHNU<span className="text-brand-primary">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isCurrent = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`transition-colors text-sm uppercase tracking-widest relative group font-medium ${
                                        isCurrent ? 'text-brand-primary' : 'text-brand-accent/70 hover:text-brand-accent'
                                    }`}
                                >
                                    {link.name}
                                    {isCurrent ? (
                                        <motion.span
                                            layoutId="activeNavUnderline"
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-primary"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    ) : (
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
                                    )}
                                </a>
                            );
                        })}
                        <button 
                            onClick={toggleTheme} 
                            className="text-brand-accent/70 hover:text-brand-accent hover:text-brand-primary transition-colors p-2"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button 
                            onClick={toggleTheme} 
                            className="text-brand-accent hover:text-brand-primary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-accent hover:text-brand-primary transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-brand-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-brand-accent hover:text-brand-primary"
                            >
                                <X size={32} />
                            </button>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-2xl transition-colors uppercase tracking-widest font-serif ${
                                        activeSection === link.href.substring(1)
                                            ? 'text-brand-primary font-bold'
                                            : 'text-brand-accent/80 hover:text-brand-primary'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;

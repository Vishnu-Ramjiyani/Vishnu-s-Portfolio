import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import CursorFollower from './components/CursorFollower';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        className="bg-brand-bg text-brand-accent min-h-screen selection:bg-brand-primary selection:text-white font-sans transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CursorFollower />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-brand-accent/15 dark:border-brand-accent/5 bg-brand-bg transition-colors duration-300">
          <p>© {new Date().getFullYear()} Vishnu Ramjiyani. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
        </footer>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;

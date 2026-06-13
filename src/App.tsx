import { ThemeProvider } from './ThemeContext';
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
  return (
    <ThemeProvider>
      <div className="bg-brand-bg text-brand-accent min-h-screen selection:bg-brand-primary selection:text-white font-sans transition-colors duration-300">
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
      </div>
    </ThemeProvider>
  );
}

export default App;

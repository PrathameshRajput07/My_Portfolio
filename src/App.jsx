import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-border text-center text-muted-foreground">
        <div className="max-w-2xl mx-auto px-6 mb-8">
          <p className="text-lg md:text-xl font-medium text-white italic">
            "Let's build something impactful and driven by purpose."
          </p>
          <p className="mt-2 text-primary font-medium text-sm md:text-base">
            Seeking internship opportunities and opportunities in collaborative building for impact.
          </p>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Prathamesh Rajput. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind CSS & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 p-1 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-4xl font-bold text-white">
              PR
            </div>
            {/* If user uploads photo later, replace div above with img */}
            {/* <img src="/profile.jpg" alt="Prathamesh Rajput" className="w-full h-full object-cover rounded-full" /> */}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center" title="Available for work">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full absolute"></div>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl font-medium text-primary mb-4"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Prathamesh Rajput
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10"
        >
          I build scalable web applications and craft engaging digital experiences with modern technologies. Let's create something extraordinary.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(156,53,53,0.4)]">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-colors">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex gap-6"
        >
          {[
            { icon: <GithubIcon size={20} />, href: "https://github.com/prathameshrajput", label: "GitHub" },
            { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/prathamesh-rajput-bb2aa0377", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:prathameshgirase06@gmail.com", label: "Email" },
            { icon: <Phone size={20} />, href: "tel:9834280745", label: "Phone" },
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:shadow-[0_0_15px_rgba(156,53,53,0.3)] transition-all"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

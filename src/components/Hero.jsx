import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Right Side (on Desktop): Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex-shrink-0 order-1 md:order-2"
        >
          <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-2xl border-2 border-primary/20 overflow-hidden shadow-[0_0_40px_rgba(156,53,53,0.15)] group hover:border-primary/50 transition-all duration-500">
            <img 
              src="/profile.jpg" 
              alt="Prathamesh Rajput" 
              className="w-full h-full object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>

        {/* Left Side (on Desktop): Text & CTA */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 order-2 md:order-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-2xl font-medium text-primary mb-3 md:mb-4 tracking-wide"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 md:mb-6 leading-tight"
          >
            Prathamesh Rajput
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl leading-relaxed"
          >
            I build scalable web applications and craft engaging digital experiences with modern technologies. Let's create something extraordinary together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-5 mb-10 w-full"
          >
            <a href="#projects" className="px-7 py-3.5 md:px-8 md:py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(156,53,53,0.3)] hover:shadow-[0_0_30px_rgba(156,53,53,0.5)]">
              View My Work
            </a>
            <a href="#contact" className="px-7 py-3.5 md:px-8 md:py-4 bg-transparent border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-colors">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-4 md:gap-5 justify-center md:justify-start w-full"
          >
            {[
              { icon: <GithubIcon size={22} />, href: "https://github.com/prathameshrajput", label: "GitHub" },
              { icon: <LinkedinIcon size={22} />, href: "https://www.linkedin.com/in/prathamesh-rajput-bb2aa0377", label: "LinkedIn" },
              { icon: <Mail size={22} />, href: "mailto:prathameshgirase06@gmail.com", label: "Email" },
              { icon: <Phone size={22} />, href: "tel:9834280745", label: "Phone" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(156,53,53,0.3)] transition-all group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

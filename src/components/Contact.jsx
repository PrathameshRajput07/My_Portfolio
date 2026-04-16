import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? Feel free to reach out to me.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <a href="mailto:prathameshgirase06@gmail.com" className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-lg font-medium text-white group-hover:text-primary transition-colors truncate">prathameshgirase06...</p>
            </div>
          </a>

          <a href="tel:9834280745" className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">+91 9834280745</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/prathamesh-rajput-bb2aa0377" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
              <LinkedinIcon size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">Prathamesh Rajput</p>
            </div>
          </a>

          <div className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-lg font-medium text-white">Pune, Maharashtra</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Networking Intern",
      company: "Netleap IT Training and Solutions",
      duration: "June 2024 – July 2024",
      description: "Focused on network troubleshooting, security protocols, and enterprise infrastructure management. Designed simulated networks using Cisco Packet Tracer. (Pune, India)"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Experiences</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Briefcase size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

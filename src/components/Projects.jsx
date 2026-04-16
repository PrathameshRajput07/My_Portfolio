import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: "LIFT: Career & Wellbeing",
      description: "Holistic platform for career guidance and student mental health support using integrated assessments.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/prathameshrajput",
      live: "#"
    },
    {
      title: "Campus Virtual Network",
      description: "Cisco Packet Tracer industrial training for multi-campus infrastructure simulation.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      tags: ["Cisco Packet Tracer", "Networking", "Infrastructure"],
      github: "https://github.com/prathameshrajput",
      live: "#"
    },
    {
      title: "IOT: Anti-sleep Alarm",
      description: "Safety-focused hardware integration for driver fatigue detection using computer vision.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["IoT", "Hardware", "Computer Vision"],
      github: "https://github.com/prathameshrajput",
      live: "#"
    },
    {
      title: "Blood Donation DBMS",
      description: "Relational database system optimized for critical healthcare resource management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["DBMS", "SQL", "Database Design"],
      github: "https://github.com/prathameshrajput",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Here are some of my recent works that showcase my skills and passion for building quality software.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(156,53,53,0.15)]"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Lab Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Development Lab</h3>
            <div className="h-1 w-32 bg-white/20 rounded"></div>
          </motion.div>
          
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x hide-scrollbar">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6 min-w-[260px] max-w-[280px] hover:border-primary/50 transition-colors cursor-pointer group flex-shrink-0 snap-start"
            >
              <p className="text-xs text-primary font-bold tracking-wider mb-2 uppercase">Frontend</p>
              <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Amazon Clone</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

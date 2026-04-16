import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "G.H Raisoni Skill Tech University",
      location: "Pune, Maharashtra",
      duration: "Present",
      description: "Pursuing Bachelor of Technology with a focus on core computer science subjects, modern software development, and practical engineering skills."
    },
    {
      degree: "Diploma in Engineering",
      institution: "RC Patel College Of engineering & polytechnic",
      location: "Shirpur, Maharashtra",
      duration: "2022 - 2025",
      description: "Completed Diploma with 82.06%."
    },
    {
      degree: "Secondary Class 10",
      institution: "DR Highschool",
      location: "Maharashtra",
      duration: "Completed 2022",
      description: "Secured 87.60% and ranked in top 3 in State Board."
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic <span className="text-primary">Excellence</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My educational journey and academic qualifications that laid the foundation for my professional career.</p>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-0 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] top-1 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(156,53,53,0.5)]">
                <GraduationCap size={16} />
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors group">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                <h4 className="text-lg text-gray-300 font-medium mb-4">{edu.institution}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

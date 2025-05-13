import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  // Timeline animation variants
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Timeline item variants with more organic motion
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        mass: 0.8
      }
    }
  };

  // Year badge variants
  const yearVariants = {
    hidden: { 
      scale: 0.5,
      opacity: 0,
      rotate: -15
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.6
      }
    }
  };

  // Content reveal variants
  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  // Skill chip variants
  const skillVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 10
    },
    visible: i => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    })
  };

  // Floating orb animation
  const orbVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Experience data
  const experiences = [

    {
      year: "2024",
      title: "Software Developer - Aon Digicon",
      description: "I have been actively involved in developing and maintaining multiple projects using ASP.NET Core, Blazor (WebAssembly and Server), and .NET MAUI. My role includes building user-friendly UIs, integrating with SQL Server via stored procedures, optimizing application performance, and collaborating closely with cross-functional teams to deliver scalable, efficient software solutions tailored to business needs. ",
      skills: ["C#", "ASP.NetCore", "Blazor", "Maui Blazor"]
    },
    {
      year: "2023",
      title: "Software Developer - Railword India",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and optimized application performance.",
      skills: ["React", "Java", "MySQL"]
    }
   
  
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Floating decorative orbs */}
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-3xl"
          variants={orbVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-600/20 blur-3xl"
          variants={orbVariants}
          animate="animate"
        />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineVariants}
          className="relative z-10"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <span className="text-5xl font-thin mb-4 text-center">
              Professional
            </span>{' '}
            <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent font-thin bg-clip-text">
              Journey
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />

            <div className="space-y-24">
              {experiences.map((exp, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.3
                });

                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    variants={itemVariants}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8`}
                  >
                    {/* Year indicator */}
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan-400/50 flex items-center justify-center text-xl font-bold shadow-lg shadow-cyan-500/10"
                      variants={yearVariants}
                    >
                      {exp.year}
                    </motion.div>

                    {/* Content card */}
                    <motion.div 
                      className={`flex-1 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 ${index % 2 === 0 ? 'bg-slate-800/60' : 'bg-slate-800/40'} shadow-xl`}
                      variants={contentVariants}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
                        borderColor: 'rgba(34, 211, 238, 0.5)'
                      }}
                    >
                      <motion.h3 
                        className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                      >
                        {exp.title}
                      </motion.h3>
                      
                      <motion.p
                        className="text-slate-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                      >
                        {exp.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            custom={skillIndex}
                            variants={skillVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: 'rgba(56, 182, 255, 0.2)',
                              borderColor: 'rgba(56, 182, 255, 0.5)'
                            }}
                            className="px-4 py-2 rounded-full text-sm font-medium border border-slate-600 bg-slate-700/50 backdrop-blur-sm"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
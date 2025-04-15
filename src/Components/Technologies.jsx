import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaNodeJs, FaAws, FaPython, FaGithub } from "react-icons/fa";
import { SiDotnet, SiMysql, SiBlazor, SiJavascript, SiSpring, SiDocker } from "react-icons/si";

const Technologies = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // List of all technologies to display in one row
  const techList = [
    { icon: FaJava, name: "Java", color: "" },
    { icon: RiReactjsLine, name: "React", color: "cyan-400" },
    { icon: SiDotnet, name: ".NET", color: "cyan-400" },
    { icon: SiMysql, name: "MySQL", color: "cyan-400" },
    { icon: SiJavascript, name: "JavaScript", color: "cyan-400" },
    { icon: SiBlazor, name: "Blazor", color: "cyan-400" },
    { icon: FaNodeJs, name: "Node.js", color: "cyan-400" },
    { icon: SiSpring, name: "Spring", color: "emerald-400" },
    { icon: SiDocker, name: "Docker", color: "cyan-400" },
    { icon: FaAws, name: "AWS", color: "cyan-400" },
    { icon: FaPython, name: "Python", color: "cyan-400" },
    { icon: FaGithub, name: "GitHub", color: "cyan-400" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className='border-b border-neutral-800 py-16'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className='text-5xl font-thin mb-4 text-center'
        >
          Technologies <span className='text-cyan-400'>I Work With</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className='text-lg text-neutral-400 text-center max-w-2xl mx-auto mb-16'
        >
          The tools and frameworks I use to bring ideas to life
        </motion.p>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8"
        >
          {techList.map((tech, index) => {
            const IconComponent = tech.icon;
            
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  y: -10, 
                  transition: { type: "spring", stiffness: 300 } 
                }}
                className="w-24 md:w-32 lg:w-40 mb-6"
              >
                <motion.div 
                  className="aspect-square rounded-2xl border-4 border-purple-800 p-4 flex items-center justify-center mb-3 relative overflow-hidden group"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                    borderColor: "#purple",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r text-pink-300 to-purple-500  opacity-50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <IconComponent className={`text-6xl md:text-7xl text-${tech.color} group-hover:text-fuchsia-700`} />
                  </motion.div>
                </motion.div>
                
                <motion.p 
                  className="text-center text-neutral-300 text-sm md:text-base group-hover:text-cyan-400"
                >
                  {tech.name}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
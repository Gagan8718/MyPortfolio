import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutImage from "../assets/about.jpeg";

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillItems = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 70 }
  ];

  return (
    <div className='border-b border-neutral-900 py-16 md:py-24'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.h1 
          variants={itemVariants}
          className='text-center text-5xl font-thin mb-16'
        >
          About
          <span className='text-neutral-500 ml-2'>Me</span>
        </motion.h1>

        <div className='flex flex-wrap items-center'>
          {/* Image Column */}
          <div className='w-full lg:w-1/2 mb-12 lg:mb-0'>
            <div className='flex flex-col items-center px-4 md:px-8'>
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  className="absolute -inset-1 rounded-2xl blur-sm"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <img 
                  className='rounded-2xl shadow-xl relative z-10 w-full max-w-md object-cover' 
                  src={AboutImage} 
                  alt="Gagan working on code" 
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 mt-6"
              >
                <img 
                  src={AboutImage} 
                  alt="Working with team" 
                  className="rounded-lg h-24 object-cover"
                />
                <img 
                  src={AboutImage} 
                  alt="At a conference" 
                  className="rounded-lg h-24 object-cover"
                />
                <img 
                  src={AboutImage} 
                  alt="Coding session" 
                  className="rounded-lg h-24 object-cover"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className='w-full lg:w-1/2'> 
            <div className='px-4 md:px-8'>
              <motion.h2 
                variants={itemVariants}
                className='text-3xl font-light mb-6 text-center lg:text-left'
              >
                My Journey as a Developer
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className='mb-6 text-lg text-neutral-300 leading-relaxed'
              > 
                With over 5 years of experience in full-stack development, I've built and deployed numerous web applications that combine elegant front-end interfaces with powerful back-end solutions. My journey began with a passion for solving real-world problems through code, and it has evolved into a career focused on creating scalable, maintainable, and user-centric digital experiences.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className='mb-8 text-lg text-neutral-300 leading-relaxed'
              > 
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with modern technologies like TypeScript, Next.js, and GraphQL. My approach combines technical expertise with an eye for design and user experience, ensuring that the applications I build are not just functional but also intuitive and enjoyable to use.
              </motion.p>
              
             
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
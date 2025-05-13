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

  const skills = [
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
        {/* Section Title with horizontal line design similar to hero */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center w-full max-w-3xl mx-auto mb-16 gap-4"
        >
          <div className="h-px bg-gradient-to-r from-purple-500 to-transparent flex-grow opacity-50"></div>
          <h2 className='text-5xl font-thin mb-4 text-center'>
            About <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">Me</span>
          </h2>
          <div className="h-px bg-gradient-to-l from-purple-500 to-transparent flex-grow opacity-50"></div>
        </motion.div>

        <div className='flex flex-wrap items-center'>
          {/* Image Column */}
          <div className='w-full lg:w-1/2 mb-12 lg:mb-0'>
            <div className='flex flex-col items-center px-4 md:px-8'>
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                {/* Terminal-like frame for main image */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-xl">
                  {/* Terminal header */}
                  <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-gray-400 font-mono flex-grow text-center">developer.experience</div>
                  </div>
                  
                  {/* Image container */}
                  <div className="p-2">
                    <div className="relative rounded-lg p-1 bg-gradient-to-br from-pink-300 to-purple-500 shadow-lg">
                      <div className="bg-neutral-950 bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden">
                        <img 
                          className='w-full object-cover aspect-video' 
                          src={AboutImage} 
                          alt="Gagan working on code" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Small badge in corner */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-neutral-900 rounded-lg shadow-lg flex items-center justify-center border-r-2 border-t-2 border-pink-300">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">2+</div>
                    <div className="text-xs text-gray-400">Years</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Skills section styled like terminal */}
              <motion.div
                variants={itemVariants}
                className=" w-full bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-xl mb-8"
              >
                <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-gray-400 font-mono flex-grow text-center">developer.approach.js</div>
                </div>
                
                <div className="p-6 font-mono text-sm">
                  <div className="text-pink-300">
                    <div className="mb-1">const <span className="text-purple-400">myApproach</span> = {'{'}</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">cleanCode</span>: true,</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">userCentric</span>: true,</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">continuous</span>: "learning",</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">passion</span>: "problem-solving"</div>
                    <div className="mb-1">{'}'}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className='w-full lg:w-1/2'> 
            <div className='px-4 md:px-8'>
              {/* Quote styled like in hero */}
              <motion.div 
                variants={itemVariants}
                className="mb-8 relative"
              >
                <div className="absolute left-0 top-0 text-4xl text-pink-300 opacity-40 font-serif">"</div>
                <p className="text-gray-300 italic text-lg pl-6 pr-4 py-1 border-l-2 border-pink-300">
                  Building digital experiences that blend technology with creativity
                </p>
                <div className="absolute right-0 bottom-0 text-4xl text-pink-300 opacity-40 font-serif">"</div>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className='text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left'
              >
                My <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">Journey</span> as a Developer & Photographer
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className='mb-6 text-lg text-neutral-300 leading-relaxed'
              > 
                With over 2 years of experience in full-stack development, I've built and deployed numerous web applications that combine elegant front-end interfaces with powerful back-end solutions. My journey began with a passion for solving real-world problems through code.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className='mb-8 text-lg text-neutral-300 leading-relaxed'
              > 
              I’m a passionate Software Developer with over 2 years of experience working on technologies like Java, React, React Native, SQL, .NET, Blazor, and MAUI, alongside 3+ years of experience as a photographer and certified drone operator, contributing to government projects with a creative and technical edge.
              </motion.p>
              
              {/* Terminal-like code snippet */}
              <motion.div
                variants={itemVariants}
                className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-xl mb-8"
              >
                <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-gray-400 font-mono flex-grow text-center">developer.approach.js</div>
                </div>
                
                <div className="p-6 font-mono text-sm">
                  <div className="text-pink-300">
                    <div className="mb-1">const <span className="text-purple-400">myApproach</span> = {'{'}</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">cleanCode</span>: true,</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">userCentric</span>: true,</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">continuous</span>: "learning",</div>
                    <div className="ml-4 mb-1"><span className="text-blue-400">passion</span>: "problem-solving"</div>
                    <div className="mb-1">{'}'}</div>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
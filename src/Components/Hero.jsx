import ProfilePic from "../assets/my3.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <div className="min-h-screen flex items-center border-b border-neutral-900 pb-12 lg:pb-0 bg-dark">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start"
          >
            <motion.p variants={textVariants} className="bg-gradient-to-r text-pink-300 to-purple-500 opacity-50  text-sm uppercase tracking-widest mb-2">
              Welcome to my portfolio!
            </motion.p>
            <motion.h1
              variants={textVariants}
              className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white"
            >
              Hello, my name's <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Gagan</span>.
            </motion.h1>
            
            <motion.p
              variants={textVariants}
              transition={{ delay: 0.2 }}
              className="text-lg font-light tracking-normal leading-relaxed text-slate-400 mb-8 max-w-lg"
            >
              I'm a Full Stack Developer specialized in modern web technologies, building intuitive and high-performance applications.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              variants={textVariants}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <a 
                href="#projects" 
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-pink-300 to-purple-500  text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium text-sm shadow-md"
              >
                Download CV
              </a>
              <a 
                href="#work" 
                className="inline-block px-6 py-2.5 border border-gray-500 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
              >
                See my work
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right Side - Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-72 h-72 rounded-full border-4 border-gradient-to-r from-pink-400 to-purple-500 shadow-lg overflow-hidden"
          >
            <img
              src={ProfilePic}
              alt="Gagan Sahu - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

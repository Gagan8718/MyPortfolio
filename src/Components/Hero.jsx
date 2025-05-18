import ProfilePic from "../assets/my3.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center px-6 lg:px-20 py-16 overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side - Text Content (Simplified) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Subtitle with horizontal line */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center w-full mb-4 gap-4"
          >
            <span className="text-sm text-gray-400 uppercase tracking-widest whitespace-nowrap">Full Stack Developer</span>
            <div className="h-px bg-gradient-to-r from-pink-300 to-purple-500 flex-grow opacity-50"></div>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">I'm </span>
            <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">Gagan Sahu</span>
          </motion.h1>
          
          {/* Quote with distinctive styling */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="absolute left-0 top-0 text-4xl text-pink-300 opacity-40 font-serif">"</div>
            <p className="text-gray-300 italic text-lg pl-6 pr-4 py-1 border-l-2 border-pink-300">
              Transforming ideas into elegant, efficient digital solutions
            </p>
            <div className="absolute right-0 bottom-0 text-4xl text-pink-300 opacity-40 font-serif">"</div>
          </motion.div>
          
          {/* Description - Simplified */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 text-lg mb-10 max-w-xl leading-relaxed"
          >
            I specialize in crafting robust web applications that deliver exceptional 
            user experiences, with a focus on clean architecture and performance.
          </motion.p>
          
          {/* Simple CTA Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-pink-300 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Unique Profile Visual */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Terminal-like frame */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative bg-neutral-950 border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
              style={{ width: '380px', maxWidth: '100%' }}
            >
              {/* Terminal header */}
              <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-400 font-mono flex-grow text-center">developer.profile</div>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 relative">
                {/* Glass card containing profile image */}
                <div className="relative z-10 rounded-lg p-1 bg-gradient-to-br from-pink-300 to-purple-500 shadow-lg">
                  <div className="bg-neutral-950 bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden">
                    <img 
                      src={ProfilePic} 
                      alt="Gagan Sahu" 
                      className="w-full aspect-square object-cover object-center"
                    />
                    
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 bg-neutral-950 bg-opacity-70 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-300 border-opacity-30">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs text-white font-medium">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Terminal code overlay */}
                <div className="absolute inset-0 z-0 opacity-20 p-4 overflow-hidden">
                  <div className="font-mono text-xs text-pink-300">
                    <div className="mb-1">const developer = {'{'}</div>
                    <div className="ml-4 mb-1">name: "Gagan Sahu",</div>
                    <div className="ml-4 mb-1">role: "Full Stack Developer",</div>
                    <div className="ml-4 mb-1">location: "India",</div>
                    <div className="ml-4 mb-1">skills: ["React", "Node", "MongoDB", ...</div>
                    <div className="mb-1">{'}'}</div>
                    <div className="mb-1 mt-2">function init() {'{'}</div>
                    <div className="ml-4">return developer.connect();</div>
                    <div className="mb-1">{'}'}</div>
                  </div>
                </div>
              </div>
              
              {/* Terminal footer */}
              <div className="px-4 py-3 bg-neutral-900 bg-opacity-50 flex items-center justify-between">
                <div className="font-mono text-xs text-gray-400">$ status: online</div>
                <div className="font-mono text-xs text-gray-400">v1.0.0</div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-neutral-900 rounded-lg shadow-lg flex items-center justify-center border-r-2 border-b-2 border-purple-500"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-neutral-900 rounded-lg shadow-lg flex items-center justify-center border-l-2 border-t-2 border-pink-300"
            >
              <div className="font-mono text-pink-300 text-xs">
                {'</>'}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle arrow indicator without text
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-pink-300 to-purple-500"></div>
      </motion.div> */}
    </div>
  );
};

export default Hero;
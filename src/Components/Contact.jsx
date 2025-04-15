import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const contactItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      value: "123 Developer Street, Tech City, IN 10001",
      link: "#"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className="py-20 px-4 md:px-8 " id="contact">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-center text-4xl md:text-5xl font-bold mb-16"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in
          </span>{' '}
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 10px 20px -5px rgba(34, 211, 238, 0.2)"
              }}
              className="flex flex-col items-center text-center p-8 rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">{item.title}</h3>
              <p className="text-slate-300">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-200">Or send me a message</h3>
          <form className="max-w-lg mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-500 transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-500 transition-all"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 text-slate-200 placeholder-slate-500 transition-all"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
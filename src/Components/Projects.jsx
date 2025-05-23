import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import project1 from "../assets/Project1.jpg";
import ceat from "../assets/image1.png";
import split from "../assets/image2.png";
import ec from "../assets/image.png";

const Projects = () => {
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

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      x: -30,
      rotate: -5 
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0 
    },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  const projects = [
    {
      title: "Ceat Tyre Inspection ",
      description: "The CEAT Tyre Inspection Project is a mobile and web-based application designed to monitor and evaluate the performance and durability of tyres used in various vehicles. It allows administrators, inspection engineers, and field staff to collaborate seamlessly on tyre fitment, inspections, and performance analysis.",
      skills: ["Blazor", "Maui Blazor", ".Net", "SQl"],
      image: ceat
    },
    
    {
      title: "SplitBill App",
      description: "A modern expense splitting application that helps friends and roommates track shared expenses and settle balances. Features include real-time updates, payment tracking, and detailed history.",
      skills: ["React", "Java", "Mysql", "Tailwind CSS", "JWT Auth"],
      image: split
    },
    

     {
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog, shopping cart, and secure checkout. Integrated with payment gateways and inventory management system.",
      skills: ["Java", "React", "AWS S3"],
      image: ec
    },
    {
      title: "Task Management Dashboard",
      description: "Productivity application with kanban boards, time tracking, and team collaboration features. Supports drag-and-drop functionality and real-time notifications.",
      skills: ["Java", "Html,Css", "JavaScript", "WebSockets"],
      image: project1
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8  from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-20">
          <span className="text-5xl font-thin mb-4 text-center">
            My
          </span>{' '}
          <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent font-thin bg-clip-text">
            Projects
          </span>
        </h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2
            });

            return (
              <motion.div
                ref={ref}
                key={index}
                variants={projectVariants}
                className="flex flex-col lg:flex-row gap-8 p-6 rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                  boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
                }}
              >
                <motion.div 
                  className="flex-shrink-0 w-full lg:w-1/3"
                  variants={imageVariants}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-90 h-50 object-fit rounded-xl shadow-lg border border-slate-700/50"
                  />
                </motion.div>

                <motion.div 
                  className="flex-1"
                  variants={contentVariants}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-slate-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    {project.skills.map((skill, skillIndex) => (
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
                        className="px-3 py-1 rounded-full text-sm font-medium border border-slate-600 bg-slate-700/50 backdrop-blur-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
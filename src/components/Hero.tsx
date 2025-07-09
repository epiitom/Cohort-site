import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowRight, Users, Trophy, Clock, LogIn, BookOpen, Users2, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Mouse Tracking Background Elements - Reduced darkness */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange tracking circles with reduced opacity */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-orange-600/15 to-orange-700/8 rounded-full blur-3xl shadow-xl shadow-orange-500/25"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30,
            mass: 1
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-orange-500/12 to-orange-600/6 rounded-full blur-3xl shadow-xl shadow-orange-400/20"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 40,
            mass: 1.5
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-white/10 to-gray-300/5 rounded-full blur-2xl shadow-lg shadow-white/15"
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 25,
            mass: 0.8
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-orange-400/10 to-orange-500/4 rounded-full blur-3xl shadow-xl shadow-orange-300/18"
          animate={{
            x: mousePosition.x - 96,
            y: mousePosition.y - 96,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 35,
            mass: 1.2
          }}
        />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-[#FF4726] p-2 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold">CodeCohort</span>
          </motion.div>
          
          {/* Centered Navigation */}
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="hidden md:flex space-x-8 text-white absolute left-[40%] transform -translate-x-1/2"
    >
      <a 
        href="#Course" 
        className="relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#FF4726] hover:drop-shadow-lg hover:shadow-orange-500/50 hover:bg-orange-500/10 hover:backdrop-blur-sm hover:border hover:border-orange-500/30 hover:-translate-y-1 hover:scale-105"
      >
        Cohorts
      </a>
      <a 
        href="#testimonials" 
        className="relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#FF4726] hover:drop-shadow-lg hover:shadow-orange-500/50 hover:bg-orange-500/10 hover:backdrop-blur-sm hover:border hover:border-orange-500/30 hover:-translate-y-1 hover:scale-105"
      >
        Testimonials
      </a>
      <a 
        href="#contact" 
        className="relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#FF4726] hover:drop-shadow-lg hover:shadow-orange-500/50 hover:bg-orange-500/10 hover:backdrop-blur-sm hover:border hover:border-orange-500/30 hover:-translate-y-1 hover:scale-105"
      >
        Contact
      </a>
    </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Master Coding with
            <span className="bg-[#FF4726] bg-clip-text text-transparent drop-shadow-lg shadow-orange-500/50">
              {' '}Expert Mentorship
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Join our intensive coding cohorts and transform your programming skills with hands-on projects, 
            personalized mentorship, and a supportive community of developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
           
            <button  className="bg-[#FF4726] text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-600/50 hover:shadow-orange-500/70" >
               <a href ="#Course">
               <span >Checkout Courses</span>
               </a>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/40">
              Watch Demo
            </button>
          </motion.div>

          {/* Peer Learning Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <button className="flex items-center space-x-2  bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-[#FF4726] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
              <Users2 className="w-4 h-4" />
              <span>Peer Learning</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-[#FF4726] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
              <BookOpen className="w-4 h-4" />
              <span>Practice</span>
            </button>
            
            <button className="flex items-center space-x-2  bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-[#FF4726] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
              <Target className="w-4 h-4" />
              <span>Challenges</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-600/30 p-3 rounded-full shadow-xl shadow-[#FF4726]">
                  <Users className="w-8 h-8 text-orange-400 drop-shadow-lg" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">2,500+</div>
              <div className="text-gray-300">Students Graduated</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-600/30 p-3 rounded-full shadow-xl shadow-[#FF4726]">
                  <Trophy className="w-8 h-8 text-orange-400 drop-shadow-lg" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">95%</div>
              <div className="text-gray-300">Job Placement Rate</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-600/30 p-3 rounded-full shadow-xl shadow-[#FF4726]">
                  <Clock className="w-8 h-8 text-orange-400 drop-shadow-lg" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">12 Weeks</div>
              <div className="text-gray-300">Intensive Program</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Horizontal Layout */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
          x: mousePosition.x * 0.01,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-10 w-16 h-16 bg-orange-600 rounded-full opacity-20"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
          x: mousePosition.x * -0.01,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-10 w-12 h-12 bg-[#FF4726] rounded-full opacity-20"
      />
      
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, 0],
          x: mousePosition.x * 0.008,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#FF4726] rounded-full opacity-15"
      />
      
      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -3, 0],
          x: mousePosition.x * -0.008,
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-10 h-10 bg-[#FF4726] rounded-full opacity-15"
      />
    </section>
  );
};

export default Hero;
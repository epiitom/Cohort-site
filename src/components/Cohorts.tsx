/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, Users, Calendar, Clock } from 'lucide-react';

const cohorts = [
  {
    id: 1,
    slug: 'frontend-mastery',
    title: "Frontend Mastery",
    description: "Master React, TypeScript, and modern frontend development",
    price: "$1,299",
    duration: "12 weeks",
    students: "24 students",
    rating: 4.9,
    startDate: "March 15, 2025",
    popular: false,
    features: [
      "React 18 with Hooks & Context",
      "TypeScript fundamentals",
      "Modern CSS & Tailwind",
      "State management with Redux",
      "Testing with Jest & React Testing Library",
      "Deployment strategies",
      "Real-world projects",
      "1-on-1 mentorship sessions"
    ],
    color: "from-blue-500 to-purple-500",
    detailedDescription: "Transform your frontend skills with our comprehensive React mastery program. Learn industry-standard practices, build production-ready applications, and gain the confidence to tackle any frontend challenge.",
    curriculum: [
      {
        week: "Week 1-2",
        title: "React Fundamentals",
        topics: ["JSX & Components", "Props & State", "Event Handling", "Conditional Rendering"]
      },
      {
        week: "Week 3-4",
        title: "Advanced React",
        topics: ["Hooks (useState, useEffect, useContext)", "Custom Hooks", "Component Lifecycle", "Error Boundaries"]
      },
      {
        week: "Week 5-6",
        title: "TypeScript Integration",
        topics: ["TypeScript Basics", "Typing React Components", "Interfaces & Types", "Generic Components"]
      },
      {
        week: "Week 7-8",
        title: "State Management",
        topics: ["Redux Toolkit", "Context API", "Local vs Global State", "Async Actions"]
      },
      {
        week: "Week 9-10",
        title: "Styling & UI",
        topics: ["Tailwind CSS", "Responsive Design", "CSS-in-JS", "Component Libraries"]
      },
      {
        week: "Week 11-12",
        title: "Testing & Deployment",
        topics: ["Jest & React Testing Library", "E2E Testing", "CI/CD", "Performance Optimization"]
      }
    ],
    projects: [
      "Interactive Todo Application",
      "E-commerce Product Dashboard",
      "Real-time Chat Application",
      "Portfolio Website with CMS"
    ],
    instructor: {
      name: "Sarah Johnson",
      role: "Senior Frontend Engineer at Google",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: 2,
    slug: 'full-stack-pro',
    title: "Full Stack Pro",
    description: "Complete web development with modern technologies",
    price: "$2,499",
    duration: "16 weeks",
    students: "18 students",
    rating: 4.9,
    startDate: "March 22, 2025",
    popular: true,
    features: [
      "Frontend with React & Next.js",
      "Backend with Node.js & Express",
      "Database design with PostgreSQL",
      "Authentication & security",
      "API development & testing",
      "DevOps & deployment",
      "Portfolio projects",
      "Weekly mentor calls",
      "Job placement assistance"
    ],
    color: "from-purple-500 to-pink-500",
    detailedDescription: "Become a complete full-stack developer with our most comprehensive program. From frontend to backend, databases to deployment, master every aspect of modern web development.",
    curriculum: [
      {
        week: "Week 1-3",
        title: "Frontend Foundation",
        topics: ["React Advanced Patterns", "Next.js Framework", "Server-Side Rendering", "Static Generation"]
      },
      {
        week: "Week 4-6",
        title: "Backend Development",
        topics: ["Node.js & Express", "RESTful APIs", "Middleware", "Error Handling"]
      },
      {
        week: "Week 7-9",
        title: "Database & Authentication",
        topics: ["PostgreSQL", "Database Design", "JWT Authentication", "Security Best Practices"]
      },
      {
        week: "Week 10-12",
        title: "Advanced Backend",
        topics: ["GraphQL", "Microservices", "Caching", "Performance Optimization"]
      },
      {
        week: "Week 13-14",
        title: "DevOps & Deployment",
        topics: ["Docker", "AWS/Vercel", "CI/CD Pipelines", "Monitoring"]
      },
      {
        week: "Week 15-16",
        title: "Capstone Project",
        topics: ["Full-Stack Application", "Code Review", "Deployment", "Portfolio Presentation"]
      }
    ],
    projects: [
      "Social Media Platform",
      "E-commerce Marketplace",
      "Project Management Tool",
      "Real-time Collaboration App"
    ],
    instructor: {
      name: "Michael Chen",
      role: "Full Stack Architect at Meta",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: 3,
    slug: 'backend-engineering',
    title: "Backend Engineering",
    description: "Build scalable servers and APIs with Node.js",
    price: "$1,599",
    duration: "14 weeks",
    students: "20 students",
    rating: 4.8,
    startDate: "April 5, 2025",
    popular: false,
    features: [
      "Node.js & Express mastery",
      "Database design & optimization",
      "RESTful API development",
      "GraphQL implementation",
      "Microservices architecture",
      "Testing & documentation",
      "Performance optimization",
      "Industry best practices"
    ],
    color: "from-green-500 to-blue-500",
    detailedDescription: "Master backend development with Node.js and build scalable, production-ready APIs. Learn industry best practices for server architecture, database design, and system scalability.",
    curriculum: [
      {
        week: "Week 1-2",
        title: "Node.js Fundamentals",
        topics: ["Event Loop", "Modules & NPM", "File System", "HTTP Servers"]
      },
      {
        week: "Week 3-4",
        title: "Express Framework",
        topics: ["Routing", "Middleware", "Error Handling", "Template Engines"]
      },
      {
        week: "Week 5-6",
        title: "Database Integration",
        topics: ["MongoDB & Mongoose", "PostgreSQL & Sequelize", "Data Modeling", "Migrations"]
      },
      {
        week: "Week 7-8",
        title: "API Development",
        topics: ["RESTful Design", "GraphQL", "API Documentation", "Versioning"]
      },
      {
        week: "Week 9-10",
        title: "Authentication & Security",
        topics: ["JWT", "OAuth", "Password Hashing", "Rate Limiting"]
      },
      {
        week: "Week 11-12",
        title: "Testing & Quality",
        topics: ["Unit Testing", "Integration Testing", "Code Quality", "Documentation"]
      },
      {
        week: "Week 13-14",
        title: "Scalability & Performance",
        topics: ["Caching", "Load Balancing", "Microservices", "Performance Monitoring"]
      }
    ],
    projects: [
      "RESTful API for Blog Platform",
      "GraphQL E-commerce API",
      "Microservices Architecture",
      "Real-time Chat Backend"
    ],
    instructor: {
      name: "David Rodriguez",
      role: "Backend Lead at Netflix",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  }
];

// Course List Component
const CourseList = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e : any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const openCourseDetail = (course : any) => {
    navigate(`/course/${course.slug}`);
  };

  return (
    <section id ="Course" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF4726] mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intensive, hands-on cohorts designed to fast-track your coding career.
            Learn from industry experts and build real-world projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cohorts.map((cohort, index) => (
            <motion.div
              key={cohort.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseMove={handleMouseMove}
              className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                cohort.popular ? 'ring-2 ring-orange-500' : ''
              }`}
              style={{
                boxShadow: `0 0 40px rgba(251, 146, 60, 0.1)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 40%, transparent 70%)`
                }}
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-sm" />
              </div>

              {cohort.popular && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${cohort.color} relative z-10`} />

              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{cohort.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400">{cohort.rating}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{cohort.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-400">{cohort.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-400">{cohort.students}</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-400">Starts {cohort.startDate}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {cohort.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {cohort.features.length > 4 && (
                      <li className="text-sm text-gray-500 pl-6">
                        +{cohort.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">{cohort.price}</div>
                    <div className="text-sm text-gray-400">Full program</div>
                  </div>
                  <button
                    onClick={() => openCourseDetail(cohort)}
                    className="bg-gradient-to-r from-[#FF4726] to-orange-600 hover:from-orange-600 hover:to-[#FF4726] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#FF4726] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Not sure which cohort is right for you?</h3>
              <p className="text-orange-100 mb-6">
                Book a free consultation with our career advisors to find the perfect path for your goals.
              </p>
              <button className="bg-white text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors shadow-lg">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export  default CourseList

import {useEffect} from "react"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, Users, Calendar, Clock, ArrowLeft,CreditCard, BookOpen, Trophy, Globe, MessageCircle } from 'lucide-react';

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
// Course Detail Component
const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const course = cohorts.find(c => c.slug === slug);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const backToCourses = () => {
    navigate('/');
  };

  const goToEnrollment = () => {
    navigate(`/course/${slug}/enroll`);
  };

  return (
    <div className="min-h-screen bg-black scroll-mt-0">
      <div className="max-w-6xl mx-auto px-5">
        <button
          onClick={backToCourses}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Courses</span>
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color} rounded-t-xl mb-6`} />

              <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.detailedDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white font-semibold">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-400">Students</div>
                    <div className="text-white font-semibold">{course.students}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-400">Starts</div>
                    <div className="text-white font-semibold">{course.startDate}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-orange-500 fill-current" />
                  <div>
                    <div className="text-sm text-gray-400">Rating</div>
                    <div className="text-white font-semibold">{course.rating}</div>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Meet Your Instructor</h2>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{course.instructor.name}</h3>
                    <p className="text-gray-400">{course.instructor.role}</p>
                    <p className="text-sm text-gray-500">{course.instructor.experience} experience</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-xl">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Projects You'll Build</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.projects.map((project, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-xl">
                      <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="bg-gray-800 rounded-xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-white">{week.title}</h3>
                        <span className="text-sm text-orange-500 font-medium">{week.week}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {week.topics.map((topic, i) => (
                          <div key={i} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <span className="text-orange-400 text-xl leading-none">&bull;</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-20 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{course.price}</h2>
              <p className="text-gray-400 mb-6">Full program price</p>

              <button
                onClick={goToEnrollment}
                className="w-full bg-gradient-to-r from-[#FF4726] to-orange-600 hover:from-orange-600 hover:to-[#FF4726] text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 mb-6"
              >
                Enroll Now
              </button>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span>Lifetime Access to Course Materials</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span>Dedicated Instructor Support</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CreditCard className="w-5 h-5 text-purple-500" />
                  <span>Flexible Payment Options</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Have questions? <a href="#" className="text-orange-500 hover:underline">Contact us</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetail
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, User, Trophy } from 'lucide-react';
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
// Enrollment Form Component
const EnrollmentForm = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    motivation: ''
  });

  const course = cohorts.find(c => c.slug === slug);

  if (!course) {
    navigate('/');
    return null;
  }

  const backToCourseDetail = () => {
    navigate(`/course/${slug}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEnrollmentSubmit = (e : any) => {
    e.preventDefault();
    // Handle enrollment submission here
    alert('Enrollment submitted successfully! We will contact you soon.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={backToCourseDetail}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Course Details</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Enroll in {course.title}</h1>
            <p className="text-gray-300">Fill out the form below to secure your spot</p>
          </div>

          <form onSubmit={handleEnrollmentSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={enrollmentData.name}
                    onChange={(e) => setEnrollmentData({...enrollmentData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={enrollmentData.email}
                    onChange={(e) => setEnrollmentData({...enrollmentData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    required
                    value={enrollmentData.phone}
                    onChange={(e) => setEnrollmentData({...enrollmentData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., +1234567890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Years of Experience
                </label>
                <div className="relative">
                  <Trophy className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={enrollmentData.experience}
                    onChange={(e) => setEnrollmentData({...enrollmentData, experience: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 2 years in React"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Why are you interested in this cohort? *
              </label>
              <textarea
                required
                rows={4}
                value={enrollmentData.motivation}
                onChange={(e) => setEnrollmentData({...enrollmentData, motivation: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Tell us about your goals and what you hope to achieve..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF4726] to-orange-600 hover:from-orange-600 hover:to-[#FF4726] text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
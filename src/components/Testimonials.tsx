import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    company: "Google",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "CodeCohort transformed my career completely. The mentorship was incredible, and the projects we built were exactly what I needed to land my dream job. The instructors really care about your success.",
    rating: 5,
    cohort: "Full Stack Pro"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Senior Frontend Developer",
    company: "Netflix",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The curriculum is cutting-edge and the community is amazing. I went from zero coding experience to landing a six-figure job in just 4 months. The career support is unmatched.",
    rating: 5,
    cohort: "Frontend Mastery"
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Backend Engineer at Stripe",
    company: "Stripe",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "What sets CodeCohort apart is the quality of instruction and the real-world projects. I felt confident walking into technical interviews because I had already built similar systems.",
    rating: 5,
    cohort: "Backend Engineering"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Full Stack Developer",
    company: "Airbnb",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The hands-on approach and personalized mentorship made all the difference. I was able to transition from a non-tech background to a senior developer role in less than a year.",
    rating: 5,
    cohort: "Full Stack Pro"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Software Engineer at Meta",
    company: "Meta",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The support system at CodeCohort is incredible. Even after graduation, the community continues to be a valuable resource. The investment in this program was the best decision I made.",
    rating: 5,
    cohort: "Frontend Mastery"
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Senior Backend Developer",
    company: "Uber",
    image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "The curriculum is always up-to-date with industry trends. The instructors are practicing engineers who bring real-world experience to every lesson. Couldn't recommend it more.",
    rating: 5,
    cohort: "Backend Engineering"
  }
];

const Testimonials: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF4726]">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our graduates are saying about their 
            experience and career transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseMove={handleMouseMove}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative group"
              style={{
                boxShadow: `0 0 30px rgba(251, 146, 60, 0.1)`,
              }}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 40%, transparent 70%)`
                }}
              />
              
              {/* Orange glow ring on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-sm" />
              </div>

              <div className="relative z-10">
                <div className="absolute top-0 right-0 text-orange-500/30">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500/30"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-orange-400 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="bg-orange-500/20 text-[#FF4726] px-3 py-1 rounded-full text-sm font-medium inline-block border border-orange-500/30">
                  {testimonial.cohort} Graduate
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
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 text-white border border-gray-800 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of developers who have transformed their careers with CodeCohort. 
                Your journey to becoming a top-tier developer starts here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#FF4726] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  Start Your Journey
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  View All Reviews
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
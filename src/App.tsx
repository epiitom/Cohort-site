import React from 'react';
import Hero from './components/Hero';
import Course from './components/Cohorts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import EnrollmentForm from './components/Enroll';// You'll need to create this as a separate component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Home page with Hero, Course list, Testimonials, and Footer */}
          <Route path="/" element={
            <>
              <Hero />
              <Course />
              <Testimonials />
              <Footer />
            </>
          } />
          
          {/* Course detail page - only shows course details */}
          <Route path="/course/:slug" element={<CourseDetail />} />
          
          {/* Enrollment page - completely separate page */}
          <Route path="/course/:slug/enroll" element={<EnrollmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import CalloutSection from '@/components/CalloutSection';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for smooth section reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-revealed');
          // Once revealed, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    // Observe all sections with section-reveal class
    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Clean up
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <div className="section-reveal">
        <AboutSection />
      </div>
      
      <div className="section-reveal">
        <FeaturesSection />
      </div>
      
      <div className="section-reveal">
        <CalloutSection />
      </div>
    </div>
  );
};

export default Index;

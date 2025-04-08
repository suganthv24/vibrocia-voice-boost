
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import CalloutSection from '@/components/CalloutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-reveal');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('section-revealed');
        }
      });
    };
    
    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      
      <div className="section-reveal">
        <TestimonialsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

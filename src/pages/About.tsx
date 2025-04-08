
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
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
      
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-blue/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">About Vibrocia</h1>
            <p className="text-lg text-gray-600">
              Our mission to help students turn their fear of speaking into a strength for life
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Vibrocia was born from a simple observation: technical brilliance often remains hidden behind communication barriers. 
                  We saw talented engineering students with incredible ideas who struggled to express themselves in interviews, 
                  presentations, and everyday social interactions.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our founders, themselves former engineering students, experienced firsthand how communication skills can make 
                  or break careers — regardless of technical expertise. They created Vibrocia as the tool they wished they had 
                  during their student years.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're dedicated to helping students overcome social anxiety, presentation fears, and communication blocks 
                  through a supportive, AI-powered platform that grows with you at every step.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-vibrocia-dark">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vibrocia-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vibrocia-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-vibrocia-dark">Growth</h3>
                  <p className="text-gray-600 text-center">
                    We believe in continuous improvement, both for our users and ourselves. 
                    Progress, not perfection, is our guiding principle.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vibrocia-teal/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vibrocia-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-vibrocia-dark">Empathy</h3>
                  <p className="text-gray-600 text-center">
                    Understanding the emotional challenges of communication difficulties 
                    is at the heart of everything we create.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vibrocia-lavender/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vibrocia-lavender" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/>
                      <circle cx="17" cy="7" r="5"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-vibrocia-dark">Courage</h3>
                  <p className="text-gray-600 text-center">
                    We celebrate every step our users take outside their comfort zones, 
                    because courage is a muscle that grows with practice.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-vibrocia-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vibrocia-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                      <path d="M12 9v4"/>
                      <path d="M12 17h.01"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-vibrocia-dark">Confidence</h3>
                  <p className="text-gray-600 text-center">
                    We believe confidence is a skill that can be learned, practiced, and mastered 
                    with the right tools and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="bg-vibrocia-light rounded-2xl p-10 shadow-lg">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4 text-vibrocia-dark">Why Communication Matters in Tech</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  In today's technical landscape, communication skills are as crucial as coding expertise
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Career Advancement</h3>
                  <p className="text-gray-600">
                    Research shows that technical professionals who communicate effectively are promoted 
                    more quickly and earn higher salaries than equally skilled peers who struggle with expression.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Project Success</h3>
                  <p className="text-gray-600">
                    The most innovative technical solutions can fail without clear communication. 
                    Articulating ideas effectively ensures your technical brilliance gets implemented.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Team Collaboration</h3>
                  <p className="text-gray-600">
                    Modern engineering is team-based. Strong communicators contribute more effectively 
                    to group projects and help create positive team cultures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-vibrocia-blue to-vibrocia-teal opacity-90"></div>
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Our Community of Confident Communicators
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Find your voice, build your confidence, and unlock your full professional potential.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-vibrocia-blue hover:bg-white/90 px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Join Vibrocia Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

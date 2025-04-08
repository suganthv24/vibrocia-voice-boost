
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Users, LineChart, BookOpen, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">Our Features</h1>
            <p className="text-lg text-gray-600">
              Tools designed to help you overcome communication challenges and build lasting confidence
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="mb-4 inline-block p-3 bg-vibrocia-blue/10 rounded-2xl">
                  <Mic className="w-8 h-8 text-vibrocia-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-vibrocia-dark">AI Chat Coach</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Simulates real-life conversations and gives detailed suggestions on how to speak clearly, 
                  reduce filler words, improve tone, and control pacing. Practice interviews, conversations, 
                  and elevator pitches with real-time AI feedback.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Real-time feedback on tone and clarity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Practice common interview questions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Personalized improvement suggestions</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Chat Coach" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Roleplay Zone" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4 inline-block p-3 bg-vibrocia-teal/10 rounded-2xl">
                  <Users className="w-8 h-8 text-vibrocia-teal" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-vibrocia-dark">Roleplay Zone</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Includes scenarios like group discussions, tech presentations, elevator pitches, 
                  and even daily social interactions like introducing yourself or handling criticism. 
                  Daily tasks and guided simulations encourage you to interact in real scenarios.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Realistic simulation of social scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Gradually increasing difficulty levels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Structured practice for real-world situations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <div className="mb-4 inline-block p-3 bg-vibrocia-lavender/10 rounded-2xl">
                  <LineChart className="w-8 h-8 text-vibrocia-lavender" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-vibrocia-dark">Confidence Tracker</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A simple dashboard to log how you feel before and after social tasks. Over time, 
                  it visualizes your growth in confidence, mood stability, and participation frequency.
                  Track emotional progress and identify communication patterns.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-lavender">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Visual progress tracking over time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-lavender">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Identify patterns in communication comfort</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-lavender">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Mood tracking before and after interactions</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Confidence Tracker" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Personalized Journey" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4 inline-block p-3 bg-vibrocia-blue/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-vibrocia-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-vibrocia-dark">Personalized Journey</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Based on your performance, the app creates a learning path with levels — beginner to confident speaker. 
                  Each level comes with lessons, activities, and reflection questions targeting areas like eye contact, 
                  small talk, public speaking, and teamwork.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Custom learning path based on your needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Progressive skill-building exercises</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Focus on specific communication challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4 inline-block p-3 bg-vibrocia-teal/10 rounded-2xl">
                  <BookText className="w-8 h-8 text-vibrocia-teal" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-vibrocia-dark">Reflection Journal</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Optional journaling feature where users can write about how they felt after an interaction. 
                  Promotes self-awareness and emotional health while creating a record of your personal growth 
                  and insights along your confidence-building journey.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Private space for honest reflection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Build self-awareness through writing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-teal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">Track emotional progress through journaling</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Reflection Journal" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-vibrocia-light/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-vibrocia-dark">
              Ready to transform your communication confidence?
            </h2>
            <Button 
              size="lg" 
              className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Start Your Journey Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;

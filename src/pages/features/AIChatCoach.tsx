
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mic, MessageSquare, Sparkles } from 'lucide-react';

const AIChatCoach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-blue/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-6 inline-block">
              <div className="w-16 h-16 bg-vibrocia-blue/10 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-vibrocia-blue" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">AI Chat Coach</h1>
            <p className="text-lg text-gray-600">
              Practice conversations with an AI that adapts to your communication style and helps you improve gradually
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Practice Without Pressure</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our AI Chat Coach creates a safe environment where you can practice conversations, interviews, and presentations 
                without the anxiety of real-world stakes. Get immediate, constructive feedback to improve your communication skills.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Real-time Feedback</h3>
                    <p className="text-gray-600">Get immediate suggestions on your tone, clarity, and pace</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Personalized Scenarios</h3>
                    <p className="text-gray-600">Practice specific situations you find challenging</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Progressive Difficulty</h3>
                    <p className="text-gray-600">Start easy and gradually tackle more challenging conversations</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-vibrocia-light/20 p-6">
              <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-vibrocia-blue/10 flex items-center justify-center mr-3">
                    <MessageSquare className="w-5 h-5 text-vibrocia-blue" />
                  </div>
                  <div className="font-medium text-vibrocia-dark">AI Coach</div>
                </div>
                <p className="text-gray-700">
                  Hi there! Let's practice for your upcoming interview. Can you tell me about a challenging project you've worked on?
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 mb-4 ml-8">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-vibrocia-teal/10 flex items-center justify-center mr-3">
                    <div className="font-medium text-vibrocia-teal">You</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Um, I worked on... like a database project that was kind of complex because we had to integrate with legacy systems.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-vibrocia-lavender/10 flex items-center justify-center mr-3">
                    <Sparkles className="w-5 h-5 text-vibrocia-lavender" />
                  </div>
                  <div className="font-medium text-vibrocia-lavender">Feedback</div>
                </div>
                <p className="text-gray-700">
                  Good start! Try removing filler words like "um" and "like". Also, speak with more confidence by describing your specific role and impact on the project.
                </p>
              </div>
              
              <Button className="w-full mt-4 bg-vibrocia-blue hover:bg-vibrocia-blue/90">
                Try AI Chat Coach
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Interview Preparation</h3>
              <p className="text-gray-600 mb-4">
                Practice answering common interview questions for technical and behavioral assessments with specific feedback on your responses.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Presentation Skills</h3>
              <p className="text-gray-600 mb-4">
                Rehearse your presentations, get feedback on your delivery, pacing, clarity, and suggestions for improvement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Everyday Conversations</h3>
              <p className="text-gray-600 mb-4">
                Practice social interactions, from networking events to casual conversations, with guidance on making connections.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-vibrocia-light/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Ready to Start Practicing?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Begin your journey to better communication today with our AI Chat Coach.
            </p>
            <Button 
              size="lg" 
              className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIChatCoach;

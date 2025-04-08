
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Map, Target, Award, Compass } from 'lucide-react';

const PersonalizedJourney = () => {
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
                <BookOpen className="w-8 h-8 text-vibrocia-blue" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">Personalized Learning Paths</h1>
            <p className="text-lg text-gray-600">
              Follow customized activities and exercises that gradually build your skills at a pace that works for you
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-vibrocia-blue/10 flex items-center justify-center mr-4">
                    <Map className="w-5 h-5 text-vibrocia-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-vibrocia-dark">Your Learning Journey</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-vibrocia-blue flex items-center justify-center text-white font-bold">1</div>
                      <div className="w-1 h-full bg-vibrocia-blue/20 my-1"></div>
                    </div>
                    <div className="bg-vibrocia-blue/5 rounded-lg p-4 flex-1">
                      <h4 className="font-bold text-vibrocia-dark mb-1">Foundation Level</h4>
                      <p className="text-gray-600 text-sm">Basic communication skills and self-awareness</p>
                      <div className="mt-2 w-full bg-vibrocia-blue/10 rounded-full h-2">
                        <div className="bg-vibrocia-blue h-2 rounded-full w-[100%]"></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-vibrocia-blue">Completed</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-vibrocia-blue flex items-center justify-center text-white font-bold">2</div>
                      <div className="w-1 h-full bg-vibrocia-blue/20 my-1"></div>
                    </div>
                    <div className="bg-vibrocia-blue/5 rounded-lg p-4 flex-1">
                      <h4 className="font-bold text-vibrocia-dark mb-1">Comfort Building</h4>
                      <p className="text-gray-600 text-sm">Face-to-face interactions and anxiety reduction</p>
                      <div className="mt-2 w-full bg-vibrocia-blue/10 rounded-full h-2">
                        <div className="bg-vibrocia-blue h-2 rounded-full w-[60%]"></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-vibrocia-blue">60% Complete</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">3</div>
                      <div className="w-1 h-full bg-gray-200 my-1"></div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 flex-1">
                      <h4 className="font-bold text-gray-500 mb-1">Professional Communication</h4>
                      <p className="text-gray-500 text-sm">Presentations, interviews, and technical discussions</p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-300 h-2 rounded-full w-[0%]"></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-gray-500">Locked</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">4</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 flex-1">
                      <h4 className="font-bold text-gray-500 mb-1">Leadership & Influence</h4>
                      <p className="text-gray-500 text-sm">Leading discussions and influencing groups</p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-300 h-2 rounded-full w-[0%]"></div>
                      </div>
                      <p className="text-xs text-right mt-1 text-gray-500">Locked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Your Path to Confidence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Everyone's journey to better communication is different. Our personalized learning paths 
                adapt to your unique needs, strengths, and challenges, guiding you through a 
                step-by-step process at your own pace.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Tailored to You</h3>
                    <p className="text-gray-600">Customized activities based on your assessment results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Progressive Challenges</h3>
                    <p className="text-gray-600">Gradually increasing difficulty as your skills improve</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Achievement Milestones</h3>
                    <p className="text-gray-600">Clear goals and rewards to motivate your progress</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center text-vibrocia-dark">Journey Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-blue/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-vibrocia-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Skill Assessment</h3>
              <p className="text-gray-600 mb-4">
                Regular evaluations to identify your strengths and areas for improvement, ensuring your path 
                remains relevant to your needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-teal/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-vibrocia-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Structured Modules</h3>
              <p className="text-gray-600 mb-4">
                Focused learning units that target specific skills like eye contact, voice modulation, 
                active listening, and handling criticism.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-lavender/10 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-vibrocia-lavender" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Practical Challenges</h3>
              <p className="text-gray-600 mb-4">
                Real-world tasks that encourage you to apply your new skills in everyday situations, 
                with reflection prompts to deepen learning.
              </p>
            </div>
          </div>
          
          <div className="bg-vibrocia-light/20 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-vibrocia-dark">Current Level: Comfort Building</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-vibrocia-dark mb-4">This Week's Focus Areas:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m8 12 3 3 5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-vibrocia-dark">Maintaining Eye Contact</h3>
                      <p className="text-gray-600 text-sm">3 exercises to complete</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-vibrocia-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m8 12 3 3 5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-vibrocia-dark">Voice Projection</h3>
                      <p className="text-gray-600 text-sm">2 exercises to complete</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-500">Handling Questions</h3>
                      <p className="text-gray-500 text-sm">Unlocks after current modules</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-vibrocia-dark mb-4">Next Challenge:</h4>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-vibrocia-blue/10 flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-vibrocia-blue" />
                    </div>
                    <div className="font-bold text-vibrocia-dark">One-Minute Introduction</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Practice introducing yourself clearly and confidently in under 60 seconds, focusing on 
                    maintaining eye contact and speaking at a steady pace.
                  </p>
                  <Button className="w-full bg-vibrocia-blue hover:bg-vibrocia-blue/90">
                    Start Challenge
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-vibrocia-light/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Begin Your Personal Journey</h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step on your path to better communication and lasting confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PersonalizedJourney;

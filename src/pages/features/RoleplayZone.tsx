
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, BriefcaseBusiness, GraduationCap, UsersRound } from 'lucide-react';

const RoleplayZone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-teal/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-6 inline-block">
              <div className="w-16 h-16 bg-vibrocia-teal/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-vibrocia-teal" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">Roleplay & Real-Life Challenges</h1>
            <p className="text-lg text-gray-600">
              Engage in simulated scenarios for interviews, presentations, and social interactions tailored to your goals
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Students practicing conversation" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Practice Makes Progress</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Roleplay Zone provides structured scenarios that simulate real-world situations, 
                helping you gain confidence through gradual exposure and practice. Each scenario is 
                designed to be challenging yet achievable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Realistic Simulations</h3>
                    <p className="text-gray-600">Practice in environments that mimic real-life situations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Progressive Difficulty</h3>
                    <p className="text-gray-600">Start with beginner scenarios and work up to advanced challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Varied Scenarios</h3>
                    <p className="text-gray-600">From job interviews to group projects to social events</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center text-vibrocia-dark">Scenario Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-teal/10 flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-vibrocia-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Professional Scenarios</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-teal text-sm">•</div>
                  <span>Technical Job Interviews</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-teal text-sm">•</div>
                  <span>Client Presentations</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-teal text-sm">•</div>
                  <span>Performance Reviews</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-teal text-sm">•</div>
                  <span>Networking Events</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-lavender/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-vibrocia-lavender" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Academic Scenarios</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-lavender text-sm">•</div>
                  <span>Group Project Discussions</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-lavender text-sm">•</div>
                  <span>Thesis Defense</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-lavender text-sm">•</div>
                  <span>Asking Questions in Class</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-lavender text-sm">•</div>
                  <span>Technical Presentations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-blue/10 flex items-center justify-center mb-4">
                <UsersRound className="w-6 h-6 text-vibrocia-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Social Scenarios</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-blue text-sm">•</div>
                  <span>Meeting New People</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-blue text-sm">•</div>
                  <span>Joining Group Conversations</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-blue text-sm">•</div>
                  <span>Handling Disagreements</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-vibrocia-blue text-sm">•</div>
                  <span>Making Small Talk</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-vibrocia-light/20 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-vibrocia-dark">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-vibrocia-teal flex items-center justify-center text-white font-bold mb-4">1</div>
                <h4 className="font-bold mb-2">Choose a Scenario</h4>
                <p className="text-gray-600">Select a situation that you want to practice from our extensive library</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-vibrocia-teal flex items-center justify-center text-white font-bold mb-4">2</div>
                <h4 className="font-bold mb-2">Complete the Challenge</h4>
                <p className="text-gray-600">Engage with our AI-powered system to roleplay through the scenario</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-vibrocia-teal flex items-center justify-center text-white font-bold mb-4">3</div>
                <h4 className="font-bold mb-2">Get Feedback & Improve</h4>
                <p className="text-gray-600">Receive personalized feedback and practice as many times as you need</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-vibrocia-light/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Ready to Face Your Challenges?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Start with your first roleplay scenario today and build your confidence step by step.
            </p>
            <Button 
              size="lg" 
              className="bg-vibrocia-teal hover:bg-vibrocia-teal/90 text-white px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Try Roleplay Zone</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RoleplayZone;

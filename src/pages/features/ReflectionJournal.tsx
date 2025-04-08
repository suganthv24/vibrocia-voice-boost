
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookText, PenLine, FileText, Lightbulb, Calendar } from 'lucide-react';

const ReflectionJournal = () => {
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
                <BookText className="w-8 h-8 text-vibrocia-teal" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">Reflection Journal</h1>
            <p className="text-lg text-gray-600">
              Document your journey, capture insights, and deepen your self-awareness through guided reflection
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">The Power of Reflection</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Reflection Journal provides a private space for you to process your experiences, 
                notice patterns in your thoughts and feelings, and celebrate your progress. Regular 
                reflection has been proven to accelerate learning and build self-awareness.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Guided Prompts</h3>
                    <p className="text-gray-600">Thoughtful questions to help you process experiences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Private & Secure</h3>
                    <p className="text-gray-600">Your thoughts remain confidential and protected</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Progress Timeline</h3>
                    <p className="text-gray-600">Review past entries to see how far you've come</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-vibrocia-teal/5 p-6 border border-vibrocia-teal/20 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-vibrocia-teal/10 flex items-center justify-center mr-3">
                    <PenLine className="w-5 h-5 text-vibrocia-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-vibrocia-dark">Today's Reflection</h3>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                  <h4 className="font-bold text-vibrocia-dark mb-2">How did your presentation go today?</h4>
                  <p className="text-gray-500 text-sm italic mb-3">
                    Take a moment to reflect on what went well and what you'd like to improve next time.
                  </p>
                  <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 text-gray-600">
                    <p className="mb-2">
                      I was nervous at first, but after the first minute I started to feel more comfortable. 
                      I remembered to speak slowly and make eye contact with different people in the room.
                    </p>
                    <p className="mb-2">
                      What went well: I explained the technical concepts clearly and answered questions confidently.
                    </p>
                    <p>
                      Next time: I want to work on my opening to make it more engaging and practice my transitions between slides.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-vibrocia-dark">How are you feeling now?</h4>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-vibrocia-blue/20 flex items-center justify-center cursor-pointer">
                        <span className="text-lg">😊</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-vibrocia-teal/20 flex items-center justify-center cursor-pointer">
                        <span className="text-lg">😌</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
                        <span className="text-lg">😐</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-vibrocia-teal hover:bg-vibrocia-teal/90">
                    Save Today's Entry
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-teal/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-vibrocia-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Journal Templates</h3>
              <p className="text-gray-600 mb-4">
                Choose from various reflection templates designed for different situations, from interview 
                preparation to social events to class participation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-lavender/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-vibrocia-lavender" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Insight Extraction</h3>
              <p className="text-gray-600 mb-4">
                Our AI helps you identify patterns in your reflections, highlighting recurring themes 
                and showing you how your confidence and communication are evolving.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-blue/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-vibrocia-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Reflection Reminders</h3>
              <p className="text-gray-600 mb-4">
                Set custom reminders to ensure you take time to reflect after important events 
                or on a regular schedule that works for your learning style.
              </p>
            </div>
          </div>
          
          <div className="bg-vibrocia-light/20 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-vibrocia-dark">How Journaling Helps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-vibrocia-dark">Process Emotions</h4>
                <p className="text-gray-600 mb-4">
                  Writing about your feelings before and after communication challenges helps you process 
                  anxiety, recognize progress, and develop emotional resilience. Many students report that 
                  just articulating their fears makes them less overwhelming.
                </p>
                <p className="flex items-start text-gray-600 italic text-sm">
                  <span className="text-vibrocia-teal mr-2">❝</span>
                  Writing down my thoughts after presentations helped me realize I was being much harder on myself than necessary. The journal showed me I was actually improving!
                  <span className="text-vibrocia-teal ml-2">❞</span>
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-vibrocia-dark">Accelerate Learning</h4>
                <p className="text-gray-600 mb-4">
                  Regular reflection has been proven to deepen learning and accelerate skill development. 
                  By taking time to consider what worked and what didn't, you create stronger neural pathways 
                  and make faster progress in your communication confidence.
                </p>
                <p className="flex items-start text-gray-600 italic text-sm">
                  <span className="text-vibrocia-teal mr-2">❝</span>
                  The guided prompts helped me notice patterns I wouldn't have seen otherwise. Now I know exactly what triggers my anxiety and what helps me overcome it.
                  <span className="text-vibrocia-teal ml-2">❞</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-vibrocia-light/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Start Your Reflection Practice</h2>
            <p className="text-lg text-gray-600 mb-8">
              Begin documenting your journey to better communication and self-awareness today.
            </p>
            <Button 
              size="lg" 
              className="bg-vibrocia-teal hover:bg-vibrocia-teal/90 text-white px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Create Your Journal</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReflectionJournal;


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LineChart, LineChartIcon, BarChart, PieChart } from 'lucide-react';

const ConfidenceTracker = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-lavender/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-6 inline-block">
              <div className="w-16 h-16 bg-vibrocia-lavender/10 rounded-full flex items-center justify-center">
                <LineChart className="w-8 h-8 text-vibrocia-lavender" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">Confidence & Mood Tracker</h1>
            <p className="text-lg text-gray-600">
              Monitor your progress over time with insights into your emotional patterns and confidence growth
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Visualize Your Growth</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Confidence Tracker helps you visually monitor your progress and identify patterns in your 
                communication comfort levels. By recording how you feel before and after interactions, you'll 
                gain insights into your emotional responses and track your improvement over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-lavender">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Track Your Journey</h3>
                    <p className="text-gray-600">See your confidence growth with intuitive graphs and visual data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-lavender">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Identify Patterns</h3>
                    <p className="text-gray-600">Discover which situations trigger anxiety and which show improvement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-vibrocia-lavender">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vibrocia-dark">Celebrate Milestones</h3>
                    <p className="text-gray-600">Mark and celebrate your progress with achievement badges</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-vibrocia-dark">Confidence Growth</h3>
              <div className="h-64 bg-gray-50 rounded-lg mb-6 p-4 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Sample confidence chart visualization */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    <div className="h-[20%] w-6 bg-vibrocia-lavender/20 mx-1 rounded-t-sm"></div>
                    <div className="h-[30%] w-6 bg-vibrocia-lavender/30 mx-1 rounded-t-sm"></div>
                    <div className="h-[25%] w-6 bg-vibrocia-lavender/40 mx-1 rounded-t-sm"></div>
                    <div className="h-[40%] w-6 bg-vibrocia-lavender/50 mx-1 rounded-t-sm"></div>
                    <div className="h-[35%] w-6 bg-vibrocia-lavender/60 mx-1 rounded-t-sm"></div>
                    <div className="h-[50%] w-6 bg-vibrocia-lavender/70 mx-1 rounded-t-sm"></div>
                    <div className="h-[45%] w-6 bg-vibrocia-lavender/80 mx-1 rounded-t-sm"></div>
                    <div className="h-[60%] w-6 bg-vibrocia-lavender mx-1 rounded-t-sm"></div>
                    <div className="h-[55%] w-6 bg-vibrocia-lavender mx-1 rounded-t-sm"></div>
                    <div className="h-[70%] w-6 bg-vibrocia-lavender mx-1 rounded-t-sm"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-full flex justify-between text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-vibrocia-dark">Emotional Response</h3>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-vibrocia-blue/10 flex items-center justify-center mx-auto mb-2">
                    <BarChart className="w-6 h-6 text-vibrocia-blue" />
                  </div>
                  <p className="text-sm text-gray-600">Anxiety Levels</p>
                  <p className="text-2xl font-bold text-vibrocia-dark">-32%</p>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-vibrocia-teal/10 flex items-center justify-center mx-auto mb-2">
                    <PieChart className="w-6 h-6 text-vibrocia-teal" />
                  </div>
                  <p className="text-sm text-gray-600">Confidence</p>
                  <p className="text-2xl font-bold text-vibrocia-dark">+47%</p>
                </div>
              </div>
              
              <Button className="w-full bg-vibrocia-lavender hover:bg-vibrocia-lavender/90">
                View Your Dashboard
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-lavender/10 flex items-center justify-center mb-4">
                <LineChartIcon className="w-6 h-6 text-vibrocia-lavender" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Progress Tracking</h3>
              <p className="text-gray-600">
                Visualize your confidence growth over weeks and months with intuitive charts that show your journey.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-blue/10 flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-vibrocia-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Situation Analysis</h3>
              <p className="text-gray-600">
                Compare your confidence levels across different scenarios to identify areas of growth and challenge.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-vibrocia-teal/10 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-vibrocia-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">Mood Monitoring</h3>
              <p className="text-gray-600">
                Track your emotional responses before and after interactions to understand your triggers and improvements.
              </p>
            </div>
          </div>
          
          <div className="bg-vibrocia-light/20 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-vibrocia-dark">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="mb-4">
                  <h4 className="font-bold text-vibrocia-dark">Track Your Progress</h4>
                  <p className="text-gray-600">
                    Log your confidence levels and emotional responses before and after interactions.
                    Our visual analytics help you see your growth over time.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="mb-4">
                  <h4 className="font-bold text-vibrocia-dark">Gain Insights</h4>
                  <p className="text-gray-600">
                    Identify patterns in your communication comfort levels and understand which
                    situations help you thrive and which need more practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-vibrocia-light/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-vibrocia-dark">Ready to Track Your Progress?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Start tracking your confidence journey today and watch yourself grow over time.
            </p>
            <Button 
              size="lg" 
              className="bg-vibrocia-lavender hover:bg-vibrocia-lavender/90 text-white px-8 py-6 rounded-full hover-scale"
              asChild
            >
              <Link to="/signup">Start Tracking Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConfidenceTracker;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-vibrocia-dark">Why Vibrocia?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many students struggle not because they lack skills, but because they fear expressing them. 
            Vibrocia bridges this gap with a powerful blend of AI coaching, emotional tracking, and practical challenges.
          </p>
        </div>
        
        <div className="bg-vibrocia-light rounded-2xl p-8 md:p-12 shadow-lg transform transition-all hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-8 text-center text-vibrocia-dark">Challenges We Solve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-8px] flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-vibrocia-blue/10 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <challenge.icon className="w-7 h-7 text-vibrocia-blue" />
                </div>
                <h4 className="font-bold text-vibrocia-dark mb-2">{challenge.title}</h4>
                <p className="text-gray-700">{challenge.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-vibrocia-dark">Ready to overcome these challenges?</h3>
          <Button 
            className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white px-8 py-2 rounded-full hover-scale btn-hover-glow group"
            asChild
          >
            <Link to="/features">
              Explore Our Features
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const challenges = [
  {
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 15h8"/>
        <path d="M8 9h2"/>
        <path d="M14 9h2"/>
      </svg>
    ),
    title: "Interview Anxiety",
    text: "Fear of job interviews and networking events"
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M9 3v18"/>
        <path d="M3 9h18"/>
      </svg>
    ),
    title: "Presentation Stress",
    text: "Poor project and seminar presentations"
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"/>
        <circle cx="12" cy="8" r="2"/>
      </svg>
    ),
    title: "Low Confidence",
    text: "Shyness and lack of social participation"
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="M12 2v2"/>
        <path d="M12 22v-2"/>
        <path d="m17 20.66-1-1.73"/>
        <path d="M11 10.27 7 3.34"/>
        <path d="m20.66 17-1.73 1"/>
        <path d="m3.34 7 1.73 1"/>
        <path d="M14 12h8"/>
        <path d="M2 12h2"/>
        <path d="m20.66 7-1.73 1"/>
        <path d="m3.34 17 1.73-1"/>
        <path d="m17 3.34-1 1.73"/>
        <path d="m7 20.66 1-1.73"/>
      </svg>
    ),
    title: "Missed Opportunities",
    text: "Missed leadership and networking connections"
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    title: "Emotional Awareness",
    text: "Difficulty recognizing and expressing emotions"
  }
];

export default AboutSection;

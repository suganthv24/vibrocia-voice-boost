
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const CalloutSection = () => {
  return (
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
          <div className="mb-6 mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Speak up. Stand out. Step into your full potential — with Vibrocia.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Join hundreds of engineering and technical students who are finding their voice and building confidence.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-vibrocia-blue hover:bg-white/90 px-8 py-6 rounded-full hover-scale"
            asChild
          >
            <Link to="/signup">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;

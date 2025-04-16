import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-blue/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-vibrocia-dark mb-6">
              Find Your Voice.
              <br />
              <span className="gradient-text">Build Your Confidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Vibrocia helps students overcome fear of communication, boost confidence, and grow into expressive, socially ready individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white px-8 py-6 rounded-full btn-hover-glow group"
                asChild
              >
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="relative z-10 animate-float-enhanced">
              <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path d="M392.29 102.11C423.01 126.39 450.63 160.02 450.63 193.65C450.63 227.28 423.01 260.91 392.29 290.97C361.58 321.03 327.76 347.54 285.84 364.49C243.91 381.45 193.86 388.85 148.67 372.3C103.48 355.75 63.14 315.25 33.91 270.62C4.69 225.98 -13.43 177.22 8.54 138.8C30.51 100.39 92.56 72.33 146.82 51.97C201.08 31.61 247.54 18.94 293.28 27.77C339.02 36.59 384.04 66.9 392.29 102.11Z" fill="#E5DEFF"/>
                <circle cx="248.5" cy="193.5" r="122.5" fill="#D3E4FD"/>
                <rect x="162" y="148" width="172" height="163" rx="20" fill="white"/>
                <path d="M272 132H224C212.954 132 204 140.954 204 152V234C204 245.046 212.954 254 224 254H272C283.046 254 292 245.046 292 234V152C292 140.954 283.046 132 272 132Z" fill="#4A90E2"/>
                <path d="M248 189C258.493 189 267 180.493 267 170C267 159.507 258.493 151 248 151C237.507 151 229 159.507 229 170C229 180.493 237.507 189 248 189Z" fill="white"/>
                <path d="M248 202C231.431 202 218 215.431 218 232V233C218 233.552 218.448 234 219 234H277C277.552 234 278 233.552 278 233V232C278 215.431 264.569 202 248 202Z" fill="white"/>
                
                <ellipse cx="315" cy="120" rx="25" ry="20" fill="#4A90E2" className="animate-pulse-glow" />
                <ellipse cx="170" cy="95" rx="15" ry="12" fill="#5ACCC3" className="animate-pulse-glow" />
                <ellipse cx="190" cy="265" rx="18" ry="15" fill="#9C89B8" className="animate-pulse-glow" />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-vibrocia-blue/10 rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -right-4 -left-4 h-4 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="wave-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

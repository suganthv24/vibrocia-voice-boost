
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-vibrocia-blue flex items-center">
            <span className="bg-vibrocia-blue text-white px-2 py-1 rounded-md mr-2">V</span>
            Vibrocia
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-vibrocia-blue transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-vibrocia-blue transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-vibrocia-blue transition-colors">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-vibrocia-blue transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-vibrocia-blue text-vibrocia-blue hover:bg-vibrocia-blue hover:text-white"
          >
            Log in
          </Button>
          <Button
            size="sm"
            className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white"
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

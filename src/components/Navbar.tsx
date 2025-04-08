
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Don't show the navbar on login and signup pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className={`transition-all duration-300 py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-vibrocia-blue flex items-center">
            <span className="bg-vibrocia-blue text-white px-2 py-1 rounded-md mr-2">V</span>
            Vibrocia
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-vibrocia-blue' : 'text-gray-700 hover:text-vibrocia-blue'}`}>Home</Link>
          <Link to="/features" className={`transition-colors ${location.pathname === '/features' ? 'text-vibrocia-blue' : 'text-gray-700 hover:text-vibrocia-blue'}`}>Features</Link>
          <Link to="/about" className={`transition-colors ${location.pathname === '/about' ? 'text-vibrocia-blue' : 'text-gray-700 hover:text-vibrocia-blue'}`}>About</Link>
          <Link to="/contact" className={`transition-colors ${location.pathname === '/contact' ? 'text-vibrocia-blue' : 'text-gray-700 hover:text-vibrocia-blue'}`}>Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="border-vibrocia-blue text-vibrocia-blue hover:bg-vibrocia-blue hover:text-white"
            asChild
          >
            <Link to="/login">Log in</Link>
          </Button>
          <Button
            size="sm"
            className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white"
            asChild
          >
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-vibrocia-blue" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-base font-medium ${location.pathname === '/' ? 'text-vibrocia-blue' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-base font-medium ${location.pathname === '/features' ? 'text-vibrocia-blue' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium ${location.pathname === '/about' ? 'text-vibrocia-blue' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-base font-medium ${location.pathname === '/contact' ? 'text-vibrocia-blue' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="border-vibrocia-blue text-vibrocia-blue hover:bg-vibrocia-blue hover:text-white w-full"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/login">Log in</Link>
              </Button>
              <Button
                size="sm"
                className="bg-vibrocia-blue hover:bg-vibrocia-blue/90 text-white w-full"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

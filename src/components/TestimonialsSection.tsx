
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image, rating = 5 }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 relative transform transition-all duration-300 hover:shadow-xl">
      <div className="mb-4">
        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-vibrocia-blue/20">
          <path d="M13.3 36C9.1 36 5.63333 34.6667 2.9 32C0.966667 30.0667 0 27.4667 0 24.2C0 21.6667 0.566667 19.0667 1.7 16.4C2.83333 13.7333 4.33333 11.2 6.2 8.8C8.13333 6.4 10.3 4.2 12.7 2.2C15.1667 0.200001 17.6667 -0.533332 20.1 1.06667C21.3 1.86667 21.9 3.06667 21.9 4.66667C21.9 5.46667 21.6333 6.26667 21.1 7.06667C18.5667 11.2667 17.3 15.2667 17.3 19.0667C17.3 19.7333 17.3667 20.4 17.5 21.0667C17.7 21.7333 18.1 22.1333 18.7 22.2667C20.4333 22.8 22.0333 23.9333 23.5 25.6667C24.9667 27.4 25.7 29.3333 25.7 31.4667C25.7 32.9333 25.1333 34.1333 24 35.0667C22.8667 35.6889 21.3889 36 19.5667 36H13.3ZM33.3 36C29.1 36 25.6333 34.6667 22.9 32C20.9667 30.0667 20 27.4667 20 24.2C20 21.6667 20.5667 19.0667 21.7 16.4C22.8333 13.7333 24.3333 11.2 26.2 8.8C28.1333 6.4 30.3 4.2 32.7 2.2C35.1667 0.200001 37.6667 -0.533332 40.1 1.06667C41.3 1.86667 41.9 3.06667 41.9 4.66667C41.9 5.46667 41.6333 6.26667 41.1 7.06667C38.5667 11.2667 37.3 15.2667 37.3 19.0667C37.3 19.7333 37.3667 20.4 37.5 21.0667C37.7 21.7333 38.1 22.1333 38.7 22.2667C40.4333 22.8 42.0333 23.9333 43.5 25.6667C44.9667 27.4 45.7 29.3333 45.7 31.4667C45.7 32.9333 45.1333 34.1333 44 35.0667C42.8667 35.6889 41.3889 36 39.5667 36H33.3Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Stars rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-vibrocia-dark">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-vibrocia-dark">What Students Say</h2>
          <p className="text-lg text-gray-600">
            Hear from engineering and tech students who have transformed their communication skills
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Group testimonials in pairs for desktop, show individually on mobile */}
              {[...Array(totalSlides)].map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, i) => (
                      <Testimonial 
                        key={slideIndex * 2 + i}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        title={testimonial.title}
                        image={testimonial.image}
                        rating={testimonial.rating}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 items-center">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mr-4"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-vibrocia-dark" />
            </button>
            
            {/* Pagination indicators */}
            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentSlide ? 'bg-vibrocia-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-4"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-vibrocia-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials data
const testimonials = [
  {
    quote: "I went from dreading interviews to actually enjoying them. The AI coach helped me practice without judgment, and my confidence skyrocketed after just a few weeks.",
    name: "Alex Chen",
    title: "Final year Computer Science student",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    quote: "Vibrocia gave me a space to grow without judgment. I used to avoid speaking up in team meetings, but the personalized challenges helped me find my voice and even take on leadership roles.",
    name: "Priya Sharma",
    title: "Tech club member, Electrical Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    quote: "The roleplay scenarios prepared me for real-world situations I faced during my internship. My supervisor even commented on how articulate and confident I was compared to other interns.",
    name: "Marcus Johnson",
    title: "Software Engineering Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4
  },
  {
    quote: "As an international student, I struggled with language barriers and social anxiety. The gradual confidence building approach really worked for me. Now I'm comfortable presenting my research to large groups.",
    name: "Lin Wei",
    title: "PhD Candidate, Computer Engineering",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export default TestimonialsSection;

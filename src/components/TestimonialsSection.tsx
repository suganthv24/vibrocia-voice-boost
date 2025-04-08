
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 relative">
      <div className="mb-6">
        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-vibrocia-blue/20">
          <path d="M13.3 36C9.1 36 5.63333 34.6667 2.9 32C0.966667 30.0667 0 27.4667 0 24.2C0 21.6667 0.566667 19.0667 1.7 16.4C2.83333 13.7333 4.33333 11.2 6.2 8.8C8.13333 6.4 10.3 4.2 12.7 2.2C15.1667 0.200001 17.6667 -0.533332 20.1 1.06667C21.3 1.86667 21.9 3.06667 21.9 4.66667C21.9 5.46667 21.6333 6.26667 21.1 7.06667C18.5667 11.2667 17.3 15.2667 17.3 19.0667C17.3 19.7333 17.3667 20.4 17.5 21.0667C17.7 21.7333 18.1 22.1333 18.7 22.2667C20.4333 22.8 22.0333 23.9333 23.5 25.6667C24.9667 27.4 25.7 29.3333 25.7 31.4667C25.7 32.9333 25.1333 34.1333 24 35.0667C22.8667 35.6889 21.3889 36 19.5667 36H13.3ZM33.3 36C29.1 36 25.6333 34.6667 22.9 32C20.9667 30.0667 20 27.4667 20 24.2C20 21.6667 20.5667 19.0667 21.7 16.4C22.8333 13.7333 24.3333 11.2 26.2 8.8C28.1333 6.4 30.3 4.2 32.7 2.2C35.1667 0.200001 37.6667 -0.533332 40.1 1.06667C41.3 1.86667 41.9 3.06667 41.9 4.66667C41.9 5.46667 41.6333 6.26667 41.1 7.06667C38.5667 11.2667 37.3 15.2667 37.3 19.0667C37.3 19.7333 37.3667 20.4 37.5 21.0667C37.7 21.7333 38.1 22.1333 38.7 22.2667C40.4333 22.8 42.0333 23.9333 43.5 25.6667C44.9667 27.4 45.7 29.3333 45.7 31.4667C45.7 32.9333 45.1333 34.1333 44 35.0667C42.8667 35.6889 41.3889 36 39.5667 36H33.3Z" fill="currentColor"/>
        </svg>
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
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-vibrocia-dark">What Students Say</h2>
          <p className="text-lg text-gray-600">
            Hear from engineering and tech students who have transformed their communication skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial 
            quote="I went from dreading interviews to actually enjoying them. The AI coach helped me practice without judgment, and my confidence skyrocketed after just a few weeks."
            name="Alex Chen"
            title="Final year Computer Science student"
            image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          />
          <Testimonial 
            quote="Vibrocia gave me a space to grow without judgment. I used to avoid speaking up in team meetings, but the personalized challenges helped me find my voice and even take on leadership roles."
            name="Priya Sharma"
            title="Tech club member, Electrical Engineering"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

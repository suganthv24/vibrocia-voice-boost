
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-reveal');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('section-revealed');
        }
      });
    };
    
    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-blue/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-vibrocia-dark">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-vibrocia-dark">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        placeholder="How can we help you?"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-vibrocia-blue hover:bg-vibrocia-blue/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-vibrocia-dark">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-vibrocia-blue/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-vibrocia-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-vibrocia-dark">Email</h3>
                      <p className="text-gray-600">contact@vibrocia.com</p>
                      <p className="text-gray-600">support@vibrocia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-vibrocia-blue/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-vibrocia-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-vibrocia-dark">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri: 9am - 5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-vibrocia-blue/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-vibrocia-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-vibrocia-dark">Location</h3>
                      <p className="text-gray-600">123 Tech Campus Drive</p>
                      <p className="text-gray-600">Boston, MA 02115</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4 text-vibrocia-dark">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-vibrocia-blue/10 p-3 rounded-full hover:bg-vibrocia-blue/20 transition-colors" aria-label="Instagram">
                      <Instagram className="h-6 w-6 text-vibrocia-blue" />
                    </a>
                    <a href="#" className="bg-vibrocia-blue/10 p-3 rounded-full hover:bg-vibrocia-blue/20 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6 text-vibrocia-blue" />
                    </a>
                    <a href="#" className="bg-vibrocia-blue/10 p-3 rounded-full hover:bg-vibrocia-blue/20 transition-colors" aria-label="YouTube">
                      <Youtube className="h-6 w-6 text-vibrocia-blue" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-reveal">
            <div className="bg-vibrocia-light rounded-2xl p-10 shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-6 text-vibrocia-dark">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-bold text-vibrocia-dark mb-2">Is Vibrocia only for engineering students?</h3>
                  <p className="text-gray-600">
                    While Vibrocia was designed with engineering and technical students in mind, 
                    any student looking to improve their communication skills can benefit from our platform.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-vibrocia-dark mb-2">How much time should I spend on Vibrocia each day?</h3>
                  <p className="text-gray-600">
                    Even 10-15 minutes daily can make a difference. Consistent practice yields the best results, 
                    but we recommend starting with whatever time commitment feels manageable for you.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-vibrocia-dark mb-2">Is my data secure on Vibrocia?</h3>
                  <p className="text-gray-600">
                    Absolutely. We take privacy seriously and use industry-standard encryption to protect your data. 
                    Your personal information and journal entries are never shared without your explicit permission.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-vibrocia-dark mb-2">Can I use Vibrocia on my mobile device?</h3>
                  <p className="text-gray-600">
                    Yes! Vibrocia is fully responsive and works on smartphones, tablets, and computers, 
                    allowing you to practice your communication skills anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

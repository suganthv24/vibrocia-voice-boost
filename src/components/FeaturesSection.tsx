
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Users, 
  BarChart2, 
  BookOpen, 
  PenTool
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, color, link }) => {
  return (
    <Link to={link} className="block">
      <div className="feature-card bg-white rounded-2xl shadow-lg p-6 hover-scale gradient-card border border-gray-100 h-full">
        <div className={`w-16 h-16 rounded-xl ${color} mb-6 flex items-center justify-center feature-icon`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex items-center text-vibrocia-blue font-medium">
          <span>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 17l5-5-5-5" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-vibrocia-light/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-vibrocia-dark">Features</h2>
          <p className="text-lg text-gray-600">
            Powerful tools designed to build your communication skills and confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature data
const features = [
  {
    title: "AI Chat Coach",
    description: "Practice conversations with an AI that adapts to your communication style and helps you improve gradually.",
    icon: MessageCircle,
    color: "bg-vibrocia-blue",
    link: "/features/ai-chat-coach"
  },
  {
    title: "Roleplay & Real-Life Challenges",
    description: "Engage in simulated scenarios for interviews, presentations, and social interactions tailored to your goals.",
    icon: Users,
    color: "bg-vibrocia-teal",
    link: "/features/roleplay-zone"
  },
  {
    title: "Confidence & Mood Tracker",
    description: "Monitor your progress over time with insights into your emotional patterns and confidence growth.",
    icon: BarChart2,
    color: "bg-vibrocia-lavender",
    link: "/features/confidence-tracker"
  },
  {
    title: "Personalized Learning Paths",
    description: "Follow customized activities and exercises that gradually build your skills at a pace that works for you.",
    icon: BookOpen,
    color: "bg-vibrocia-blue",
    link: "/features/personalized-journey"
  },
  {
    title: "Reflection Journal",
    description: "Document your thoughts, feelings, and progress with guided prompts to deepen your self-awareness.",
    icon: PenTool,
    color: "bg-gradient-lavender",
    link: "/features/reflection-journal"
  }
];

export default FeaturesSection;


import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover-scale gradient-card border border-gray-100">
      <div className={`w-14 h-14 rounded-xl ${color} mb-6 flex items-center justify-center`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-vibrocia-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
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
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
      </svg>
    ),
    color: "bg-vibrocia-blue"
  },
  {
    title: "Roleplay & Real-Life Challenges",
    description: "Engage in simulated scenarios for interviews, presentations, and social interactions tailored to your goals.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/>
        <path d="M12 3v12"/>
        <path d="m8 7 4-4 4 4"/>
        <path d="M4 19h16"/>
        <path d="m10 15-2 2-2-2"/>
        <path d="m18 15-2 2-2-2"/>
      </svg>
    ),
    color: "bg-vibrocia-teal"
  },
  {
    title: "Confidence & Mood Tracker",
    description: "Monitor your progress over time with insights into your emotional patterns and confidence growth.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    color: "bg-vibrocia-lavender"
  },
  {
    title: "Personalized Learning Paths",
    description: "Follow customized activities and exercises that gradually build your skills at a pace that works for you.",
    icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: "bg-vibrocia-blue"
  }
];

export default FeaturesSection;

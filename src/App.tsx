
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AIChatCoach from "./pages/features/AIChatCoach";
import RoleplayZone from "./pages/features/RoleplayZone";
import ConfidenceTracker from "./pages/features/ConfidenceTracker";
import PersonalizedJourney from "./pages/features/PersonalizedJourney";
import ReflectionJournal from "./pages/features/ReflectionJournal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/ai-chat-coach" element={<AIChatCoach />} />
          <Route path="/features/roleplay-zone" element={<RoleplayZone />} />
          <Route path="/features/confidence-tracker" element={<ConfidenceTracker />} />
          <Route path="/features/personalized-journey" element={<PersonalizedJourney />} />
          <Route path="/features/reflection-journal" element={<ReflectionJournal />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

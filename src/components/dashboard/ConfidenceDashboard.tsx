
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  BarChart,
  LineChart,
  Calendar,
  Trophy,
  Home,
  UserRound,
  Medal,
  ThumbsUp,
  Clock,
  Star,
  Sparkles,
  LayoutDashboard,
  MessageSquare,
  Award,
  Smile,
  Frown,
  Meh,
  BookOpen
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

// Sample data - in a real app this would come from an API/database
const userData = {
  name: "Alex",
  confidenceScore: 7.2,
  streak: 5,
  todayMood: "happy", // could be happy, neutral, sad
  quote: "Every conversation is an opportunity to learn and grow.",
  suggestedActivity: "Try a roleplay: Introduce yourself in an interview",
  dailyChallenge: "Greet a new classmate",
  roleplayHistory: [
    { date: "Apr 15", scenario: "Job Interview", score: 8.2, feedback: "Great eye contact and clear responses!" },
    { date: "Apr 13", scenario: "Networking Event", score: 7.5, feedback: "Good conversation starters, try to ask more follow-up questions." },
    { date: "Apr 10", scenario: "Class Presentation", score: 6.8, feedback: "Improved confidence from last time. Work on pacing." }
  ],
  upcomingModules: [
    { title: "Handling Difficult Conversations", progress: 25 },
    { title: "Active Listening Skills", progress: 60 },
    { title: "Public Speaking Basics", progress: 10 }
  ]
};

// Mood emoji mapping
const moodEmojis = {
  happy: <Smile className="h-8 w-8 text-green-500" />,
  neutral: <Meh className="h-8 w-8 text-amber-500" />,
  sad: <Frown className="h-8 w-8 text-blue-500" />
};

const ConfidenceDashboard: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-vibrocia-light to-vibrocia-lavender/5 pb-20">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-vibrocia-dark">
                Hello, {userData.name}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {userData.quote}
              </p>
            </div>
            <div className="hidden sm:block">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/features/confidence-tracker">
                  <LayoutDashboard className="h-4 w-4" />
                  Overview
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Confidence Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-1 lg:col-span-2 shadow-md border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-vibrocia-dark flex items-center gap-2">
                <ChartContainer>
                  <LineChart className="h-5 w-5 text-vibrocia-lavender" />
                </ChartContainer>
                Confidence Progress
              </CardTitle>
              <CardDescription>Your confidence journey at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-500">Confidence Score</h3>
                    <span className="text-2xl font-bold text-vibrocia-lavender">{userData.confidenceScore}</span>
                  </div>
                  <Progress value={userData.confidenceScore * 10} className="h-2 bg-gray-100" />
                  <p className="text-xs text-gray-500 mt-2">Scale: 1-10</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Today's Mood</h3>
                  <div className="flex items-center justify-center">
                    {moodEmojis[userData.todayMood]}
                  </div>
                  <p className="text-center mt-2 text-vibrocia-dark font-medium capitalize">
                    {userData.todayMood}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Streak</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-vibrocia-dark">{userData.streak}</span>
                      </div>
                      <Trophy className="h-16 w-16 text-vibrocia-teal/20" />
                    </div>
                  </div>
                  <p className="text-center mt-2 text-vibrocia-dark text-sm">
                    days in a row
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Activity Card */}
          <Card className="shadow-md border-0 bg-gradient-to-br from-vibrocia-lavender/90 to-vibrocia-blue/70 text-white">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Suggested Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{userData.suggestedActivity}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-vibrocia-lavender hover:bg-white/90 hover:text-vibrocia-dark">
                Start Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Challenge and History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Daily Challenge */}
          <Card className="shadow-md border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-vibrocia-dark flex items-center gap-2">
                <Star className="h-5 w-5 text-vibrocia-blue" />
                Daily Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-vibrocia-light/50 p-4 rounded-xl mb-4">
                <p className="text-vibrocia-dark font-medium">{userData.dailyChallenge}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm text-gray-600">Badge: Social Butterfly</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-vibrocia-blue hover:bg-vibrocia-blue/90">
                Mark as Completed
              </Button>
            </CardFooter>
          </Card>

          {/* Roleplay History */}
          <Card className="shadow-md border-0 col-span-1 lg:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl text-vibrocia-dark flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-vibrocia-teal" />
                  Roleplay History
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-vibrocia-teal">
                  View Full Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.roleplayHistory.map((session, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">{session.date}</span>
                      </div>
                      <div className="bg-vibrocia-lavender/10 px-2 py-1 rounded-full">
                        <span className="text-sm font-medium text-vibrocia-lavender">{session.score}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-vibrocia-dark">{session.scenario}</h4>
                    <p className="text-sm text-gray-600 mt-1">{session.feedback}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Modules */}
        <h2 className="text-xl font-bold text-vibrocia-dark mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-vibrocia-blue" />
          Upcoming Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {userData.upcomingModules.map((module, index) => (
            <Card key={index} className="shadow-sm border-0">
              <CardContent className="p-4">
                <h3 className="font-medium text-vibrocia-dark mb-2">{module.title}</h3>
                <Progress value={module.progress} className="h-2 bg-gray-100" />
                <p className="text-xs text-gray-500 mt-2">{module.progress}% complete</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Navigation (Mobile) */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-2 z-10">
            <div className="flex justify-around">
              <Button variant="ghost" className="flex flex-col items-center p-2">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs mt-1">Roleplay</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-2">
                <LineChart className="h-5 w-5" />
                <span className="text-xs mt-1">Tracker</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-2">
                <Trophy className="h-5 w-5" />
                <span className="text-xs mt-1">Rewards</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-2">
                <UserRound className="h-5 w-5" />
                <span className="text-xs mt-1">Profile</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfidenceDashboard;

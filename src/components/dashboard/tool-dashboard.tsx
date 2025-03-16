"use client";

import { useEffect, useState } from "react";
import { ToolCard } from "./tool-card";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useUser } from "@clerk/nextjs";
import { 
  Calendar, 
  ClipboardList, 
  BookOpen, 
  FileText, 
  Users, 
  Clock,
  Briefcase,
  LineChart,
  Lightbulb,
  Library,
  Search
} from "lucide-react";

// Tool interface to define the structure of each tool
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

// List of tools available in the dashboard
const tools: Tool[] = [
  {
    id: "calendar",
    name: "Class Schedule",
    description: "Manage your class timetable and important dates",
    icon: <Calendar className="h-6 w-6" />,
    color: "bg-blue-100 dark:bg-blue-950",
    href: "/dashboard/calendar",
  },
  {
    id: "assignments",
    name: "Assignments",
    description: "Track homework, projects, and due dates",
    icon: <ClipboardList className="h-6 w-6" />,
    color: "bg-green-100 dark:bg-green-950",
    href: "/dashboard/assignments",
  },
  {
    id: "notes",
    name: "Study Notes",
    description: "Organize your lecture notes and study materials",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-purple-100 dark:bg-purple-950",
    href: "/dashboard/notes",
  },
  {
    id: "documents",
    name: "Documents",
    description: "Store and access important academic documents",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-yellow-100 dark:bg-yellow-950",
    href: "/dashboard/documents",
  },
  {
    id: "groups",
    name: "Study Groups",
    description: "Collaborate with classmates on group projects",
    icon: <Users className="h-6 w-6" />,
    color: "bg-red-100 dark:bg-red-950",
    href: "/dashboard/groups",
  },
  {
    id: "pomodoro",
    name: "Study Timer",
    description: "Stay focused with Pomodoro technique timers",
    icon: <Clock className="h-6 w-6" />,
    color: "bg-orange-100 dark:bg-orange-950",
    href: "/dashboard/pomodoro",
  },
  {
    id: "career",
    name: "Career Planning",
    description: "Explore career paths and internship opportunities",
    icon: <Briefcase className="h-6 w-6" />,
    color: "bg-indigo-100 dark:bg-indigo-950",
    href: "/dashboard/career",
  },
  {
    id: "progress",
    name: "Academic Progress",
    description: "Track your grades and academic performance",
    icon: <LineChart className="h-6 w-6" />,
    color: "bg-teal-100 dark:bg-teal-950",
    href: "/dashboard/progress",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    description: "Create and study with digital flashcards",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "bg-pink-100 dark:bg-pink-950",
    href: "/dashboard/flashcards",
  },
  {
    id: "resources",
    name: "Learning Resources",
    description: "Access helpful educational resources and links",
    icon: <Library className="h-6 w-6" />,
    color: "bg-cyan-100 dark:bg-cyan-950",
    href: "/dashboard/resources",
  },
];

export default function ToolDashboard() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, isLoaded } = useUser();
  
  // Filter tools based on search query
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* User Greeting */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Hi {user?.firstName || 'Student'}</h1>
        <p className="text-muted-foreground">Welcome to your student dashboard</p>
      </div>
      
      {/* Search/Filter */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search tools..."
          className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <AnimatedGroup 
        preset="blur-slide"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </AnimatedGroup>
    </div>
  );
}

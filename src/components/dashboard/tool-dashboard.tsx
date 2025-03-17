"use client";

import {  useState } from "react";
import { ToolCard } from "./tool-card";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { 
  Calendar, 
  ClipboardList, 
  BookOpen, 
  FileText, 
  Clock,
  Briefcase,
  LineChart,
  Lightbulb,
  Library,
  Presentation,
  Coffee,
  CheckSquare,
  Music,
  Search
} from "lucide-react";
import { useUser } from '@clerk/nextjs'

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
    description: "Basic calendar with event storage",
    icon: <Calendar className="h-6 w-6" />,
    color: "bg-blue-100 dark:bg-blue-950",
    href: "/dashboard/calendar",
  },
  {
    id: "assignments",
    name: "Assignments",
    description: "Simple task tracker",
    icon: <ClipboardList className="h-6 w-6" />,
    color: "bg-green-100 dark:bg-green-950",
    href: "/dashboard/assignments",
  },
  {
    id: "notes",
    name: "Study Notes",
    description: "Markdown or rich text editor",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-purple-100 dark:bg-purple-950",
    href: "/dashboard/notes",
  },
  {
    id: "documents",
    name: "Documents",
    description: "File storage system",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-yellow-100 dark:bg-yellow-950",
    href: "/dashboard/documents",
  },
  {
    id: "pomodoro",
    name: "Study Timer",
    description: "Pomodoro timer",
    icon: <Clock className="h-6 w-6" />,
    color: "bg-orange-100 dark:bg-orange-950",
    href: "/dashboard/pomodoro",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    description: "Create, save, and study flashcards",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "bg-pink-100 dark:bg-pink-950",
    href: "/dashboard/flashcards",
  },
  {
    id: "career",
    name: "Career Planning",
    description: "List of internships and career resources",
    icon: <Briefcase className="h-6 w-6" />,
    color: "bg-indigo-100 dark:bg-indigo-950",
    href: "/dashboard/career",
  },
  {
    id: "progress",
    name: "Academic Progress",
    description: "Store and display grades",
    icon: <LineChart className="h-6 w-6" />,
    color: "bg-teal-100 dark:bg-teal-950",
    href: "/dashboard/progress",
  },
  {
    id: "resources",
    name: "Learning Resources",
    description: "Curated links, PDFs, or articles",
    icon: <Library className="h-6 w-6" />,
    color: "bg-cyan-100 dark:bg-cyan-950",
    href: "/dashboard/resources",
  },
  {
    id: "presentations",
    name: "Presentations",
    description: "A simple tool to store and preview slides",
    icon: <Presentation className="h-6 w-6" />,
    color: "bg-rose-100 dark:bg-rose-950",
    href: "/dashboard/presentations",
  },
  {
    id: "breaks",
    name: "Break Planner",
    description: "Simple task scheduler for breaks",
    icon: <Coffee className="h-6 w-6" />,
    color: "bg-amber-100 dark:bg-amber-950",
    href: "/dashboard/breaks",
  },
  {
    id: "tasks",
    name: "Daily Tasks",
    description: "Basic to-do list",
    icon: <CheckSquare className="h-6 w-6" />,
    color: "bg-emerald-100 dark:bg-emerald-950",
    href: "/dashboard/tasks",
  },
  {
    id: "music",
    name: "Study Music",
    description: "Embed Spotify/YouTube playlists",
    icon: <Music className="h-6 w-6" />,
    color: "bg-violet-100 dark:bg-violet-950",
    href: "/dashboard/music",
  },
];

export default function ToolDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useUser()
  
  // Filter tools based on search query
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="space-y-6">
      {/* User Greeting */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Hi {user?.firstName}</h1>
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

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    href: string;
  };
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={tool.href}>
      <motion.div
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(
          "flex h-full flex-col rounded-xl border p-6 transition-all",
          "hover:border-primary/50 hover:shadow-md"
        )}
      >
        <div className={cn(
          "mb-4 flex size-12 items-center justify-center rounded-lg", 
          tool.color
        )}>
          {tool.icon}
        </div>
        <h3 className="mb-2 text-xl font-medium">{tool.name}</h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">{tool.description}</p>
        <div className="flex items-center text-sm font-medium text-primary">
          <span>Open</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </motion.div>
    </Link>
  );
}

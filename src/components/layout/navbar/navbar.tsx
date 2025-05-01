"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AuthSection from "./auth-section";
import {
  Brain,
  Upload,
  FileText,
  PenTool,
  Clock,
  BarChart3,
  BookOpen,
  Users,
  HelpCircle,
  FileQuestion,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-0 inset-x-0 w-full z-[100]", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              FLASHI.AI
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-16">
            <MenuItem setActive={setActive} active={active} item="Explore">
              <div className="p-4">
                <div className="text-sm mb-3 font-medium text-slate-500 dark:text-slate-400">
                  Generate flashcards using AI from various sources
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <HoveredLink
                    href="/explore/ai-generation"
                    icon={<Brain className="h-4 w-4 mr-2 text-purple-500" />}
                  >
                    AI Generation
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Create cards from any text with our AI
                    </div>
                  </HoveredLink>
                  <HoveredLink
                    href="/explore/pdf-import"
                    icon={<Upload className="h-4 w-4 mr-2 text-pink-500" />}
                  >
                    Import PDF
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Upload PDFs and extract flashcards
                    </div>
                  </HoveredLink>
                  <HoveredLink
                    href="/explore/markdown"
                    icon={<FileText className="h-4 w-4 mr-2 text-blue-500" />}
                  >
                    From Markdown
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Import cards from markdown files
                    </div>
                  </HoveredLink>
                  <HoveredLink
                    href="/explore/manual"
                    icon={<PenTool className="h-4 w-4 mr-2 text-green-500" />}
                  >
                    Manual Create
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Create custom flashcards by hand
                    </div>
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Study">
              <div className="p-4">
                <div className="text-sm mb-3 font-medium text-slate-500 dark:text-slate-400">
                  Tools and methods to optimize your learning experience
                </div>
                <div className="text-sm grid grid-cols-2 gap-10">
                  <ProductItem
                    title="Quick Review"
                    href="/study"
                    icon={<Clock className="h-5 w-5 text-purple-500" />}
                    src="/images/review-cards.webp"
                    description="Review your flashcards with spaced repetition"
                  />
                  <ProductItem
                    title="Test Mode"
                    href="/study"
                    icon={<Brain className="h-5 w-5 text-pink-500" />}
                    src="/images/test-mode.webp"
                    description="Challenge yourself with timed tests"
                  />
                  <ProductItem
                    title="Analytics"
                    href="/study"
                    icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
                    src="/images/analytics.webp"
                    description="Track your learning progress over time"
                  />
                  <ProductItem
                    title="Study Sets"
                    href="/study"
                    icon={<BookOpen className="h-5 w-5 text-green-500" />}
                    src="/images/study-sets.webp"
                    description="Organize and manage your flashcards"
                  />
                </div>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Help">
              <div className="p-4">
                <div className="text-sm mb-3 font-medium text-slate-500 dark:text-slate-400">
                  Resources and support to help you get the most out of
                  FLASHI.AI
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <HoveredLink
                    href="/help"
                    icon={
                      <FileQuestion className="h-4 w-4 mr-2 text-purple-500" />
                    }
                  >
                    Guides
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Step-by-step tutorials and user guides
                    </div>
                  </HoveredLink>
                  <HoveredLink
                    href="/help"
                    icon={<Lightbulb className="h-4 w-4 mr-2 text-pink-500" />}
                  >
                    Templates
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Ready-to-use flashcard templates
                    </div>
                  </HoveredLink>
                  <HoveredLink
                    href="/help"
                    icon={<HelpCircle className="h-4 w-4 mr-2 text-blue-500" />}
                  >
                    FAQ
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Answers to common questions
                    </div>
                  </HoveredLink>
                  <HoveredLink
                    href="/help"
                    icon={
                      <MessageSquare className="h-4 w-4 mr-2 text-green-500" />
                    }
                  >
                    Support
                    <div className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Get help from our team
                    </div>
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-2 z-[101] relative">
            <AuthSection />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export { Navbar as NavbarDemo };
export default Navbar;

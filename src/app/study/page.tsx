"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Brain,
  BarChart3,
  BookOpen,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";

export default function StudyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <BookOpen className="h-3.5 w-3.5 mr-1.5 text-purple-500" />
            Study Tools
          </div>
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Master Your Learning
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Optimize your study sessions with our powerful tools designed to
            help you learn faster and remember longer through proven learning
            techniques.
          </p>
        </div>

        {/* Main content - Study methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Quick Review Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-2xl group-hover:bg-purple-300/40 dark:group-hover:bg-purple-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Quick Review
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Our spaced repetition system optimizes your study sessions by
              showing you flashcards at the perfect moment before you're about
              to forget them.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Automatically prioritizes cards you need to review
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Intelligent algorithm adjusts to your learning speed
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Track your progress with detailed stats and insights
                </p>
              </div>
            </div>

            <Link href="/study/review">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                Start Review Session
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Test Mode Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/30 dark:bg-pink-800/20 rounded-full blur-2xl group-hover:bg-pink-300/40 dark:group-hover:bg-pink-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mr-4">
                <Brain className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Test Mode
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Challenge yourself with timed tests to simulate exam conditions
              and strengthen your recall abilities under pressure.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Customizable time limits and question formats
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Simulates real exam conditions to build confidence
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Detailed performance review after each test
                </p>
              </div>
            </div>

            <Link href="/study/test">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                Start Test Mode
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Analytics Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-2xl group-hover:bg-blue-300/40 dark:group-hover:bg-blue-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Analytics
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Gain powerful insights into your learning patterns with advanced
              analytics that help you identify strengths and areas for
              improvement.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Track retention rates and identify challenging concepts
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Visualize learning progress with comprehensive graphs
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Personalized recommendations based on your performance
                </p>
              </div>
            </div>

            <Link href="/study/analytics">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                View Analytics
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Study Sets Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200/30 dark:bg-green-800/20 rounded-full blur-2xl group-hover:bg-green-300/40 dark:group-hover:bg-green-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Study Sets
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Organize your flashcards into customized sets for focused
              studying. Group by subject, topic, or difficulty level.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Create unlimited study sets for different subjects
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Share sets with friends or classmates
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Import/export functionality for easy backup
                </p>
              </div>
            </div>

            <Link href="/study/sets">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                Manage Study Sets
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Study Tips Section */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Study Tips for Maximum Retention
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-slate-900 dark:text-white">
                  Study in small sessions
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Short, frequent study sessions are more effective than long
                  cram sessions. Aim for 20-30 minute focused sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-slate-900 dark:text-white">
                  Use active recall
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Test yourself regularly instead of just reviewing the
                  information. This strengthens memory pathways.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-slate-900 dark:text-white">
                  Mix up your subjects
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Interleaving different topics in one study session can improve
                  long-term retention and understanding.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-slate-900 dark:text-white">
                  Review before sleep
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Studying shortly before sleep helps your brain consolidate
                  information during rest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Ready to start studying smarter?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Choose one of our study tools above or create new flashcards to
            begin your learning journey with FLASHI.AI.
          </p>
          <Link href="/explore/ai-generation">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Create New Flashcards
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

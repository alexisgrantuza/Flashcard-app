"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileQuestion,
  Lightbulb,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Search,
  BookOpen,
  Play,
} from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <HelpCircle className="h-3.5 w-3.5 mr-1.5 text-purple-500" />
            Help Center
          </div>
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            How Can We Help You?
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Find resources, guides, and support to help you get the most out of
            FLASHI.AI's flashcard platform.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Search for guides, templates, and FAQ..."
              />
            </div>
          </div>
        </div>

        {/* Help Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Guides Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-2xl group-hover:bg-purple-300/40 dark:group-hover:bg-purple-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                <FileQuestion className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Guides
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Step-by-step tutorials to help you navigate and master every
              feature of FLASHI.AI.
            </p>

            <div className="space-y-4 mb-8">
              <Link href="/help/guides/getting-started" className="block">
                <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Play className="h-3.5 w-3.5 text-purple-500" />
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Getting Started Guide
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 pl-5">
                    Learn the basics and set up your first flashcard deck
                  </p>
                </div>
              </Link>

              <Link href="/help/guides/ai-generation" className="block">
                <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Play className="h-3.5 w-3.5 text-purple-500" />
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      AI Generation Tutorial
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 pl-5">
                    How to create effective flashcards using our AI tools
                  </p>
                </div>
              </Link>

              <Link href="/help/guides/spaced-repetition" className="block">
                <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Play className="h-3.5 w-3.5 text-purple-500" />
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Spaced Repetition System
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 pl-5">
                    Understand how our algorithm optimizes your learning
                  </p>
                </div>
              </Link>
            </div>

            <Link href="/help/guides">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                View All Guides
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Templates Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/30 dark:bg-pink-800/20 rounded-full blur-2xl group-hover:bg-pink-300/40 dark:group-hover:bg-pink-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mr-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Templates
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Ready-to-use flashcard templates for different subjects and
              learning goals.
            </p>

            <div className="space-y-4 mb-8">
              <Link href="/help/templates/language-learning" className="block">
                <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mr-3">
                      <span className="text-pink-600 dark:text-pink-400 font-medium">
                        🗣️
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Language Learning
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Vocabulary, grammar, and phrase templates
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/help/templates/science" className="block">
                <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mr-3">
                      <span className="text-pink-600 dark:text-pink-400 font-medium">
                        🧪
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Science
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Biology, chemistry, and physics templates
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/help/templates/math" className="block">
                <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mr-3">
                      <span className="text-pink-600 dark:text-pink-400 font-medium">
                        📊
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Mathematics
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Formulas, concepts, and problem-solving templates
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <Link href="/help/templates">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 mt-6">
                Browse All Templates
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* FAQ Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-2xl group-hover:bg-blue-300/40 dark:group-hover:bg-blue-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                FAQ
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Quick answers to common questions about FLASHI.AI and its
              features.
            </p>

            <div className="space-y-4 mb-8">
              <div className="collapse collapse-arrow border border-slate-100 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium text-slate-900 dark:text-white">
                  How accurate is the AI-generated content?
                </div>
                <div className="collapse-content text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    Our AI system is trained on high-quality educational
                    materials and continuously improved. While very accurate, we
                    recommend reviewing the generated flashcards for complete
                    accuracy, especially for specialized subjects.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow border border-slate-100 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium text-slate-900 dark:text-white">
                  Can I import my existing flashcards?
                </div>
                <div className="collapse-content text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    Yes! FLASHI.AI supports importing flashcards from CSV, Anki
                    decks, and other popular flashcard formats. Visit the Import
                    section under your profile to get started.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow border border-slate-100 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium text-slate-900 dark:text-white">
                  Is there a limit to how many flashcards I can create?
                </div>
                <div className="collapse-content text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    Free accounts can create up to 200 flashcards. Premium
                    subscribers enjoy unlimited flashcard creation and
                    additional features.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/help/faq">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Support Card */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 overflow-hidden relative group hover:shadow-md transition-all">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200/30 dark:bg-green-800/20 rounded-full blur-2xl group-hover:bg-green-300/40 dark:group-hover:bg-green-700/30 transition-all"></div>

            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Support
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Need additional help? Our support team is here to assist you.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 mb-8">
              <h3 className="font-medium text-slate-900 dark:text-white mb-2">
                Contact Support
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Our average response time is under 24 hours, and we're here to
                help with any questions or issues you might have.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    rows={3}
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>
              </form>
            </div>

            <Link href="/help/support">
              <Button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 mt-[47px]">
                Submit Support Request
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you with any questions or issues you might
            have. We're dedicated to making your learning experience as smooth
            as possible.
          </p>
          <Link href="/help/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Contact Support Team
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

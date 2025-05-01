import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar/navbar";
import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { GlowingEffectDemo } from "@/components/GlowingEffect";
import {
  ArrowRight,
  Github,
  Code,
  Database,
  Sparkles,
  Brain,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const Page = async () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-95 relative">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
        <div className="absolute top-[19%] left-92 w-80 h-80 bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-60 right-96 w-80 h-80 bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
        <div className="absolute top-[36%] left-0 w-80 h-80 bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
        <div className="absolute top-[50%] right-92 w-80 h-80 bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[8%] left-0 w-80 h-80 bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[4%] -right-8 w-80 h-80 bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <SessionProvider>
        <Navbar />
      </SessionProvider>

      {/* Hero Section */}
      <section className="max-w-full py-24 px-4 h-[100vh]">
        <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Supercharge your learning
          </div>

          <h1 className="text-[82px] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold">
            Smart Flashcard
            <ContainerTextFlip
              words={["Better", "Modern", "Generated", "Awesome"]}
            />
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-44 mt-6">
            Create, study, and master your learning materials with AI-generated
            flashcards. Upload your notes and transform them into effective
            study tools instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/create">
              <Button className="h-12 cursor-pointer w-full md:w-auto px-8 text-sm font-medium bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-md transition-all">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button className="h-12 cursor-pointer px-8 text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-md transition-all">
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-screen dark:bg-gray-900 mt-40 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-extrabold mb-4 text-black">
              Features
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Transform how you study with our innovative features designed for
              modern learners
            </p>
          </div>

          <GlowingEffectDemo />
        </div>
      </section>

      {/* How It Works - Linear-style process steps */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 h-[70vh] flex items-center justify-center mt-40 md:mt-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-extrabold mb-4 text-slate-900 dark:text-white">
              How it works
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From notes to knowledge in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Upload your content",
                description:
                  "Drag and drop your notes, textbooks, or any learning material",
                icon: <Code className="h-5 w-5" />,
              },
              {
                number: "02",
                title: "AI generates flashcards",
                description:
                  "Our AI creates perfect question-answer pairs from your content",
                icon: <Sparkles className="h-5 w-5" />,
              },
              {
                number: "03",
                title: "Study and improve",
                description:
                  "Review your flashcards with spaced repetition for maximum retention",
                icon: <Brain className="h-5 w-5" />,
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col relative">
                <div className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {step.description}
                </p>
                <div className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                  {step.icon}
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-8 border-t border-slate-200 dark:border-slate-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Clean cards with subtle hover */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900 mt-40 md:mt-0 z-30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Built with modern technology
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My stack ensures a fast, reliable, and secure learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Next.js & React",
                description:
                  "Modern front-end framework for a seamless user experience",
              },
              {
                title: "Natural Language Processing",
                description:
                  "Advanced AI algorithms to analyze and understand your content",
              },
              {
                title: "Prisma & PostgreSQL",
                description:
                  "Robust database technology for secure data storage",
              },
              {
                title: "Tailwind CSS & shadcn/ui",
                description: "Beautiful, responsive design system",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-slate-900 dark:text-white">
                    {tech.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Creator Section - Linear style with card design */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="mb-12">
            <div className="inline-flex items-center px-2 py-1 mb-2 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              <span className="flex h-1.5 w-1.5 rounded-full bg-purple-500/70 mr-1.5"></span>
              About
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              The team behind Smart Flashcards
            </h2>
          </div>

          {/* Creator card with Linear-inspired styling */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left column with gradient bg */}
              <div className="md:col-span-4 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-8 flex items-center justify-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-purple-500/80 to-pink-500/80 flex items-center justify-center text-white text-xl font-medium shadow-lg">
                    AG
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                    Alexis Grantuza
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Founder & Developer
                  </p>
                </div>
              </div>

              {/* Right column with content */}
              <div className="md:col-span-8 p-8 z-50">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  Smart Flashcards was built with a passion for transforming how
                  we learn. Our goal is to combine AI technology with proven
                  learning methods to create tools that make education more
                  efficient and accessible for everyone.
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href="https://github.com/yourusername/smart-flashcards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  >
                    <Github className="h-3.5 w-3.5 mr-1.5" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                    <span>Portfolio</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Linear inspired with subtle border */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Linear-style card with subtle gradient border */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-10 md:p-16 relative overflow-hidden">
            {/* Subtle gradient orb in the background */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-2 py-1 mb-4 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                <span className="flex h-1.5 w-1.5 rounded-full bg-green-500/70 mr-1.5"></span>
                Now Available
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Ready to transform your learning?
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-8 max-w-xl mx-auto">
                Join thousands of students who are already using Smart
                Flashcards to learn more effectively and efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href="/create">
                  <Button className="h-10 px-6 text-sm font-medium bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-md transition-all">
                    Start for free
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button className="h-10 px-6 text-sm w-[140px] md:w-auto font-medium bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-md transition-all">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Smart Flashcards. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;

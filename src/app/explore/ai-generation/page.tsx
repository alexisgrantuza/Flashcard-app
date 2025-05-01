"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Sparkles, ArrowRight } from "lucide-react";

export default function AIGenerationPage() {
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <Brain className="h-3.5 w-3.5 mr-1.5 text-purple-500" />
            AI-Powered
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            AI Flashcard Generation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Paste any text and let our AI transform it into effective
            flashcards. Perfect for notes, textbooks, articles, or any learning
            material.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-4 text-slate-900 dark:text-white">
                Your Learning Material
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Paste your text below (minimum 100 characters)
              </p>
              <Textarea
                placeholder="Paste your notes, textbook excerpts, or any learning material here..."
                className="min-h-[300px] mb-4"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Button
                onClick={handleGenerate}
                disabled={inputText.length < 100 || isGenerating}
                className="w-full h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Generate Flashcards
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
                How It Works
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Paste your text
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Add any learning material you want to convert to
                      flashcards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      AI analyzes content
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Our AI identifies key concepts and important information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Review & customize
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Edit the generated flashcards to match your preferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Start studying
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Use our spaced repetition system to maximize retention
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips card */}
            <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-purple-700 dark:text-purple-400 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Pro Tips
              </h2>
              <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-600">•</span>
                  <span>Add headings to help organize content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-600">•</span>
                  <span>Include definitions and key concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-600">•</span>
                  <span>
                    The more context you provide, the better the cards
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

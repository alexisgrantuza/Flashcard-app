"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  ArrowRight,
  Check,
  AlertCircle,
  Code,
  Sparkles,
  Info,
} from "lucide-react";

export default function MarkdownImportPage() {
  const [markdownText, setMarkdownText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setMarkdownText(content || "");
    };
    reader.readAsText(file);
  };

  const handleProcess = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would normally process the markdown and create flashcards
    }, 1500);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <FileText className="h-3.5 w-3.5 mr-1.5 text-blue-500" />
            Markdown to Flashcards
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Import from Markdown
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Convert your markdown notes into organized flashcards. Our system
            parses markdown formatting to create structured question-answer
            pairs automatically.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-4 text-slate-900 dark:text-white">
                Your Markdown Content
              </h2>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Paste markdown or upload a file
                </p>
                <input
                  type="file"
                  accept=".md,.txt,.markdown"
                  onChange={handleFileUpload}
                  className="hidden"
                  ref={fileInputRef}
                  id="markdown-upload"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={triggerFileInput}
                  className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/30 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>

              <Textarea
                value={markdownText}
                onChange={handleTextChange}
                placeholder="# Heading 1 (will become a section)\n## Question?\nAnswer text here\n\n## Another Question?\nIts answer here..."
                className="min-h-[300px] mb-4 font-mono text-sm"
              />

              <Button
                onClick={handleProcess}
                disabled={markdownText.length < 10 || isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Generate Flashcards
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </span>
                )}
              </Button>
            </div>

            {/* Example Templates */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white">
                Example Templates
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Click to insert a markdown template to get started:
              </p>
              <div className="space-y-2">
                <div
                  className="p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer border border-slate-200 dark:border-slate-700"
                  onClick={() =>
                    setMarkdownText(
                      "# Biology Flashcards\n\n## What is photosynthesis?\nPhotosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.\n\n## What are the main components of a cell?\nCells typically contain a cell membrane, cytoplasm, nucleus, mitochondria, and other organelles.\n\n## How does natural selection work?\nNatural selection is the process where organisms better adapted to their environment tend to survive and produce more offspring."
                    )
                  }
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Code className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Q&A Format
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 pl-6">
                    Basic questions and answers with section heading
                  </p>
                </div>

                <div
                  className="p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer border border-slate-200 dark:border-slate-700"
                  onClick={() =>
                    setMarkdownText(
                      "# Math Concepts\n\n## Definition: Derivative\nThe derivative of a function represents its rate of change at a specific point.\n\n## Formula: Quadratic Formula\nx = (-b ± √(b² - 4ac)) / 2a\n\n## Theorem: Pythagorean Theorem\nIn a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the other two sides."
                    )
                  }
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Code className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Term-Definition Format
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 pl-6">
                    Key terms followed by their definitions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
                How Markdown Import Works
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Import markdown content
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Paste markdown or upload a .md file
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Parse structure
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Our system identifies questions and answers based on
                      markdown formatting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Generate flashcards
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Each markdown section becomes a flashcard with front and
                      back sides
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Review and customize
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Edit and refine the generated flashcards before saving
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formatting Guidelines */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-slate-900 dark:text-white flex items-center">
                <Info className="h-4 w-4 mr-2 text-blue-500" />
                Markdown Formatting Guidelines
              </h2>

              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Basic Structure
                  </h4>
                  <pre className="text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded font-mono overflow-x-auto">
                    {`# Section Title

## Question 1?
Answer 1

## Question 2?
Answer 2`}
                  </pre>
                </div>

                <div className="bg-white dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-700">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Term-Definition Format
                  </h4>
                  <pre className="text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded font-mono overflow-x-auto">
                    {`# Vocabulary

## Term 1
Definition 1

## Term 2 
Definition 2`}
                  </pre>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span className="font-semibold">Tip:</span> Use level 1
                  headings (#) for sections and level 2 headings (##) for
                  flashcard fronts. Text below becomes the back of the card.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
            Benefits of Markdown Import
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg w-fit mb-3">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Convert Existing Notes
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Quickly convert your existing markdown notes into structured
                flashcards without reformatting
              </p>
            </div>

            <div className="flex flex-col">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg w-fit mb-3">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Preserve Formatting
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Keep rich text formatting like bold, italic, lists, and code
                blocks in your flashcards
              </p>
            </div>

            <div className="flex flex-col">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg w-fit mb-3">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Bulk Creation
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Create dozens or hundreds of flashcards in seconds from a single
                markdown document
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

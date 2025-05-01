"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Upload,
  FileText,
  ArrowRight,
  Info,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function PDFImportPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFileName(file.name);
    setUploaded(true);
    // Here you would normally upload the file to your server
  };

  const resetUpload = () => {
    setUploaded(false);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
            <Upload className="h-3.5 w-3.5 mr-1.5 text-pink-500" />
            PDF to Flashcards
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Import PDF Documents
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Upload PDF textbooks, notes, or articles and automatically convert
            them into comprehensive flashcard sets. Our AI extracts key
            information to create effective study materials.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Upload */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-4 text-slate-900 dark:text-white">
                Upload Your PDF
              </h2>

              {!uploaded ? (
                <>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                      isDragging
                        ? "border-pink-400 bg-pink-50 dark:border-pink-600 dark:bg-pink-900/20"
                        : "border-slate-300 dark:border-slate-700"
                    } transition-colors cursor-pointer`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileInput}
                  >
                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-pink-500" />
                    </div>
                    <p className="mb-2 text-slate-900 dark:text-white font-medium">
                      Drag and drop your PDF here
                    </p>
                    <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                      or click to browse from your computer
                    </p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInput}
                      className="hidden"
                      ref={fileInputRef}
                      id="pdf-upload"
                    />
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerFileInput();
                      }}
                      className="bg-pink-600 hover:bg-pink-700 text-white"
                    >
                      Browse Files
                    </Button>
                  </div>

                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    <p className="flex items-center gap-1">
                      <Info className="h-3 w-3" />
                      Maximum file size: 25MB
                    </p>
                  </div>
                </>
              ) : (
                <div className="border rounded-lg p-6 bg-slate-50 dark:bg-slate-900">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Upload Complete
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {fileName}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="w-fit bg-pink-600 hover:bg-pink-700 text-white">
                      Process PDF
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      onClick={resetUpload}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Example Files */}
            {!uploaded && (
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white">
                  Example Files
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Don't have a PDF ready? Try one of our examples:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-pink-500" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        Biology_101.pdf
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      1.2 MB
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-pink-500" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        Physics_Notes.pdf
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      850 KB
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Features & Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
                How PDF Import Works
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-full shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Upload your PDF
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Select any PDF document containing study material
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-full shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Text extraction
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Our system extracts and processes the text content
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-full shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      AI analysis
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      AI identifies key concepts, definitions, and important
                      information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-full shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Flashcard creation
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      The system generates question-answer pairs from the
                      content
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-full shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">
                      Review and edit
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Fine-tune the generated flashcards before saving
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document tips */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-slate-900 dark:text-white flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                Document Tips
              </h2>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-500">•</span>
                  <span>
                    PDF documents with clear text produce the best results
                    (avoid scanned documents with images)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-500">•</span>
                  <span>Well-structured documents with headings work best</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-500">•</span>
                  <span>
                    Tables and complex diagrams may not be processed correctly
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-500">•</span>
                  <span>Password-protected PDFs cannot be processed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supported Documents */}
        <div className="mt-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
            Supported Document Types
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
                  <FileText className="h-5 w-5 text-pink-500" />
                </div>
                <h3 className="font-medium text-slate-900 dark:text-white">
                  Textbooks
                </h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 pl-11">
                Perfect for creating comprehensive study sets from academic
                material
              </p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
                  <FileText className="h-5 w-5 text-pink-500" />
                </div>
                <h3 className="font-medium text-slate-900 dark:text-white">
                  Lecture Notes
                </h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 pl-11">
                Convert your class notes into organized flashcard decks
              </p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
                  <FileText className="h-5 w-5 text-pink-500" />
                </div>
                <h3 className="font-medium text-slate-900 dark:text-white">
                  Research Papers
                </h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 pl-11">
                Extract key findings and methodology from academic articles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

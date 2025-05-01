"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  PenTool,
  Plus,
  Trash2,
  Save,
  ArrowRight,
  Check,
  Image as ImageIcon,
  Shuffle,
  AlertCircle,
} from "lucide-react";

type FlashcardType = {
  id: string;
  front: string;
  back: string;
};

export default function ManualCreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState<FlashcardType[]>([
    { id: crypto.randomUUID(), front: "", back: "" },
  ]);
  const [activeCard, setActiveCard] = useState<string | null>(cards[0].id);

  const addCard = () => {
    const newCard = { id: crypto.randomUUID(), front: "", back: "" };
    setCards([...cards, newCard]);
    setActiveCard(newCard.id);
  };

  const deleteCard = (id: string) => {
    if (cards.length <= 1) return;
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
    if (activeCard === id) {
      setActiveCard(newCards[0].id);
    }
  };

  const updateCard = (id: string, field: "front" | "back", value: string) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const handleSave = () => {
    // Normally would save to database here
    console.log("Saving set:", {
      title,
      description,
      cards,
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <PenTool className="h-3.5 w-3.5 mr-1.5 text-green-500" />
            Manual Creation
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Create Flashcards Manually
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Design your own custom flashcards from scratch with our easy-to-use
            editor. Full control over content and formatting for your
            personalized learning materials.
          </p>
        </div>

        {/* Flashcard Creation Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column - Card Editor */}
          <div className="lg:col-span-8 space-y-6">
            {/* Set Information */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-4 text-slate-900 dark:text-white">
                Flashcard Set Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Title
                  </label>
                  <Input
                    id="title"
                    placeholder="e.g., Biology 101, Spanish Vocabulary, Math Formulas"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Description (optional)
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of what these flashcards cover"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-20"
                  />
                </div>
              </div>
            </div>

            {/* Flashcard Editor */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium text-slate-900 dark:text-white">
                  Card Editor
                </h2>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {cards.length} card{cards.length !== 1 ? "s" : ""}
                </div>
              </div>

              <div className="relative">
                {/* Card front/back editor */}
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`${
                      activeCard === card.id ? "block" : "hidden"
                    } space-y-6`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label
                          htmlFor={`front-${card.id}`}
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          Front of Card (Question)
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="text-slate-400 hover:text-green-500 dark:text-slate-500 dark:hover:text-green-400"
                            title="Add image"
                          >
                            <ImageIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <Textarea
                        id={`front-${card.id}`}
                        placeholder="Enter the question or term"
                        value={card.front}
                        onChange={(e) =>
                          updateCard(card.id, "front", e.target.value)
                        }
                        className="w-full h-24"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label
                          htmlFor={`back-${card.id}`}
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          Back of Card (Answer)
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="text-slate-400 hover:text-green-500 dark:text-slate-500 dark:hover:text-green-400"
                            title="Add image"
                          >
                            <ImageIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <Textarea
                        id={`back-${card.id}`}
                        placeholder="Enter the answer or definition"
                        value={card.back}
                        onChange={(e) =>
                          updateCard(card.id, "back", e.target.value)
                        }
                        className="w-full h-24"
                      />
                    </div>
                  </div>
                ))}

                {/* Card Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-1 overflow-x-auto py-2 max-w-md">
                    {cards.map((card, index) => (
                      <button
                        key={card.id}
                        onClick={() => setActiveCard(card.id)}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                          activeCard === card.id
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-500"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={addCard}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 text-slate-400 hover:text-green-600 dark:hover:text-green-400"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => activeCard && deleteCard(activeCard)}
                      disabled={cards.length <= 1}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete Card
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <Button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={
                  !title || cards.some((card) => !card.front || !card.back)
                }
              >
                <Save className="h-4 w-4 mr-2" />
                Save Flashcard Set
              </Button>
            </div>
          </div>

          {/* Right column - Help and Preview */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card Preview */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">
                Preview
              </h2>

              {activeCard && (
                <div className="relative perspective-1000">
                  <div className="bg-slate-50 dark:bg-slate-900 aspect-[3/2] rounded-lg p-4 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="text-center">
                      {cards.find((c) => c.id === activeCard)?.front || (
                        <span className="text-slate-400 dark:text-slate-500 italic">
                          Front side content
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 bg-slate-50 dark:bg-slate-900 aspect-[3/2] rounded-lg p-4 flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="text-center">
                      {cards.find((c) => c.id === activeCard)?.back || (
                        <span className="text-slate-400 dark:text-slate-500 italic">
                          Back side content
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-slate-200 dark:bg-slate-700 w-12 h-1 rounded-full"></div>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-slate-900 dark:text-white flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-green-500" />
                Tips for Great Flashcards
              </h2>

              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Keep content concise and focused on one concept per card
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Use clear, specific questions that test understanding, not
                    just recall
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Include mnemonic devices or visual cues when helpful
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Use formatting (bold, lists) to organize complex answers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
            Features for Perfect Flashcards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 h-fit">
                <Shuffle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  Study Both Ways
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Flip cards to test recognition in both directions for more
                  effective learning
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 h-fit">
                <ImageIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  Rich Content
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Add images and format text to create engaging, visual learning
                  materials
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 h-fit">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  Start Studying
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Begin reviewing your custom cards immediately with our spaced
                  repetition system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

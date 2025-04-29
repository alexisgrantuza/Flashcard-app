import { SignOut } from "@/components/sign-out";
import { auth } from "../../auth";

const Page = async () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-7xl  mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold">
        Smart Flashcard Maker
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8 text-gray-700 dark:text-gray-300 font-extrabold">
        Create, study, and master your learning materials with AI-generated
        flashcards. Upload your notes, pick a topic, and let our AI do the rest.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <FeatureCard
          icon="✨"
          title="AI Generation"
          description="Generate flashcards from your notes with a single click"
        />
        <FeatureCard
          icon="📚"
          title="Import Notes"
          description="Support for PDF, Markdown, and plain text"
        />
        <FeatureCard
          icon="🧠"
          title="Spaced Repetition"
          description="Study efficiently with proven memory techniques"
        />
      </div>
    </div>
  );
};

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default Page;

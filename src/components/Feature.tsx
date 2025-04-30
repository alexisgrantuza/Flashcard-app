import React from "react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700 hover:scale-105 duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Feature = () => {
  const features = [
    {
      icon: "✨",
      title: "AI Generation",
      description: "Generate flashcards from your notes with a single click",
    },
    {
      icon: "📚",
      title: "Import Notes",
      description: "Support for PDF, Markdown, and plain text",
    },
    {
      icon: "🧠",
      title: "Spaced Repetition",
      description: "Study efficiently with proven memory techniques",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </>
  );
};

export default Feature;

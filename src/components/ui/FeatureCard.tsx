import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard;

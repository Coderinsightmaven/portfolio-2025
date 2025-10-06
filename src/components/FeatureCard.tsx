"use client";

import { Pattern } from "./pattern";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Pattern Background */}
      <Pattern variant="dots" className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-xl sm:text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-colors duration-300" />
    </div>
  );
};

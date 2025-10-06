"use client";

import { Pattern } from "./pattern";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden transform-gpu">

      {/* Pattern Background */}
      <Pattern variant="dots" className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

      {/* Icon - Perfectly Centered */}
      <div className="relative z-10 flex justify-center mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-xl sm:text-2xl transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg transition-all duration-500 shadow-md">
          {icon}
        </div>
      </div>

      {/* Content - Centered Title */}
      <div className="relative z-10 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transform group-hover:scale-105 transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed transform group-hover:scale-105 transition-all duration-300">
          {description}
        </p>
      </div>

      {/* Enhanced Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300/50 rounded-xl transition-all duration-500 group-hover:shadow-inner"></div>

      {/* Corner Accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
    </div>
  );
};

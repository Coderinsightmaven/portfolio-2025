"use client";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({ badge, title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`inline-block mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full border border-blue-200 ${centered ? '' : 'ml-0'}`}>
          <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-2 sm:px-0">
          {subtitle}
        </p>
      )}
    </div>
  );
};

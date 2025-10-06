"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pattern } from "./pattern";

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link?: string;
  gradient: string;
  pattern?: "dots" | "grid" | "waves" | "diagonal";
}

export const ProjectCard = ({ title, description, icon, image, link, gradient, pattern = "dots" }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = () => (
    <>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradient} transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-90'}`} />

      {/* Pattern Overlay */}
      <Pattern variant={pattern} className="text-white" />

      {/* Shine Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Image (if provided) */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectPosition: 'center top' }}
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 380px"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/30" />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 z-10">
        {/* Icon (if no image or as overlay) */}
        {(icon && !image) && (
          <div className={`text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
            {icon}
          </div>
        )}

        {/* Icon overlay on image */}
        {image && icon && (
          <div className={`absolute top-4 right-4 text-2xl sm:text-3xl md:text-4xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
            {icon}
          </div>
        )}

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className={`text-white/90 text-xs sm:text-sm transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {description}
        </p>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500" />
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full h-72 sm:h-80 md:h-[320px] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div
      className="group relative w-full h-72 sm:h-80 md:h-[320px] overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent />
    </div>
  );
};

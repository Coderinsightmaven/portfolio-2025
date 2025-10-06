"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from './ProjectCard';

const ProjectCarousel = () => {
  const projects = [
    {
      title: "Brand Design",
      description: "Complete brand identity and visual design system",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=300&fit=crop&crop=center",
      link: "https://example.com/brand-design",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      pattern: "dots"
    },
    {
      title: "E-commerce",
      description: "Modern online store with seamless checkout experience",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      link: "https://example.com/ecommerce-store",
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
      pattern: "waves"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and reporting platform",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      link: "https://example.com/analytics-dashboard",
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
      pattern: "grid"
    },
    {
      title: "Sustainability",
      description: "Green energy platform with impact tracking",
      icon: "🌱",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      pattern: "diagonal"
    },
    {
      title: "Startup Launch",
      description: "MVP development and market validation",
      icon: "🚀",
      gradient: "bg-gradient-to-br from-teal-500 to-green-500",
      pattern: "dots"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application",
      icon: "📱",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
      pattern: "waves"
    },
    {
      title: "Enterprise Solution",
      description: "Scalable B2B software platform",
      icon: "💼",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      pattern: "grid"
    },
    {
      title: "Performance",
      description: "Speed optimization and technical excellence",
      icon: "⚡",
      gradient: "bg-gradient-to-br from-amber-500 to-yellow-500",
      pattern: "diagonal"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="project-carousel">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              icon={project.icon}
              image={project.image}
              link={project.link}
              gradient={project.gradient}
              pattern={project.pattern as "dots" | "grid" | "waves" | "diagonal"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;

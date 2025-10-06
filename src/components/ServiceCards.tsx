"use client";

import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern websites with cutting-edge tech for optimal performance and UX.",
      color: '142, 249, 252' // Cyan
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Perfect designs that work seamlessly on all devices and screens.",
      color: '142, 252, 204' // Green
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Lightning-fast load times with optimized, efficient code.",
      color: '142, 252, 157' // Light Green
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful interfaces focused on user engagement and conversion.",
      color: '215, 252, 142' // Yellow-Green
    },
    {
      icon: "🔧",
      title: "Maintenance",
      description: "Continuous support to keep your site secure and up-to-date.",
      color: '252, 252, 142' // Yellow
    },
    {
      icon: "🚀",
      title: "SEO Optimization",
      description: "Boost rankings and attract more visitors with expert SEO.",
      color: '252, 208, 142' // Orange
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card"
          style={{ '--index': index, '--colorCard': service.color } as React.CSSProperties}
        >
          <div className="content">
            <div className="back">
              <div className="back-content">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{service.icon}</div>
                <strong style={{ fontSize: '18px', textAlign: 'center' }}>{service.title}</strong>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content">
                <small className="badge">{service.title}</small>
                <div className="description">
                  <p className="front-description">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;

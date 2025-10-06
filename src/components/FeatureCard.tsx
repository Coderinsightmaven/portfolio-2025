"use client";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="parent w-full max-w-sm mx-auto">
      <div className="card group">
        <div className="content-box">
          <div className="icon-container">
            <span className="card-icon">{icon}</span>
          </div>
          <span className="card-title">{title}</span>
          <p className="card-content">{description}</p>
          <span className="see-more">Learn More</span>
        </div>
      </div>
    </div>
  );
};

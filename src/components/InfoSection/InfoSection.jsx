import "./InfoSection.css";

const InfoSection = () => {
  const features = [
    {
      icon: "⚛️",
      title: "React Powered",
      description: "Built with modern React for a responsive user experience"
    },
    {
      icon: "🎨",
      title: "Clean Design",
      description: "Beautiful, minimal design that stands out"
    },
    {
      icon: "🔧",
      title: "Scalable",
      description: "Reusable components for easy maintenance and growth"
    }
  ];

  return (
    <div className="info-section">
      <div className="info-container">
        <h2 className="info-title">Why Choose This Website?</h2>
        <p className="info-subtitle">
          Experience a modern web application built with cutting-edge technologies
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

const Stats = () => {
  const statsData = [
    { icon: '📊', number: '50+', label: 'Projects Completed', color: '#38bdf8' },
    { icon: '⏱️', number: '2+', label: 'Years of Experience', color: '#06b6d4' },
    { icon: '⭐', number: '100%', label: 'Client Satisfaction', color: '#0284c7' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">Our Achievement</h2>
        <p className="stats-subheading">Proven Track Record of Excellence</p>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper" style={{ borderColor: stat.color }}>
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <h3 className="stat-number" style={{ color: stat.color }}>{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

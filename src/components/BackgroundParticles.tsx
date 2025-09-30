const BackgroundParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    animationDuration: Math.random() * 10 + 10,
    animationDelay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/10 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;

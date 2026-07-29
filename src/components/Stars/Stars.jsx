import './Stars.css';

function Stars() {
  const stars = [...Array(150)];

  return (
    <div className="stars">
      {stars.map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;

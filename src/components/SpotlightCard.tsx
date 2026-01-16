import { useRef } from 'react';
import '../index.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    
    // Parse gradient colors from spotlightColor if it contains multiple colors
    if (spotlightColor.includes('|')) {
      const colors = spotlightColor.split('|');
      const gradientStops = colors.map((color, idx) => {
        const percent = (idx / (colors.length - 1)) * 100;
        return `${color.trim()} ${percent}%`;
      }).join(', ');
      divRef.current.style.setProperty('--spotlight-color', `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${gradientStops}, transparent 80%)`);
    } else {
      divRef.current.style.setProperty('--spotlight-color', `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 80%)`);
    }
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`rounded-lg card-spotlight ${className} `}>
      {children}
    </div>
  );
};

export default SpotlightCard;

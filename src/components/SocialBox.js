import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import '../css/SocialBox.css';

const SocialBox = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const boxStyle = {
    top: `${Math.min(Math.max(scrollPosition, 20), 80)}%`,
  };

  return (
    <div className="social-box" style={boxStyle}>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-button whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="https://www.instagram.com/tu_cuenta" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-button instagram"
        aria-label="Seguir en Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default SocialBox;
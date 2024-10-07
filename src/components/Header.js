import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const headerAnimation = useSpring({
    background: scrolled ? 'rgba(255, 209, 220, 0.9)' : 'rgba(255, 209, 220, 1)',
    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
  });

  return (
    <animated.header className="header" style={headerAnimation}>
      <div className="header-logo">
        <img src="/path-to-logo.png" alt="Logo" />
        <h1 className="header-title">Matrona Natalia</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#info">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </animated.header>
  );
};

export { Header };
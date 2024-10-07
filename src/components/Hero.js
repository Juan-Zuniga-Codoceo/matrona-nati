import React from 'react';
import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';
import '../css/Hero.css';

const Hero = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <Parallax
      bgImage="https://cdn.pixabay.com/photo/2024/07/26/11/27/leaves-8923309_1280.png"
      strength={200}
      className="hero"
    >
      <div className="hero-content">
        <animated.div style={animation}>
          <h1>Bienvenidos a Matrona Naty</h1>
          <p>Cuidado maternal profesional y personalizado para ti y tu bebé</p>
          <a href="#contacto" className="cta-button">Agenda una consulta</a>
        </animated.div>
      </div>
    </Parallax>
  );
};

export { Hero };
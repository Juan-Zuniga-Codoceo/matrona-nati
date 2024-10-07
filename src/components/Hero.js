import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenidos a Matrona Natalia</h1>
        <p>Cuidado maternal profesional y personalizado para ti y tu bebé</p>
        <a href="#contacto" className="cta-button">Agenda una consulta</a>
      </div>
    </section>
  );
};

export { Hero };
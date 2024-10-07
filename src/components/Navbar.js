import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Matrona Natalia</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre Mí</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export { Navbar };
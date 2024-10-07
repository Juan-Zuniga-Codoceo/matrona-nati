import React from 'react';
import '../css/Header.css';

const Header = () => (
  <header className="header">
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
  </header>
);

export { Header };
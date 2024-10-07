import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Matrona Natalia. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#privacidad">Política de Privacidad</a>
          <a href="#terminos">Términos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export { Footer} ;
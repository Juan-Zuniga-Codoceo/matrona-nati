import React from 'react';
import '../css/Info.css';

const IconWithCircle = ({ Icon }) => (
  <div className="icon-circle">
    <Icon size={50} />
  </div>
);

const Info = () => (
  <section id="info" className="info-section">
    <h2 className="info-title">Sobre Matrona Natalia</h2>
    <div className="info-content">
      <div className="info-text">
        <p className="info-paragraph">
          Soy una matrona con experiencia en el cuidado integral de la salud de la mujer. 
          Me mantengo actualizada en los avances científicos y técnicos del área. Tengo una visión 
          humanizada de la atención, respetando la diversidad, la autonomía y los derechos de las 
          usuarias. Me comprometo con la calidad, la seguridad y la satisfacción de las personas que 
          atiendo, así como con el trabajo en equipo, la ética y la mejora continua. Me caracterizo por ser persistente, 
          proactiva y creativa, buscando siempre las mejores soluciones a los desafíos que se presentan. 
          Tengo convicciones éticas y principios y valores que guían mi actuar profesional y personal.
        </p>
      </div>
    </div>
  </section>
);

export { Info };
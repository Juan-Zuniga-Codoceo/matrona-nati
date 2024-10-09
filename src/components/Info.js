import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../css/Info.css';
import matronaImage from '../img/matrona (1).png';

const AnimatedText = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

const Info = () => (
  <section id="info" className="info-section">
    <div className="info-content">
      <div className="info-image">
        <img src={matronaImage} alt="Matrona Naty" />
      </div>
      <div className="info-text">
        <AnimatedText>
          <h2 className="info-title">Sobre Matrona Naty</h2>
        </AnimatedText>
        <AnimatedText>
          <p className="info-paragraph">
            Soy una matrona con experiencia en el cuidado integral de la salud de la mujer. 
            Me mantengo actualizada en los avances científicos y técnicos del área.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p className="info-paragraph">
            Tengo una visión humanizada de la atención, respetando la diversidad, 
            la autonomía y los derechos de las usuarias.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p className="info-paragraph">
            Me comprometo con la calidad, la seguridad y la satisfacción de las personas que 
            atiendo, así como con el trabajo en equipo, la ética y la mejora continua.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p className="info-paragraph">
            Me caracterizo por ser persistente, proactiva y creativa, buscando siempre 
            las mejores soluciones a los desafíos que se presentan.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p className="info-paragraph">
            Tengo convicciones éticas y principios y valores que guían mi actuar profesional y personal.
          </p>
        </AnimatedText>
      </div>
    </div>
  </section>
);

export { Info };
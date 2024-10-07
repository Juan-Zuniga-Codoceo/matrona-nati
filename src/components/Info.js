import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Info.css';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings} className="testimonials-slider">
      <div className="testimonial">
        <p>"Naty es una excelente profesional, muy dedicada y cariñosa. Me sentí en excelentes manos durante todo mi embarazo."</p>
        <h4>- María P.</h4>
      </div>
      <div className="testimonial">
        <p>"La atención de Naty fue fundamental para tener un parto tranquilo y seguro. Su apoyo fue invaluable."</p>
        <h4>- Ana L.</h4>
      </div>
      <div className="testimonial">
        <p>"Gracias a Naty, mi experiencia de maternidad ha sido maravillosa. Su conocimiento y empatía hacen la diferencia."</p>
        <h4>- Carolina S.</h4>
      </div>
    </Slider>
  );
};

const Info = () => (
  <section id="info" className="info-section">
    <AnimatedSection>
      <h2 className="info-title">Sobre Matrona Naty</h2>
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
    </AnimatedSection>
  </section>
);

export { Info };
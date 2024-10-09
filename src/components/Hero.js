import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Hero.css';

// Importa las imágenes
import imgCancer from '../img/octubre mes del cancer de mama.png';
import imgAtencionIntegral from '../img/Copia de Sólo consulta online.png';
import imgExperiencia from '../img/Sólo consulta online.png';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
  };

  const slides = [
    {
      image: imgCancer,
      alt: "Mes del Cáncer de mama"
    },
    {
      image: imgAtencionIntegral,
      alt: "Atención Integral"
    },
    {
      image: imgExperiencia,
      alt: "Experiencia y Dedicación"
    },
  ];

  return (
    <section className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={slide.alt} className="hero-image" />
          </div>
        ))}
      </Slider>
      <div className="hero-overlay">
        <h1>Matrona Naty</h1>
        <p>Cuidado maternal profesional y personalizado para ti y tu bebé</p>
        <a href="#contacto" className="cta-button">Agenda una consulta</a>
      </div>
    </section>
  );
};

export { Hero };
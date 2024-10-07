import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import {
  Baby,
  Scroll,
  Stethoscope,
  HeartHandshake,
  BookHeart,
  Droplets,
  Flower,
  Calendar,
} from "lucide-react";
import "../css/Services.css";

const AnimatedIcon = ({ children, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 100,
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

const Card = ({ children }) => <div className="card">{children}</div>;

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

const services = [
  {
    icon: <Stethoscope size={40} />,
    title: "Consulta Ginecológica",
    description:
      "Examen integral para detectar y prevenir problemas relacionados con la menstruación, anticoncepción, infecciones, fertilidad y menopausia.",
  },
  {
    icon: <Calendar size={40} />,
    title: "Planificación Familiar",
    description:
      "Asesoramiento sobre métodos anticonceptivos y planificación de embarazos.",
  },
  {
    icon: <BookHeart size={40} />,
    title: "Educación Prenatal",
    description:
      "Clases y talleres para preparar a los futuros padres para el parto y la crianza.",
  },
  {
    icon: <Flower size={40} />,
    title: "Atención Posparto",
    description:
      "Cuidado y apoyo para la madre durante el período de recuperación después del parto.",
  },
  {
    icon: <Baby size={40} />,
    title: "Atención al Recién Nacido",
    description:
      "Cuidados especializados para el bebé en sus primeras semanas de vida.",
  },
  {
    icon: <Droplets size={40} />,
    title: "Asesoría en Lactancia",
    description: "Orientación y apoyo para una lactancia exitosa y cómoda.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const cardAnimation = useSpring({
    opacity: selectedService ? 1 : 0,
    transform: selectedService ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Mis Servicios</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <AnimatedIcon key={index} index={index}>
              <div
                className="service-icon"
                onClick={() => setSelectedService(service)}
                onKeyPress={(e) =>
                  e.key === "Enter" && setSelectedService(service)
                }
                tabIndex={0}
                role="button"
                aria-label={`Ver detalles de ${service.title}`}
              >
                <div className="icon-background">{service.icon}</div>
                <p className="service-title">{service.title}</p>
              </div>
            </AnimatedIcon>
          ))}
        </div>
        <animated.div style={cardAnimation}>
          {selectedService && (
            <Card>
              <CardContent>
                <div className="selected-service-header">
                  <div className="selected-service-icon">
                    {selectedService.icon}
                  </div>
                  <h3 className="selected-service-title">
                    {selectedService.title}
                  </h3>
                </div>
                <p className="selected-service-description">
                  {selectedService.description}
                </p>
              </CardContent>
            </Card>
          )}
        </animated.div>
      </div>
    </section>
  );
};

export { Services };

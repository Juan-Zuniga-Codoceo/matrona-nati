import React, { useState } from 'react';
import { 
  Baby, 
  HeartPulse, 
  Scroll, 
  Stethoscope,
  Milk,
  Calendar
} from 'lucide-react';
import '../css/Services.css';

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

const services = [
  {
    icon: <Baby size={40} />,
    title: 'Atención al Recién Nacido',
    description: 'Cuidados especializados para el bebé en sus primeras semanas de vida.'
  },
  {
    icon: <HeartPulse size={40} />,
    title: 'Control Prenatal',
    description: 'Seguimiento integral del embarazo para garantizar la salud de la madre y el bebé.'
  },
  {
    icon: <Scroll size={40} />,
    title: 'Educación Prenatal',
    description: 'Clases y talleres para preparar a los futuros padres para el parto y la crianza.'
  },
  {
    icon: <Stethoscope size={40} />,
    title: 'Atención Posparto',
    description: 'Cuidado y apoyo para la madre durante el período de recuperación después del parto.'
  },
  {
    icon: <Milk size={40} />,
    title: 'Asesoría en Lactancia',
    description: 'Orientación y apoyo para una lactancia exitosa y cómoda.'
  },
  {
    icon: <Calendar size={40} />,
    title: 'Planificación Familiar',
    description: 'Asesoramiento sobre métodos anticonceptivos y planificación de embarazos.'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-icon"
              onClick={() => setSelectedService(service)}
            >
              <div className="icon-background">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
        {selectedService && (
          <Card>
            <CardContent>
              <div className="selected-service-header">
                <div className="selected-service-icon">
                  {selectedService.icon}
                </div>
                <h3 className="selected-service-title">{selectedService.title}</h3>
              </div>
              <p className="selected-service-description">{selectedService.description}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export  { Services };
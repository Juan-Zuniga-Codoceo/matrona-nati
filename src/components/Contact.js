import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useSpring, animated } from 'react-spring';
import 'react-calendar/dist/Calendar.css';
import '../css/Contact.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const modalAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : 'translateY(-50px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita agendada:', { date, time: selectedTime, ...formData });
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="calendar-container">
          <h2>Agenda tu hora</h2>
          <Calendar onChange={handleDateChange} value={date} className="main-calendar" />
          <button className="schedule-button" onClick={toggleModal}>Agendar Hora</button>
        </div>
        <div className="form-container">
          <h2>Contáctanos</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <animated.div className="modal-content" onClick={e => e.stopPropagation()} style={modalAnimation}>
            <button className="close-button" onClick={toggleModal}>&times;</button>
            <h2>Agendar Cita</h2>
            <Calendar onChange={handleDateChange} value={date} className="modal-calendar" />
            <div className="time-slots">
              {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
                <button 
                  key={time} 
                  onClick={() => handleTimeSelect(time)}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                >
                  {time}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <input 
                type="text" 
                name="name" 
                placeholder="Nombre" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Teléfono" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
              <button type="submit" disabled={!selectedTime}>Pagar y Agendar</button>
            </form>
          </animated.div>
        </div>
      )}
    </section>
  );
};

export { Contact };
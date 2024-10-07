import React from 'react';
import '../css/Contact.css'; // Make sure this file exists in the same directory as your Contact component

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-title">Contacto</h2>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input type="text" id="name" name="name" required className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" name="email" required className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Mensaje:</label>
        <textarea id="message" name="message" required className="form-textarea"></textarea>
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  </section>
);

export { Contact };
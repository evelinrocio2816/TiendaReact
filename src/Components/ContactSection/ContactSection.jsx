import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h3>Contactos</h3>
      <div className="contact-info">
        <p><strong>Email:</strong> contacto@ejemplo.com</p>
        <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
        <p><strong>Dirección:</strong> Av. Siempre Viva 123, Springfield</p>
      </div>
    </div>
  );
};

export default ContactSection;
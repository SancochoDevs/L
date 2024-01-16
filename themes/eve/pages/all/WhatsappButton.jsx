import './WhatsappButton.scss';
import React, { useState } from 'react';

// Importa los iconos necesarios
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const WhatsAppButton = () => {
  const [isWhatsappActive, setIsWhatsappActive] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsappActive(!isWhatsappActive);
  };

  return (
    <div className={`whatsapp-button ${isWhatsappActive ? 'active' : ''}`} onClick={handleWhatsAppClick}>
      {isWhatsappActive ? (
        <AiOutlineClose className="whatsapp-logo white-icon" size={25} />
      ) : (
        <FaWhatsapp className="whatsapp-logo white-icon" size={25} />
      )}
      {isWhatsappActive && (
        <div className="popup">
          <span>Haz clic para contactarnos por WhatsApp para mayor información.</span>
          <a href="https://wa.me/34675136652" target="_blank" rel="noopener noreferrer">
            Enviar mensaje de WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};

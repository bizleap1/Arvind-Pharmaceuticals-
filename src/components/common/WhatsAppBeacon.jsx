import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBeacon = () => {
  const phoneNumber = '917057306968';
  const message = encodeURIComponent("Hello, I have an inquiry about Arvind Pharmaceuticals products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-beacon"
      aria-label="Contact us on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat with us</span>
      <div className="whatsapp-icon-wrapper">
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
};

export default WhatsAppBeacon;

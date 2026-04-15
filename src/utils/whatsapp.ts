import config from '../data/config.json';

/**
 * Generates a WhatsApp URL based on the centralized configuration.
 * @returns The encoded WhatsApp URL.
 */
export const getWhatsAppUrl = () => {
  const { whatsapp, whatsappMensaje } = config.contacto;
  
  // Basic cleaning (should already be clean in config, but just in case)
  const cleanNumber = whatsapp.replace(/\D/g, "");
  const encodedMsg = encodeURIComponent(whatsappMensaje);
  
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
};

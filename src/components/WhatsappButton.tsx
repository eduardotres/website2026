import React from "react";
import WhatsappSvgIcon from "@/components/icons/WhatsappSvgIcon";

const phone = "5527996257391";
const message = "Fala Edu, tudo bem?";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const WhatsappButton: React.FC = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-primary shadow-xl hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary animate-none border-2 border-background group"
      style={{ boxShadow: "0 4px 24px 0 var(--primary)" }}
    >
      <WhatsappSvgIcon className="w-9 h-9" />
    </a>
  );
};

export default WhatsappButton;

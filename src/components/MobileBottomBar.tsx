import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import InquiryModal from "./InquiryModal";

const MobileBottomBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phoneNumber = "+919700650025";
  const whatsappUrl = `https://wa.me/919700650025?text=${encodeURIComponent("Hi! I'm interested in your travel packages.")}`;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="grid grid-cols-3 bg-primary text-primary-foreground shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col items-center justify-center gap-1 py-3 active:bg-primary/80 transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[11px] font-medium">Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 active:bg-primary/80 transition-colors border-x border-primary-foreground/20"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[11px] font-medium">WhatsApp</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-3 active:bg-primary/80 transition-colors"
            aria-label="Quick Enquiry"
          >
            <Send className="w-5 h-5" />
            <span className="text-[11px] font-medium">Enquiry</span>
          </button>
        </div>
      </div>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default MobileBottomBar;

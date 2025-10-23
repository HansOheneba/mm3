"use client";
import ContactStep from "@/components/tickets/contactStep";
import SummaryPanel from "@/components/tickets/summaryStep";
import TicketStep from "@/components/tickets/ticketsStep";
import { useState } from "react";

type TicketType = "early_bird" | "regular" | "late" | null;

export default function TicketsPage() {
  const [step, setStep] = useState<"tickets" | "contact">("tickets");
  const [ticketType, setTicketType] = useState<TicketType>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (step === "tickets" && ticketType && quantity > 0) setStep("contact");
  };

  const handleBack = () => {
    if (step === "contact") setStep("tickets");
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col md:flex-row items-start justify-center px-4 md:px-12 py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00ff00]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Left: Steps */}
      <div className="flex-1 max-w-2xl w-full z-10">
        {step === "tickets" && (
          <TicketStep
            ticketType={ticketType}
            quantity={quantity}
            onTicketChange={setTicketType}
            onQuantityChange={setQuantity}
            onNext={handleNext}
          />
        )}
        {step === "contact" && (
          <ContactStep
            formData={formData}
            setFormData={setFormData}
            onBack={handleBack}
            ticketType={ticketType!}
            quantity={quantity}
          />
        )}
      </div>

      {/* Right: Summary */}
      <div className="md:w-[360px] w-full mt-10 md:mt-0 md:ml-10 z-10">
        <SummaryPanel ticketType={ticketType} quantity={quantity} />
      </div>
    </div>
  );
}

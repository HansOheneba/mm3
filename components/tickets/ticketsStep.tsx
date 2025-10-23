"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface TicketStepProps {
  ticketType: "early_bird" | "regular" | "late" | null;
  quantity: number;
  onTicketChange: (type: "early_bird" | "regular" | "late" | null) => void;
  onQuantityChange: (quantity: number) => void;
  onNext: () => void;
}

export default function TicketStep({
  ticketType,
  quantity,
  onTicketChange,
  onQuantityChange,
  onNext,
}: TicketStepProps) {
  // Change "Props" to "TicketStepProps"
  const prices = {
    early_bird: 100,
    regular: 150,
    late: 200,
  };

  return (
    <div className="bg-zinc-900/60 border border-[#00ff00]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,0,0.1)] space-y-6">
      <h2 className="text-xl font-bold text-[#00ff00]">🎟 Choose Tickets</h2>
      <p className="text-gray-400 text-sm">
        Select your preferred access tier.
      </p>

      <div className="space-y-4">
        {Object.entries(prices).map(([key, price]) => (
          <div
            key={key}
            onClick={() =>
              onTicketChange(key as "early_bird" | "regular" | "late")
            } // Add type assertion here
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              ticketType === key
                ? "border-[#00ff00] bg-[#00ff00]/10"
                : "border-[#00ff00]/20 hover:border-[#00ff00]/40"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold capitalize">
                  {key.replace("_", " ")}
                </h3>
                <p className="text-gray-400 text-sm">₵{price}</p>
              </div>
              {ticketType === key && (
                <div className="flex items-center space-x-3">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuantityChange(Math.max(0, quantity - 1));
                    }}
                    className="text-[#00ff00]"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-bold w-8 text-center">
                    {quantity}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuantityChange(quantity + 1);
                    }}
                    className="text-[#00ff00]"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={onNext}
        disabled={!ticketType || quantity <= 0}
        className="w-full bg-[#00ff00] text-black font-bold hover:bg-[#00ff00]/90 mt-4"
      >
        Continue →
      </Button>
    </div>
  );
}

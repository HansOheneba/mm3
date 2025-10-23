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
  const prices = {
    early_bird: 100,
    regular: 150,
    late: 200,
  };

  const handleTicketSelect = (type: "early_bird" | "regular" | "late") => {
    onTicketChange(type);
    // Only set default quantity to 1 if no quantity is selected yet
    if (quantity === 0) {
      onQuantityChange(1);
    }
  };

  return (
    <div className="border-[#00ff00]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,0,0.1)] space-y-6">
      <h2 className="text-xl font-bold text-[#00ff00]">Choose Tickets</h2>
      <p className="text-gray-400 text-sm">
        Select your preferred access tier.
      </p>

      <div className="space-y-4">
        {Object.entries(prices).map(([key, price]) => {
          const ticketKey = key as "early_bird" | "regular" | "late";
          const isEarlyBird = ticketKey === "early_bird";
          const isSelected = ticketType === ticketKey;

          return (
            <div
              key={key}
              onClick={() => isEarlyBird && handleTicketSelect(ticketKey)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? "border-[#00ff00] bg-[#00ff00]/10"
                  : isEarlyBird
                  ? "border-[#00ff00]/20 hover:border-[#00ff00]/40"
                  : "border-gray-600 bg-gray-800/50 cursor-not-allowed opacity-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold capitalize">
                    {key.replace("_", " ")}
                    {!isEarlyBird && (
                      <span className="ml-2 text-xs text-gray-400">
                        (Coming Soon)
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm">₵{price}</p>
                </div>
                {isSelected && isEarlyBird && (
                  <div className="flex items-center space-x-3">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuantityChange(Math.max(1, quantity - 1)); // Minimum 1
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
          );
        })}
      </div>

      <Button
        onClick={onNext}
        disabled={!ticketType || quantity <= 0}
        className="w-full bg-[#00ff00] text-black font-bold hover:bg-[#00ff00]/90 mt-4"
      >
        Continue →
      </Button>

      {/* Info message */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
        <p className="text-blue-300 text-sm text-center">
          🕯 The gates creak open only for the Early Birds... the rest must wait
          in the shadows.
        </p>
      </div>
    </div>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  formData: { name: string; email: string; phone: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; phone: string }>
  >;
  onBack: () => void;
  ticketType: string;
  quantity: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  discountAmount: number;
  setDiscountAmount: (amount: number) => void;
  finalPrice: number;
}

export default function ContactStep({
  formData,
  setFormData,
  onBack,
  ticketType,
  quantity,
  promoCode,
  setPromoCode,
  discountAmount,
  setDiscountAmount,
}: Props) {
  const API_BASE = process.env.NEXT_PUBLIC_API!;
  const [validatingPromo, setValidatingPromo] = useState(false);
  const [promoError, setPromoError] = useState<string | null>(null);

  const validatePromoCode = async () => {
    if (!promoCode.trim()) {
      setDiscountAmount(0);
      setPromoError(null);
      return;
    }

    setValidatingPromo(true);
    setPromoError(null);

    try {
      const prices = { early_bird: 100, regular: 150, late: 200 };
      const totalAmount = prices[ticketType as keyof typeof prices] * quantity;

      const res = await fetch(`${API_BASE}/validate-promo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promo_code: promoCode,
          total_amount: totalAmount,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setDiscountAmount(parseFloat(data.data.discount_amount));
        setPromoError(null);
      } else {
        setDiscountAmount(0);
        setPromoError(data.error || "Invalid promo code");
      }
    } catch {
      setDiscountAmount(0);
      setPromoError("Failed to validate promo code");
    } finally {
      setValidatingPromo(false);
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

   const res = await fetch(`${API_BASE}/buy-ticket`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       email: formData.email,
       name: formData.name,
       phone: formData.phone,
       ticket_type: ticketType,
       quantity: quantity,
       promo_code: promoCode || undefined,
     }),
   });

   const data = await res.json();
   if (data.success && data.data?.checkout_url) {
     window.location.href = data.data.checkout_url;
   } else {
     alert(data.error || "Failed to process payment");
   }
 };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[#00ff00]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,0,0.1)] space-y-4"
    >
      <h2 className="text-xl font-bold text-[#00ff00]">Contact Info</h2>
      <p className="text-gray-400 text-sm">Enter your details to continue.</p>

      <Input
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="bg-zinc-800 border-[#00ff00]/30 text-gray-100"
      />
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="bg-zinc-800 border-[#00ff00]/30 text-gray-100"
      />
      <Input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        className="bg-zinc-800 border-[#00ff00]/30 text-gray-100"
      />

      {/* Promo Code Section */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Promo Code (Optional)</label>
        <div className="flex gap-2">
          <Input
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value);
              // Clear error when user types
              if (promoError) setPromoError(null);
            }}
            onBlur={validatePromoCode} // Validate when user leaves the field
            className="bg-zinc-800 border-[#00ff00]/30 text-gray-100 flex-1"
          />
          <Button
            type="button"
            onClick={validatePromoCode}
            disabled={!promoCode.trim() || validatingPromo}
            className="bg-[#00ff00] text-black font-bold hover:bg-[#00ff00]/90 whitespace-nowrap"
          >
            {validatingPromo ? "..." : "Apply"}
          </Button>
        </div>
        {promoError && <p className="text-red-400 text-sm">{promoError}</p>}
        {discountAmount > 0 && !promoError && (
          <p className="text-[#00ff00] text-sm">
            🎉 Promo code applied! You save ₵{discountAmount.toFixed(2)}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center pt-3">
        <Button
          type="button"
          variant="ghost"
          onClick={onBack}
          className="text-[#00ff00]"
        >
          ← Back
        </Button>
        <Button
          type="submit"
          className="bg-[#00ff00] text-black font-bold hover:bg-[#00ff00]/90"
        >
          Proceed to Payment
        </Button>
      </div>
    </form>
  );
}

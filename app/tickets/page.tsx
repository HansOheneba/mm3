"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function TicketsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [ticketType, setTicketType] = useState("early_bird");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_BASE = process.env.NEXT_PUBLIC_API!;

  const prices: Record<string, number> = {
    early_bird: 100,
    regular: 150,
    late: 200,
  };

  const handleBuy = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const requestData = {
      email: form.email,
      name: form.name,
      phone: form.phone,
      ticket_type: ticketType,
      quantity: String(quantity),
    };

    try {
      const res = await fetch(`${API_BASE}/buy-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await res.json();
      if (data.success && data.data?.checkout_url) {
        window.location.href = data.data.checkout_url;
      } else {
        setError(data.error || "Payment initialization failed.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const total = prices[ticketType] * quantity;

  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-20 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00ff00]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-900/20 rounded-full blur-[120px]" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#00ff00] mb-6 tracking-widest text-center">
        [ MIDNIGHT MADNESS III ]
      </h1>
      <p className="text-gray-400 text-sm uppercase mb-10 tracking-wider text-center">
        October 31, 2025 — [REDACTED], Accra
      </p>

      <form
        onSubmit={handleBuy}
        className="bg-zinc-900/60 border border-[#00ff00]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,0,0.1)] max-w-md w-full space-y-6"
      >
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#00ff00] mb-2 tracking-wide">
            Choose Your Access
          </h2>
          <p className="text-gray-400 text-sm">Each ticket grants one entry.</p>
        </div>

        {/* Ticket Selector */}
        <Select
          onValueChange={(v) => setTicketType(v)}
          defaultValue={ticketType}
        >
          <SelectTrigger className="w-full border-[#00ff00]/40 text-gray-200">
            <SelectValue placeholder="Select Ticket Type" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border border-[#00ff00]/40 text-white">
            <SelectItem value="early_bird">🎟 Early Bird — ₵100</SelectItem>
            <SelectItem value="regular" disabled>
              Regular — ₵150 (Coming Soon)
            </SelectItem>
            <SelectItem value="late" disabled>
              Late — ₵200 (Coming Soon)
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-zinc-800 border border-[#00ff00]/20 rounded-lg px-4 py-3">
          <span className="text-gray-400 text-sm">Quantity</span>
          <div className="flex items-center space-x-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-[#00ff00]"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-lg font-bold text-gray-200 w-8 text-center">
              {quantity}
            </span>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setQuantity((q) => q + 1)}
              className="text-[#00ff00]"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Inputs */}
        <Input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="bg-zinc-800 border-[#00ff00]/30 text-gray-100"
        />
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="bg-zinc-800 border-[#00ff00]/30 text-gray-100"
        />
        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="bg-zinc-800 border-[#00ff00]/30 text-gray-100"
        />

        {/* Total */}
        <div className="flex justify-between items-center pt-2 border-t border-[#00ff00]/20">
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-[#00ff00] text-lg font-semibold">
            ₵{total.toLocaleString()}
          </p>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center mt-2">{error}</p>
        )}

        {/* Buy Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#00ff00] text-black font-bold tracking-wide hover:bg-[#00ff00]/90"
        >
          {loading ? "Processing..." : "Buy Early Bird Ticket"}
        </Button>
      </form>

      <p className="mt-16 text-xs text-gray-600 italic tracking-wider text-center">
        WARNING: Unauthorized entry will be monitored. Proceed... if you dare.
      </p>
    </div>
  );
}

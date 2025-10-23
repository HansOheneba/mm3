"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  formData: { name: string; email: string; phone: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; phone: string }>
  >;
  onBack: () => void;
  ticketType: string;
  quantity: number;
}

export default function ContactStep({
  formData,
  setFormData,
  onBack,
  ticketType,
  quantity,
}: Props) {
  const API_BASE = process.env.NEXT_PUBLIC_API!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE}/buy-ticket`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        ticket_type: ticketType,
        quantity: String(quantity),
      }),
    });

    const data = await res.json();
    if (data.success && data.data?.checkout_url)
      window.location.href = data.data.checkout_url;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900/60 border border-[#00ff00]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,0,0.1)] space-y-4"
    >
      <h2 className="text-xl font-bold text-[#00ff00]">👤 Contact Info</h2>
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

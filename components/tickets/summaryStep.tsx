"use client";

interface Props {
  ticketType: "early_bird" | "regular" | "late" | null;
  quantity: number;
  promoCode?: string;
  discountAmount?: number;
  finalPrice?: number;
}

export default function SummaryPanel({
  ticketType,
  quantity,
  promoCode,
  discountAmount = 0,
  finalPrice,
}: Props) {
  const prices = {
    early_bird: 100,
    regular: 150,
    late: 200,
  };

  const total = ticketType ? prices[ticketType] * quantity : 0;
  const displayFinalPrice = finalPrice !== undefined ? finalPrice : total;

  return (
    <div className="border border-[#00ff00]/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,0,0.1)]">
      <h3 className="text-xl font-bold text-[#00ff00] mb-4">Summary</h3>

      {ticketType ? (
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">Ticket Type:</p>
          <p className="font-bold text-white capitalize">
            {ticketType.replace("_", " ")}
          </p>
          <p className="text-gray-400 text-sm">Quantity:</p>
          <p className="font-bold text-white">{quantity}</p>

          {promoCode && (
            <>
              <p className="text-gray-400 text-sm">Promo Code:</p>
              <p className="font-bold text-[#00ff00]">{promoCode}</p>
              {discountAmount > 0 && (
                <p className="text-gray-400 text-sm">Discount:</p>
              )}
              <p className="font-bold text-red-400">
                -₵{discountAmount.toLocaleString()}
              </p>
            </>
          )}

          <hr className="border-[#00ff00]/20 my-3" />
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-[#00ff00] text-lg font-semibold">
            ₵{displayFinalPrice.toLocaleString()}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">
          Please select a ticket to continue.
        </p>
      )}
    </div>
  );
}

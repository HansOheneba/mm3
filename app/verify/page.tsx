"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const trxref = searchParams?.get("trxref") ?? "";
    const reference = searchParams?.get("reference") ?? "";
    const API_BASE = process.env.NEXT_PUBLIC_API!;

    if (!trxref || !reference) {
      setStatus("error");
      setMessage(
        "Missing transaction reference. Please check your payment confirmation email or contact support."
      );
      return;
    }

    async function verifyPayment() {
      try {
        const res = await fetch(
          `${API_BASE}/verify-payment?reference=${encodeURIComponent(
            reference
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();

        if (res.ok && data.success) {
          setStatus("success");
          setMessage("Payment verified successfully! Check your email for details.");
        } else {
          setStatus("error");
          setMessage(data.error || "Payment verification failed.");
        }
      } catch {
        setStatus("error");
        setMessage("Network error during verification.");
      }
    }

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {status === "loading" && (
        <div className="text-center">
          <p className="text-lg animate-pulse">Verifying your payment...</p>
        </div>
      )}

      {status === "success" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-400 mb-3">
            Payment Successful!
          </h1>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-3">
            Verification Failed
          </h1>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={<p className="text-white text-center mt-10">Loading...</p>}
    >
      <VerifyPageContent />
    </Suspense>
  );
}

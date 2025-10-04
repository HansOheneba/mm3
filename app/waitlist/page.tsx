"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      referral: formData.get("referral") as string,
    };

    try {
      // Use the correct environment variable name from your original setup
      const apiUrl =
        process.env.NEXT_PUBLIC_WAITLIST_API ||
        "https://808api.vercel.app/waitlist";

      console.log("Sending request to:", apiUrl);
      console.log("Data:", values);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response status:", response.status);

      // Check if response is OK before trying to parse JSON
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = `Server error: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      console.log("Response data:", responseData);

      setSuccess(true);
      setOpen(true);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError(
        `TRANSMISSION FAILURE: ${
          err instanceof Error
            ? err.message
            : "Network error. Please try again."
        }`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-black text-lime-400 px-6">
      <div className="max-w-md w-full space-y-6 border border-lime-700 bg-gray-950/80 p-6 rounded-md shadow-[0_0_25px_rgba(163,230,53,0.6)] font-mono">
        {/* eerie classified heading */}
        <div className="border-b border-lime-700 pb-2">
          <h1 className="text-xl font-bold tracking-widest uppercase drop-shadow-[0_0_10px_rgba(163,230,53,0.9)] flex items-center justify-center">
            ██ Early Access ██
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            File: <span className="text-lime-400">MIDNIGHT-MADNESS-III</span>
          </p>
        </div>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="flex flex-col">
              <label className="text-gray-400 uppercase mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="███████████████"
                className="w-full bg-black border border-lime-700 rounded p-2 placeholder-gray-600 focus:ring-1 focus:ring-lime-400 focus:border-lime-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 uppercase mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="███████████████@███.███"
                className="w-full bg-black border border-lime-700 rounded p-2 placeholder-gray-600 focus:ring-1 focus:ring-lime-400 focus:border-lime-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 uppercase mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+233 ███ ███ ███"
                className="w-full bg-black border border-lime-700 rounded p-2 placeholder-gray-600 focus:ring-1 focus:ring-lime-400 focus:border-lime-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 uppercase mb-1">
                Referral Source
              </label>
              <select
                name="referral"
                className="w-full bg-black border border-lime-700 rounded p-2 text-gray-200 focus:ring-1 focus:ring-lime-400 focus:border-lime-400"
                defaultValue=""
              >
                <option value="" disabled>
                  -- CLASSIFIED --
                </option>
                <option value="friend">[Classified Referral]</option>
                <option value="instagram">Intercepted Signal: IG</option>
                <option value="snapchat">Intercepted Signal: Snapchat</option>
                <option value="tiktok">Intercepted Signal: TikTok</option>
                <option value="poster">Field Poster</option>
                <option value="other">Unknown Source</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-lime-500 text-black px-4 py-3 rounded font-bold tracking-widest shadow hover:bg-lime-400 transition-all uppercase"
            >
              {loading ? "Processing…" : "Join the Waitlist"}
            </button>
          </form>
        ) : null}

        {error && (
          <p className="text-red-400 text-center text-xs mt-2">{error}</p>
        )}

        {/* eerie footer note */}
        <p className="text-xs text-gray-500 italic border-t border-lime-700 pt-2">
          Warning: The gates close at midnight. Don&apos;t be late.
        </p>
      </div>

      {/* spooky modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black text-lime-400 border border-lime-700 shadow-[0_0_30px_rgba(163,230,53,0.7)] font-mono max-w-md">
          <DialogHeader>
            <DialogTitle className="uppercase tracking-widest text-center py-5">
              ███ ACCESS GRANTED ███
            </DialogTitle>
            <DialogDescription className="text-center text-gray-300 text-sm">
              THE MADNESS CLAIMS ANOTHER. <br />
              Standby for further instructions.
            </DialogDescription>
            <p className="text-lime-400 font-semibold tracking-wide animate-pulse text-center text-sm mt-2">
              You are not alone. Others are already waiting in the dark…
            </p>
          </DialogHeader>

          <div className="flex justify-center mt-4">
            <Link href={"/"} passHref>
              <Button className="bg-lime-500 text-black px-4 py-2 rounded font-bold tracking-widest shadow hover:bg-lime-400 transition-all uppercase">
                Acknowledged, Take me home
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

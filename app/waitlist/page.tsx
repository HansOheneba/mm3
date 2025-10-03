"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      referral: formData.get("referral"),
    };

    try {
      // TODO: connect Flask API
      // await fetch("http://localhost:5000/waitlist", { method: "POST", body: JSON.stringify(values) });

      setSuccess(true);
    } catch {
      setError("TRANSMISSION FAILURE. TRY AGAIN.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-black text-lime-400 px-6">
      <div className="max-w-md w-full space-y-6 border border-lime-700 bg-gray-950/80 p-6 rounded-md shadow-[0_0_25px_rgba(163,230,53,0.6)] font-mono">
        {/* eerie classified heading */}
        <div className="border-b border-lime-700 pb-2">
          <h1 className="text-xl font-bold tracking-widest uppercase drop-shadow-[0_0_10px_rgba(163,230,53,0.9)]">
            ███ Restricted Access ███
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            File: <span className="text-lime-400">MIDNIGHT-MADNESS-III</span>
          </p>
        </div>

        {/* success / error state */}
        {success ? (
          <p className="text-lime-400 text-center font-semibold uppercase tracking-widest">
            THE MADNESS CLAIMS ANOTHER. STANDBY FOR FURTHER INSTRUCTIONS.
          </p>
        ) : (
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
                <option value="friend">[REDACTED CONTACT]</option>
                <option value="instagram">Intercepted Signal: IG</option>
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
              {loading ? "Processing…" : "Submit File"}
            </button>
          </form>
        )}

        {error && (
          <p className="text-lime-300 text-center text-xs mt-2">{error}</p>
        )}

        {/* eerie footer note */}
        <p className="text-xs text-gray-500 italic border-t border-lime-700 pt-2">
          Warning: Unauthorized access will not go unpunished.
        </p>
      </div>
    </div>
  );
}

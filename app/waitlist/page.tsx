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
      // TODO: send to Flask API
      // await fetch("http://localhost:5000/waitlist", { method: "POST", body: JSON.stringify(values) });

      setSuccess(true);
    } catch {
      setError("Something spooky went wrong. Try again?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* spooky heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.9)]">
          Midnight Madness III
        </h1>
        <p className="text-lg text-gray-400">
          Ghana’s wildest Halloween rave. <br />
          Enter the list before the gates lock.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {success ? (
            <p className="text-green-400 text-center font-semibold">
              You’re officially on the waitlist! 🕷️ We’ll haunt your inbox soon…
            </p>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name (who’s stepping into the madness?)"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 placeholder-gray-500 focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email (where the madness finds you)"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 placeholder-gray-500 focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone (for last-minute whispers)"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 placeholder-gray-500 focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />
              <select
                name="referral"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Who led you into the dark?
                </option>
                <option value="friend">A friend whispered… 👥</option>
                <option value="instagram">Saw it on Instagram 📱</option>
                <option value="tiktok">TikTok made me do it 🎥</option>
                <option value="poster">A shadowy poster on the wall 🕷️</option>
                <option value="other">Other (from the void)… 🌑</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg font-bold shadow-lg hover:bg-purple-700 transition-all"
              >
                {loading ? "Casting spell..." : "Join the Waitlist"}
              </button>
            </>
          )}

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </form>

        <p className="text-xs text-gray-500 italic">
          Not everyone gets in. But you… you’re not everyone.
        </p>
      </div>
    </div>
  );
}

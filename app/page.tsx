"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mm3() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center bg-black transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-5xl font-extrabold tracking-[0.3em] text-[#00ff00]">
          M M III
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-20 gap-12 md:gap-20">
      {/* Left Section */}
      <section className="max-w-lg space-y-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#00ff00] tracking-widest mb-10">
          MIDNIGHT MADNESS: THE MELTDOWN
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
              Date
            </h2>
            <p className="font-mono text-[#00ff00] text-sm tracking-[0.15em]">
              31.10.25 – x DAYS LEFT
            </p>
          </div>

          <div>
            <h2 className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
              Location
            </h2>
            <p className="font-mono text-gray-300 text-sm">
              [REDACTED] – DECLASSIFIED SOON
            </p>
          </div>

          <div>
            <h2 className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
              Entry Protocol
            </h2>
            <p className="font-mono text-gray-300 text-sm">
              Limited Access – Ticket Required
            </p>
          </div>

          <div>
            <h2 className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
              Ticket Release
            </h2>
            <p className="font-mono text-gray-300 text-sm">
              Early-bird – x Oct 2025
            </p>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 mt-8 leading-relaxed max-w-sm">
          Clearance is limited. Access to the Madness is not guaranteed. Join
          the waitlist below.
        </p>

        <Link
          href="/waitlist"
          className="inline-block mt-4 bg-[#00ff00] text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#00ff00]/90 transition-all duration-200 tracking-wide"
        >
          Limited Slots – Join the Waitlist
        </Link>
      </section>

      {/* Right Section */}
      <section className="relative w-full max-w-sm">
        <Image
          src="/assets/MMm3FLYER.png"
          alt="Midnight Madness Flyer"
          width={500}
          height={500}
          className="rounded-md "
        />
      </section>
    </main>
  );
}

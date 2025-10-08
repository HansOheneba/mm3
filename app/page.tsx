"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Mm3 = () => {
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
    <main className="w-full max-w-4xl mx-auto px-6 py-16 text-white animate-fade animate-once animate-duration-[800ms] animate-ease-out">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-[#00ff00] tracking-widest mb-12">
        MIDNIGHT MADNESS // FILE 003
      </h1>

      {/* Tabular style info */}
      <div className="space-y-10">
        <div>
          <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Location
          </h2>
          <p className="text-lg font-mono text-gray-200">[REDACTED]</p>
        </div>

        <div>
          <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Date
          </h2>
          <p className="text-lg font-mono text-lime-400 tracking-[0.25em]">
            31 // OCT // 2025
          </p>
        </div>

        <div>
          <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Entry Protocol
          </h2>
          <p className="text-lg font-mono text-gray-200">
            Restricted Access — Ticket Required
          </p>
        </div>

        <div>
          <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Clearance Level
          </h2>
          <p className="text-lg font-mono text-gray-200">
            Confidential // Tier 3
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20">
        <p className="text-gray-400 text-base mb-6">
          Clearance is limited. Access to the Madness is not guaranteed. Request
          entry below.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-[#00ff00] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-lime-400 transition-all tracking-wide"
        >
          Request Access — Join Waitlist
        </Link>
      </div>
    </main>
  );
};

export default Mm3;

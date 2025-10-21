"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mm3() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    // Intro animation timer
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-10-31T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setDaysLeft(0);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // update every hour
    return () => clearInterval(interval);
  }, []);

  function EarlyBirdCountdown() {
    const targetDate = new Date("2025-10-27T00:00:00");
    const [timeLeft, setTimeLeft] = React.useState("");

    React.useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate.getTime() - now;

        if (diff <= 0) {
          setTimeLeft("Early-bird closed — regular pricing applies");
          clearInterval(timer);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }, 1000);

      return () => clearInterval(timer);
    },);

    return (
      <p className="font-mono text-gray-300 text-sm">
        Early-bird ends in <span className="text-[#00ff00]">{timeLeft}</span>
      </p>
    );
  }

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
              31.10.25 –{" "}
              {daysLeft !== null ? (
                <>{daysLeft > 0 ? `${daysLeft} DAYS LEFT` : "IT’S TIME"}</>
              ) : (
                "Loading..."
              )}
            </p>
          </div>

          <div>
            <h2 className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
              Location
            </h2>
            <p className="font-mono text-gray-300 text-sm mb-4">
              13 Mankata Ave, Airport Residential
            </p>
            <div className="relative w-full h-64 rounded-md overflow-hidden border-2 border-[#00ff00] shadow-[0_0_20px_#00ff00]/70">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7187292538565!2d-0.1799898!3d5.6084971999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b038263e669%3A0x339b783fad2d5581!2s13%20Mankata%20Ave%2C%20Ama_4!5e0!3m2!1sen!2sgh!4v1760870962166!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[0.7] contrast-[1.1] hue-rotate-[60deg]"
              ></iframe>

              {/* Optional soft overlay for glow depth */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
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
            <EarlyBirdCountdown />
          </div>
        </div>

        <p className="text-[11px] text-gray-500 mt-8 leading-relaxed max-w-sm">
          Clearance is limited. Access to the Madness is not guaranteed. Get
          your ticket now.
        </p>

        <Link
          href="/tickets"
          className="inline-block mt-4 bg-[#00ff00] text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#00ff00]/90 transition-all duration-200 tracking-wide"
        >
          Limited Slots – Get Your Ticket
        </Link>
      </section>

      {/* Right Section */}
      <section className="relative w-full max-w-sm">
        <Link href={"https://www.instagram.com/808dtp/"} target="_blank">
          <Image
            src="/assets/MMm3FLYER.png"
            alt="Midnight Madness Flyer"
            width={500}
            height={500}
            className="rounded-md"
          />
        </Link>
      </section>
    </main>
  );
}

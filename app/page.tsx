"use client";
import React, { useEffect, useState } from "react";

const Mm3 = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // trigger fade animation
      setTimeout(() => setLoading(false), 800); // wait for fade to finish
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center bg-black transition-opacity duration-700 animate-pulse animate-infinite ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-4xl font-bold text-lime-500 animate-pulse-glow">
          M M 3
        </h1>
      </div>
    );
  }

  return (
    <main className="w-full max-w-6xl mx-auto p-6 animate-fade animate-duration-1000">
      <div>
        <h1 className="text-4xl font-semibold text-lime-500  my-20">
          Midnight Madness 3
        </h1>
        <div className="flex flex-col space-y-20">
          <div>
            <h1 className="text-lime-500 text-xl">[Placeholder]</h1>
          </div>
          <div>
            <h1 className="text-lime-500 text-xl">[Placeholder]</h1>
          </div>
          <div>
            <h1 className="text-lime-500 text-xl">[Placeholder]</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mm3;

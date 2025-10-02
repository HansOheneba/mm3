// app/tickets/page.tsx
export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-lime-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-lime-500 drop-shadow-[0_0_25px_rgba(163,230,53,0.9)] uppercase tracking-wider text-center">
        The Madness Awaits
      </h1>

      {/* Subtext */}
      <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed">
        A night where shadows dance, beats hit harder than your heartbeat, and
        the line between thrill and chaos disappears.
        <span className="block mt-2 text-lime-500 font-semibold">
          Tickets drop soon.
        </span>
      </p>

      {/* Glowing Divider */}
      <div className="mt-10 h-[2px] w-64 bg-lime-500/60 blur-sm"></div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-lg">
          The doors won’t stay closed forever. Secure your spot in the{" "}
          <span className="text-lime-500">madness</span> — join the waitlist.
        </p>

        <a
          href="/waitlist"
          className="inline-block mt-6 px-8 py-4 rounded-xl border border-lime-500 text-lime-500 font-bold tracking-wide uppercase hover:bg-lime-500 hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(163,230,53,0.9)]"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Footer whisper */}
      <p className="mt-16 text-sm text-gray-600 italic tracking-wide">
        The night doesn’t end—it consumes you.
      </p>
    </div>
  );
}

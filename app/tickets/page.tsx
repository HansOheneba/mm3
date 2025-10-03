// app/tickets/page.tsx
export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-8 py-16 flex flex-col items-start justify-center relative overflow-hidden max-w-4xl mx-auto">
      {/* Subtle eerie glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-lime-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-lime-500 mb-12 tracking-widest">
        [ TICKETS : CLASSIFIED ]
      </h1>

      {/* Classified Info Block */}
      <div className="space-y-8 w-full max-w-3xl">
        <div className="border-b border-gray-800 pb-6">
          <h2 className="text-sm text-gray-500 uppercase mb-2">
            Document Reference
          </h2>
          <p className="text-lg text-gray-300">File #MM-III-███-ACCESS</p>
        </div>

        <div className="border-b border-gray-800 pb-6">
          <h2 className="text-sm text-gray-500 uppercase mb-2">
            Release Window
          </h2>
          <p className="text-lg text-gray-300">
            [REDACTED] — Nightfall Approaches
          </p>
        </div>

        <div className="border-b border-gray-800 pb-6">
          <h2 className="text-sm text-gray-500 uppercase mb-2">
            Clearance Level
          </h2>
          <p className="text-lg text-gray-300">
            Restricted Access —{" "}
            <span className="text-lime-500">Waitlist Only</span>
          </p>
        </div>

        <div className="pb-6">
          <h2 className="text-sm text-gray-500 uppercase mb-2">
            Incident Report
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Witnesses describe a night where{" "}
            <span className="text-lime-500">shadows move on their own</span>,
            bass shakes the ground, and the boundary between thrill and fear
            dissolves.
            <span className="block mt-2 text-lime-500 font-semibold">
              Tickets imminent. Anticipate chaos.
            </span>
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <a
          href="/waitlist"
          className="inline-block px-8 py-4 border border-lime-500 text-lime-500 font-bold tracking-wider uppercase hover:bg-lime-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.6)]"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Footer Notice */}
      <p className="mt-16 text-xs text-gray-600 italic tracking-wider">
        NOTICE: Unauthorized access will be logged. Only the brave will make it
        inside.
      </p>
    </div>
  );
}

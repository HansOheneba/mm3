"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = () => {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-16 text-white">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest text-center mb-12">
        CLEARANCE <span className="text-[#00ff00]">BRIEFING</span> {'// FILE 003'}
      </h1>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem
          value="item-1"
          className="border border-[#00ff00]/40 rounded-lg bg-black/50 backdrop-blur-sm"
        >
          <AccordionTrigger className="px-4 text-lime-400 hover:text-lime-300">
            Who is organizing Midnight Madness?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            Midnight Madness is curated by{" "}
            <Link
              href="https://instagram.com/808dtp"
              target="_blank"
              className="text-lime-400 hover:text-lime-300 underline"
            >
              808DTP
            </Link>{" "}
            — the team behind immersive cultural and nightlife experiences in
            Accra. Expect precision, mystery, and energy unlike anything else.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-[#00ff00]/40 rounded-lg bg-black/50"
        >
          <AccordionTrigger className="px-4 text-lime-400 hover:text-lime-300">
            When and where is the event?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            The operation commences on{" "}
            <span className="text-lime-400 font-mono">October 31st, 2025</span>.
            The exact location will only be revealed to confirmed guests via
            secure transmission.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border border-[#00ff00]/40 rounded-lg bg-black/50"
        >
          <AccordionTrigger className="px-4 text-lime-400 hover:text-lime-300">
            How do I get access?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            Access is restricted. Request clearance by{" "}
            <Link
              href="/waitlist"
              className="text-lime-400 hover:text-lime-300 underline"
            >
              joining the official waitlist
            </Link>
            . Only approved names will receive final instructions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border border-[#00ff00]/40 rounded-lg bg-black/50"
        >
          <AccordionTrigger className="px-4 text-lime-400 hover:text-lime-300">
            Is there an age requirement?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            Yes. Midnight Madness is strictly{" "}
            <span className="text-lime-400 font-bold">18+</span>. Valid ID will
            be required at the entry checkpoint.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border border-[#00ff00]/40 rounded-lg bg-black/50"
        >
          <AccordionTrigger className="px-4 text-lime-400 hover:text-lime-300">
            What should I expect?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-300">
            A classified experience blending music, art, and atmosphere. Expect
            the unexpected. Details remain on a{" "}
            <span className="text-lime-400">need-to-know basis</span>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Footer / Links */}
      <div className="mt-16 text-center text-gray-400">
        <p className="mb-4">Still have questions?</p>
        <Link
          href="tel:+233555301122"
          className="text-lime-400 hover:text-lime-300 underline font-semibold"
        >
          Contact 808
        </Link>
        <p className="mt-6 text-sm">
          Follow us on{" "}
          <Link
            href="https://instagram.com/808dtp"
            target="_blank"
            className="text-lime-400 hover:text-lime-300 underline"
          >
            Instagram
          </Link>{" "}
          |{" "}
          <Link
            href="https://x.com/808dtp"
            target="_blank"
            className="text-lime-400 hover:text-lime-300 underline"
          >
            Twitter/X
          </Link>{" "}
          |{" "}
          <Link
            href="https://tiktok.com/@808dtp"
            target="_blank"
            className="text-lime-400 hover:text-lime-300 underline"
          >
            TikTok
          </Link>
        </p>
      </div>
    </main>
  );
};

export default FAQ;

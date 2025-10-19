"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tickets", label: "Tickets" },
  // { href: "/waitlist", label: "Waitlist" },
  { href: "/faq", label: "FAQs" },
];

const Header = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "font-bold text-[#00ff00] uppercase underline"
      : "text-[#00ff00] hover:text-lime-700 font-medium uppercase";

  return (
    <>
      <div className="pt-10"></div>
      <header className="fixed w-full z-50 top-0 left-0 bg-black/10 backdrop-blur-md transition-all duration-300">
        <nav className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-5">
          {/* Logo for mobile */}
          <div className="flex md:hidden justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex w-full items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={60}
                height={30}
                priority
                className="object-contain"
              />
            </Link>
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger>
                <Menu size={28} className="text-white" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-black px-5">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold text-white">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link href={link.href} className={linkClasses(link.href)}>
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

import type { Metadata } from "next";
import { Sofia_Sans_Condensed, Saira_Extra_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const sofiaSans = Sofia_Sans_Condensed({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sairaExtraCondensed = Saira_Extra_Condensed({
  variable: "--font-saira-extra-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Midnight Madness | 808",
  description:
    "Midnight Madness is Ghana’s biggest Halloween party, happening in Accra with thrilling costumes, top DJs, live performances, and nonstop nightlife energy. Don’t miss the ultimate Halloween experience in West Africa.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sofiaSans.variable} ${sairaExtraCondensed.variable}`}
    >
      <body
        className="antialiased text-white bg-black font-sans"
        style={{
          fontFamily: "var(--font-sofia-sans)",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

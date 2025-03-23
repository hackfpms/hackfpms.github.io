import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackFPMS",
  description: "Welcome to HackFPMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background relative`}
      >
        {/* Subtle texture overlay */}
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
        <Navbar />
        <div className="pt-16 relative">
          {children}
        </div>
      </body>
    </html>
  );
}

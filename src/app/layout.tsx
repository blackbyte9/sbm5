import React from "react";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/_components/navigation/navbar";
import { Footer } from "@/_components/footer/footer";

export const metadata: Metadata = {
  title: "Schulbuch Manager",
  description: "Schulbücher ausgeben und zurücknehmen",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-300 text-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen justify-between bg-gray-300">
          <NavBar />
          <main className="container mx-auto p-4 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

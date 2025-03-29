import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import GarllerySection from "@/components/Gallery";



export const metadata: Metadata = {
  title: "Ai palm",
  description: "Ai palm roobotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar scrollY={1} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

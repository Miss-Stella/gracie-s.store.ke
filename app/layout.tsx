import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Inter,
  Sacramento,
} from "next/font/google";

import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Gracie's",
  description: "Handcrafted crochet accessories made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allura.variable} ${cormorant.variable} ${inter.variable} ${sacramento.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
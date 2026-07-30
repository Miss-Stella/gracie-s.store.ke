import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Inter,
  Sacramento,
} from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";

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
  title: "Gracie's_store.ke",
  description: "Your Chic Defined!",
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

        <Toaster
         position="top-right"
         closeButton
         toastOptions={{
          style: {
            background: "#FFF8F7",
            border: "1px solid #E7C7CC",
            color: "#7D5A5A",
            borderRadius: "18px",
          },
          classNames: {
            actionButton: 
            "!bg-[#D7A8B1] !text-white hover:!bg-[#C996A0]",
            closeButton:
            "!bg-white !border-[#E7C7CC] !text-[#B88A93]",
          },
         }}
        />

      </body>
    </html>
  );
}
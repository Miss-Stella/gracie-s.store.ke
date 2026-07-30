"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useCartStore } from "@/store/cartStore";
import Container from "../ui/Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* ===========================
          Desktop / Tablet Navbar
      ============================ */}
      <header className="sticky top-0 z-50 border-b border-[#F1E5E5] bg-[#FFF8F7]/90 backdrop-blur-md">
        <Container>
          <nav className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="font-logo text-4xl text-[#7D5A5A] md:text-5xl"
            >
              Gracie's
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-10 text-[#5F5555] md:flex">
              <li>
                <Link href="/" className="hover:text-[#B88A93] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-[#B88A93] transition">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#B88A93] transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#B88A93] transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="relative hover:text-[#B88A93] transition"
                >
                  <ShoppingBag size={22} />

                  {totalItems > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D7A8B1] text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden"
            >
              <Menu size={28} />
            </button>

          </nav>
        </Container>
      </header>

      {/* ===========================
          Mobile Navigation Drawer
      ============================ */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[101] flex h-full w-[85%] max-w-sm flex-col bg-[#FFF8F7] p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end"
              >
                <div className="rounded-full bg-[#F5E7E9] p-2 transition hover:bg-[#EFD8DD]">
                  <X size={22} />
                </div>
              </button>

              {/* Branding */}
              <div className="mt-8 text-center">

                <h2 className="font-logo text-6xl text-[#7D5A5A]">
                  Gracie's
                </h2>

                <p className="mt-2 font-accent text-2xl text-[#B88A93]">
                  Gracefully Chic
                </p>

              </div>

              {/* Navigation */}
              <nav className="mt-12 flex flex-col gap-8 text-center text-2xl text-[#5F5555]">

                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition hover:text-[#B88A93]"
                >
                  Home
                </Link>

                <Link
                  href="/shop"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition hover:text-[#B88A93]"
                >
                  Shop
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition hover:text-[#B88A93]"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition hover:text-[#B88A93]"
                >
                  Contact
                </Link>

                <Link
                  href="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 transition hover:text-[#B88A93]"
                >
                  <ShoppingBag size={24} />
                  Cart ({totalItems})
                </Link>

              </nav>

              {/* Bottom Section */}
              <div className="mt-auto border-t border-[#EEDDDD] pt-8">

                <p className="text-center font-accent text-2xl text-[#B88A93]">
                  Gracefully Chic
                </p>

                <p className="mt-3 text-center text-sm text-[#8A7B7B]">
                  Chic & Colorful
                </p>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F7]/90 backdrop-blur-md border-b border-[#F1E5E5]">
      <Container>
        <nav className="grid h-20 grid-cols-3 items-center">
        
        <div className="justify-self-start">
          <Link href="/" className="font-logo text-5xl text-[#7D5A5A]">
           Gracie's
          </Link>
        </div>

        {/*Navigation*/}
        <ul className="hidden md:flex items-center justify-center gap-10 text-[#5F5555]">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/shop">Shop</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Cart */}
        <div className="justify-self-end">
          <Link href="/cart" className="relative">
          <ShoppingBag
           size={24}
           className="text-[#8C646B] transition hover:text-[#B37D87]"/>

           {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D7A8B1] text-xs text-white">
              {totalItems}
            </span>
            )}
          </Link>
        </div>
        </nav>
      </Container>
    </header>
  );
}
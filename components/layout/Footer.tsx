import Link from "next/link";
import Container from "../ui/Container";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8EEEC] pt-16 pb-8 md:pt-20">
      <Container>

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="text-center md:text-left">

            <h2 className="font-logo text-5xl text-[#8C646B] md:text-6xl">
              Gracie's
            </h2>

            <p className="mt-2 font-accent text-2xl text-[#B88A93]">
              Gracefully Chic
            </p>

            <p className="mt-6 max-w-sm leading-7 text-[#6E6262] md:mx-0 mx-auto">
              Handcrafted crochet accessories designed to celebrate
              timeless elegance, softness and everyday beauty.
            </p>

          </div>

          {/* Quick Links */}
          <div className="text-center">

            <h3 className="font-heading text-3xl text-[#3A3333]">
              Quick Links
            </h3>

            <nav className="mt-6 flex flex-col gap-4 text-[#5F5555]">

              <Link
                href="/"
                className="transition hover:text-[#B88A93]"
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="transition hover:text-[#B88A93]"
              >
                Shop
              </Link>

              <Link
                href="/about"
                className="transition hover:text-[#B88A93]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#B88A93]"
              >
                Contact
              </Link>

            </nav>

          </div>

          {/* Connect */}
          <div className="text-center md:text-right">

            <h3 className="font-heading text-3xl text-[#3A3333]">
              Connect
            </h3>

            <p className="mt-5 text-[#6E6262]">
              We'd love to hear from you.
            </p>

            <div className="mt-8 flex justify-center gap-6 md:justify-end">

              <a
                href="https://instagram.com/gracies_stores.ke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white p-4 text-[#7D5A5A] shadow-sm transition hover:-translate-y-1 hover:bg-[#D7A8B1] hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/254732529565"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-white p-4 text-[#7D5A5A] shadow-sm transition hover:-translate-y-1 hover:bg-[#D7A8B1] hover:text-white"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="mailto:gracies.store.ke@gmail.com"
                aria-label="Email"
                className="rounded-full bg-white p-4 text-[#7D5A5A] shadow-sm transition hover:-translate-y-1 hover:bg-[#D7A8B1] hover:text-white"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[#E8D6D8] pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#8A7B7B] md:flex-row">

            <p>
              © 2026 Gracie's. All rights reserved.
            </p>

            <p>
              Made in Kenya.
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}
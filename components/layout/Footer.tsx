import Link from "next/link";
import Container from "../ui/Container";
import { FaInstagram, FaWhatsapp,FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8EEEC] py-20">
      <Container>
        <div className="text-center">

          <h2 className="font-logo text-6xl text-[#8C646B]">
            Gracie's
          </h2>

          <p className="mt-2 font-heading text-lg uppercase tracking-[0.35em] text-[#B88A93]">
            Gracefully Chic
          </p>

          <p className="mx-auto mt-8 max-w-xl leading-8 text-[#6E6262]">
            Handcrafted crochet accessories designed to celebrate
            timeless elegance and everyday beauty.
          </p>

          <nav className="mt-12 flex flex-wrap justify-center gap-8 text-[#5F5555]">
            <Link href="/">Home</Link>
            <Link href="/shop">Collection</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="mt-8 flex items-center justify-center gap-8 text-[#8C646B]">
           

    <a
    href="https://instagram.com/gracies_stores.ke"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-[#7D5A5A] transition hover:scale-110 hover:text-[#D7A8B1]"
  >
    <FaInstagram size={22} />
  </a>

  <a
    href="https://wa.me/254732529565"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="text-[#7D5A5A] transition hover:scale-110 hover:text-[#D7A8B1]"
  >
    <FaWhatsapp size={22} />
  </a>

  <a
    href="mailto:gracies.store.ke@gmail.com"
    aria-label="Email"
    className="text-[#7D5A5A] transition hover:scale-110 hover:text-[#D7A8B1]"
  >
    <FaEnvelope size={22} />
  </a>


            
          </div>

          <div className="mx-auto mt-12 h-px w-32 bg-[#D8B6BC]" />

          <p className="mt-8 text-sm tracking-wide text-[#8A7B7B]">
            © 2026 Gracie's. All Rights Reserved.
          </p>

        </div>
      </Container>
    </footer>
  );
}
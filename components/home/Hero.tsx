import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[90vh]">

      {/* Background Image */}
      <Image
        src="/images/hero/hero2.jpg"
        alt="Gracie's Crochet Collection"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft Blush Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F7]/60 via-[#FFF8F7]/25 to-transparent" />

      {/* Decorative Signature */}
      <span className="pointer-events-none absolute left-4 top-6 font-logo text-[5rem] text-white/10 sm:text-[6rem] md:left-16 md:top-10 md:text-[18rem]">
        G.
      </span>

      <Container>
        <div className="relative z-10 flex min-h-[70vh] items-center py-14 md:min-h-[90vh] md:py-0">

          <div className="max-w-xl">

            {/* Tagline */}
            <p className="font-accent text-xl text-[#F8D8DD] sm:text-2xl md:text-3xl">
              Define Your Chic!
            </p>

            {/* Heading */}
            <h1 className="mt-3 font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
              Elevate &
              <br />
              Define
              <br />
              Your Chic Moments.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-[#F6ECEC] md:text-lg">
              Beautiful handmade pieces thoughtfully crafted to accentuate
              softness, confidence, and timeless style.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/shop"
                className="rounded-full bg-[#D7A8B1] px-8 py-4 text-center text-white transition duration-300 hover:bg-[#C996A0]"
              >
                Explore Craft
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/70 bg-white/10 px-8 py-4 text-center text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#7D5A5A]"
              >
                Our Highlights
              </Link>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
}
import Image from "next/image";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero/hero2.jpg"
        alt="Gracie's Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Blush Overlay */}
      <div className="absolute inset-0 bg-[#FFF8F7]/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F7]/95 via-[#FFF8F7]/70 to-transparent" />

      <Container>
        <div className="relative z-10 flex min-h-screen items-center">

          <div className="max-w-2xl">

            <p className="font-accent text-4xl text-[#B37D87]">
              Gracefully Chic
            </p>

            <h1 className="mt-5 font-heading text-6xl leading-tight text-[#3A3333] lg:text-7xl">
              Elegance,
              <br />
              Handcrafted for
              <br />
              Everyday Moments.
            </h1>

            <p className="mt-8 text-lg leading-8 text-[#5F5555]">
              Beautiful crochet accessories thoughtfully handmade
              to celebrate softness, confidence, and timeless style.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-full bg-[#D7A8B1] px-8 py-4 text-white">
                Explore Collection
              </button>

              <button className="rounded-full border border-[#D7A8B1] bg-white/40 px-8 py-4 text-[#B37D87] backdrop-blur-sm">
                Our Story
              </button>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="font-accent text-2xl text-[#B88A93] md:text-3xl">
            Our Collection
          </p>

          <h2 className="mt-3 font-heading text-3xl leading-tight text-[#3A3333] sm:text-4xl md:text-5xl">
            Handmade for Everyday Elegance
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-7 text-[#6E6262] md:px-0 md:text-lg">
            Every piece is thoughtfully handcrafted to bring softness,
            elegance and timeless beauty to your everyday style.
          </p>

        </div>

        {/* Products */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group overflow-hidden rounded-[28px] bg-[#FFF8F7] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden sm:h-72 md:h-80 lg:h-96">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Product Details */}
              <div className="p-5 md:p-6">

                <h3 className="font-heading text-2xl text-[#3A3333] md:text-3xl">
                  {product.name}
                </h3>

                <p className="mt-2 text-lg font-medium text-[#B37D87]">
                  KES {product.price}
                </p>

                <p className="mt-4 text-sm tracking-wide text-[#8C7A7A] transition group-hover:text-[#B37D87]">
                  View Product →
                </p>

              </div>

            </Link>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center md:mt-16">

          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-[#D7A8B1] px-8 py-3 text-[#B37D87] transition duration-300 hover:bg-[#D7A8B1] hover:text-white"
          >
            View Full Collection
          </Link>

        </div>

      </Container>
    </section>
  );
}
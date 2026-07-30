"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Container from "../ui/Container";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

export default function ProductGrid() {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="bg-[#FFF8F7] py-16 md:py-24">
      <Container>

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl px-2 text-center md:mb-16">

          <p className="font-accent text-2xl text-[#B88A93] md:text-3xl">
            Our Crafts
          </p>

          <h1 className="mt-3 font-heading text-3xl leading-tight text-[#3A3333] sm:text-4xl md:text-6xl">
            Crafted Chic Pieces,
            <br />
            Thoughtfully Designed
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6E6262] md:mt-6 md:text-lg">
            Explore handcrafted pieces made with care and recommended patterns
            designed to accentuate style and chic in your everyday outfits.
          </p>

        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <article
              key={product.id}
              className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:rounded-[30px]"
            >

              <Link href={`/shop/${product.slug}`}>

                <div className="relative h-64 overflow-hidden sm:h-72 md:h-96">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

              </Link>

              <div className="p-5 md:p-6">

                <Link href={`/shop/${product.slug}`}>

                  <h2 className="font-heading text-2xl text-[#3A3333] md:text-3xl">
                    {product.name}
                  </h2>

                </Link>

                <p className="mt-2 text-lg font-medium text-[#B37D87]">
                  KES {product.price}
                </p>

                <Link
                  href={`/shop/${product.slug}`}
                  className="mt-4 block text-sm tracking-wide text-[#8C7A7A] transition hover:text-[#B37D87]"
                >
                  View Details →
                </Link>

                <button
                  onClick={() => {
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });

                    toast("Added to Cart", {
                      description: `${product.name} has been added successfully.`,
                      style: {
                        background: "#FFF8F7",
                        border: "1px solid #E7C7CC",
                        color: "#3A3333",
                        borderRadius: "18px",
                      },
                      action: {
                        label: "View Cart",
                        onClick: () => router.push("/cart"),
                      },
                    });
                  }}
                  className="mt-6 w-full rounded-full bg-[#D7A8B1] py-3 text-white transition duration-300 hover:bg-[#C996A0]"
                >
                  Add to Cart
                </button>

              </div>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}
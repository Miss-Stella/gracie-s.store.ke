import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="font-accent text-3xl text-[#B88A93]">
            Collection
          </p>

          <h1 className="mt-3 font-heading text-6xl text-[#3A3333]">
            Our Crochet Collection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[#6E6262]">
            Discover handcrafted pieces designed with elegance,
            comfort, and timeless charm.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
            >
              <article className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3 p-6">
                  <h2 className="font-heading text-3xl text-[#3A3333]">
                    {product.name}
                  </h2>

                  <p className="text-lg text-[#B37D87]">
                    KES {product.price}
                  </p>

                  <button className="mt-4 w-full rounded-full bg-[#D7A8B1] py-3 text-white transition hover:bg-[#C996A0]">
                    Add to Cart
                  </button>
                </div>

              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
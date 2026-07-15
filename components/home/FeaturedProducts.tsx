import Image from "next/image";
import Container from "../ui/Container";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <p className="font-accent text-3xl text-[#B88A93]">
            Our Collection
          </p>

          <h2 className="mt-3 font-heading text-5xl text-[#3A3333]">
            Stitched and Chic
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#6E6262]">
            Handcrafted crochet accessories designed to add a
            graceful touch to your everyday style.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[30px] bg-[#FFF8F7] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-3xl text-[#3A3333]">
                  {product.name}
                </h3>

                <p className="mt-2 text-[#B37D87]">
                  KES {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
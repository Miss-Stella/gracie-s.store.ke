"use client";

import Image from "next/image";
import { toast } from "sonner";

import Container from "../ui/Container";
import { useCartStore } from "@/store/cartStore";

type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="bg-[#FFF8F7] py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Product Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-lg md:rounded-[36px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Product Information */}
          <div>

            <p className="font-accent text-2xl text-[#B88A93] md:text-3xl">
              Gracie's Collection
            </p>

            <h1 className="mt-3 font-heading text-4xl leading-tight text-[#3A3333] md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold text-[#B37D87] md:text-3xl">
              KES {product.price}
            </p>

            <p className="mt-8 text-base leading-8 text-[#6E6262] md:text-lg">
              {product.description}
            </p>

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
                });
              }}
              className="mt-10 w-full rounded-full bg-[#D7A8B1] py-4 text-white transition duration-300 hover:bg-[#C996A0] md:w-fit md:px-12"
            >
              Add to Cart
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}
"use client";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Container from "../ui/Container";

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
    <section className="bg-[#FFF8F7] py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">

          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">

            <p className="font-accent text-3xl text-[#B88A93]">
              Gracie's Collection
            </p>

            <h1 className="mt-3 font-heading text-6xl text-[#3A3333]">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-medium text-[#B37D87]">
              KES {product.price}
            </p>

            <p className="mt-8 leading-8 text-[#6E6262]">
              {product.description}
            </p>

            <button
                onClick={() =>
                 addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                 })
                 }
                 className="mt-10 w-fit rounded-full bg-[#D7A8B1] px-10 py-4 text-white transition duration-300 hover:bg-[#C996A0]"
                 >Add to Cart
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import { useCartStore } from "@/store/cartStore";

export default function Cart() {
  const {
    cart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-[#FFF8F7] py-16 md:py-24">
      <Container>

        {/* Heading */}
        <div className="text-center md:text-left">

          <h1 className="font-heading text-4xl text-[#3A3333] md:text-6xl">
            Shopping Bag
          </h1>

          <p className="mt-3 text-[#6E6262]">
            {cart.length} item(s)
          </p>

        </div>

        {cart.length === 0 ? (

          <div className="mt-20 text-center">

            <p className="text-lg text-[#6E6262] md:text-xl">
              Your shopping bag is empty.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block rounded-full bg-[#D7A8B1] px-8 py-4 text-white transition hover:bg-[#C996A0]"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="mt-12 space-y-8">

            {cart.map((item) => (

              <div
                key={item.id}
                className="rounded-[30px] bg-white p-6 shadow-sm md:grid md:grid-cols-[150px_1fr_auto] md:items-center md:gap-8 md:p-8"
              >

                {/* Image */}
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl md:mx-0 md:w-full">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Product Details */}
                <div className="mt-6 text-center md:mt-0 md:text-left">

                  <h2 className="font-heading text-2xl text-[#3A3333] md:text-3xl">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-lg text-[#B37D87]">
                    KES {item.price}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4D5D7] transition hover:bg-[#F8EEEC]"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4D5D7] transition hover:bg-[#F8EEEC]"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Price */}
                <div className="mt-8 text-center md:mt-0 md:text-right">

                  <p className="text-xl font-semibold text-[#3A3333]">
                    KES {item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-5 text-sm text-[#D37C92] transition hover:text-[#B75E75]"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            {/* Summary */}
            <div className="rounded-[30px] bg-white p-6 shadow-sm md:p-10">

              <div className="flex justify-between">
                <span className="text-[#6E6262]">
                  Subtotal
                </span>

                <span className="font-medium">
                  KES {subtotal}
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-[#6E6262]">
                  Delivery
                </span>

                <span className="text-right text-sm text-[#6E6262]">
                  Calculated at checkout
                </span>
              </div>

              <div className="mt-8 flex justify-between border-t border-[#EFE4E6] pt-8">

                <span className="font-heading text-2xl text-[#3A3333]">
                  Total
                </span>

                <span className="font-heading text-2xl text-[#3A3333]">
                  KES {subtotal}
                </span>

              </div>

              <Link href="/checkout">

                <button className="rounded-full bg-[#D7A8B1] transition-all duration-300 hover:scale-[1.03] hover:bg-[#C996A0] active:scale-95">
                  Proceed to Checkout
                </button>

              </Link>

            </div>

          </div>

        )}

      </Container>
    </section>
  );
}
"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

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
    <section className="bg-[#FFF8F7] py-24">
      <Container>

        <h1 className="font-heading text-6xl text-[#3A3333]">
          Shopping Bag
        </h1>

        <p className="mt-3 text-[#6E6262]">
          {cart.length} item(s)
        </p>

        {cart.length === 0 ? (
          <div className="mt-20 text-center">

            <p className="text-xl text-[#6E6262]">
              Your shopping bag is empty.
            </p>

          </div>
        ) : (
          <div className="mt-16 space-y-8">

            {cart.map((item) => (
              <div
                key={item.id}
                className="grid items-center gap-8 rounded-[30px] bg-white p-8 shadow-sm md:grid-cols-[150px_1fr_auto]"
              >

                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>

                  <h2 className="font-heading text-3xl text-[#3A3333]">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-[#B37D87]">
                    KES {item.price}
                  </p>

                  <div className="mt-6 flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-10 w-10 rounded-full border"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-10 w-10 rounded-full border"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="text-right">

                  <p className="font-medium text-[#3A3333]">
                    KES {item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-6 text-sm text-red-500"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

            <div className="rounded-[30px] bg-white p-10 shadow-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>KES {subtotal}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span>Delivery</span>

                <span>Calculated at checkout</span>
              </div>

              <div className="mt-8 flex justify-between border-t pt-8 text-2xl font-heading">

                <span>Total</span>

                <span>KES {subtotal}</span>

              </div>

              <Link href="/checkout">
               <button className="mt-10 w-full rounded-full bg-[#D7A8B1] py-4 text-white transition hover:bg-[#C996A0]">
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
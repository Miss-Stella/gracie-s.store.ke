"use client";
import { useState } from "react";
import Container from "../ui/Container";
import { useCartStore } from "@/store/cartStore";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);

  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    notes: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
  if (!customer.fullName.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!customer.phone.trim()) {
    alert("Please enter your phone number.");
    return;
  }

  if (!customer.location.trim()) {
    alert("Please enter your delivery location.");
    return;
  }

  const orderItems = cart
    .map(
      (item) =>
        `• ${item.name} ×${item.quantity} - KES ${
          item.price * item.quantity
        }`
    )
    .join("\n");

  const message = `Hello Gracie's!

I'd like to place an order.

Name:
${customer.fullName}

Phone:
${customer.phone}

Delivery:
${customer.location}

Order

${orderItems}

Total:
KES ${subtotal}

Notes:
${customer.notes || "None"}

Thank you`;

  const whatsappNumber = "254732529565";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};

  return (
    <section className="bg-blush-50 py-24">
      <Container>

        <div className="mb-16 text-center">
          <p className="font-accent text-3xl text-[#B88A93]">
            Checkout
          </p>

          <h1 className="mt-3 font-heading text-6xl text-heading">
            Complete Your Order
          </h1>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Customer Details */}

          <div className="rounded-4x1 bg-white p-10 shadow-sm">

            <h2 className="font-heading text-3xl text-heading">
              Customer Details
            </h2>

            <div className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                value={customer.fullName}
                onChange={(e) =>
                    setCustomer({
                        ...customer,
                        fullName: e.target.value,
                    })
                }
                className="w-full rounded-x1 border border-[#E8DADA] p-4 outline-none focus:border-primary"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={(e) =>
                    setCustomer({
                        ...customer,
                        phone: e.target.value,
                    })
                }
                className="w-full rounded-xl border border-[#E8DADA] p-4 outline-none focus:border-primary"
              />

              <input
                type="email"
                placeholder="Email (Optional)"
                value={customer.email}
                onChange={(e) =>
                    setCustomer({
                        ...customer,
                        email: e.target.value,
                    })
                }
                className="w-full rounded-xl border border-[#E8DADA] p-4 outline-none focus:border-primary"
              />

              <textarea
                placeholder="Delivery Location"
                rows={4}
                value={customer.location}
                onChange={(e) =>
                    setCustomer({
                        ...customer,
                        location: e.target.value,
                    })
                }
                className="w-full rounded-xl border border-[#E8DADA] p-4 outline-none focus:border-primary"
              />

              <textarea
                placeholder="Order Notes (Optional)"
                rows={3}
                value={customer.notes}
                onChange={(e) =>
                    setCustomer({
                        ...customer,
                        notes: e.target.value,
                    })
                }
                className="w-full rounded-xl border border-[#E8DADA] p-4 outline-none focus:border-primary"
              />

            </div>

          </div>

          {/* Order Summary */}

          <div className="rounded-4x1 bg-white p-10 shadow-sm">

            <h2 className="font-heading text-3xl text-heading">
              Order Summary
            </h2>

            <div className="mt-8 space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-4"
                >
                  <div>
                    <p className="font-medium text-heading">
                      {item.name}
                    </p>

                    <p className="text-sm text-body">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-[#B37D87]">
                    KES {item.price * item.quantity}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-10 border-t pt-6">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>KES {subtotal}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span>Delivery</span>
                <span>Calculated later</span>
              </div>

              <div className="mt-6 flex justify-between text-2xl font-heading">
                <span>Total</span>
                <span>KES {subtotal}</span>
              </div>

              <button 
               onClick={handlePlaceOrder}
               className="mt-10 w-full rounded-full bg-primary py-4 text-white transition hover:bg-primary-hover">
                Place Order
              </button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
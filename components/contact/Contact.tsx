import Container from "../ui/Container";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#FFF8F7] py-24">
      <Container>

        {/* Hero */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-accent text-3xl text-[#B88A93]">
            We'd Love to Hear From You
          </p>

          <h1 className="mt-4 font-heading text-6xl text-[#3A3333]">
            Let's Connect
          </h1>

          <p className="mt-8 text-lg leading-8 text-[#6E6262]">
            Whether you're placing an order, asking a question,
            or simply saying hello, we're always happy to hear from you.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* WhatsApp */}

          <a
            href="https://wa.me/254111201719"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[32px] bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaWhatsapp
              className="mx-auto text-[#D7A8B1]"
              size={42}
            />

            <h3 className="mt-6 font-heading text-3xl text-[#3A3333]">
              WhatsApp
            </h3>

            <p className="mt-4 leading-8 text-[#6E6262]">
              Reach us directly for orders and quick responses.
            </p>

          </a>

          {/* Instagram */}

          <a
            href="https://instagram.com/gracies_store.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[32px] bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaInstagram
              className="mx-auto text-[#D7A8B1]"
              size={42}
            />

            <h3 className="mt-6 font-heading text-3xl text-[#3A3333]">
              Instagram
            </h3>

            <p className="mt-4 leading-8 text-[#6E6262]">
              Discover our latest creations and send us a DM.
            </p>

          </a>

          {/* Email */}

          <a
            href="mailto:gracies.store.ke@gmail.com"
            className="rounded-[32px] bg-white p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FaEnvelope
              className="mx-auto text-[#D7A8B1]"
              size={42}
            />

            <h3 className="mt-6 font-heading text-3xl text-[#3A3333]">
              Email
            </h3>

            <p className="mt-4 leading-8 text-[#6E6262]">
              Prefer email? We'd be delighted to hear from you.
            </p>

          </a>

        </div>

      </Container>
    </section>
  );
}
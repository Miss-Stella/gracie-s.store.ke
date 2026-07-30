import Image from "next/image";
import Container from "../ui/Container";

const gallery = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="font-accent text-2xl text-[#B88A93] md:text-3xl">
            Gallery
          </p>

          <h2 className="mt-3 font-heading text-3xl leading-tight text-[#3A3333] sm:text-4xl md:text-5xl">
            Moments Woven with Grace
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-7 text-[#6E6262] md:px-0 md:text-lg">
            A glimpse into the beauty, craftsmanship and elegance behind every
            handmade creation.
          </p>

        </div>

        {/* Images */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-[28px] sm:h-72 md:h-80 lg:h-[420px]"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent transition duration-500 group-hover:from-black/45" />

              {/* Hover Text */}
              <div className="absolute bottom-6 left-6 hidden translate-y-4 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:block">

                <p className="font-accent text-2xl">
                  Gracie's
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.25em]">
                  Handmade Elegance
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
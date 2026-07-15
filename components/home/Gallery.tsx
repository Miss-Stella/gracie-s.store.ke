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
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <p className="font-accent text-3xl text-[#B88A93]">
            Gallery
          </p>

          <h2 className="mt-3 font-heading text-5xl text-[#3A3333]">
            A Peek into Gracie's
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#6E6262]">
            Every stitch is a highlight. Explore some of our favourite handcrafted
            moments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-[30px]"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "../ui/Container";

const features = [
  {
    title: "Handmade with Love",
    description:
      "Every piece is carefully crocheted by hand, making each scrunchie beautifully unique.",
  },
  {
    title: "Soft Premium Yarn",
    description:
      "Crafted using soft, comfortable yarn that's gentle on your hair and made to last.",
  },
  {
    title: "Gracefully Chic",
    description:
      "Designed to complement both everyday outfits and special occasions with timeless elegance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FDF5F4] py-24">
      <Container>
        <div className="text-center">
          <p className="font-accent text-3xl text-[#B88A93]">
            Why Gracie's
          </p>

          <h2 className="mt-3 font-heading text-5xl text-[#3A3333]">
            Crafted for Everyday Elegance
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#6E6262]">
            Thoughtfully handmade accessories that combine comfort,
            craftsmanship, and timeless style.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[30px] bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="font-heading text-3xl text-[#3A3333]">
                {feature.title}
              </h3>

              <div className="mx-auto my-5 h-[2px] w-12 bg-[#D7A8B1]" />

              <p className="leading-7 text-[#6E6262]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
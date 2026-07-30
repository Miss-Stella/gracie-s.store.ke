import Container from "../ui/Container";

const features = [
  {
    title: "Handcrafted with Care",
    description:
      "Every piece is lovingly crocheted by hand, making each creation beautifully unique and made with attention to every detail.",
  },
  {
    title: "Made to Last",
    description:
      "We use soft, high-quality yarn selected for comfort, durability and everyday wear without compromising elegance.",
  },
  {
    title: "Designed for Every Occasion",
    description:
      "Whether you're dressing up or keeping it casual, Gracie's accessories add a graceful finishing touch to every outfit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FDF5F4] py-16 md:py-24">
      <Container>

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="font-accent text-2xl text-[#B88A93] md:text-3xl">
            Why Gracie's
          </p>

          <h2 className="mt-3 font-heading text-3xl leading-tight text-[#3A3333] sm:text-4xl md:text-5xl">
            Crafted for Everyday Elegance
          </h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-7 text-[#6E6262] md:px-0 md:text-lg">
            Beautifully handcrafted accessories created with comfort,
            craftsmanship and timeless elegance in mind.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[28px] bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10"
            >

              <h3 className="font-heading text-2xl leading-tight text-[#3A3333] md:text-3xl">
                {feature.title}
              </h3>

              <div className="mx-auto my-5 h-[2px] w-14 rounded-full bg-[#D7A8B1]" />

              <p className="text-[15px] leading-7 text-[#6E6262] md:text-base">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
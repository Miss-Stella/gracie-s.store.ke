import Container from "../ui/Container";

export default function About() {
  return (
    <section className="bg-blush-50 py-24">
      <Container>

        {/* Hero */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-accent text-3xl text-[#B88A93]">
            Define Your Chic
          </p>

          <h1 className="mt-4 font-heading text-6xl text-heading">
            Behind Every Stitch
            <br />
            Is a Story.
          </h1>

          <p className="mt-8 text-lg leading-8 text-body">
            Handcrafted accessories inspired to accentuate the simplicity,
            elegance, and beauty found in everyday moments.
          </p>

        </div>

        {/* Our Story */}

        <div className="mx-auto mt-24 max-w-4xl">

          <h2 className="font-heading text-5xl text-heading">
            Our Story
          </h2>

          <div className="mt-8 space-y-8 text-lg leading-9 text-body">

            <p>
              Gracie's began with something beautifully simple;
              a love for creating handcrafted pieces that adds pattern
              to everyday life while balancing color and chic.
            </p>

            <p>
              Inspired by love and art, this brand was born
              from the desire to celebrate elegance through
              handcrafted accessories. Behind each piece is
              patience, one stitch at a time, with careful
              attention to detail and quality.
            </p>

            <p>
              What started as a creative passion is becoming a
              growing collection of timeless pieces designed to be
              worn, gifted, and treasured.
            </p>

          </div>

        </div>

        {/* Why Crochet */}

        <div className="mx-auto mt-24 max-w-4xl">

          <h2 className="font-heading text-5xl text-heading">
            Why Crochet?
          </h2>

          <p className="mt-8 text-lg leading-9 text-body">

            Crochet carries a warmth that machines simply cannot
            replicate. Every loop is created by hand, making each
            accessory unique in its own subtle way. Those tiny
            differences are part of what makes every Gracie's
            creation special.

          </p>

        </div>

        {/* Promise */}

        <div className="mt-24">

          <h2 className="text-center font-heading text-5xl text-heading">
            Our Promise
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-4x1 bg-white p-10 shadow-sm">

              <h3 className="font-heading text-3xl text-heading">
                Handcrafted
              </h3>

              <p className="mt-5 leading-8 text-body">
                Every accessory is crocheted by hand with patience,
                precision, and thoughtful attention to detail.
              </p>

            </div>

            <div className="rounded-4x1 bg-white p-10 shadow-sm">

              <h3 className="font-heading text-3xl text-heading">
                Thoughtfully Made
              </h3>

              <p className="mt-5 leading-8 text-body">
                We carefully select colours, textures, and yarns
                that feel timeless, elegant, and comfortable.
              </p>

            </div>

            <div className="rounded-4x1 bg-white p-10 shadow-sm">

              <h3 className="font-heading text-3xl text-heading">
                Made with Care
              </h3>

              <p className="mt-5 leading-8 text-body">
                Every order is beautifully prepared because every
                customer deserves a memorable experience.
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
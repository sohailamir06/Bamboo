import img1 from "../assets/productservice/115-768x616.jpg";

const BambooBringSection = () => {
  return (
    <section className="relative py-20 px-6">

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-6xl">
          
          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium md:leading-[2.5rem] lg:leading-[3rem] tracking-tight mb-6">
            I bring bamboo directly from China to our home in the Mühlviertel region –{" "}<br />
            <span className="italic text-italic-accent">
              Andi from Bambuam
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-sm text-white font-medium leading-relaxed ">
            <p className="py-5">
              It all started with the search for a terrace that was durable, natural, and sustainable. Like many others, I was looking for the "jack-of-all-trades" – a terrace that could do everything.
            </p>

            <p className="py-5">
              It's not that simple, but bamboo fulfills many of these criteria: robust, sustainable, splinter-free, and beautiful.
              My own needs and many hours of research led me down this path – and ultimately to my company, Bambuam .
            </p>

            <p className="py-5">
              Today I import high-quality bamboo decking directly from China to Austria – without intermediaries, but with genuine conviction. From my own experience, I know what really matters – and I will support you honestly and personally with your project.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}

        {/* Left tall image */}
        <div className="rounded-md">
          <img
            src={img1}
            className="w-full h-[460px] object-cover hover:scale-105 transition duration-700"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BambooBringSection;
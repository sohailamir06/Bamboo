import img from "../assets/productservice/110.jpg";

export default function TerraceSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_0.9fr] gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Plan your terrace yourself –
            <br />
            <span className="italic text-italic-accent">
              easy & straightforward
            </span>
          </h2>

          <p className="mt-12 text-gray-300 text-sm leading-relaxed max-w-md">
            With our online planning tool, you can easily design your own patio and gather initial ideas.
            This way, you'll have a clear picture in your mind before you even start.
          </p>

          <a href="#" className="inline-block mt-4 text-blue-400 text-md underline">
            Get started now
          </a>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8 text-sm text-gray-200">
            {[
              "Plan it yourself",
              "Simple & intuitive",
              "Free & no obligation",
              "Perfectly tailored to your project",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 border border-gray-500 rounded flex items-center justify-center text-xs">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group flex justify-end">
          <img
            src={img}
            alt="Terrace"
            className="rounded-lg w-[520px] h-[420px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
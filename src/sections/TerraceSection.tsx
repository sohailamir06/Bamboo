import img from "../assets/productservice/110.jpg";

const TerraceSection = () => {
  const features = [
    "Plan it yourself",
    "Simple & intuitive",
    "Free & no obligation",
    "Perfectly tailored to your project",
  ];

  return (
    <section className="w-full section-padding bg-gradient-bambuam">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="heading-section mb-8">
              Plan your terrace yourself –
              <br />
              <span className="text-italic-accent">
                easy & straightforward
              </span>
            </h2>

            <p className="text-bambuam-text-secondary body-text max-w-md mb-4">
              With our online planning tool, you can easily design your own patio and gather initial ideas.
              This way, you'll have a clear picture in your mind before you even start.
            </p>

            <a
              href="https://terrassenplaner.terrassen-montagesysteme.de/#/?cid=501"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-bambuam-sage hover:text-bambuam-sage-light underline underline-offset-4 transition-colors"
            >
              Get started now
            </a>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-bambuam-sage rounded flex items-center justify-center text-bambuam-sage text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-bambuam-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Terrace planning tool"
              className="rounded-lg w-full max-w-[500px] h-[350px] lg:h-[400px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraceSection;
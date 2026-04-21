import img1 from "../../../assets/images/132.jpg";
import img2 from "../../../assets/images/132.jpg";
import img3 from "../../../assets/images/133.jpg";
import img4 from "../../../assets/images/134.jpg";
import { cn } from "../../../lib/utils";

const RealRelationships = () => {
  const images = [
    { src: img1, alt: "Bamboo pool deck" },
    { src: img2, alt: "Modern terrace with pergola" },
    { src: img3, alt: "Bamboo decking detail" },
    { src: img4, alt: "Wooden terrace with furniture" },
  ];

  return (
    <section className="bg-gradient-bambuam py-24 overflow-hidden">
      <div className="container-site">
        {/* Header Section */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="heading-section text-white mb-6">
            Personally connected – with people, not just{" "}
            <span className="text-italic-accent">suppliers</span>
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 mb-20 scroll-animate" style={{ transitionDelay: '200ms' }}>
          {/* Left Title */}
          <div>
            <h3 className="text-4xl font-light text-bambuam-sage leading-tight italic">
              Real relationships
            </h3>
            <div className="w-12 h-1 bg-bambuam-sage mt-6 rounded-full opacity-50" />
          </div>

          {/* Right Description */}
          <div className="text-bambuam-text-secondary body-text-lg leading-relaxed">
            <p>
              What began as a purely business relationship has blossomed into a genuine friendship over the years. I work closely with the production facility in China – in regular communication, as equals, and with a great deal of trust. We learn from each other, develop together, and have created a true win-win situation that benefits both sides. Because I've been there myself, I know the processes inside and out – and the people behind them. This connection is the foundation that allows me to offer you bamboo decking of a quality I stand behind 100%. No anonymous business, no detours – just genuine responsibility, from the first contact to the last board.
            </p>
          </div>
        </div>

        {/* Image Mosaic Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-animate" style={{ transitionDelay: '400ms' }}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "relative group overflow-hidden rounded-2xl shadow-xl border border-white/5",
                index % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealRelationships;

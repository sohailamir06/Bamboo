import img1 from "../assets/projectimages/131.jpg";
import img2 from "../assets/projectimages/132.jpg";
import img3 from "../assets/projectimages/133.jpg";
import img4 from "../assets/projectimages/134.jpg";
import { ArrowRight } from "lucide-react";

export default function BambooFencingSection() {
  const images = [
    { src: img1, alt: "Bamboo pool deck" },
    { src: img2, alt: "Modern terrace with pergola" },
    { src: img3, alt: "Bamboo decking detail" },
    { src: img4, alt: "Wooden terrace with furniture" },
  ];

  return (
    <section 
      className="w-full py-20 px-6 md:px-16" 
    >
      <div className="max-w-7xl mx-auto">

        {/* Content Section */}
        <div className="grid md:grid-cols-[280px_1fr] gap-12 mb-12">
          {/* Left Title */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#8a9a7f]">
              Fencing systems – flexible, durable and stylish
            </h3>
          </div>

          {/* Right Description */}
          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our fence systems can be customized to your exact specifications – in height, shape, and infill. Whether you choose bamboo, wood, aluminum, glass, or even solar panels, the system adapts to your needs and blends harmoniously into any garden. All components come from a German quality manufacturer, are weather-resistant, low-maintenance, and easy to install – ideal for those who like to do it themselves. The combination of function and aesthetics creates privacy with character – durable, modern, and natural. And for a truly cohesive look, combine it with my bamboo decking – for a unified appearance from the fence to the patio.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 bg-[#4a6741] hover:bg-[#5a7751] text-white px-6 py-3 rounded-md font-medium text-sm transition-all duration-200 group">
            Enquire now
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

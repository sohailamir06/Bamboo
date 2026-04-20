import img1 from "../assets/Projectimages/107.jpg";
import img2 from "../assets/Projectimages/132.jpg";
import img3 from "../assets/Projectimages/133.jpg";
import img4 from "../assets/Projectimages/134.jpg";
import { ArrowRight } from "lucide-react";

export default function BambooSubstructuresSection() {
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
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Substructures{" "}
            <span className="italic text-[#8a9a7f]">– the stable base for every terrace</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-5xl mx-auto">
            A beautiful patio depends on the right surface – and bamboo is the perfect choice. Bamboo decking is extremely robust, slip-resistant, splinter-free, and pleasantly warm to the touch – ideal for barefoot outdoor spaces. It's weather-resistant, dimensionally stable, and durable – perfectly suited to the Austrian climate with its frost, snow, and summer heat. Whether your style is modern or natural, bamboo blends harmoniously into any garden design. I'll help you choose the right decking and show you what's important when it comes to installation and maintenance.
          </p>
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

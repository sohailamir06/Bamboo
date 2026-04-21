import img1 from "../assets/projectimages/132.jpg";
import img2 from "../assets/projectimages/132.jpg";
import img3 from "../assets/projectimages/133.jpg";
import img4 from "../assets/projectimages/134.jpg";
import { ArrowRight } from "lucide-react";

export default function BambooFloorsSection() {
  const images = [
    { src: img1, alt: "Bamboo pool deck" },
    { src: img2, alt: "Modern terrace with pergola" },
    { src: img3, alt: "Bamboo decking detail" },
    { src: img4, alt: "Wooden terrace with furniture" },
  ];

  return (
    <section 
      className="w-full py-20 px-6 md:px-16" 
      style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            You can find all of that{" "}
            <span className="italic text-[#8a9a7f]">at Bambuam.</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Terrace decking, substructures, pool covers, fence systems – all made from high-quality materials and perfectly coordinated.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-[280px_1fr] gap-12 mb-12">
          {/* Left Title */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#8a9a7f]">
              Bamboo floors
            </h3>
          </div>

          {/* Right Description */}
          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bamboo is the perfect choice for your patio flooring: durable, resilient, and pleasant to walk on barefoot. Our bamboo decking impresses not only with its elegant, natural look but also with its exceptional stability – ideal for the Austrian climate with its harsh winters and hot summers. Whether a modern patio, a cozy seating area in the garden, or an elegant balcony – with our bamboo flooring, you bring a piece of nature right to your home. Splinter-free, easy to care for, and sustainable – for many years of enjoyment outdoors.
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

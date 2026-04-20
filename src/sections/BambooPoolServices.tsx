import img1 from "../assets/Projectimages/107.jpg";
import img2 from "../assets/Projectimages/132.jpg";
import img3 from "../assets/Projectimages/133.jpg";
import img4 from "../assets/Projectimages/134.jpg";
import { ArrowRight } from "lucide-react";

export default function BambooPoolServices() {
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
            Pool covers{" "}
            <span className="italic text-[#8a9a7f]">– terrace and protection in one</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-5xl mx-auto">
            Our pool covers are more than just practical covers – they transform your pool area into a walkable, fully functional terrace. Especially in smaller gardens, this is a clever solution for making the most of the available space. The systems are made of high-quality aluminum, are statically tested, and suitable for spans of up to 10 meters – made in Germany. You receive a well-designed construction system that you can assemble yourself – safe, stable, and durable. Covered with my bamboo decking, it creates a natural, visually appealing surface that blends perfectly into your garden. Of course, you can also use other decking materials – the system is flexible and suitable for many variations.
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

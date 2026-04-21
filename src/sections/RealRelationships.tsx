import img1 from "../assets/images/132.jpg";
import img2 from "../assets/images/132.jpg";
import img3 from "../assets/images/133.jpg";
import img4 from "../assets/images/134.jpg";
import img5 from "../assets/images/132.jpg";
import img6 from "../assets/images/132.jpg";
import img7 from "../assets/images/133.jpg";
import img8 from "../assets/images/134.jpg";

import { ArrowRight } from "lucide-react";

export default function RealRelationships() {
  const images = [
    { src: img1, alt: "Bamboo pool deck" },
    { src: img2, alt: "Modern terrace with pergola" },
    { src: img3, alt: "Bamboo decking detail" },
    { src: img4, alt: "Wooden terrace with furniture" },
    { src: img5, alt: "Bamboo pool deck" },
    { src: img6, alt: "Modern terrace with pergola" },
    { src: img7, alt: "Bamboo decking detail" },
    { src: img8, alt: "Wooden terrace with furniture" },
  ];

  return (
    <section 
      className="w-full py-20 px-6 md:px-16" 
      style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Personally connected – with people, not just{" "}
            <span className="italic text-[#8a9a7f]">suppliers</span>
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-[280px_1fr] gap-12 mb-12">
          {/* Left Title */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#8a9a7f]">
              Real
                relationships
            </h3>
          </div>

          {/* Right Description */}
          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              What began as a purely business relationship has blossomed into a genuine friendship over the years. I work closely with the production facility in China – in regular communication, as equals, and with a great deal of trust. We learn from each other, develop together, and have created a true win-win situation that benefits both sides. Because I've been there myself, I know the processes inside and out – and the people behind them. This connection is the foundation that allows me to offer you bamboo decking of a quality I stand behind 100%. No anonymous business, no detours – just genuine responsibility, from the first contact to the last board.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 auto-rows-[200px]">
          {/* Image 1: Top Left (Large Square-ish) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg">
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Image 2: Middle Top (Wide) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg">
            <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Image 3: Far Right (Tall) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg">
            <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Image 4: Middle Center (Wide) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg">
            <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Image 5: Bottom Left (Wide) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg">
            <img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Image 6: Bottom Middle (Tall/Narrow) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg">
            <img src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Image 7: Bottom Right (Tall) */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-lg">
            <img src={images[6].src} alt={images[6].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}

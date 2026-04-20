import React from 'react';
import { ArrowRight } from 'lucide-react';

// Replace these with your actual local image paths
import imgLarge from "../assets/image-a.jpg"; // The big deck image
import imgTopRight from "../assets/image-b.jpg"; // The pool/fenced area
import imgBottomLeft from "../assets/image-c.jpg"; // The modern garden shed
import imgBottomRight from "../assets/image-d.jpg"; // The outdoor seating area

const SampleTerraceSection = () => {
  return (
    <section className="bg-[#111111] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="max-w-xl">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-8">
            Experience bamboo on a sample terrace
            <span className="block mt-2 italic text-white/90">, as it really is.</span>
          </h2>

          <div className="space-y-6 text-[#b0b0b0] text-sm md:text-base leading-relaxed mb-10">
            <p>
              Want to know what bamboo really feels like? No problem! On my sample terrace in 
              Kaltenberg, you can experience it all firsthand: different bamboo decking boards, 
              various surface treatments, and even aged decking that has withstood wind and 
              weather for years. 
            </p>
            <p>
              You'll see not only the finished surfaces but also the substructure – for viewing, 
              touching, and comparing. And all this in a relaxed atmosphere, with honest advice 
              and a willingness to answer all your questions. 
            </p>
            <p>
              Come by – and get real inspiration for your own project!
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#4a6741] hover:bg-[#5a7a50] text-white px-8 py-3 rounded-md transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Enquire now!</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Column: Image Mosaic Gallery */}
        <div className="grid grid-cols-2 gap-4 h-[600px] relative">
          {/* Main Large Image (Left side of the gallery) */}
          <div className="col-span-1 row-span-1">
            <img 
              src={imgLarge} 
              alt="Bamboo Terrace close-up" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Top Right Small Image */}
          <div className="col-span-1 h-[180px]">
            <img 
              src={imgTopRight} 
              alt="Bamboo Terrace overview" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Bottom Right Two Images Stacked */}
             {/* Note: The screenshot shows a 2nd col split into two. 
                 The "shed" image and the "lounger" image. */}
          <div className="h-[180px]">
             <img 
               src={imgBottomLeft} 
               alt="Modern bamboo shed" 
               className="w-full h-full object-cover rounded-sm shadow-lg"
             />
          </div>
          <div className="w-[48%] h-[56%] absolute top-[12.3rem] left-[52%]">
              <img 
                src={imgBottomRight} 
                alt="Bamboo lounge area" 
                className="w-full h-full object-cover rounded-sm shadow-lg"
              />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SampleTerraceSection;
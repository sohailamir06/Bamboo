import React from 'react';
import FixedBgImage from "../assets/productservice/service-page-banner-1-1536x775.jpg";
import profileImage from "../assets/productservice/image.jpg";
// Note: You can use Lucide-React or Heroicons for the icons. 
// I'll use simple spans for the "hand" icon seen in your screenshot.
import { Hand } from 'lucide-react'; 

export default function AboutusFixedBgSection() {
  const features = [
    { label: "Fast-growing", detail: "Grows up to 30 meters per year – without any replanting." },
    { label: "Weatherproof", detail: "Easily withstands frost, rain and temperature fluctuations." },
    { label: "Durable & dimensionally stable", detail: "Remains robust and beautiful even after years." },
    { label: "Natural & environmentally friendly", detail: "No trees need to be felled – bamboo constantly regenerates." },
    { label: "Easy to maintain", detail: "Sweep, wash, done – oil only if protection & color are desired." },
    { label: "Pleasant surface", detail: "Smooth, warm and high-quality – ideal for relaxing hours outdoors." },
    { label: "Timeless design", detail: "Adapts to any environment – modern, natural, stylish." },
  ];
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-[900px] flex items-center"
      style={{
        backgroundImage:
          `url(${FixedBgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
        {/* Left Content Column */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            That's what fascinates me about <span className="italic font-light text-gray-400">bamboo</span>
          </h2>

          <div className="space-y-4 text-sm leading-relaxed max-w-xl">
            <p>
              Bamboo has a special energy for me – anyone who has ever stood in a bamboo forest 
              immediately understands what I mean. As a high-quality decking material, it combines 
              qualities that no other natural product can match:
            </p>
            <p>
              It grows incredibly fast, is sustainable, durable, pleasant underfoot, beautiful, and easy to 
              care for. For me, bamboo is simply a dream – honest, strong, and natural all at once.
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-5">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-sm">
                <span className="mt-1 text-gray-400">
                   <Hand size={16} strokeWidth={1.5} />
                </span>
                <p>
                  <span className="font-bold text-white">{item.label}:</span> {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Column */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[65%] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={profileImage} 
              alt="Close up of golden bamboo stalks" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
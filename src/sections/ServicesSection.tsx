import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import backgroundImage from "../assets/banner-image-b.jpg";

const ServicesSection = () => {

  const services = [
    {
      title: "Advice",
      desc: "Personal, honest, and on equal terms – I'll help you find the best solution for your bamboo terrace. With practical tips and extensive experience, I'll guide you so you can happily implement your project yourself.",
    },
    {
      title: "Planning",
      desc: "Tailored to your individual wishes and circumstances – for a terrace that suits you, your style, and your lifestyle. With thoughtful planning, building your own terrace becomes an enjoyable experience.",
    },
    {
      title: "Sale",
      desc: "Top quality at fair prices – sustainable bamboo decking without intermediaries, directly from Austria. Tested materials you can rely on.",
    },
    {
      title: "Delivery",
      desc: "Reliable, fast and uncomplicated – so your project can start stress-free. Everything you need comes directly to your home.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 h-[120%] -top-[10%]"
        >
          <img
            src={backgroundImage}
            alt="bamboo"
            className="w-full h-full object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-80 px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our <span className="italic text-italic-accent">services</span>
          </h2>

          <p className="text-white font-medium max-w-6xl mx-auto leading-relaxed text-sm md:text-base">
            Our services – all from a single source! From the initial idea to the finished terrace: At Bambuam, you not only get high-quality materials, but also honest support and personal guidance. With experience, expertise, and enthusiasm, I'll help you make your project a reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">

          {services.map((item, i) => (
            <div
              key={i}
              className="p-8 border-b border-white lg:border-b-0 lg:border-r last:border-r-0"
            >
              <h3 className="text-xl text-white font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-white text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16 flex justify-center items-center">
          <button className="bg-[#415540]/85 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-[#415540] flex items-center transition">
            Inquire now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
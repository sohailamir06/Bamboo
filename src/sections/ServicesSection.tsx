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
    <section className="relative section-padding-lg overflow-hidden text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="bamboo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Our <span className="text-italic-accent">services</span>
          </h2>

          <p className="text-white/90 max-w-4xl mx-auto body-text-lg">
            Our services – all from a single source! From the initial idea to the finished terrace: At Bambuam, you not only get high-quality materials, but also honest support and personal guidance. With experience, expertise, and enthusiasm, I'll help you make your project a reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <div
              key={i}
              className="p-6 lg:p-8 border-b border-white/20 lg:border-b-0 lg:border-r last:border-r-0 hover:bg-white/5 transition-colors duration-300"
            >
              <h3 className="text-xl text-white font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary group">
            Inquire now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
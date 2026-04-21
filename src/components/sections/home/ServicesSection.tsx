import { ArrowRight } from "lucide-react";
import { SERVICES_HOME_CONTENT } from "../../../data/home";
import { cn } from "../../../lib/utils";

const ServicesSection = () => {
  const { title, highlight, description, backgroundImage, services } = SERVICES_HOME_CONTENT;

  return (
    <section className="relative section-padding-lg overflow-hidden text-white">
      
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Bamboo background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site">

        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-section mb-6">
            {title} <span className="text-italic-accent">{highlight}</span>
          </h2>

          <p className="text-white/90 max-w-4xl mx-auto body-text-lg">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm bg-black/20 scroll-animate" style={{ transitionDelay: '200ms' }}>
          {services.map((item, i) => (
            <div
              key={i}
              className={cn(
                "p-8 border-white/10 transition-all duration-500 hover:bg-white/10 group",
                i < services.length - 1 && "md:border-r border-b lg:border-b-0",
                i === 1 && "lg:border-r",
                i === 2 && "md:border-r-0 lg:border-r"
              )}
            >
              <div className="w-12 h-12 bg-bambuam-green/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bambuam-green/40 transition-colors">
                <span className="text-bambuam-sage font-bold text-xl">0{i + 1}</span>
              </div>
              <h3 className="text-xl text-white font-semibold mb-4 group-hover:text-bambuam-sage transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-16 scroll-animate" style={{ transitionDelay: '400ms' }}>
          <button className="btn-primary group">
            Inquire now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

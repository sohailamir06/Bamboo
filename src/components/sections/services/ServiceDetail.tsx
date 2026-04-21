import { ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";

interface ServiceDetailProps {
  title: string;
  highlight?: string;
  subtitle: string;
  description: string;
  mainText: string;
  images: { src: string; alt: string }[];
  ctaText?: string;
  reverse?: boolean;
}

const ServiceDetail = ({
  title,
  highlight,
  subtitle,
  description,
  mainText,
  images,
  ctaText = "Enquire now",
  reverse = false,
}: ServiceDetailProps) => {
  return (
    <section className={cn("py-24", reverse ? "bg-bambuam-dark" : "bg-gradient-bambuam")}>
      <div className="container-site">
        {/* Header Section */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="heading-section text-white mb-6">
            {title}{" "}
            {highlight && <span className="text-italic-accent">{highlight}</span>}
          </h2>
          <p className="text-bambuam-text-secondary body-text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 mb-20 scroll-animate" style={{ transitionDelay: '200ms' }}>
          {/* Left Title */}
          <div>
            <h3 className="text-4xl font-light text-bambuam-sage leading-tight italic">
              {subtitle}
            </h3>
            <div className="w-12 h-1 bg-bambuam-sage mt-6 rounded-full opacity-50" />
          </div>

          {/* Right Description */}
          <div className="text-bambuam-text-secondary body-text-lg leading-relaxed">
            <p>{mainText}</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 scroll-animate" style={{ transitionDelay: '400ms' }}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-xl border border-white/5"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center scroll-animate" style={{ transitionDelay: '600ms' }}>
          <button className="btn-primary group px-10">
            {ctaText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

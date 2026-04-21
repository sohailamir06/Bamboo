import { cn } from "../../../lib/utils";

interface InfoSectionProps {
  title: string;
  highlight?: string;
  paragraphs: string[];
  image: string;
  reverse?: boolean;
  className?: string;
}

const InfoSection = ({
  title,
  highlight,
  paragraphs,
  image,
  reverse = false,
  className
}: InfoSectionProps) => {
  return (
    <section className={cn("section-padding overflow-hidden", className)}>
      <div className="container-site">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 items-center",
          reverse && "lg:direction-rtl"
        )}>
          {/* Content Column */}
          <div className={cn("scroll-animate", reverse && "lg:order-2")}>
            <h2 className="heading-section text-white mb-10 leading-tight">
              {title}{" "}
              {highlight && <span className="text-italic-accent block mt-2">{highlight}</span>}
            </h2>

            <div className="space-y-6 text-bambuam-text-secondary body-text-lg">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className={cn("scroll-animate", reverse && "lg:order-1")} style={{ transitionDelay: '300ms' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-bambuam-green/5 rounded-2xl blur-2xl -z-10 group-hover:bg-bambuam-green/10 transition-colors" />
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

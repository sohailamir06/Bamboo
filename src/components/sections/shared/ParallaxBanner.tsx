import { cn } from "../../../lib/utils";

interface ParallaxBannerProps {
  image: string;
  text: string;
  highlight?: string;
  className?: string;
}

const ParallaxBanner = ({
  image,
  text,
  highlight,
  className
}: ParallaxBannerProps) => {
  return (
    <section
      className={cn(
        "relative bg-fixed bg-center bg-cover min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden",
        className
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 container-site">
        <h2 className="text-white font-light leading-relaxed text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight max-w-5xl scroll-animate">
          {text}{' '}
          {highlight && <span className="text-italic-accent block mt-4">{highlight}</span>}
        </h2>
        <div className="w-20 h-1 bg-bambuam-sage mt-12 rounded-full scroll-animate" style={{ transitionDelay: '300ms' }} />
      </div>
    </section>
  );
};

export default ParallaxBanner;

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { HERO_SLIDES, HERO_FEATURES, SOCIAL_LINKS } from '../../../constants/hero';
import { cn } from '../../../lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    setIsLoaded(true);
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32">
        <div className="container-site">
          {/* Main Content - Dynamic per Slide */}
          <div className="mb-16 md:mb-24 max-w-4xl">
            <p
              className={cn(
                "text-white/90 text-base md:text-lg font-medium tracking-wide mb-4 transition-all duration-700",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {HERO_SLIDES[selectedIndex].subtitle}
            </p>
            <h1
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight transition-all duration-700",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '400ms' }}
            >
              {HERO_SLIDES[selectedIndex].title}
            </h1>
          </div>

          {/* Features with Numbers */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {HERO_FEATURES.map((feature, index) => (
                <div
                  key={feature.number}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-700",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {feature.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-bambuam-sage flex-shrink-0" />
                    <span className="text-white/90 text-sm md:text-base font-medium">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Right Side */}
      <div
        className={cn(
          "hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 transition-all duration-700",
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        )}
        style={{ transitionDelay: '1000ms' }}
      >
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/30 rounded flex items-center justify-center text-white/70 hover:text-white hover:border-bambuam-sage hover:bg-bambuam-sage/10 transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;

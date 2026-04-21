import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SERVICES_HERO_SLIDES, SERVICES_HERO_FEATURES } from '../../../constants/services';
import { SOCIAL_LINKS } from '../../../constants/hero';
import { cn } from '../../../lib/utils';

const ServicesHero = () => {
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
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SERVICES_HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32">
        <div className="container-site">
          {/* Main Content */}
          <div className="mb-20 max-w-4xl scroll-animate">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight transition-all duration-1000",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              {SERVICES_HERO_SLIDES[selectedIndex].title}
            </h1>
          </div>

          {/* Features Grid */}
          <div className="border-t border-white/20 pt-12 scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {SERVICES_HERO_FEATURES.map((feature, index) => (
                <div
                  key={feature.number}
                  className="flex items-center gap-6 group"
                >
                  <div className="relative">
                    <span className="text-5xl md:text-6xl font-bold text-white/10 transition-colors group-hover:text-white/20">
                      {feature.number}
                    </span>
                    <feature.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-bambuam-sage group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg uppercase tracking-wider">{feature.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Side */}
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

export default ServicesHero;

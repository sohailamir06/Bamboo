import { useEffect, useState, useCallback } from 'react';
import { Facebook, Youtube, Instagram, Package, Handshake, Leaf } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Sider1 from '../assets/slider-images/slider-image-a.jpg'
import Sider2 from '../assets/slider-images/slider-image-b.jpg'
import Sider3 from '../assets/slider-images/slider-image-c.jpg'

const slides = [
  {
    image: Sider1,
    alt: 'Bamboo forest',
    subtitle: 'Natural, robust and weatherproof – Bambuam brings bamboo decking to the Mühlviertel region and all of Austria.',
    title: 'Your sustainable bamboo terrace – durable \u0026 stylish!',
  },
  {
    image: Sider2,
    alt: 'Bamboo terrace',
    subtitle: 'Personal consultation',
    title: 'Personal, honest, competent – advice you deserve',
  },
  {
    image: Sider3,
    alt: 'Bamboo deck',
    subtitle: 'Sustainable living starts outdoors – discover the terrace that suits you!',
    title: 'Naturally beautiful – bamboo decking for all of Austria',
  },
];

const features = [
  {
    number: '01',
    text: 'Direct Sales in Austria',
    icon: Package,
  },
  {
    number: '02',
    text: 'Personal Consultation',
    icon: Handshake,
  },
  {
    number: '03',
    text: 'High-Quality Bamboo Decks',
    icon: Leaf,
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/bambuambambus/', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/@Bambuam/', label: 'Youtube' },
  { icon: Instagram, href: 'https://www.instagram.com/bambu_am/', label: 'Instagram' },
];

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
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
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
              className={`text-white/90 text-base md:text-lg font-medium tracking-wide mb-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {slides[selectedIndex].subtitle}
            </p>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {slides[selectedIndex].title}
            </h1>
          </div>

          {/* Features with Numbers */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
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
        className={`hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        {socialLinks.map((social) => (
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

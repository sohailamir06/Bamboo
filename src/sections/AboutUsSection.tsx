import { useEffect, useRef, useState, useCallback } from 'react';
import { Facebook, Youtube, Instagram, Package, Handshake, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Sider1 from '../assets/productservice/uber-uns-banner-1536x775.jpg';

const slides = [
  {
    image: Sider1,
    alt: 'Bamboo forest',
    title: 'Your sustainable bamboo terrace – durable stylish!',
  },
];

const AboutUsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    setContentKey((prev) => prev + 1);
  }, [emblaApi]);

  useEffect(() => {
    setIsLoaded(true);
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bambuambambus/#', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@Bambuam/#', label: 'Youtube' },
    { icon: Instagram, href: 'https://www.instagram.com/bambu_am/#', label: 'Instagram' },
  ];

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden ">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[0]?.image}
          alt={slides[0]?.alt}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32">
        <div className="max-w-8xl mx-80 px-4">
          {/* Main Content - Dynamic per Slide */}
          <div className="mb-28" key={contentKey}>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {slides[selectedIndex].title}
            </h1>
          </div>
        </div>
      </div>

      {/* Social Links - Right Side Fixed */}
      <div
        className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 transition-all duration-700 ${
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
            className="w-10 h-10 border border-white/30 rounded flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all duration-200 social-icon"
            aria-label={social.label}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;

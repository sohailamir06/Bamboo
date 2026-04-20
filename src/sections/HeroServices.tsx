import { useEffect, useRef, useState, useCallback } from 'react';
import { Facebook, Youtube, Instagram, Package, Handshake, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Sider1 from '../assets/productservice/service-page-banner-1-1536x775.jpg'
import Sider2 from '../assets/productservice/service-page-banner-2-1536x775.jpg'
import Sider3 from '../assets/productservice/service-page-banner-3-1536x775.jpg'

const slides = [
  {
    image: Sider1,
    alt: 'Bamboo forest',
    title: 'Everything\'s there – you just need to get started.',
  },
  {
    image: Sider2,
    alt: 'Bamboo terrace',
    title: 'Top quality - fairly priced',
  },
  {
    image: Sider3,
    alt: 'Bamboo deck',
    title: 'Always there for you – personal & uncomplicated',
  },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
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

  const features = [
    {
      number: '01',
      text: 'Direct Sales in Austria',
      icon: Package,
    },
    {
      number: '02',
      text: 'Best Price',
      icon: Handshake,
    },
    {
      number: '03',
      text: 'Personal Support',
      icon: Leaf,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bambuambambus/#', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@Bambuam/#', label: 'Youtube' },
    { icon: Instagram, href: 'https://www.instagram.com/bambu_am/#', label: 'Instagram' },
  ];

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden ">
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
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      {/* <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-black/40 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-black/40 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Carousel Dots Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

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

          {/* Features with Numbers */}
          <div className="border-b border-solid  border-white/90 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className={`flex items-start gap-4 transition-all duration-600 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="rounded-full flex items-center justify-center text-white/70 mb-5">
                    <span className="text-4xl md:text-5xl font-semibold text-white block">
                      {feature.number}
                      <span className="text-sm font-bold tracking-wide text-white/80 absolute top-8 -left-3">
                      <feature.icon className="w-10 h-10 text-white/70 mt-1 flex-shrink-0" />
                      </span>
                    </span>
                    <span className="text-white/80 text-xl font-semibold w-full pl-5 absolute top-8 left-14">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
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

export default Hero;

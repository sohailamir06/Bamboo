import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import p1 from '../assets/productservice/100.jpg';
import p2 from '../assets/productservice/101.jpg';
import p3 from '../assets/productservice/102.jpg';
import p4 from '../assets/productservice/103.jpg';
import p5 from '../assets/productservice/104.jpg';

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: 'Water-based decking oil, light bamboo, 2.5 liters',
      price: '€69.95',
      image: p1,
    },
    {
      id: 2,
      name: 'Terrace cleaner',
      price: '€44.95',
      image: p2,
    },
    {
      id: 3,
      name: 'Pad holder for telescopic handle',
      price: '€19.90',
      image: p3,
    },
    {
      id: 4,
      name: 'Oil sponge',
      price: '€9.90',
      image: p4,
    },
    {
      id: 5,
      name: 'Silicon brush',
      price: '€69.90',
      image: p5,
    },
  ];

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 300;
      const gap = 24;
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section className="bg-bambuam-dark section-padding-lg">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section text-white mb-5">
            Products related to bamboo &{' '}
            <span className="text-italic-accent">bamboo care</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-bambuam-green/80 hover:bg-bambuam-green text-white rounded flex items-center justify-center transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-bambuam-green/80 hover:bg-bambuam-green text-white rounded flex items-center justify-center transition-colors"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] md:w-[300px] card-dark overflow-hidden group"
              >
                <div className="img-zoom">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-medium mb-3 text-sm leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-bambuam-sage text-lg font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;

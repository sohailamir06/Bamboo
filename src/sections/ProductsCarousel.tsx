import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      price: '€19,90',
      image: p3,
    },
    {
      id: 4,
      name: 'Oil sponge',
      price: '€9,90',
      image: p4,
    },
    {
      id: 5,
      name: 'Silicon brush',
      price: '€69,90',
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
    <section className="bg-bambuam-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-5">
            At Bambuam you can get everything{' '}
            <span className="italic text-italic-accent">for your terrace.</span>
          </h2>
          <p className="text-bambuam-text-muted max-w-3xl mx-auto">
            Bamboo decking, substructures, fastening & care – coordinated, tested & with personal advice.
          </p>
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

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 max-w-7xl mx-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden card-hover">
                  {/* Product Image */}
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 bg-bambuam-darker text-center h-32">
                    <h3 className="text-white text-md font-semibold line-clamp-2 mb-5">
                      {product.name}
                    </h3>
                    <p className="text-bambuam-green font-semibold">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 scroll-animate flex items-center justify-center" style={{ transitionDelay: '400ms' }}>
          <Link
            to="/kontakt"
            className="bg-[#415540]/85 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-[#415540] transition flex items-center justify-center"
          >
            Inquire now!
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;

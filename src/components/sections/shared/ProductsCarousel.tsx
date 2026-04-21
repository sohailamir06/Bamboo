import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from "../../../lib/utils";

interface Product {
  id: number | string;
  name: string;
  price: string;
  image: string;
}

interface ProductsCarouselProps {
  title: string;
  highlight: string;
  description?: string;
  products: Product[];
  className?: string;
}

const ProductsCarousel = ({
  title,
  highlight,
  description,
  products,
  className
}: ProductsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <section className={cn("bg-bambuam-dark section-padding-lg overflow-hidden", className)}>
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-section text-white mb-6">
            {title}{' '}
            <span className="text-italic-accent block mt-2">{highlight}</span>
          </h2>
          {description && (
            <p className="text-bambuam-text-secondary max-w-3xl mx-auto body-text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative scroll-animate" style={{ transitionDelay: '200ms' }}>
          {/* Navigation Controls */}
          <div className="absolute -top-12 right-0 flex gap-3 z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-bambuam-sage hover:border-bambuam-sage transition-all duration-300"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-bambuam-sage hover:border-bambuam-sage transition-all duration-300"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-12 pt-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[300px] md:w-[320px] snap-start"
              >
                <div className="card-dark group h-full flex flex-col overflow-hidden border-white/5 hover:border-bambuam-sage/30">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-white font-medium mb-4 text-sm md:text-base leading-snug group-hover:text-bambuam-sage transition-colors">
                      {product.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <p className="text-bambuam-sage text-xl font-bold">
                        {product.price}
                      </p>
                      <button className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-bambuam-green transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 scroll-animate" style={{ transitionDelay: '400ms' }}>
          <a
            href="mailto:office@bambuam.at"
            className="btn-primary group"
          >
            Request Catalog
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;

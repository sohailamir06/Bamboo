import { ArrowRight } from 'lucide-react';
import { SAMPLE_TERRACE_CONTENT } from '../../../data/experience';
import { cn } from '../../../lib/utils';

const SampleTerrace = () => {
  const { title, highlight, paragraphs, cta, images } = SAMPLE_TERRACE_CONTENT;

  return (
    <section className="bg-bambuam-dark py-24 overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="scroll-animate">
            <h2 className="heading-section text-white mb-10 leading-tight">
              {title}
              <span className="text-italic-accent block mt-2">{highlight}</span>
            </h2>

            <div className="space-y-6 text-bambuam-text-secondary body-text-lg mb-12 leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary group px-10"
            >
              {cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: Image Mosaic Gallery */}
          <div className="relative h-[600px] scroll-animate" style={{ transitionDelay: '300ms' }}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Main Large Image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/5">
                <img 
                  src={images.large} 
                  alt="Bamboo Terrace close-up" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Right column of mosaic */}
              <div className="grid grid-rows-3 gap-4 h-full">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/5">
                  <img 
                    src={images.topRight} 
                    alt="Bamboo Terrace overview" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/5">
                  <img 
                    src={images.bottomLeft} 
                    alt="Modern bamboo shed" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/5">
                  <img 
                    src={images.bottomRight} 
                    alt="Bamboo lounge area" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-bambuam-sage/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SampleTerrace;

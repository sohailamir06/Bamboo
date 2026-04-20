import { useEffect, useState } from 'react';
import { ArrowRight, Leaf, Sun, Droplets, Thermometer } from 'lucide-react';

const ExperienceBamboo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Leaf,
      title: 'Sustainable',
      desc: 'Bamboo grows incredibly fast and stores CO₂, making it one of the most sustainable building materials.',
    },
    {
      icon: Sun,
      title: 'Weather Resistant',
      desc: 'Thermally treated bamboo withstands rain, snow, and intense sun without losing its beauty.',
    },
    {
      icon: Droplets,
      title: 'Low Maintenance',
      desc: 'Simply sweep and occasionally clean. Optional annual oiling or let it weather naturally.',
    },
    {
      icon: Thermometer,
      title: 'Temperature Stable',
      desc: 'Bamboo stays cool in summer and warm in winter – comfortable barefoot all year round.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/slider-images/slider-image-a.jpg"
            alt="Bamboo terrace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container-site">
          <div className="max-w-3xl">
            <p
              className={`text-bambuam-sage text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Experience Bamboo
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Discover the natural elegance of{' '}
              <span className="text-italic-accent">bamboo decking</span>
            </h1>
            <p
              className={`text-lg text-white/80 max-w-2xl transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Experience the perfect combination of sustainability, durability, and natural beauty. 
              Our bamboo terraces transform outdoor spaces into personal oases.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-bambuam-dark section-padding-lg">
        <div className="container-site">
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-4">
              Why choose <span className="text-italic-accent">bamboo?</span>
            </h2>
            <p className="text-bambuam-text-secondary body-text max-w-2xl mx-auto">
              Bamboo offers unique advantages that make it the perfect choice for your terrace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center p-6 card-dark transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-bambuam-green/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-bambuam-sage" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-bambuam-text-secondary text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-gradient-bambuam section-padding-lg">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section text-white mb-6">
                See it for yourself –{' '}
                <span className="text-italic-accent">quality you can feel</span>
              </h2>
              <p className="text-bambuam-text-secondary body-text mb-6">
                Our bamboo decking boards are carefully selected and thermally treated to ensure 
                maximum durability and weather resistance. The natural grain and warm tones create 
                an inviting atmosphere in any outdoor space.
              </p>
              <p className="text-bambuam-text-secondary body-text mb-8">
                Whether for a pool surround, garden terrace, or balcony – bamboo adapts to your 
                vision and lifestyle. Visit our showroom to experience the quality firsthand.
              </p>
              <a
                href="mailto:office@bambuam.at"
                className="btn-primary group"
              >
                Schedule a viewing
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-lg">
                <img
                  src="/Projectimages/131.jpg"
                  alt="Bamboo pool surround"
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="img-zoom rounded-lg mt-8">
                <img
                  src="/Projectimages/132.jpg"
                  alt="Bamboo sauna terrace"
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="img-zoom rounded-lg">
                <img
                  src="/Projectimages/133.jpg"
                  alt="Bamboo garden terrace"
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="img-zoom rounded-lg mt-8">
                <img
                  src="/Projectimages/134.jpg"
                  alt="Bamboo pergola terrace"
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bambuam-dark section-padding-lg">
        <div className="container-site text-center">
          <h2 className="heading-section text-white mb-6 max-w-3xl mx-auto">
            Ready to experience bamboo for yourself?
          </h2>
          <p className="text-bambuam-text-secondary body-text mb-10 max-w-2xl mx-auto">
            Get in touch for a personal consultation or visit our showroom to see our 
            bamboo decking boards up close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:office@bambuam.at"
              className="btn-primary group"
            >
              Contact us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:06601865443"
              className="btn-outline"
            >
              Call 0660 18 65 443
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceBamboo;

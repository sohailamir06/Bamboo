import { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../../../constants/hero';
import heroImg from '../../../assets/productservice/uber-uns-banner-1536x775.jpg';
import { cn } from '../../../lib/utils';

const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="About Bambuam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site pt-20">
        <div className="max-w-4xl">
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            Your sustainable <br />
            <span className="text-italic-accent font-normal">bamboo terrace</span>
          </h1>
          <p 
            className={cn(
              "text-white/80 text-lg md:text-xl mt-8 max-w-2xl transition-all duration-1000 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Durable, stylish, and personally selected for your project in Austria.
          </p>
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

export default AboutHero;

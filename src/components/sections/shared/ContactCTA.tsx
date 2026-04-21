import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from "../../../lib/utils";

interface ContactCTAProps {
  title?: string;
  highlight?: string;
  description?: string;
  secondaryText?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ContactCTA = ({
  title = "Are you looking for a durable, sustainable bamboo terrace that feels good and",
  highlight = "will bring you joy for many years?",
  description = "Let's plan your project together – honestly, straightforwardly, and precisely tailored to your needs. Whether you need advice, a sample viewing, or concrete implementation: I'm personally there for you.",
  secondaryText = "It will arrive quickly – so you can soon enjoy your own piece of nature.",
  ctaText = "Request a quote now with no obligation!",
  ctaLink = "/kontakt",
  className
}: ContactCTAProps) => {
  return (
    <section className={cn("bg-bambuam-dark section-padding-lg", className)}>
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-section text-white max-w-4xl mx-auto">
            {title}{' '}
            <span className="text-italic-accent block mt-2">{highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
            <p className="text-bambuam-text-secondary body-text mb-10 leading-relaxed">
              {secondaryText}
            </p>
            
            <Link
              to={ctaLink}
              className="btn-primary group w-full sm:w-auto text-center"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Content - Info Card */}
          <div className="text-bambuam-text-secondary body-text scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <p className="italic leading-relaxed">
                "{description}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

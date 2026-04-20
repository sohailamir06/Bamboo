import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-bambuam-dark section-padding-lg">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section text-white max-w-4xl mx-auto">
            Are you looking for a durable, sustainable bamboo terrace that feels good and{' '}
            <span className="text-italic-accent">will bring you joy for many years?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-bambuam-text-secondary body-text mb-8">
              It will arrive quickly – so you can soon enjoy your own piece of nature.
            </p>
            
            <Link
              to="/kontakt"
              className="btn-primary group"
            >
              Request a quote now with no obligation!
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Content - Info Card */}
          <div className="text-bambuam-text-secondary body-text">
            <p>
              Let's plan your project together – honestly, straightforwardly, and precisely tailored to your needs. Whether you need advice, a sample viewing, or concrete implementation: I'm personally there for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

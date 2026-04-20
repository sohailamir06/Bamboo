import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-bambuam-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-5">
            Are you looking for a durable, sustainable bamboo terrace that feels good and{' '}
            <span className="italic text-italic-accent">will bring you joy for many years?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Left Content */}
          <div className="">
            <p className="text-bambuam-text-muted leading-relaxed mb-20">
              It will arrive quickly – so you can soon enjoy your own piece of nature.
            </p>
            <Link
              to="/kontakt"
              className="w-[380px] bg-[#415540]/85 backdrop-blur-md text-white px-4 py-3 rounded-lg hover:bg-[#415540] flex items-center transition"
            >
              Request a quote now with no obligation!
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-3" />
            </Link>
          </div>

          {/* Right Content - Info Card */}
          <div className="space-y-4 text-bambuam-text-muted">
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

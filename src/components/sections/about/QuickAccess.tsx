import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from "../../../lib/utils";

const QuickAccess = () => {
  return (
    <section className="bg-bambuam-dark section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-section text-white">
            Would you like{' '}
            <span className="text-italic-accent block mt-2">to get to know me personally?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
            <p className="text-bambuam-text-secondary body-text-lg mb-12 leading-relaxed">
              Whether you have questions, need advice, or would like to plan your bamboo terrace together – I'm here for you. The best way is to come by and see the materials directly on my sample terrace.
            </p>
            <Link
              to="/kontakt"
              className="btn-primary group"
            >
              Get in touch now!
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 ml-2" />
            </Link>
          </div>

          {/* Right Content - Info Card */}
          <div className="scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bambuam-green/10 blur-3xl -z-10" />
              <p className="text-white text-xl font-light italic leading-relaxed">
                "I look forward to a personal conversation – honest, uncomplicated and in complete peace and quiet."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bambuam-sage/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-bambuam-sage" />
                </div>
                <span className="text-sm font-medium text-bambuam-text-muted uppercase tracking-widest">Visit our showroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;

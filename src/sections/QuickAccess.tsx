import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const QuickAccess = () => {
  return (
    <section className="bg-bambuam-dark section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-5">
            Would you like{' '}
            <span className="italic text-italic-accent">to get to know me personally?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Left Content */}
          <div className="">
            <p className="text-bambuam-text-muted leading-relaxed mb-20">
              Whether you have questions, need advice, or would like to plan your bamboo terrace together – I'm here for you. The best way is to come by and see the materials directly on my sample terrace.
            </p>
            <Link
              to="/kontakt"
              className="w-[200px] bg-[#415540]/85 backdrop-blur-md text-white px-4 py-3 rounded-lg hover:bg-[#415540] flex items-center transition"
            >
              Get in touch now!
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-3" />
            </Link>
          </div>

          {/* Right Content - Info Card */}
          <div className="space-y-4 text-bambuam-text-muted">
            <p>
              I look forward to a personal conversation – honest, uncomplicated and in complete peace and quiet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;

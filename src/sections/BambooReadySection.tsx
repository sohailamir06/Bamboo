import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BambooReadySection = () => {
  return (
    <section className="bg-bambuam-dark section-padding" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }} >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-5">
            Ready for your own{' '}
            <span className="italic text-italic-accent">bamboo project?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Left Content */}
          <div className="">
            <p className="text-bambuam-text-muted leading-relaxed mb-20">
              Whether it's a terrace, fence, pool cover or initial planning idea – I'm happy to be by your side.
            </p>
            <Link
              to="/kontakt"
              className="w-[170px] bg-[#415540]/85 backdrop-blur-md text-white px-4 py-3 rounded-lg hover:bg-[#415540] flex items-center transition"
            >
              Enquire now!
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-3" />
            </Link>
          </div>

          {/* Right Content - Info Card */}
          <div className="space-y-4 text-bambuam-text-muted">
            <p>
              With honest advice, extensive experience and high-quality materials, we will find the solution that suits you – durable, natural and simply beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BambooReadySection;

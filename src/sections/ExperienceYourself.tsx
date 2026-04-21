import { ArrowRight } from 'lucide-react';
const ExperienceYourself = () => {
  return (
    <section className="bg-gradient-bambuam section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Do you really want to experience bamboo? Then come and{' '}
            <span className="italic text-italic-accent">see for yourself!</span>
          </h2>
          <p className="text-white leading-relaxed py-1">
            On my sample terrace in Kaltenberg, you can not only look at different bamboo decking boards, but actually touch, compare, and feel them.
          </p>
          <p className="text-white leading-relaxed py-1">
            Experience for yourself what quality feels like – in a relaxed atmosphere, with honest advice and without obligation.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-[#4a6741] hover:bg-[#5a7a50] text-white px-8 py-3 rounded-md transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Learn More!</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceYourself;

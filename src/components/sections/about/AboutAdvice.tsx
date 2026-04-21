import { cn } from "../../../lib/utils";

const AboutAdvice = () => {
  return (
    <section className="bg-bambuam-dark section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center scroll-animate">
          <h2 className="heading-section text-white mb-10 leading-relaxed">
            Bamboo is more than just a material to me –{' '}
            <span className="text-italic-accent block mt-2">it's my passion.</span>
          </h2>
          <div className="space-y-6 text-bambuam-text-secondary body-text-lg">
            <p>
              I am Andi Besenbeck, founder of Bambuam. The idea – and the discovery – of bamboo arose from the desire for a durable, natural terrace.
            </p>
            <p>
              Today I bring high-quality bamboo planks directly to the Mühlviertel region – without intermediaries, but with complete conviction.
            </p>
          </div>
          <div className="w-16 h-1 bg-bambuam-sage mx-auto mt-12 rounded-full opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default AboutAdvice;

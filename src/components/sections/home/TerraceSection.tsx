import { TERRACE_PLANNER_CONTENT } from "../../../data/home";
import { cn } from "../../../lib/utils";

const TerraceSection = () => {
  const { title, highlight, description, link, linkText, features, image } = TERRACE_PLANNER_CONTENT;

  return (
    <section className="w-full section-padding bg-gradient-bambuam overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white scroll-animate">
            <h2 className="heading-section mb-8">
              {title}
              <br />
              <span className="text-italic-accent block mt-2">
                {highlight}
              </span>
            </h2>

            <p className="text-bambuam-text-secondary body-text-lg max-w-xl mb-8 leading-relaxed">
              {description}
            </p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-bambuam-sage hover:text-bambuam-sage-light font-medium text-lg underline underline-offset-8 decoration-2 transition-all hover:decoration-4"
            >
              {linkText}
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mt-12">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 border-2 border-bambuam-sage rounded-full flex items-center justify-center text-bambuam-sage text-xs font-bold group-hover:bg-bambuam-sage group-hover:text-white transition-colors duration-300">
                    ✓
                  </div>
                  <span className="text-base text-bambuam-text-secondary group-hover:text-white transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group flex justify-center lg:justify-end scroll-animate" style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-[500px]">
              {/* Decorative back element */}
              <div className="absolute -inset-4 bg-bambuam-green/5 rounded-2xl blur-2xl -z-10 group-hover:bg-bambuam-green/10 transition-colors duration-500" />
              
              <img
                src={image}
                alt="Terrace planning tool"
                className="rounded-2xl w-full h-[400px] lg:h-[480px] object-cover shadow-2xl border border-white/10 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-rotate-1"
              />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 -left-6 bg-bambuam-darker border border-bambuam-border p-4 rounded-xl shadow-xl animate-fade-in group-hover:translate-x-2 transition-transform duration-500">
                <p className="text-bambuam-sage font-bold text-sm uppercase tracking-widest">Free Tool</p>
                <p className="text-white text-xs mt-1">Design in 3D</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerraceSection;

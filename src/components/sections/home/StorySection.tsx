import { STORY_HOME_CONTENT } from "../../../data/home";
import { cn } from "../../../lib/utils";

const StorySection = () => {
  const { title, highlight, paragraphs, images } = STORY_HOME_CONTENT;

  return (
    <section className="relative section-padding-lg bg-gradient-bambuam overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="scroll-animate">
            <h2 className="heading-subsection text-white mb-10 text-2xl md:text-3xl lg:text-4xl leading-tight">
              {title}{" "}
              <span className="text-italic-accent block mt-2">
                {highlight}
              </span>
            </h2>

            <div className="space-y-6 text-bambuam-text-secondary body-text-lg">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-bambuam-dark bg-bambuam-darker" />
                ))}
              </div>
              <p className="text-sm text-bambuam-text-muted font-medium">
                Joined by <span className="text-white">500+</span> happy customers
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4 scroll-animate" style={{ transitionDelay: '300ms' }}>
            {/* Main large image */}
            <div className="row-span-2 img-zoom rounded-2xl shadow-2xl border border-white/5">
              <img
                src={images[0]}
                className="w-full h-full object-cover min-h-[400px]"
                alt="Story image 1"
              />
            </div>

            {/* Top right secondary image */}
            <div className="img-zoom rounded-2xl shadow-xl border border-white/5">
              <img
                src={images[1]}
                className="w-full h-[220px] object-cover"
                alt="Story image 2"
              />
            </div>

            {/* Bottom right detail image */}
            <div className="img-zoom rounded-2xl shadow-xl border border-white/5">
              <img
                src={images[2]}
                className="w-full h-[220px] object-cover"
                alt="Story image 3"
              />
            </div>

            {/* Full width bottom image */}
            <div className="col-span-2 img-zoom rounded-2xl shadow-xl border border-white/5">
              <img
                src={images[3]}
                className="w-full h-[200px] object-cover"
                alt="Story image 4"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-bambuam-green/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default StorySection;

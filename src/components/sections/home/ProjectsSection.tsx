import { ArrowRight } from "lucide-react";
import { PROJECTS_HOME_CONTENT } from "../../../data/home";

const ProjectsSection = () => {
  const { header, highlight, items } = PROJECTS_HOME_CONTENT;

  return (
    <section className="bg-bambuam-dark text-white section-padding-lg">
      
      {/* Header */}
      <div className="container-site text-center mb-16 scroll-animate">
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-5xl mx-auto">
          {header}{" "}
          <span className="text-italic-accent block mt-2">
            {highlight}
          </span>
        </p>
      </div>

      {/* Grid */}
      <div className="container-site">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <article
              key={i}
              className="group card-dark overflow-hidden flex flex-col scroll-animate"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold mb-4 leading-tight text-white group-hover:text-bambuam-sage transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-bambuam-text-secondary text-sm leading-relaxed line-clamp-4">
                  {item.desc}
                </p>
                
                <div className="mt-auto pt-6 flex items-center text-xs font-medium uppercase tracking-widest text-bambuam-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read more <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-16 scroll-animate" style={{ transitionDelay: '600ms' }}>
          <button className="btn-primary group">
            Enquire now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

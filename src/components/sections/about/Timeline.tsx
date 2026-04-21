import { cn } from "../../../lib/utils";

const TIMELINE_EVENTS = [
  {
    date: "2019 – First Contact",
    text: "We wanted a durable, beautiful terrace – but I couldn't find anything that convinced me. So I started researching, came across bamboo – and was immediately fascinated. ",
    subtitle: "In January 2020, I made initial contact with the factory in China. After many hours of research, I imported 60 square meters of bamboo decking – just for my own terrace. In the process, I learned all about shipping, customs, and quality. Without realizing it, I laid the foundation for Bambuam."
  },
  {
    date: "2021–2023 – Development and Partnership",
    text: "I further expanded the collaboration with the production facility in China and am now actively involved in product development. My honest feedback secured me the exclusive import rights for Austria – and allowed me to continuously deepen my expertise in bamboo decking.",
    subtitle: "Today, I am a recognized expert in outdoor bamboo decking – with extensive practical experience."
  },
  {
    date: "2021–2023 – Development",
    text: "After successfully installing my bamboo terrace and being thrilled with the quality, I wanted to make this material accessible to others. In October 2020, I founded my company, Bambuam. The name, logo, and the idea behind it all stemmed from genuine conviction.",
    subtitle: "Since then, I've been working on building the brand, creating a website, and sharing my knowledge through social media. The response has been overwhelmingly positive – and I am grateful for every customer who has already chosen Bambuam for their terrace project."
  },
  {
    date: "2024 – Full-time for Bambuam",
    text: "On February 29, 2024, after 19 years at Voestalpine, I ended my career and made Bambuam my full-time job.",
    subtitle: "I am excited about the future and look forward to helping many more people create their dream terrace with bamboo decking. For me, Bambuam is not just a business – it's a passion and a commitment to quality, sustainability, and honest materials."
  }
];

const Timeline = () => {
  return (
    <section className="bg-bambuam-dark text-white py-24 overflow-hidden">
      <div className="container-site">
        {/* Title */}
        <h2 className="text-center text-bambuam-text-muted font-light text-2xl md:text-3xl mb-24 scroll-animate">
          That's how <span className="text-white italic font-serif">Bambuam</span> came about.
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-white/20 -translate-y-1/2" />

          <div className="grid grid-cols-4 gap-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                {/* Node */}
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20 bg-bambuam-dark flex items-center justify-center z-10 group-hover:border-bambuam-sage transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-white group-hover:bg-bambuam-sage transition-colors duration-500" />
                </div>

                {/* Content Box */}
                <div 
                  className={cn(
                    "w-full px-2 scroll-animate",
                    index % 2 === 0 ? "mb-40" : "mt-40 pt-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-bambuam-sage mb-4 tracking-wider uppercase">
                    {event.date.split(' – ')[0]}
                  </span>
                  <h3 className="font-bold text-sm mb-4 text-white uppercase tracking-tight">
                    {event.date.split(' – ')[1] || event.date}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-xs text-bambuam-text-secondary leading-relaxed text-justify italic">
                      {event.text}
                    </p>
                    <p className="text-xs text-bambuam-text-muted leading-relaxed text-justify">
                      {event.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative pl-8 border-l border-dashed border-white/20 space-y-16">
          {TIMELINE_EVENTS.map((event, index) => (
            <div key={index} className="relative scroll-animate" style={{ transitionDelay: `${index * 100}ms` }}>
              {/* Node */}
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border border-white/20 bg-bambuam-dark flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-bambuam-sage" />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-bambuam-sage uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                  {event.date}
                </span>
                <p className="text-sm text-bambuam-text-secondary leading-relaxed italic">
                  {event.text}
                </p>
                <p className="text-sm text-bambuam-text-muted leading-relaxed">
                  {event.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

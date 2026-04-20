import { ArrowRight } from "lucide-react";
import img1 from '../assets/Projectimages/131.jpg';
import img2 from '../assets/Projectimages/132.jpg';
import img3 from '../assets/Projectimages/133.jpg';
import img4 from '../assets/Projectimages/134.jpg';

const ProjectsSection = () => {
  const items = [
    {
      img: img1,
      title: "Wonderful views – bamboo by the pool in St. Oswald",
      desc: "One of the first families to place their trust in me – and thus help launch Bambuam. For their new building, they chose bamboo as a natural, durable solution for the pool surround. The result: a dream terrace full of sustainability, style, and a welcoming atmosphere.",
    },
    {
      img: img2,
      title: "Outdoor wellness oasis – sauna meets bamboo",
      desc: "In Freistadt, one of the most beautiful terraces I've ever had the pleasure of working on was created: A freestanding outdoor sauna was transformed into a stylish oasis of well-being with elegant bamboo decking. Natural, harmonious, and a true example of how elegant sustainability can be.",
    },
    {
      img: img3,
      title: "Harmony with a view – Renovation in Liebenau",
      desc: "At an altitude of around 1000 meters, an old larch terrace was renovated with bamboo decking – perfectly blending into the natural surroundings. Nestled in a garden with a pond and panoramic views, a true haven of tranquility has been created. The small stove completes the harmonious overall picture – a passion project for a dear friend.",
    },
    {
      img: img4,
      title: "More than a terrace – a home for life",
      desc: "More than just a terrace – a home for life. This young family from Freistadt has fulfilled their dream of owning their own home – with a modern bamboo terrace under a stylish wooden pergola. I was privileged to accompany them from the initial consultation to the completion of the project – and in the process, not just complete a project, but build a true friendship.",
    },
  ];

  return (
    <section className="bg-bambuam-dark text-white section-padding-lg">
      
      {/* Header */}
      <div className="container-site text-center mb-16">
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-5xl mx-auto">
          This is what it looks like at our customers' homes now. Our bamboo decking transforms patios into true oases of well-being. Here's a look at{" "}
          <span className="text-italic-accent">
            how our customers have designed their outdoor spaces sustainably and personally with Bambuam.
          </span>
        </p>
      </div>

      {/* Grid */}
      <div className="container-site">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <article
              key={i}
              className="group card-dark overflow-hidden"
            >
              {/* Image */}
              <div className="img-zoom">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 leading-snug text-white">
                  {item.title}
                </h3>

                <p className="text-bambuam-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
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
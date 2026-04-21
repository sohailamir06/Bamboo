import { ArrowRight } from "lucide-react";
import img1 from '../assets/images/131.jpg';
import img2 from '../assets/images/132.jpg';
import img3 from '../assets/images/133.jpg';
import img4 from '../assets/images/134.jpg';

const BambooHappySection = () => {
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
    <section className="bg-bambuam-dark/95 text-white pt-20 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <p className="text-white font-serif leading-relaxed text-2xl md:text-3xl lg:text-4xl">
          Happy customers –{" "}
          <span className="italic text-italic-accent">
            Happy Andi
          </span>
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {items.map((item, i) => (
          <div
            key={i}
            className="group border border-[#8a7a4a]/40 border-[#c6b37a] transition-all duration-300"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-full h-[260px] object-cover 
                           transition-transform duration-700 ease-out
                           group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className=" p-6">
              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-white text-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-16">
        <button className="inline-flex items-center gap-2 
                           bg-[#5f735c] hover:bg-[#6f876c] 
                           px-8 py-3 text-sm rounded-md transition-all">
          Enquire now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default BambooHappySection;
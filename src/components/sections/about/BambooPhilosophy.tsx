import img1 from "../../../assets/banner-image-a.jpg";
import img2 from "../../../assets/banner-image-b.jpg";
import img3 from "../../../assets/banner-image-c.jpg";
import img4 from "../../../assets/banner-image-a.jpg";
import img5 from "../../../assets/banner-image-b.jpg";
import img6 from "../../../assets/banner-image-c.jpg";
import img7 from "../../../assets/banner-image-c.jpg";
import { cn } from "../../../lib/utils";

const photos = [
  { url: img1, alt: 'Bamboo decking' },
  { url: img2, alt: 'Poolside bamboo' },
  { url: img3, alt: 'Architecture bamboo' },
  { url: img4, alt: 'Decking plants' },
  { url: img5, alt: 'Modern bamboo' },
  { url: img6, alt: 'Structure bamboo' },
  { url: img7, alt: 'Outdoor bamboo' },
];

const BambooPhilosophy = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="h-[45%] bg-gradient-bambuam" />
        <div className="h-[55%] bg-bambuam-dark" />
      </div>

      <div className="container-site relative z-10 py-24">
        
        {/* Header Quote */}
        <div className="text-center mb-20 scroll-animate">
          <blockquote className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight md:leading-relaxed">
              "I don't live where bamboo grows – <br className="hidden md:block" />
              but I know why it <span className="text-italic-accent">belongs right here.</span>"
            </h2>
            <footer className="mt-8">
              <div className="w-12 h-1 bg-bambuam-sage mx-auto rounded-full" />
            </footer>
          </blockquote>
        </div>

        {/* Masonry-style Grid Section */}
        <div className="scroll-animate" style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={cn(
                  "overflow-hidden rounded-2xl shadow-xl border border-white/5 group",
                  index === 0 && "md:row-span-2 lg:col-span-2",
                  index === 1 && "lg:col-span-2",
                  index === 2 && "md:row-span-2",
                  index === 5 && "md:row-span-2 lg:col-span-2"
                )}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BambooPhilosophy;

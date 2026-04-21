import img1 from "../assets/banner-image-a.jpg";
import img2 from "../assets/banner-image-b.jpg";
import img3 from "../assets/banner-image-c.jpg";
import img4 from "../assets/banner-image-a.jpg";
import img5 from "../assets/banner-image-b.jpg";
import img6 from "../assets/banner-image-c.jpg";
import img7 from "../assets/banner-image-c.jpg";

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
    <section className="relative font-sans overflow-hidden">

      {/* 🔥 Top (40%) + Bottom (60%) Background */}
      <div className="absolute inset-0">
        <div className="h-[40%]" style={{ background: 'linear-gradient(98.9deg, #111111 0%, #1E241E 62.5%, #242C24 100%)' }} />  {/* Green */}
        <div className="h-[60%] bg-[#0B0B0B]" />  {/* Black */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        
        {/* Header */}
        <div className="pt-24 pb-16 px-6 text-center">
          <h2 className="text-xl md:text-2xl font-seminbold tracking-wide text-white leading-relaxed max-w-3xl mx-auto">
            "I don't live where bamboo grows – <br className="hidden md:block" />
            but I know why it <span className="italic text-gray-300">belongs right here."</span>"
          </h2>
        </div>

        {/* Grid Section */}
        <div className="pb-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
              
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`
                    overflow-hidden rounded-md
                    ${index === 0 ? "row-span-2" : ""}
                    ${index === 2 ? "row-span-2" : ""}
                    ${index === 5 ? "row-span-2" : ""}
                  `}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BambooPhilosophy;
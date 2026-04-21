import FixedBgImage from "../../../assets/productservice/service-page-banner-1-1536x775.jpg";
import profileImage from "../../../assets/productservice/image.jpg";
import { Hand } from 'lucide-react'; 
import { cn } from "../../../lib/utils";

const FEATURES = [
  { label: "Fast-growing", detail: "Grows up to 30 meters per year – without any replanting." },
  { label: "Weatherproof", detail: "Easily withstands frost, rain and temperature fluctuations." },
  { label: "Durable & dimensionally stable", detail: "Remains robust and beautiful even after years." },
  { label: "Natural & environmentally friendly", detail: "No trees need to be felled – bamboo constantly regenerates." },
  { label: "Easy to maintain", detail: "Sweep, wash, done – oil only if protection & color are desired." },
  { label: "Pleasant surface", detail: "Smooth, warm and high-quality – ideal for relaxing hours outdoors." },
  { label: "Timeless design", detail: "Adapts to any environment – modern, natural, stylish." },
];

const BambooBenefits = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-[900px] flex items-center py-24 overflow-hidden"
      style={{ backgroundImage: `url(${FixedBgImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="scroll-animate">
            <h2 className="heading-section text-white mb-10">
              That's what fascinates me about <span className="text-italic-accent">bamboo</span>
            </h2>

            <div className="space-y-6 text-white/90 body-text-lg max-w-xl mb-12">
              <p>
                Bamboo has a special energy for me – anyone who has ever stood in a bamboo forest 
                immediately understands what I mean. As a high-quality decking material, it combines 
                qualities that no other natural product can match:
              </p>
              <p>
                It grows incredibly fast, is sustainable, durable, pleasant underfoot, beautiful, and easy to 
                care for. For me, bamboo is simply a dream – honest, strong, and natural all at once.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-6">
              {FEATURES.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group scroll-animate" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-bambuam-sage/30 transition-colors">
                    <Hand size={16} className="text-bambuam-sage" />
                  </div>
                  <p className="text-sm md:text-base">
                    <span className="font-bold text-white uppercase tracking-wider text-xs block mb-1">{item.label}</span>
                    <span className="text-bambuam-text-secondary leading-relaxed">{item.detail}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Column */}
          <div className="hidden lg:flex justify-end scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="w-[85%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
              <img 
                src={profileImage} 
                alt="Close up of bamboo" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BambooBenefits;

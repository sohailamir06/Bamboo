import profileImage from '../../../assets/images/image-a-1.jpg';
import bambooImage from '../../../assets/productservice/image.jpg';
import { cn } from '../../../lib/utils';

const AboutMe = () => {
  return (
    <section className="bg-gradient-bambuam py-24 px-6 md:px-12 overflow-hidden">
      <div className="container-site">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-24 mb-20 scroll-animate">
          <div className="md:w-[240px] shrink-0">
            <h2 className="text-bambuam-text-muted text-3xl font-light leading-tight">
              Andi<br />
              <span className="text-white">Besenbeck</span>
            </h2>
          </div>
          
          <div className="flex-grow max-w-2xl">
            <p className="text-white text-2xl md:text-3xl font-light leading-snug">
              with enthusiasm for <span className="text-italic-accent">honest materials</span> and the courage to build something oneself.
            </p>
          </div>
        </div>

        {/* Interactive Image Composition */}
        <div className="relative mb-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Decorative Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-bambuam-green/5 blur-3xl rounded-full -z-10" />

          {/* Secondary Detail Image */}
          <div className="relative w-full md:w-[320px] lg:w-[400px] aspect-[4/5] scroll-animate" style={{ transitionDelay: '200ms' }}>
            <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            <img 
              src={bambooImage} 
              alt="Close-up of bamboo canes" 
              className="w-full h-full object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Main Profile Image */}
          <div className="relative w-full md:w-[450px] lg:w-[550px] scroll-animate" style={{ transitionDelay: '400ms' }}>
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img 
                src={profileImage} 
                alt="Man with wood samples" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 max-w-xs bg-bambuam-darker border border-bambuam-border p-6 rounded-2xl shadow-2xl">
              <p className="text-white text-xl font-medium leading-tight">
                Simple, straightforward and honest.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Text Section */}
        <div className="max-w-4xl mx-auto scroll-animate" style={{ transitionDelay: '600ms' }}>
          <div className="grid md:grid-cols-1 gap-10 text-bambuam-text-secondary body-text-lg">
            <div className="space-y-8">
              <p className="leading-relaxed">
                A cozy home is important to me – and bamboo offers exactly that: <span className="text-white font-medium">warmth, naturalness, and durability</span>. With Bambuam, I want to share this feeling – for everyone who wants to feel truly comfortable on their patio.
              </p>
              <p className="leading-relaxed">
                As much as I love to travel, my heart belongs to home. When we were looking for a patio for our own house, I wanted more than just a surface covering: something natural that lasts, looks good, and simply feels good. That's exactly what I found in bamboo – and the more I learned about it, the greater my enthusiasm became.
              </p>
              <p className="leading-relaxed">
                Today, with Bambuam, I bring high-quality bamboo decking directly to our home in the Mühlviertel region. No middlemen, but with extensive experience, honest advice, and genuine trust in the material. For everyone who wants to get their hands dirty – and enjoy the fruits of their labor.
              </p>
              <p className="text-white italic text-xl border-l-4 border-bambuam-sage pl-6 py-2">
                "Because the best thing is sitting on your own terrace, walking barefoot across the ground – and simply knowing: This is perfect. Exactly like this."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

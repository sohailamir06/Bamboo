import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import img from "../assets/kontakt-page-banner.jpg"
import img2 from "../assets/productservice/image.jpg"
import img3 from "../assets/projectimages/107.jpg"

const KontaktPage = () => {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ willChange: 'transform' }}
        >
          <img
            src={img}
            alt="Bamboo terrace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full pt-32 pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
              >
                Contact 
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section - Split Background Implementation */}
      <section className="relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 flex">
          <div className="w-[60%] h-full bg-gradient-bambuam"></div>
          <div className="w-[40%] h-full bg-[#1a1a1a]"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content - Exact from screenshot */}
            <div className="max-w-xl">
              {/* Heading with italic accent */}
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-light leading-tight mb-8">
                <span className="italic text-[#8a9a7f]">Ready for your bamboo project? Then get started –</span>
                <span className="text-white"> I'm here for you.</span>
              </h2>

              {/* Divider line */}
              <hr className="border-t border-[#e8e5e5]/20 mb-8" />

              {/* Description paragraph */}
              <p className="text-[#b0b0b0] text-base leading-relaxed mb-12">
                Whether you already have concrete plans or just want to get a taste of it:
                <br />
                Get in touch with me – by email, phone or in person at an appointment on my model terrace in Kaltenberg.
              </p>

              {/* Profile Card - Exact layout from screenshot */}
              <div className="flex flex-col sm:flex-row items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={img3}
                    alt="Andi Besenbeck"
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Andi Besenbeck
                  </h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed mb-6">
                    I'm your contact person for bamboo decking, fences, pool covers, and more. Honest, straightforward, and a true commitment to your word. Get in touch now and let's get started!
                  </p>
                  
                  <a
                    href="mailto:office@bambuam.at"
                    className="inline-flex items-center justify-center gap-2 bg-[#4a6741]/85 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-[#4a6741] group"
                  >
                    Enquire now!
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image - Large bamboo image */}
            <div className="flex justify-end lg:pr-8">
              <img
                src={img2}
                alt="Bamboo"
                className="w-full max-w-[550px] h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontaktPage;
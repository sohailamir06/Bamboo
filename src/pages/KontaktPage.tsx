import { useEffect, useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import heroImg from "../assets/kontakt-page-banner.jpg";
import profileImg from "../assets/productservice/115-768x616.jpg";
import sideImg from "../assets/productservice/image.jpg";
import { cn } from "../lib/utils";
import { SOCIAL_LINKS } from '../constants/hero';

const KontaktPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImg}
            alt="Contact Bambuam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container-site pt-20">
          <div className="max-w-2xl scroll-animate">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
              Contact 
            </h1>
            <div className="w-20 h-1 bg-bambuam-sage rounded-full" />
          </div>
        </div>
        
        {/* Social Links - Side */}
        <div
          className={cn(
            "hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 transition-all duration-700",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}
          style={{ transitionDelay: '1000ms' }}
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/30 rounded flex items-center justify-center text-white/70 hover:text-white hover:border-bambuam-sage hover:bg-bambuam-sage/10 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="relative overflow-hidden bg-bambuam-dark">
        <div className="container-site py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Content */}
            <div className="scroll-animate">
              <h2 className="heading-section text-white mb-10 leading-tight">
                <span className="text-italic-accent">Ready for your bamboo project? Then get started –</span>
                <br /> I'm here for you.
              </h2>

              <p className="text-bambuam-text-secondary body-text-lg mb-12 leading-relaxed">
                Whether you already have concrete plans or just want to get a taste of it:
                <br />
                Get in touch with me – by email, phone or in person at an appointment on my model terrace in Kaltenberg.
              </p>

              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-start gap-10 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
                <div className="flex-shrink-0 relative group">
                  <div className="absolute -inset-2 bg-bambuam-sage/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={profileImg}
                    alt="Andi Besenbeck"
                    className="w-32 h-40 object-cover rounded-lg shadow-lg relative z-10"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-4">
                    Andi Besenbeck
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-bambuam-text-muted text-sm">
                      <Mail className="w-4 h-4 text-bambuam-sage" />
                      <span>office@bambuam.at</span>
                    </div>
                    <div className="flex items-center gap-3 text-bambuam-text-muted text-sm">
                      <Phone className="w-4 h-4 text-bambuam-sage" />
                      <span>0660 18 65 443</span>
                    </div>
                  </div>
                  
                  <a
                    href="mailto:office@bambuam.at"
                    className="btn-primary group w-full sm:w-auto text-center"
                  >
                    Enquire now!
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group scroll-animate" style={{ transitionDelay: '300ms' }}>
              <div className="absolute -inset-4 bg-bambuam-green/5 rounded-2xl blur-3xl -z-10 group-hover:bg-bambuam-green/10 transition-colors" />
              <img
                src={sideImg}
                alt="Bamboo Detail"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl border border-white/10 transition-transform duration-1000 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-8 right-8 bg-bambuam-darker border border-bambuam-border p-6 rounded-xl shadow-2xl animate-fade-in">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-bambuam-sage mt-1" />
                  <div>
                    <p className="text-white font-bold">Kaltenberg 54</p>
                    <p className="text-bambuam-text-muted text-sm">4273 Kaltenberg, AT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontaktPage;

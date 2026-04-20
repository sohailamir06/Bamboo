import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KontaktPage = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ willChange: 'transform' }}
        >
          <img
            src="/kontakt-bg.jpg"
            alt="Bamboo shoot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p
                className={`text-white/80 text-sm tracking-wide mb-4 transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Kontakt
              </p>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Bereit für dein Bambusprojekt?
              </h1>
              <p
                className={`text-white/80 text-lg transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Dann leg los – ich bin für dich da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-bambuam-dark section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Info */}
            <div className="scroll-animate">
              <p className="text-bambuam-text-muted mb-8 leading-relaxed">
                Egal, ob du schon konkrete Pläne hast oder einfach mal reinschnuppern
                willst: Meld dich bei mir – per Mail, Telefon oder ganz persönlich bei
                einem Termin auf meiner Musterterrasse in Kaltenberg.
              </p>

              <div className="bg-bambuam-darker rounded-lg p-8 mb-8">
                <h3 className="text-xl font-medium text-white mb-2">
                  Andi Besenbeck
                </h3>
                <p className="text-bambuam-text-muted mb-6">
                  Ich bin dein Ansprechpartner für Bambusterrassen, Zäune,
                  Poolabdeckungen und mehr. Ehrlich, unkompliziert und mit echter
                  Handschlagqualität.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:06601865443"
                    className="flex items-center gap-4 text-white hover:text-bambuam-green transition-colors"
                  >
                    <div className="w-10 h-10 bg-bambuam-green/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-bambuam-green" />
                    </div>
                    <span>0660 18 65 443</span>
                  </a>

                  <a
                    href="mailto:office@bambuam.at"
                    className="flex items-center gap-4 text-white hover:text-bambuam-green transition-colors"
                  >
                    <div className="w-10 h-10 bg-bambuam-green/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-bambuam-green" />
                    </div>
                    <span>office@bambuam.at</span>
                  </a>

                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 bg-bambuam-green/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-bambuam-green" />
                    </div>
                    <span>Kaltenberg 54, 4273 Kaltenberg</span>
                  </div>
                </div>
              </div>

              <div className="bg-bambuam-green/10 border border-bambuam-green/30 rounded-lg p-6">
                <h4 className="text-white font-medium mb-2">
                  Jetzt Kontakt aufnehmen und loslegen!
                </h4>
                <p className="text-bambuam-text-muted text-sm">
                  Ich melde mich innerhalb von 24 Stunden bei dir.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div
              className="scroll-animate bg-bambuam-darker rounded-lg p-8"
              style={{ transitionDelay: '200ms' }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-bambuam-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-bambuam-green" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Danke für deine Nachricht!
                  </h3>
                  <p className="text-bambuam-text-muted">
                    Ich werde mich so schnell wie möglich bei dir melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Dein Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="deine@email.at"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+43 123 456789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                      placeholder="Wie kann ich dir helfen?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-bambuam-green hover:bg-bambuam-green-hover text-white py-4 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-button disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Wird gesendet...'
                    ) : (
                      <>
                        Nachricht senden
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontaktPage;

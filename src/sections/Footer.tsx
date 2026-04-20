import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bambus erleben', path: '/bambus-erleben' },
    { name: 'Dienstleistungen', path: '/dienstleistungen' },
    { name: 'Über uns', path: '/uber-uns' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bambuambambus/#', label: 'facebook', handle: 'facebook_bambuam' },
    { icon: Instagram, href: 'https://www.instagram.com/bambu_am/#', label: 'Instagram', handle: 'instagram_bambuam' },
    { icon: Youtube, href: 'https://www.youtube.com/@Bambuam/#', label: 'youtube', handle: 'youtube_bambuam' },
  ];

  return (
    <footer className="bg-bambuam-dark border-bambuam-border">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr] gap-12 mb-12">

            {/* Brand Column (LARGE) */}
            <div className="scroll-animate">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2">
                Bamboo in the Mühlviertel region
              </h3>
              <p className="text-italic-accent italic text-3xl md:text-4xl mb-6">
                – Andi makes it possible!
              </p>
            </div>

            {/* RIGHT SIDE (SMALL) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Contact Column */}
              <div className="scroll-animate" style={{ transitionDelay: '100ms' }}>
                <h4 className="text-white font-medium mb-4">Kontaktiere mich</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-bambuam-text-muted">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Kaltenberg 54, 4273 Kaltenberg</span>
                  </div>

                  <a
                    href="tel:06601865443#"
                    className="flex items-center gap-3 text-bambuam-text-muted hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>0660 18 65 443</span>
                  </a>

                  <a
                    href="mailto:office@bambuam.at/#"
                    className="flex items-center gap-3 text-bambuam-text-muted hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>office@bambuam.at</span>
                  </a>
                </div>
              </div>

              {/* Company Links */}
              <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
                <h4 className="text-white font-medium mb-4">Unternehmen</h4>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block text-bambuam-text-muted hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className="pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border-t-2 botder-white"
                >
                  <div>
                    <p className="text-white font-medium">{social.label}</p>
                    <p className="text-bambuam-text-muted text-sm">{social.handle}</p>
                  </div>
                  <div className="w-10 h-10 bg-bambuam-green/20 rounded flex items-center justify-center group-hover:bg-bambuam-green/30 transition-colors">
                    <social.icon className="w-5 h-5 text-bambuam-green" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-bambuam-text-muted text-sm">
              © {currentYear} Entworfen und umgesetzt von{' '}
              <a
                href="https://bright-digital.at"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                bright-digital.at
              </a>
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/agb"
                className="text-bambuam-text-muted hover:text-white transition-colors"
              >
                AGB
              </Link>
              <Link
                to="/datenschutz"
                className="text-bambuam-text-muted hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                to="/impressum"
                className="text-bambuam-text-muted hover:text-white transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

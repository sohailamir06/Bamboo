import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bambuambambus/', label: 'Facebook', handle: 'facebook_bambuam' },
    { icon: Instagram, href: 'https://www.instagram.com/bambu_am/', label: 'Instagram', handle: 'instagram_bambuam' },
    { icon: Youtube, href: 'https://www.youtube.com/@Bambuam/', label: 'Youtube', handle: 'youtube_bambuam' },
  ];

  return (
    <footer className="bg-bambuam-dark border-t border-bambuam-border">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr] gap-12 mb-12">

            {/* Brand Column */}
            <div className="scroll-animate">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2">
                Bamboo in the Mühlviertel region
              </h3>
              <p className="text-italic-accent italic text-3xl md:text-4xl mb-6">
                – Andi makes it possible!
              </p>
            </div>

            {/* Info Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Contact Column */}
              <div className="scroll-animate" style={{ transitionDelay: '100ms' }}>
                <h4 className="text-white font-medium mb-4">Contact Me</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-bambuam-text-muted">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-bambuam-sage" />
                    <span>Kaltenberg 54, 4273 Kaltenberg</span>
                  </div>

                  <a
                    href="tel:06601865443"
                    className="flex items-center gap-3 text-bambuam-text-muted hover:text-white transition-colors group"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-bambuam-sage group-hover:scale-110 transition-transform" />
                    <span>0660 18 65 443</span>
                  </a>

                  <a
                    href="mailto:office@bambuam.at"
                    className="flex items-center gap-3 text-bambuam-text-muted hover:text-white transition-colors group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-bambuam-sage group-hover:scale-110 transition-transform" />
                    <span>office@bambuam.at</span>
                  </a>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <div className="space-y-2">
                  {FOOTER_LINKS.company.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block text-bambuam-text-muted hover:text-white transition-colors hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="border-y border-bambuam-border py-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-white/5 rounded-lg border border-transparent hover:border-bambuam-sage/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div>
                    <p className="text-white font-medium">{social.label}</p>
                    <p className="text-bambuam-text-muted text-sm">{social.handle}</p>
                  </div>
                  <div className="w-12 h-12 bg-bambuam-green/20 rounded-full flex items-center justify-center group-hover:bg-bambuam-green/40 transition-colors">
                    <social.icon className="w-5 h-5 text-bambuam-sage" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
            <p className="text-bambuam-text-muted text-sm text-center md:text-left">
              © {currentYear} Entworfen und umgesetzt von{' '}
              <a
                href="https://bright-digital.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-bambuam-sage transition-colors"
              >
                bright-digital.at
              </a>
            </p>

            <div className="flex items-center gap-8 text-sm">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-bambuam-text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

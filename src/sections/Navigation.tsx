import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricesOpen, setIsPricesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❌ Removed Contact from here
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services-page" },
    { name: "Experience Bamboo", path: "/experience-bamboo" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bambuam-dark/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-72 px-4">
        <div className="flex items-center justify-between h-32">
          
          {/* Logo */}
          <Link to="/" className="flex items-center flex-col">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <rect x="4" y="12" width="8" height="16" rx="2" fill="white" />
                <rect x="16" y="8" width="8" height="24" rx="2" fill="white" />
                <rect x="28" y="14" width="8" height="12" rx="2" fill="white" />
              </svg>
            </div>
            <span className="text-white font-semibold tracking-widest text-sm">
              BAMBUAM
            </span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Menu Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold ${
                  isActive(link.path)
                    ? "text-italic-accent"
                    : "text-white hover:text-italic-accent transition-colors duration-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Prices Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPricesOpen(!isPricesOpen)}
                className="flex items-center gap-1 text-lg font-semibold text-white hover:text-[#275e27b6] transition-colors duration-300"
              >
                Prices
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isPricesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isPricesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-bambuam-darker border rounded-lg py-2">
                  <Link to="/preise/terrassendielen" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Terrassendielen
                  </Link>
                  <Link to="/preise/zubehoer" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Zubehör
                  </Link>
                  <Link to="/preise/pflege" className="block px-4 py-2 text-sm hover:bg-white/5">
                    Pflegeprodukte
                  </Link>
                </div>
              )}
            </div>

            {/* ✅ CONTACT BUTTON (Separate) */}
            <div className="text-center flex justify-center items-center">
              <Link to="/kontakt" className="bg-[#415540]/85 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-[#415540] flex items-center transition">
                Contact
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-3" />
              </Link>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-bambuam-dark border-t">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-white/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Contact Button Mobile */}
            <Link
              to="/kontakt"
              className="block bg-green-600 text-white px-4 py-2 rounded-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
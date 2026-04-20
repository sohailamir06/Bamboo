import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricesOpen, setIsPricesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPricesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPricesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services-page" },
    { name: "Experience Bamboo", path: "/experience-bamboo" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-bambuam-dark/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <rect x="4" y="12" width="8" height="16" rx="2" fill="white" />
                <rect x="16" y="8" width="8" height="24" rx="2" fill="white" />
                <rect x="28" y="14" width="8" height="12" rx="2" fill="white" />
              </svg>
            </div>
            <span className="text-white font-semibold tracking-widest text-sm lg:text-base">
              BAMBUAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Menu Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Prices Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPricesOpen(!isPricesOpen)}
                className="flex items-center gap-1 nav-link"
              >
                Prices
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPricesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isPricesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-bambuam-darker border border-bambuam-border rounded-lg py-2 shadow-xl animate-fade-in">
                  <Link 
                    to="/preise/terrassendielen" 
                    className="block px-4 py-2.5 text-sm text-bambuam-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Terrassendielen
                  </Link>
                  <Link 
                    to="/preise/zubehoer" 
                    className="block px-4 py-2.5 text-sm text-bambuam-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Zubehör
                  </Link>
                  <Link 
                    to="/preise/pflege" 
                    className="block px-4 py-2.5 text-sm text-bambuam-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Pflegeprodukte
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link 
              to="/kontakt" 
              className="btn-secondary group"
            >
              Contact
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-20 bg-bambuam-dark/98 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container-site py-8 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-4 text-lg font-medium border-b border-bambuam-border transition-all duration-300 ${
                isActive(link.path) 
                  ? "text-bambuam-sage" 
                  : "text-white/80 hover:text-white"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}

          {/* Prices Section Mobile */}
          <div className="py-4 border-b border-bambuam-border">
            <span className="text-white/60 text-sm uppercase tracking-wider">Prices</span>
            <div className="mt-3 space-y-2 pl-4">
              <Link to="/preise/terrassendielen" className="block py-2 text-bambuam-text-secondary hover:text-white transition-colors">
                Terrassendielen
              </Link>
              <Link to="/preise/zubehoer" className="block py-2 text-bambuam-text-secondary hover:text-white transition-colors">
                Zubehör
              </Link>
              <Link to="/preise/pflege" className="block py-2 text-bambuam-text-secondary hover:text-white transition-colors">
                Pflegeprodukte
              </Link>
            </div>
          </div>

          {/* Contact Button Mobile */}
          <Link
            to="/kontakt"
            className="btn-primary w-full mt-6"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
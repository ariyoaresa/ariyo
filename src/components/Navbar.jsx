
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const links = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "/blog", isRoute: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <span className="text-xl font-bold text-black tracking-tight font-serif">Ariyo Aresa.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            )
          )}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-gray-300 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-medium text-gray-800 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            )
          )}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="px-8 py-3 rounded-full border-2 border-black text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
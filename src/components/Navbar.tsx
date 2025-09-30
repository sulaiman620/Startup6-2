import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import combinedLogo from "@/assets/combined-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/residents", label: t("nav.residents") },
    { to: "/registration", label: t("nav.registration") },
  ];

  const externalLinks = [
    { href: "https://www.techstars.com/", label: t("nav.techstarts") }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={combinedLogo} alt="Techstars Startup Weekend Sur" className="h-12 md:h-16 w-auto object-contain rounded-2xl" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:text-accent hover:bg-transparent gap-2"
            >
              <Languages className="h-4 w-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-primary-foreground hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "after:scale-x-100 text-accent" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in-down">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="w-full justify-start text-primary-foreground hover:text-accent hover:bg-transparent gap-2 mb-2"
            >
              <Languages className="h-4 w-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-primary-foreground hover:text-accent transition-colors ${
                    isActive ? "text-accent" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-primary-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

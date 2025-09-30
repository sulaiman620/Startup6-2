import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/residents", label: "Residents" },
    { to: "/registration", label: "Registration" },
  ];

  const externalLink = {
    href: "https://www.techstars.com/",
    label: "Tech Starts"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="https://www.techstars.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl font-bold text-primary-foreground hover:text-accent transition-colors"
          >
            Startup Weekend Sur
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
            <a
              href={externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {externalLink.label}
            </a>
            <Button variant="default" size="sm" className="gradient-secondary hover:opacity-90 ripple">
              Register
            </Button>
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
            <a
              href={externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-primary-foreground hover:text-accent transition-colors"
            >
              {externalLink.label}
            </a>
            <Button variant="default" size="sm" className="gradient-secondary hover:opacity-90 mt-4 w-full">
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

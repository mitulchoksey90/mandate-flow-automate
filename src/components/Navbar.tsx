import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo1 from "@/assets/logo-option-1.png";
import logo2 from "@/assets/logo-option-2.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(1); // Default to logo 1

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src={selectedLogo === 1 ? logo1 : logo2}
              alt="Hisab Clear Logo"
              className="h-8 w-auto"
            />
            {/* Logo selector for testing - remove in production */}
            <div className="hidden lg:flex items-center gap-2 text-xs">
              <button 
                onClick={() => setSelectedLogo(1)}
                className={`px-2 py-1 rounded ${selectedLogo === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              >
                Logo 1
              </button>
              <button 
                onClick={() => setSelectedLogo(2)}
                className={`px-2 py-1 rounded ${selectedLogo === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
              >
                Logo 2
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
            <Button variant="gradient" size="sm">
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Button>
                <Button variant="gradient" size="sm">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menus", label: "Restaurant" },
    { href: "/banquet", label: "Banquet" },
    { href: "/rooms", label: "Rooms" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <span className="font-['Playfair_Display'] font-bold text-2xl md:text-3xl text-primary tracking-wide group-hover:text-primary/90 transition-colors">
              Kingsland
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider",
                  location === link.href && "text-primary font-semibold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-6 font-semibold uppercase tracking-wider"
              >
                Book Now
              </Button>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-foreground focus:outline-none" 
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-md fixed inset-0 z-40 transition-transform duration-300 ease-in-out pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "block text-foreground/80 hover:text-primary text-xl font-medium transition-colors",
                location === link.href && "text-primary font-semibold"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-none font-semibold uppercase tracking-wider mt-4 transition-colors"
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

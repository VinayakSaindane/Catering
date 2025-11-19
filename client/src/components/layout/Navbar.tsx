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
    { href: "/services", label: "Services" },
    { href: "/banquet", label: "Banquet" },
    { href: "/rooms", label: "Rooms" },
    { href: "/menus", label: "Menus" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled && "shadow-md"
    )}>
      <div className="bg-[#F9F5F0] bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1541542684-4a0b63f8675f?q=80&w=200&auto=format&fit=crop" 
                alt="Kingsland Restaurant & Banquets Logo" 
                className="h-10 w-10 rounded-full object-cover mr-3"
              />
              <span className="font-['Playfair_Display'] font-bold text-xl md:text-2xl text-[#2C5F2D]">
                Kingsland Restaurant & Banquets
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "text-[#5A4A42] hover:text-[#2C5F2D] font-medium transition-colors",
                    location === link.href && "text-[#2C5F2D] font-semibold"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button 
                  className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full"
                >
                  Book Now
                </Button>
              </Link>
            </div>
            
            <button 
              className="md:hidden text-[#5A4A42] focus:outline-none" 
              onClick={toggleMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-[#F9F5F0] bg-opacity-95 backdrop-blur-md pb-6 shadow-md",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "block text-[#5A4A42] hover:text-[#2C5F2D] py-2 font-medium",
                location === link.href && "text-[#2C5F2D] font-semibold"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white px-5 py-2 rounded-full font-medium text-center mt-6 transition-colors"
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

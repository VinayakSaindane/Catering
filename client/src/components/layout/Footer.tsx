import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="font-['Playfair_Display'] font-bold text-2xl text-primary">
                Kingsland
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Experience luxury dining, exquisite banquets, and comfortable stays. Kingsland offers a premium hospitality experience tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] font-bold text-lg mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/menus" className="text-secondary-foreground/80 hover:text-primary transition-colors">Restaurant</Link></li>
              <li><Link href="/banquet" className="text-secondary-foreground/80 hover:text-primary transition-colors">Banquet</Link></li>
              <li><Link href="/rooms" className="text-secondary-foreground/80 hover:text-primary transition-colors">Rooms</Link></li>
              <li><Link href="/gallery" className="text-secondary-foreground/80 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] font-bold text-lg mb-6 text-primary">Our Offerings</h3>
            <ul className="space-y-3">
              <li><Link href="/menus" className="text-secondary-foreground/80 hover:text-primary transition-colors">Fine Dining</Link></li>
              <li><Link href="/banquet" className="text-secondary-foreground/80 hover:text-primary transition-colors">Weddings & Events</Link></li>
              <li><Link href="/banquet" className="text-secondary-foreground/80 hover:text-primary transition-colors">Corporate Meetings</Link></li>
              <li><Link href="/rooms" className="text-secondary-foreground/80 hover:text-primary transition-colors">Luxury Suites</Link></li>
              <li><Link href="/rooms" className="text-secondary-foreground/80 hover:text-primary transition-colors">Stay & Dine Packages</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] font-bold text-lg mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span className="text-secondary-foreground/80">Satpala, Virar (W)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-primary"></i>
                <span className="text-secondary-foreground/80">+91 70289 26020</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="text-secondary-foreground/80">info@kingsland.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-primary"></i>
                <span className="text-secondary-foreground/80">Mon-Sun: 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kingsland. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

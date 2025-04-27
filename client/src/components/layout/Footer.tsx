import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#5A4A42] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Shri Cooking & Catering Logo" 
                className="h-10 w-10 rounded-full object-cover mr-3"
              />
              <span className="font-['Playfair_Display'] font-bold text-xl text-white">
                Shri Cooking & Catering Services
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Crafting extraordinary catering experiences with ingredients sourced within 50 miles, celebrating the seasons and supporting local farmers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FFB347] transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FFB347] transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FFB347] transition-colors" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FFB347] transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Playfair_Display'] font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-[#FFB347] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-[#FFB347] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[#FFB347] transition-colors">Services</Link></li>
              <li><Link href="/menus" className="text-white/80 hover:text-[#FFB347] transition-colors">Seasonal Menus</Link></li>
              <li><Link href="/gallery" className="text-white/80 hover:text-[#FFB347] transition-colors">Gallery</Link></li>
              <li><Link href="/testimonials" className="text-white/80 hover:text-[#FFB347] transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-[#FFB347] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-[#FFB347] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Playfair_Display'] font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#corporate" className="text-white/80 hover:text-[#FFB347] transition-colors">Corporate Events</Link></li>
              <li><Link href="/services#weddings" className="text-white/80 hover:text-[#FFB347] transition-colors">Weddings & Celebrations</Link></li>
              <li><Link href="/services#private" className="text-white/80 hover:text-[#FFB347] transition-colors">Private Dining</Link></li>
              <li><Link href="/services#classes" className="text-white/80 hover:text-[#FFB347] transition-colors">Cooking Classes</Link></li>
              <li><Link href="/services#planning" className="text-white/80 hover:text-[#FFB347] transition-colors">Seasonal Menu Planning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Playfair_Display'] font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#FFB347]"></i>
                <span className="text-white/80">Satpala, Virar (W)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-[#FFB347]"></i>
                <span className="text-white/80">+91 70289 26020</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-[#FFB347]"></i>
                <span className="text-white/80">thakurm19@yahoo.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-[#FFB347]"></i>
                <span className="text-white/80">Mon-Fri: 9am-5pm<br />Weekends: By appointment</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shri Cooking & Catering Services. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/60">
            <a href="#" className="hover:text-[#FFB347] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFB347] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FFB347] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

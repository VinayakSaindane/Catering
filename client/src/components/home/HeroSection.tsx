import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
    >
      <div className="absolute inset-0 bg-[#5A4A42] bg-opacity-40"></div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="w-full md:max-w-2xl relative">
            <div className="bg-[#F9F5F0] bg-opacity-90 p-8 md:p-12 rounded-lg shadow-lg">
              <span className="inline-block px-4 py-1 rounded-full bg-[#FFB347] text-[#5A4A42] font-medium text-sm mb-6">
                Hyper-Local & Seasonal Sourcing
              </span>
              <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl lg:text-6xl text-[#2C5F2D] leading-tight mb-6">
                From Our Neighbor's Field to Your Table
              </h1>
              <p className="text-[#5A4A42] text-lg md:text-xl mb-8">
                Crafting extraordinary catering experiences with ingredients sourced within 50 miles, celebrating the seasons and supporting local farmers.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/menus">
                  <Button 
                    className="w-full sm:w-auto bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full px-8 py-6 h-auto"
                  >
                    Explore Seasonal Menus
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent hover:bg-[#CC704B]/10 text-[#CC704B] border-2 border-[#CC704B] rounded-full px-8 py-6 h-auto"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#introduce" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

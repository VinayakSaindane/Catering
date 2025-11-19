import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-none border border-primary text-primary font-medium text-sm mb-6 tracking-[0.2em] uppercase bg-black/30 backdrop-blur-sm">
              Welcome to Kingsland
            </span>
            <h1 className="font-['Playfair_Display'] font-bold text-5xl md:text-7xl text-white leading-tight mb-6 drop-shadow-lg">
              Experience Royal <span className="text-primary">Hospitality</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
              A destination for exquisite dining, grand celebrations, and luxurious stays.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/menus">
                <Button
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-7 h-auto text-lg font-semibold uppercase tracking-wider"
                >
                  Dine With Us
                </Button>
              </Link>
              <Link href="/banquet">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-none px-10 py-7 h-auto text-lg font-semibold uppercase tracking-wider"
                >
                  Plan Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#introduce" className="text-white/80 hover:text-primary transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

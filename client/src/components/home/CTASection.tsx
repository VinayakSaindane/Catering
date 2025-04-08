import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#2C5F2D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.8,-65.9C54.9,-56.7,63.9,-43.2,70.2,-28.2C76.5,-13.3,80.1,3.1,76.5,17.7C73,32.3,62.4,45.2,49.3,52.6C36.3,60.1,20.7,62.2,5.4,64.5C-9.9,66.8,-25,69.4,-38.7,64.9C-52.4,60.5,-64.7,49,-71.9,34.9C-79,20.7,-81,3.8,-76.6,-10.6C-72.2,-25,-61.4,-36.9,-49.1,-46.2C-36.8,-55.5,-23,-62.1,-8.2,-65.6C6.6,-69.1,30.6,-75.1,42.8,-65.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl mb-6">
            Ready to Experience Seasonal Catering?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us create a custom menu highlighting the best local ingredients this season has to offer for your next event.
          </p>
          <Link href="/contact">
            <Button 
              className="bg-white hover:bg-[#F9F5F0] text-[#2C5F2D] rounded-full px-8 py-6 h-auto"
            >
              Request a Seasonal Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

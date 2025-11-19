import { Link } from "wouter";

const IntroductionSection = () => {
  return (
    <section id="introduce" className="py-16 md:py-24 bg-[#F9F5F0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[#CC704B] font-medium mb-3 block">OUR HOSPITALITY</span>
            <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#2C5F2D] mb-6">
              A Place to Dine, Celebrate, and Stay
            </h2>
            <p className="text-[#5A4A42] mb-6 text-lg">
              Welcome to Kingsland — a neighborhood restaurant with elegant banquet spaces and comfortable rooms. Enjoy seasonal menus, thoughtful service, and warm design across every experience.
            </p>
            <p className="text-[#5A4A42] mb-8 text-lg">
              Whether it’s a family dinner, a milestone celebration, or a weekend stay, our team crafts moments that feel personal and effortless — all with the flavors of the season.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-[#E5E5E3] rounded-lg px-5 py-3 flex items-center">
                <i className="fas fa-leaf text-[#2C5F2D] mr-3"></i>
                <span className="font-medium">Seasonal Menus</span>
              </div>
              <div className="bg-[#E5E5E3] rounded-lg px-5 py-3 flex items-center">
                <i className="fas fa-map-marker-alt text-[#2C5F2D] mr-3"></i>
                <span className="font-medium">Central Location</span>
              </div>
              <div className="bg-[#E5E5E3] rounded-lg px-5 py-3 flex items-center">
                <i className="fas fa-utensils text-[#2C5F2D] mr-3"></i>
                <span className="font-medium">Dining • Events • Rooms</span>
              </div>
            </div>
            <Link href="/about" className="inline-flex items-center text-[#2C5F2D] hover:text-[#3A7F3B] font-medium transition-colors">
              Learn more about our philosophy
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
                alt="Kingsland dining area" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop" 
                alt="Banquet celebration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative">
              <img 
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1200&auto=format&fit=crop" 
                alt="Comfortable room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" 
                alt="Plated dish" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

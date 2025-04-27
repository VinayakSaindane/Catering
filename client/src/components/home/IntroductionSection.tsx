import { Link } from "wouter";

const IntroductionSection = () => {
  return (
    <section id="introduce" className="py-16 md:py-24 bg-[#F9F5F0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[#CC704B] font-medium mb-3 block">OUR COMMITMENT</span>
            <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#2C5F2D] mb-6">
              We Cook with the Seasons, Not Against Them
            </h2>
            <p className="text-[#5A4A42] mb-6 text-lg">
              At Shri Cooking & Catering Services, we believe the most flavorful ingredients are those grown nearby and harvested at their peak. That's why we've built partnerships with over 20 local farms to bring you the freshest seasonal bounty.
            </p>
            <p className="text-[#5A4A42] mb-8 text-lg">
              Our menus transform with the changing seasons, ensuring your event features ingredients at their most vibrant and delicious. From spring asparagus to autumn squash, we celebrate nature's calendar in every dish.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-[#E5E5E3] rounded-lg px-5 py-3 flex items-center">
                <i className="fas fa-leaf text-[#2C5F2D] mr-3"></i>
                <span className="font-medium">100% Seasonal</span>
              </div>
              <div className="bg-[#E5E5E3] rounded-lg px-5 py-3 flex items-center">
                <i className="fas fa-map-marker-alt text-[#2C5F2D] mr-3"></i>
                <span className="font-medium">Locally Sourced</span>
              </div>
              <div className="bg-[#E5E5E3] rounded-lg px-5 py-3 flex items-center">
                <i className="fas fa-utensils text-[#2C5F2D] mr-3"></i>
                <span className="font-medium">Farm-Fresh</span>
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
                src="https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80" 
                alt="Farmer harvesting vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80" 
                alt="Chef preparing fresh ingredients" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative">
              <img 
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80" 
                alt="Local produce at farmer's market" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-80 relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80" 
                alt="Plated seasonal dish" 
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

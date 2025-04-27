import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Shri Cooking & Catering";
  }, []);

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-[#CC704B] font-medium mb-3 block">OUR STORY</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              About Shri Cooking & Catering Services
            </h1>
            <p className="text-[#5A4A42] text-lg">
              Discover the passion behind our farm-to-table approach and our commitment to celebrating local ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://5.imimg.com/data5/VW/UQ/BW/GLADMIN-56450036/selection-683.png" 
                alt="Harvest Table team" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">Our Mission</h2>
              <p className="text-[#5A4A42] mb-6">
                At Shri Cooking & Catering Services, we're on a mission to transform how people experience food at events. We believe that exceptional catering begins with exceptional ingredients, which is why we commit to sourcing at least 90% of our ingredients from within 50 miles of our kitchen.
              </p>
              <p className="text-[#5A4A42] mb-6">
                Founded in 2015 by Chef Maria Johnson, our company grew from a passion for showcasing the incredible bounty of our region's small farms and artisan producers. With over 15 years of experience in fine dining restaurants, Chef Maria wanted to bring restaurant-quality, seasonal cuisine to catered events.
              </p>
              <p className="text-[#5A4A42]">
                Today, our team of 12 dedicated culinary professionals continues this mission, creating memorable dining experiences that honor the seasons and support our local agricultural community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">Our Approach</h2>
              <p className="text-[#5A4A42] mb-6">
                We believe the best flavors come from ingredients harvested at their peak. That's why our menus change with the seasons, highlighting what's freshest and most flavorful right now.
              </p>
              <p className="text-[#5A4A42] mb-6">
                Our culinary team visits local farms weekly, developing personal relationships with the growers who supply our ingredients. These connections allow us to showcase unique, heirloom varieties you won't find in grocery stores.
              </p>
              <p className="text-[#5A4A42]">
                When you choose Harvest Table, you're not just getting a meal—you're getting a curated seasonal experience that tells the story of our region's agricultural heritage.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80" 
                alt="Chef selecting fresh produce from farm" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-[#F9F5F0] rounded-lg p-8 md:p-12 mb-20">
    <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6 text-center">Meet Our Team</h2>
    <div className="grid grid-cols-1 gap-8 justify-items-center">
        <div className="text-center">
            <img
                src="/src/assets/images/mohit.png"
                alt="Chef Mohit Thakur"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="font-bold text-lg text-[#5A4A42]">Mohit Thakur</h3>
            <p className="text-[#2C5F2D] font-medium">Executive Chef & Founder</p>
        </div>
    </div>
</div>

          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">Our Farm Partners</h2>
            <p className="text-[#5A4A42] mb-8">
              We're proud to work with these local farms who share our commitment to sustainable agriculture and exceptional flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Green Acres Farm" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#5A4A42] mb-2">Green Acres Farm</h3>
                <p className="text-sm text-[#5A4A42]/80 mb-4">
                  <i className="fas fa-map-marker-alt text-[#CC704B] mr-2"></i>
                  15 miles away • Millfield, CA
                </p>
                <p className="text-[#5A4A42]">Specializing in heirloom tomatoes and stone fruits since 1987.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Riverview Gardens" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#5A4A42] mb-2">Riverview Gardens</h3>
                <p className="text-sm text-[#5A4A42]/80 mb-4">
                  <i className="fas fa-map-marker-alt text-[#CC704B] mr-2"></i>
                  8 miles away • Oakdale, CA
                </p>
                <p className="text-[#5A4A42]">Certified organic vegetable farm practicing regenerative agriculture.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://cheeseworks.ca/cdn/shop/files/Sunshine-Feta.jpg?v=1700501729&width=3840" 
                alt="Sunshine Herbs" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#5A4A42] mb-2">Sunshine Herbs</h3>
                <p className="text-sm text-[#5A4A42]/80 mb-4">
                  <i className="fas fa-map-marker-alt text-[#CC704B] mr-2"></i>
                  3 miles away • Brookside, CA
                </p>
                <p className="text-[#5A4A42]">Urban microfarm specializing in culinary herbs and edible flowers.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full px-8 py-6 h-auto text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Shri Cooking & Catering Services";
  }, []);

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">WHAT WE OFFER</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              Our Catering Services
            </h1>
            <p className="text-[#5A4A42] text-lg">
              We provide exceptional seasonal catering for all types of events, with menus crafted from locally-sourced ingredients at their peak of freshness.
            </p>
          </div>

          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <span className="text-[#CC704B] font-medium mb-2 block">SERVICE DETAIL</span>
                <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">{service.title}</h2>
                <p className="text-[#5A4A42] mb-6">
                  {service.description}
                </p>
                
                <h3 className="font-bold text-lg text-[#5A4A42] mb-4">What We Provide:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Customized seasonal menus featuring local ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Professional service staff</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Setup and cleanup included</span>
                  </li>
                </ul>
                
                <Link href="/contact">
                  <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full px-6 py-2">
                    {service.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          <div className="bg-[#F9F5F0] rounded-lg p-8 md:p-12 mb-16">
            <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6 text-center">Service Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-[#2C5F2D]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-box text-[#2C5F2D] text-2xl"></i>
                </div>
                <h3 className="font-bold text-xl text-[#5A4A42] text-center mb-4">Drop-Off Catering</h3>
                <p className="text-[#5A4A42] mb-4">
                  Perfect for office lunches or casual gatherings. We deliver your freshly prepared meal in eco-friendly packaging with setup instructions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Minimum 10 guests</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Compostable serving ware available</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Hot and cold options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-[#2C5F2D]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-utensils text-[#2C5F2D] text-2xl"></i>
                </div>
                <h3 className="font-bold text-xl text-[#5A4A42] text-center mb-4">Buffet Service</h3>
                <p className="text-[#5A4A42] mb-4">
                  Professional setup and service for your event. Staff maintain the buffet and handle cleanup afterwards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Minimum 20 guests</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Includes service staff</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Professional equipment included</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-[#2C5F2D]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-glass-cheers text-[#2C5F2D] text-2xl"></i>
                </div>
                <h3 className="font-bold text-xl text-[#5A4A42] text-center mb-4">Full-Service</h3>
                <p className="text-[#5A4A42] mb-4">
                  The complete experience with passed hors d'oeuvres, plated courses, and dedicated service throughout your event.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Event manager included</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Plated service available</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                    <span>Bar service available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#2C5F2D] text-white rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-['Playfair_Display'] font-bold text-3xl mb-6">Ready to Plan Your Event?</h2>
                <p className="mb-6 text-white/90">
                  Contact us to discuss how we can create a seasonal menu featuring the freshest local ingredients for your next gathering.
                </p>
                <Link href="/contact">
                  <Button className="bg-white hover:bg-[#F9F5F0] text-[#2C5F2D] rounded-full px-8 py-3">
                    Request a Quote
                  </Button>
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4">The Harvest Table Difference</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-[#FFB347] mt-1 mr-3"></i>
                    <span>Every menu is customized for your event</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-[#FFB347] mt-1 mr-3"></i>
                    <span>Ingredients sourced within 50 miles</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-[#FFB347] mt-1 mr-3"></i>
                    <span>Menus designed around peak seasonal flavors</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-[#FFB347] mt-1 mr-3"></i>
                    <span>Sustainable practices from kitchen to service</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-[#FFB347] mt-1 mr-3"></i>
                    <span>Accommodations for all dietary needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

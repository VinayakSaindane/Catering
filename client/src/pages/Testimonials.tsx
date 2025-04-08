import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { testimonials, trustedClients } from "@/lib/data";

const Testimonials = () => {
  useEffect(() => {
    document.title = "Client Testimonials | Harvest Table Catering";
  }, []);

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">WHAT OUR CLIENTS SAY</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              Testimonials
            </h1>
            <p className="text-[#5A4A42] text-lg">
              See what our clients have to say about their experiences with our seasonal, locally-sourced catering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-[#F9F5F0] rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-5 gap-8">
                  <div className="md:col-span-1 flex flex-col items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="font-bold text-[#2C5F2D] text-center">{testimonial.name}</h3>
                    <p className="text-sm text-[#5A4A42]/80 text-center">{testimonial.role}</p>
                  </div>
                  <div className="md:col-span-4 flex flex-col justify-center">
                    <div className="text-[#FFB347] text-5xl mb-4">"</div>
                    <p className="text-[#5A4A42] text-lg italic mb-4">
                      {testimonial.text}
                    </p>
                    <div className="text-[#FFB347] text-5xl self-end">"</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Extended testimonials */}
            <div className="bg-[#F9F5F0] rounded-lg overflow-hidden shadow-md">
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-1 flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Robert Thompson"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-[#2C5F2D] text-center">Robert Thompson</h3>
                  <p className="text-sm text-[#5A4A42]/80 text-center">Annual Corporate Gala</p>
                </div>
                <div className="md:col-span-4 flex flex-col justify-center">
                  <div className="text-[#FFB347] text-5xl mb-4">"</div>
                  <p className="text-[#5A4A42] text-lg italic mb-4">
                    Our annual gala is a crucial networking event, and Harvest Table delivered beyond expectations. Their commitment to seasonal ingredients wasn't just marketing—guests commented on how much fresher everything tasted. The chef's station featuring local farms was an unexpected highlight that aligned perfectly with our company's sustainability initiatives.
                  </p>
                  <div className="text-[#FFB347] text-5xl self-end">"</div>
                </div>
              </div>
            </div>

            <div className="bg-[#F9F5F0] rounded-lg overflow-hidden shadow-md">
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-1 flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Jennifer & Daniel Walker"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-[#2C5F2D] text-center">Jennifer & Daniel Walker</h3>
                  <p className="text-sm text-[#5A4A42]/80 text-center">Spring Wedding</p>
                </div>
                <div className="md:col-span-4 flex flex-col justify-center">
                  <div className="text-[#FFB347] text-5xl mb-4">"</div>
                  <p className="text-[#5A4A42] text-lg italic mb-4">
                    Working with Harvest Table made our wedding planning so much more meaningful. Instead of choosing from static menu options, they talked with us about the spring season and designed a menu around what would be at its peak. Our guests are still raving about the asparagus appetizer and strawberry dessert bar. The fact that we could tell our guests which farms provided the ingredients made the experience so much more personal.
                  </p>
                  <div className="text-[#FFB347] text-5xl self-end">"</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-center font-['Playfair_Display'] font-bold text-2xl text-[#2C5F2D] mb-8">Trusted By</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {trustedClients.map((client) => (
                <div 
                  key={client.id} 
                  className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all flex items-center justify-center text-lg font-bold"
                >
                  {client.name}
                </div>
              ))}
              <div className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all flex items-center justify-center text-lg font-bold">
                Evergreen Industries
              </div>
              <div className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all flex items-center justify-center text-lg font-bold">
                Summit Financial
              </div>
            </div>
          </div>

          <div className="bg-[#2C5F2D] text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-['Playfair_Display'] font-bold text-3xl mb-6">
              Ready to Experience It Yourself?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Join the many satisfied clients who have experienced our seasonal catering. Contact us today to start planning your event.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-[#F9F5F0] text-[#2C5F2D] rounded-full px-8 py-3">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;

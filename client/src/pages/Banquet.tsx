import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Banquet = () => {
  useEffect(() => {
    document.title = "Kingsland Banquets | Celebrate in Style";
  }, []);

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#CC704B] font-medium mb-3 block">KONKAN ELEGANCE</span>
              <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
                Kingsland Banquet Hall
              </h1>
              <p className="text-[#5A4A42] text-lg mb-6">
                Host weddings, receptions, corporate events and celebrations in our refined Kingsland Banquet Hall. Modern acoustics, elegant lighting, and flexible layouts for 80–350 guests.
              </p>
              <ul className="space-y-3 mb-8 text-[#5A4A42]">
                <li className="flex items-start"><i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>8000+ sq.ft pillar-less hall with pre-function area</li>
                <li className="flex items-start"><i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>Custom stage, decor, and lighting plans</li>
                <li className="flex items-start"><i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>Multi-cuisine menu with live counters</li>
                <li className="flex items-start"><i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>Ample parking and dedicated event concierge</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full">Enquire Banquet</Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" className="bg-transparent hover:bg-[#CC704B]/10 text-[#CC704B] border-2 border-[#CC704B] rounded-full">View Gallery</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <img className="w-full h-full object-cover" alt="Kingsland banquet setup" src="https://images.unsplash.com/photo-1520697222862-67676cbd8795?q=80&w=1600&auto=format&fit=crop" />
              </div>
              <div className="rounded-lg overflow-hidden h-64 md:h-80 mt-8">
                <img className="w-full h-full object-cover" alt="Wedding table decor" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1600&auto=format&fit=crop" />
              </div>
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <img className="w-full h-full object-cover" alt="Stage & lighting" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" />
              </div>
              <div className="rounded-lg overflow-hidden h-64 md:h-80 mt-8">
                <img className="w-full h-full object-cover" alt="Buffet spread" src="https://images.unsplash.com/photo-1529694157877-3ef55536f9a5?q=80&w=1600&auto=format&fit=crop" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F9F5F0]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">Banquet Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: 'Silver', items: ['Welcome drinks', '3-course menu', 'Basic decor']},
              {title: 'Gold', items: ['Mocktail bar', '4-course menu', 'Premium decor', 'Live counter']},
              {title: 'Platinum', items: ['Signature bar', '5-course menu', 'Theme decor', 'Artist/DJ coordination']},
            ].map(p => (
              <div key={p.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-xl text-[#5A4A42] mb-4">{p.title} Package</h3>
                <ul className="space-y-2 text-[#5A4A42]">
                  {p.items.map(i => (
                    <li key={i} className="flex items-start"><i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banquet;

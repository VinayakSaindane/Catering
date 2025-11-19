import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Rooms = () => {
  useEffect(() => {
    document.title = "Kingsland Rooms | Comfortable Stays";
  }, []);

  const roomTypes = [
    {
      name: "Deluxe Room",
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1600&auto=format&fit=crop",
      features: ["Queen/Twin beds", "Air conditioning", "Complimentary Wi‑Fi", "Breakfast included"],
    },
    {
      name: "Executive Room",
      img: "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop",
      features: ["King bed", "Work desk", "Smart TV", "City view"],
    },
    {
      name: "Family Suite",
      img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1600&auto=format&fit=crop",
      features: ["2 bedrooms", "Living area", "Mini pantry", "Extra bedding"],
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">STAY WITH US</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">Kingsland Rooms & Suites</h1>
            <p className="text-[#5A4A42] text-lg">Unwind after a celebration or a long day. Thoughtfully designed rooms with warm hospitality and essential comforts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((r) => (
              <div key={r.name} className="bg-[#F9F5F0] rounded-lg overflow-hidden shadow-sm">
                <div className="h-56">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#2C5F2D] mb-3">{r.name}</h3>
                  <ul className="space-y-2 text-[#5A4A42] mb-6">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-start"><i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full w-full">Enquire Room</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rooms;

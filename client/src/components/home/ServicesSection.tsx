import { Link } from "wouter";
import { services } from "@/lib/data";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#E5E5E3]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#CC704B] font-medium mb-3 block">EXCEPTIONAL CATERING</span>
          <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#2C5F2D] mb-6">Our Services</h2>
          <p className="text-[#5A4A42] text-lg">
            From intimate gatherings to grand celebrations, we offer personalized catering services featuring locally-sourced seasonal ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="h-64">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-[#5A4A42] mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-[#2C5F2D] mt-1 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-[#2C5F2D] hover:text-[#3A7F3B] font-medium transition-colors"
                >
                  {service.ctaText}
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

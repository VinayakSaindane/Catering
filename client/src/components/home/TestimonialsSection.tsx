import { testimonials, trustedClients } from "@/lib/data";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F9F5F0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#CC704B] font-medium mb-3 block">CLIENT EXPERIENCES</span>
          <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#2C5F2D] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[#5A4A42] text-lg">
            Don't just take our word for it. Hear directly from clients who have experienced our seasonal, locally-sourced catering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-md relative">
              <div className="text-[#FFB347] text-4xl absolute -top-4 -left-2">"</div>
              <p className="text-[#5A4A42] mb-6 italic relative z-10">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#2C5F2D]">{testimonial.name}</h4>
                  <p className="text-sm text-[#5A4A42]/80">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-center font-['Playfair_Display'] font-bold text-xl mb-8">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedClients.map((client) => (
              <div 
                key={client.id} 
                className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all flex items-center justify-center"
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

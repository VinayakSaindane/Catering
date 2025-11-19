import { Link } from "wouter";

const IntroductionSection = () => {
  return (
    <section id="introduce" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-primary font-medium mb-3 block tracking-[0.2em] uppercase text-sm">WHERE LUXURY MEETS TRADITION</span>
            <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-5xl text-foreground mb-6">
              A Legacy of Excellence in Hospitality
            </h2>
            <p className="text-foreground/80 mb-6 text-lg">
              At Kingsland, we pride ourselves on delivering an unparalleled experience that combines world-class cuisine, elegant event spaces, and luxurious accommodations. Every detail is crafted to exceed your expectations.
            </p>
            <p className="text-foreground/80 mb-8 text-lg">
              Whether you're celebrating life's most precious moments, hosting a corporate gathering, or seeking a refined dining experience, Kingsland offers the perfect setting with impeccable service.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-secondary rounded-none px-5 py-3 flex items-center border border-primary/20">
                <i className="fas fa-utensils text-primary mr-3"></i>
                <span className="font-medium text-foreground">Fine Dining</span>
              </div>
              <div className="bg-secondary rounded-none px-5 py-3 flex items-center border border-primary/20">
                <i className="fas fa-glass-cheers text-primary mr-3"></i>
                <span className="font-medium text-foreground">Grand Events</span>
              </div>
              <div className="bg-secondary rounded-none px-5 py-3 flex items-center border border-primary/20">
                <i className="fas fa-bed text-primary mr-3"></i>
                <span className="font-medium text-foreground">Luxury Stays</span>
              </div>
            </div>
            <Link href="/about" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors uppercase tracking-wider text-sm">
              Discover Our Story
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-none overflow-hidden h-64 md:h-80 relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                alt="Fine dining table setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-none overflow-hidden h-64 md:h-80 relative mt-8">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                alt="Elegant banquet hall"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-none overflow-hidden h-64 md:h-80 relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                alt="Luxury hotel room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-none overflow-hidden h-64 md:h-80 relative mt-8">
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                alt="Gourmet dish presentation"
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

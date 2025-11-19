import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Banquet = () => {
    useEffect(() => {
        document.title = "Banquet Hall | Kingsland";
    }, []);

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f29da8c2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="font-['Playfair_Display'] font-bold text-5xl md:text-7xl text-white mb-6">
                            Grand <span className="text-primary">Celebrations</span>
                        </h1>
                        <p className="text-white/90 text-xl max-w-2xl mx-auto">
                            Host unforgettable events in our elegant banquet halls
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-medium mb-3 block tracking-[0.2em] uppercase text-sm">
                            CELEBRATE IN STYLE
                        </span>
                        <h2 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-foreground mb-6">
                            Your Perfect Event Venue
                        </h2>
                        <p className="text-foreground/80 text-lg">
                            From intimate gatherings to grand celebrations, our versatile banquet halls provide the perfect backdrop for weddings, corporate events, and special occasions.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-secondary p-8 border border-primary/20">
                            <i className="fas fa-users text-primary text-4xl mb-4"></i>
                            <h3 className="font-['Playfair_Display'] font-bold text-2xl text-foreground mb-3">
                                Capacity
                            </h3>
                            <p className="text-foreground/80">
                                Accommodate 50 to 500 guests with flexible seating arrangements
                            </p>
                        </div>
                        <div className="bg-secondary p-8 border border-primary/20">
                            <i className="fas fa-lightbulb text-primary text-4xl mb-4"></i>
                            <h3 className="font-['Playfair_Display'] font-bold text-2xl text-foreground mb-3">
                                Modern Amenities
                            </h3>
                            <p className="text-foreground/80">
                                State-of-the-art AV equipment, lighting, and climate control
                            </p>
                        </div>
                        <div className="bg-secondary p-8 border border-primary/20">
                            <i className="fas fa-concierge-bell text-primary text-4xl mb-4"></i>
                            <h3 className="font-['Playfair_Display'] font-bold text-2xl text-foreground mb-3">
                                Full Service
                            </h3>
                            <p className="text-foreground/80">
                                Dedicated event planning and catering services included
                            </p>
                        </div>
                    </div>

                    {/* Event Types */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="font-['Playfair_Display'] font-bold text-3xl text-foreground mb-6">
                                Perfect For Every Occasion
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                                    <span className="text-foreground/80 text-lg">Weddings & Receptions</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                                    <span className="text-foreground/80 text-lg">Corporate Conferences</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                                    <span className="text-foreground/80 text-lg">Birthday Celebrations</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                                    <span className="text-foreground/80 text-lg">Anniversary Parties</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                                    <span className="text-foreground/80 text-lg">Social Gatherings</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-none overflow-hidden h-96">
                            <img
                                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Banquet hall setup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-secondary border-t border-primary/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-foreground mb-6">
                        Ready to Plan Your Event?
                    </h2>
                    <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                        Contact our event specialists to discuss your requirements and book your date.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-6 h-auto text-lg font-semibold uppercase tracking-wider">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Banquet;

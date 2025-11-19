import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Rooms = () => {
    useEffect(() => {
        document.title = "Luxury Rooms | Kingsland";
    }, []);

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="font-['Playfair_Display'] font-bold text-5xl md:text-7xl text-white mb-6">
                            Luxury <span className="text-primary">Accommodations</span>
                        </h1>
                        <p className="text-white/90 text-xl max-w-2xl mx-auto">
                            Experience comfort and elegance in our premium rooms and suites
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-medium mb-3 block tracking-[0.2em] uppercase text-sm">
                            REST IN LUXURY
                        </span>
                        <h2 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-foreground mb-6">
                            Your Home Away From Home
                        </h2>
                        <p className="text-foreground/80 text-lg">
                            Each room at Kingsland is thoughtfully designed to provide the ultimate in comfort, style, and modern amenities for a memorable stay.
                        </p>
                    </div>

                    {/* Room Types */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Deluxe Room */}
                        <div className="bg-secondary border border-primary/20 overflow-hidden">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Deluxe Room"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-['Playfair_Display'] font-bold text-2xl text-foreground mb-3">
                                    Deluxe Room
                                </h3>
                                <p className="text-foreground/80 mb-4">
                                    Spacious rooms with modern amenities, perfect for business or leisure travelers.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        King or Twin Beds
                                    </li>
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Free Wi-Fi
                                    </li>
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Smart TV
                                    </li>
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Mini Bar
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Executive Suite */}
                        <div className="bg-secondary border border-primary/20 overflow-hidden">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Executive Suite"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-['Playfair_Display'] font-bold text-2xl text-foreground mb-3">
                                    Executive Suite
                                </h3>
                                <p className="text-foreground/80 mb-4">
                                    Luxurious suites with separate living areas and premium furnishings.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Separate Living Room
                                    </li>
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Premium Bathroom
                                    </li>
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Work Desk
                                    </li>
                                    <li className="flex items-center text-foreground/70">
                                        <i className="fas fa-check text-primary mr-2"></i>
                                        Complimentary Breakfast
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="bg-secondary p-12 border border-primary/20">
                        <h3 className="font-['Playfair_Display'] font-bold text-3xl text-foreground mb-8 text-center">
                            Premium Amenities
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <i className="fas fa-wifi text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">High-Speed Wi-Fi</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-concierge-bell text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">24/7 Room Service</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-dumbbell text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">Fitness Center</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-parking text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">Free Parking</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-swimming-pool text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">Swimming Pool</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-spa text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">Spa Services</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-coffee text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">Coffee Maker</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-shield-alt text-primary text-3xl mb-3"></i>
                                <p className="text-foreground/80">Safe & Secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-secondary border-t border-primary/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-foreground mb-6">
                        Book Your Stay Today
                    </h2>
                    <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                        Experience the finest hospitality and create unforgettable memories at Kingsland.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-6 h-auto text-lg font-semibold uppercase tracking-wider">
                            Reserve Now
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Rooms;

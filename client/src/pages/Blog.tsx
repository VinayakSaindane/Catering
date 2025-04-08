import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Harvest Table Catering";
  }, []);

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">SEASONAL INSIGHTS</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              Our Blog
            </h1>
            <p className="text-[#5A4A42] text-lg">
              Explore stories about seasonal ingredients, local farmers, and tips for planning your next catered event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured post */}
            <div className="lg:col-span-3 bg-[#F9F5F0] rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1595352080848-5da448631a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80" 
                    alt="Behind the Scenes: A Day on the Farm with Our Chef" 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="bg-[#2C5F2D]/10 text-[#2C5F2D] text-xs px-2 py-1 rounded-full inline-block mb-3">FEATURED POST</span>
                  <h2 className="font-['Playfair_Display'] font-bold text-2xl text-[#2C5F2D] mb-3">Behind the Scenes: A Day on the Farm with Our Chef</h2>
                  <p className="text-[#5A4A42] mb-4">
                    Follow Chef Maria as she visits our partner farms to select the finest seasonal ingredients for our upcoming menus. Learn about our farm-to-table journey.
                  </p>
                  <div className="flex items-center text-sm text-[#5A4A42]/80 mb-4">
                    <i className="fas fa-calendar-alt mr-2 text-[#CC704B]"></i>
                    <span>{formatDate("2023-08-05")}</span>
                    <span className="mx-3">•</span>
                    <span className="bg-[#E5E5E3] rounded-full px-3 py-1">Farm Partners</span>
                  </div>
                  <Link href="/blog/day-on-farm">
                    <Button variant="link" className="text-[#2C5F2D] p-0 font-medium flex items-center">
                      Read the full story
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog posts */}
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-[#5A4A42]/80 mb-3">
                    <i className="fas fa-calendar-alt mr-2 text-[#CC704B]"></i>
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-[#E5E5E3] rounded-full px-2 py-1">{post.category}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#5A4A42] mb-3">{post.title}</h3>
                  <p className="text-[#5A4A42] mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="text-[#2C5F2D] p-0 font-medium flex items-center">
                      Read more
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}

            {/* Additional blog posts */}
            <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Seasonal Spotlight: Winter Citrus"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-xs text-[#5A4A42]/80 mb-3">
                  <i className="fas fa-calendar-alt mr-2 text-[#CC704B]"></i>
                  <span>{formatDate("2023-05-20")}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-[#E5E5E3] rounded-full px-2 py-1">Seasonal Ingredients</span>
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#5A4A42] mb-3">Seasonal Spotlight: Winter Citrus</h3>
                <p className="text-[#5A4A42] mb-4 line-clamp-3">
                  Discover the bright flavors of winter citrus fruits and how we incorporate them into our cold-weather menus.
                </p>
                <Link href="/blog/winter-citrus">
                  <Button variant="link" className="text-[#2C5F2D] p-0 font-medium flex items-center">
                    Read more
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470016342826-876ea880d0be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="How to Choose a Sustainable Caterer"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-xs text-[#5A4A42]/80 mb-3">
                  <i className="fas fa-calendar-alt mr-2 text-[#CC704B]"></i>
                  <span>{formatDate("2023-04-15")}</span>
                  <span className="mx-2">•</span>
                  <span className="bg-[#E5E5E3] rounded-full px-2 py-1">Event Planning</span>
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#5A4A42] mb-3">How to Choose a Sustainable Caterer</h3>
                <p className="text-[#5A4A42] mb-4 line-clamp-3">
                  Key questions to ask and factors to consider when seeking a caterer who prioritizes sustainability and local sourcing.
                </p>
                <Link href="/blog/sustainable-caterer">
                  <Button variant="link" className="text-[#2C5F2D] p-0 font-medium flex items-center">
                    Read more
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mb-16">
            <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full px-8 py-3">
              Load More Articles
            </Button>
          </div>

          <div className="bg-[#F9F5F0] rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">
                  Subscribe to Our Seasonal Newsletter
                </h2>
                <p className="text-[#5A4A42] mb-6">
                  Stay updated with seasonal ingredient spotlights, event planning tips, and special offers. We'll send you our latest recipes and catering insights every month.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-full border border-[#E5E5E3] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
                    required
                  />
                  <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full px-6">
                    Subscribe
                  </Button>
                </form>
                <p className="text-sm text-[#5A4A42]/70 mt-3">
                  We respect your privacy and will never share your information.
                </p>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Newsletter" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

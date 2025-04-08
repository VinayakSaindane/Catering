import { useEffect, useState } from "react";
import { galleryCategories } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | Harvest Table Catering";
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<null | {src: string, alt: string}>(null);

  // Combine all images for the "All" tab
  const allImages = galleryCategories.flatMap(category => 
    category.images.map(image => ({
      ...image, 
      category: category.id
    }))
  );

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">OUR PORTFOLIO</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              Event Gallery
            </h1>
            <p className="text-[#5A4A42] text-lg">
              Browse our seasonal catering experiences across a variety of events. Every dish showcases our commitment to local, peak-season ingredients.
            </p>
          </div>

          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-16">
            <TabsList className="bg-transparent flex flex-wrap justify-center gap-2 mb-12">
              <TabsTrigger 
                value="all"
                className={`px-6 py-2 rounded-full border ${
                  activeCategory === "all" 
                    ? "bg-[#2C5F2D] text-white border-[#2C5F2D]" 
                    : "bg-transparent text-[#5A4A42] border-[#E5E5E3] hover:border-[#2C5F2D]"
                }`}
              >
                All Events
              </TabsTrigger>
              {galleryCategories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className={`px-6 py-2 rounded-full border ${
                    activeCategory === category.id 
                      ? "bg-[#2C5F2D] text-white border-[#2C5F2D]" 
                      : "bg-transparent text-[#5A4A42] border-[#E5E5E3] hover:border-[#2C5F2D]"
                  }`}
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allImages.map(image => (
                  <div 
                    key={`${image.category}-${image.id}`} 
                    className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                    onClick={() => handleImageClick(image.src, image.alt)}
                  >
                    <div className="relative aspect-[4/3]">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {galleryCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="border-none p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images.map(image => (
                    <div 
                      key={image.id} 
                      className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                      onClick={() => handleImageClick(image.src, image.alt)}
                    >
                      <div className="relative aspect-[4/3]">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="bg-[#F9F5F0] rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-6">
              Let's Create Your Event
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-[#5A4A42]">
              Ready to plan an event featuring fresh, seasonal cuisine? Contact us to discuss how we can bring the farm-to-table experience to your next gathering.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Get in Touch
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-[#FFB347] z-50"
              onClick={closeModal}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-2">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;

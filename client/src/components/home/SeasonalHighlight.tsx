import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { seasonalIngredients } from "@/lib/data";
import { getCurrentSeason } from "@/lib/utils";

const SeasonalHighlight = () => {
  const currentSeason = getCurrentSeason();
  const currentSeasonIngredients = seasonalIngredients.filter(
    ingredient => ingredient.season === currentSeason
  ).slice(0, 3);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#CC704B] font-medium mb-3 block">THIS SEASON'S STARS</span>
          <h2 className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#2C5F2D] mb-6">
            What's Fresh This
            <span className="italic"> {currentSeason}</span>
          </h2>
          <p className="text-[#5A4A42] text-lg">
            Our menus evolve with nature's rhythm. Here's what's inspiring our chefs right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentSeasonIngredients.map((ingredient) => (
            <div 
              key={ingredient.id}
              className="bg-[#F9F5F0] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64">
                <img 
                  src={"https://diethood.com/wp-content/uploads/2018/02/Sheet-Pan-Steak-and-Veggies-Recipe.jpg"}
                  alt={`Fresh ${ingredient.name} from ${ingredient.farm}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#FFB347]/90 px-3 py-1 rounded-full text-xs font-semibold text-[#5A4A42]">
                  {currentSeason} Harvest
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-['Playfair_Display'] font-bold text-xl">{ingredient.name}</h3>
                  <span className="bg-[#2C5F2D]/10 text-[#2C5F2D] text-xs px-2 py-1 rounded-full">
                    {ingredient.distance}
                  </span>
                </div>
                <p className="text-[#5A4A42] mb-4">
                  {ingredient.description}
                </p>
                <p className="text-sm text-[#5A4A42]/80 flex items-center">
                  <i className="fas fa-map-pin mr-2 text-[#CC704B]"></i>
                  {ingredient.farm}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/menus">
            <Button className="bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full inline-flex items-center px-8 py-6 h-auto">
              View Our {currentSeason} Menu
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlight;

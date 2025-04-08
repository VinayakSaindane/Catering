import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuCategories } from "@/lib/data";
import { getCurrentSeason } from "@/lib/utils";

interface MenuItem {
  name: string;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  farm?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Menus = () => {
  useEffect(() => {
    document.title = "Seasonal Menus | Harvest Table Catering";
  }, []);

  const currentSeason = getCurrentSeason().toLowerCase();
  const [activeTab, setActiveTab] = useState(currentSeason);

  // Sample menu data - in a real app this would come from an API
  const menuData: Record<string, MenuCategory[]> = {
    summer: [
      {
        title: "Starters",
        items: [
          {
            name: "Heritage Tomato & Burrata Salad",
            description: "Vine-ripened heirloom tomatoes, fresh burrata, basil, olive oil, aged balsamic",
            isVegetarian: true,
            isGlutenFree: true,
            farm: "Green Acres Farm"
          },
          {
            name: "Grilled Summer Vegetable Platter",
            description: "Seasonal squash, eggplant, peppers, asparagus with romesco sauce",
            isVegan: true,
            isGlutenFree: true,
            farm: "Riverview Gardens"
          },
          {
            name: "Chilled Cucumber Gazpacho",
            description: "With fresh herbs and lemon olive oil",
            isVegan: true,
            isGlutenFree: true,
            farm: "Sunshine Herbs"
          }
        ]
      },
      {
        title: "Main Courses",
        items: [
          {
            name: "Herb-Roasted Free-Range Chicken",
            description: "With summer vegetable succotash and herb jus",
            isGlutenFree: true,
            farm: "Oakwood Poultry"
          },
          {
            name: "Grilled Wild Salmon",
            description: "With summer bean salad and herb vinaigrette",
            isGlutenFree: true,
            farm: "Pacific Seafood"
          },
          {
            name: "Summer Vegetable Risotto",
            description: "Featuring sweet corn, cherry tomatoes, and basil",
            isVegetarian: true,
            farm: "Riverview Gardens"
          }
        ]
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Stone Fruit Galette",
            description: "With local peaches, nectarines, and vanilla ice cream",
            isVegetarian: true,
            farm: "Green Acres Farm"
          },
          {
            name: "Summer Berry Trifle",
            description: "Layers of fresh berries, cream, and butter cake",
            isVegetarian: true,
            farm: "Berry Patch Farm"
          }
        ]
      }
    ],
    fall: [
      {
        title: "Starters",
        items: [
          {
            name: "Roasted Butternut Squash Soup",
            description: "With spiced pepitas and sage cream",
            isVegetarian: true,
            isGlutenFree: true,
            farm: "Hillside Farm"
          },
          {
            name: "Wild Mushroom Tartine",
            description: "Foraged mushrooms, thyme, garlic on artisan sourdough",
            isVegetarian: true,
            farm: "Forest Floor Foragers"
          }
        ]
      },
      {
        title: "Main Courses",
        items: [
          {
            name: "Cider-Braised Pork Shoulder",
            description: "With roasted apples and root vegetables",
            isGlutenFree: true,
            farm: "Heritage Farms"
          },
          {
            name: "Maple-Glazed Duck Breast",
            description: "With wilted greens and roasted turnips",
            isGlutenFree: true,
            farm: "Lakeside Poultry"
          }
        ]
      }
    ],
    winter: [
      {
        title: "Starters",
        items: [
          {
            name: "Winter Citrus Salad",
            description: "Blood oranges, grapefruit, fennel, and mint with champagne vinaigrette",
            isVegan: true,
            isGlutenFree: true,
            farm: "Citrus Grove"
          }
        ]
      },
      {
        title: "Main Courses",
        items: [
          {
            name: "Slow-Cooked Short Ribs",
            description: "With celery root puree and glazed winter vegetables",
            isGlutenFree: true,
            farm: "Green Pastures Ranch"
          }
        ]
      }
    ],
    spring: [
      {
        title: "Starters",
        items: [
          {
            name: "Spring Pea Soup",
            description: "With mint, creme fraiche, and pea shoots",
            isVegetarian: true,
            isGlutenFree: true,
            farm: "Valley View Gardens"
          }
        ]
      },
      {
        title: "Main Courses",
        items: [
          {
            name: "Spring Lamb Rack",
            description: "With fava beans, spring onions, and herb sauce",
            isGlutenFree: true,
            farm: "Meadow Farm"
          }
        ]
      }
    ]
  };

  return (
    <main className="pt-24 pb-16">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">TASTE THE SEASONS</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              Our Seasonal Menus
            </h1>
            <p className="text-[#5A4A42] text-lg">
              Our menus change with the seasons to showcase the best local ingredients at their peak. Here's a sample of what we offer throughout the year.
            </p>
          </div>

          <Tabs defaultValue={currentSeason} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent mb-8">
              {menuCategories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className={`relative overflow-hidden rounded-lg h-36 md:h-48 ${
                    activeTab === category.id 
                      ? "ring-4 ring-[#2C5F2D]" 
                      : "hover:ring-2 hover:ring-[#2C5F2D]/50"
                  }`}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-black ${
                      activeTab === category.id ? "bg-opacity-40" : "bg-opacity-60"
                    }`}></div>
                  </div>
                  <div className="relative z-10 text-white">
                    <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                    <p className="text-xs text-white/80 mx-2">{category.description}</p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(menuData).map(season => (
              <TabsContent key={season} value={season} className="border-none p-0">
                <div className="bg-[#F9F5F0] rounded-lg p-8 md:p-12">
                  <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#2C5F2D] mb-2 text-center">
                    {season.charAt(0).toUpperCase() + season.slice(1)} Menu
                  </h2>
                  <p className="text-center text-[#5A4A42] mb-12">
                    Featuring the freshest ingredients from our local farm partners this {season}.
                  </p>

                  <div className="space-y-12">
                    {menuData[season].map((category, index) => (
                      <div key={index}>
                        <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#2C5F2D] mb-6 pb-2 border-b border-[#2C5F2D]/20">
                          {category.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-white rounded-lg p-6 shadow-sm">
                              <div className="flex justify-between">
                                <h4 className="font-bold text-lg text-[#5A4A42] mb-2">{item.name}</h4>
                                <div className="flex space-x-2">
                                  {item.isVegetarian && (
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full" title="Vegetarian">V</span>
                                  )}
                                  {item.isVegan && (
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full" title="Vegan">VG</span>
                                  )}
                                  {item.isGlutenFree && (
                                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full" title="Gluten Free">GF</span>
                                  )}
                                </div>
                              </div>
                              <p className="text-[#5A4A42] mb-3">{item.description}</p>
                              {item.farm && (
                                <p className="text-sm text-[#5A4A42]/70 flex items-center">
                                  <i className="fas fa-tractor text-[#CC704B] mr-2"></i>
                                  {item.farm}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-12">
                    <p className="text-[#5A4A42] italic mb-4">
                      Sample menu only. All menus are customized based on seasonal availability and your preferences.
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <i className="fas fa-leaf text-[#2C5F2D]"></i>
                      <div className="flex space-x-3">
                        <span className="flex items-center text-sm">
                          <span className="w-4 h-4 inline-block bg-green-100 text-green-800 rounded-full text-xs flex items-center justify-center mr-1">V</span>
                          Vegetarian
                        </span>
                        <span className="flex items-center text-sm">
                          <span className="w-4 h-4 inline-block bg-green-100 text-green-800 rounded-full text-xs flex items-center justify-center mr-1">VG</span>
                          Vegan
                        </span>
                        <span className="flex items-center text-sm">
                          <span className="w-4 h-4 inline-block bg-yellow-100 text-yellow-800 rounded-full text-xs flex items-center justify-center mr-1">GF</span>
                          Gluten Free
                        </span>
                      </div>
                      <i className="fas fa-leaf text-[#2C5F2D]"></i>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="bg-[#2C5F2D] text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-['Playfair_Display'] font-bold text-3xl mb-6">
              Ready to Create Your Custom Menu?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              These sample menus give you a taste of our seasonal offerings. Contact us to create a custom menu for your specific event featuring the freshest local ingredients available right now.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-[#F9F5F0] text-[#2C5F2D] rounded-full px-8 py-3">
                Request a Custom Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menus;

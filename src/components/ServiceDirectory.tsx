import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, Star } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Photography", "Design", "Development", "Writing"];

const providers = [
  {
    name: "Dawit Photography",
    category: "Photography",
    rate: "1,500 ETB/hr",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 47,
    description: "Professional event & portrait photography with 8+ years of experience.",
  },
  {
    name: "Marta Creative Studio",
    category: "Design",
    rate: "2,000 ETB/hr",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    rating: 5.0,
    reviews: 32,
    description: "Brand identity, UI/UX design, and visual storytelling for modern businesses.",
  },
  {
    name: "Yonas Full-Stack Solutions",
    category: "Development",
    rate: "2,500 ETB/hr",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 28,
    description: "End-to-end web & mobile development using React, Node.js, and cloud infrastructure.",
  },
];

export const ServiceDirectory = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProviders = providers.filter((provider) => {
    const matchesCategory = activeCategory === "All" || provider.category === activeCategory;
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="explore-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332] mb-4">
            Explore Services
          </h2>
          <p className="text-[#222222]/70 max-w-xl mx-auto text-lg">
            Browse verified professionals ready to bring your vision to life.
          </p>
          <div className="w-20 h-1 bg-[#1B4332]/20 mx-auto rounded-full mt-6" />
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center p-2 bg-[#FDFBF7] rounded-full shadow-sm border border-[#1B4332]/10">
            <div className="pl-4 flex items-center flex-1">
              <Search className="w-5 h-5 text-[#222222]/40" />
              <input
                type="text"
                placeholder="Search for photographers, developers, designers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-none bg-transparent focus:outline-none text-[#222222] placeholder:text-[#222222]/40 text-base px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#1B4332] text-[#FDFBF7] shadow-md"
                  : "bg-[#1B4332]/5 text-[#1B4332]/70 hover:bg-[#1B4332]/10 hover:text-[#1B4332]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProviders.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#1B4332]/5 hover:shadow-xl hover:border-[#1B4332]/10 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-medium text-[#1B4332]/70 bg-[#1B4332]/5 rounded-full px-3 py-1 mb-3">
                  {provider.category}
                </span>
                <h3 className="text-xl font-bold text-[#222222] mb-1">
                  {provider.name}
                </h3>
                <p className="text-sm text-[#222222]/60 mb-3 leading-relaxed">
                  {provider.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#D4A853] text-[#D4A853]" />
                    <span className="text-sm font-semibold text-[#222222]">{provider.rating}</span>
                  </div>
                  <span className="text-sm text-[#222222]/40">({provider.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#1B4332]">{provider.rate}</span>
                  <Button className="bg-[#1B4332] text-[#FDFBF7] hover:bg-[#1B4332]/90 rounded-full px-6 py-2 text-sm font-medium transition-all group-hover:shadow-lg">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

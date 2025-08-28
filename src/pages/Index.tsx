import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSearch from "@/components/FilterSearch";
import FeaturedTools from "@/components/FeaturedTools";
import Categories from "@/components/Categories";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FilterSearch 
        selectedCategory={selectedCategory}
      />
      <FeaturedTools selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Categories />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;

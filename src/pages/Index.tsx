import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSearch from "@/components/FilterSearch";
import FeaturedTools from "@/components/FeaturedTools";
import Categories from "@/components/Categories";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FilterSearch />
      <FeaturedTools />
      <Categories />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;

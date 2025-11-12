import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSearch from "@/components/FilterSearch";
import FeaturedTools from "@/components/FeaturedTools";
import Categories from "@/components/Categories";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI TOOLS PRIME - Discover the Best AI Tools</title>
        <meta name="description" content="Discover, compare, and choose from the world's largest collection of AI tools. Find AI solutions for writing, image generation, coding, and more." />
        <meta property="og:title" content="AI TOOLS PRIME - Discover the Best AI Tools" />
        <meta property="og:description" content="Discover, compare, and choose from the world's largest collection of AI tools." />
        <meta property="og:url" content="https://www.aitoolsprime.com/" />
        <meta name="twitter:title" content="AI TOOLS PRIME - Discover the Best AI Tools" />
        <meta name="twitter:description" content="Discover, compare, and choose from the world's largest collection of AI tools." />
        <link rel="canonical" href="https://www.aitoolsprime.com/" />
      </Helmet>
      <Header />
      <Hero />
      <FilterSearch 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
      />
      <FeaturedTools selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} searchQuery={searchQuery} />
      <Categories />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;

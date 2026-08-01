import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedCollections from "./components/FeaturedCollections/FeaturedCollections";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import TypeFilter from "./components/TypeFilter/TypeFilter";
import PriceSort from "./components/PriceSort/PriceSort";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import QuickViewModal from "./components/QuickViewModal/QuickViewModal";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("default");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedCollections />

      <WhyChoose />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="filters">
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <TypeFilter
          type={type}
          setType={setType}
        />

        <PriceSort
          sort={sort}
          setSort={setSort}
        />
      </div>

      <Products
        search={search}
        category={category}
        type={type}
        sort={sort}
        setSelectedProduct={setSelectedProduct}
        setIsModalOpen={setIsModalOpen}
      />

      <CartDrawer />

      <QuickViewModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={(product) => {
          console.log(product);
        }}
      />

      <Footer />
    </>
  );
}

export default App;
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedCollections from "./components/FeaturedCollections/FeaturedCollections";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <WhyChoose />
      <Products />
      <Footer />
    </>
  );
}

export default App;
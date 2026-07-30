import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products({ search, category, type, sort }) {

  // Filter products
  const filteredProducts = products.filter((product) => {

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    const matchType =
      type === "All" || product.type === type;

    return matchSearch && matchCategory && matchType;
  });

  // Sort products
  const sortedProducts = [...filteredProducts];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="products">

      <h2>Featured Products</h2>

      <div className="products-grid">

        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default Products;
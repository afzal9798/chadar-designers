import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products() {

  return (

    <section className="products">

      <h2>Featured Products</h2>

      <div className="products-grid">

        {products.map((product)=>(

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
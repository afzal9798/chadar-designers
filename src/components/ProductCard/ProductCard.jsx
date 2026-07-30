import "./ProductCard.css";

function ProductCard({ product }) {

  return (

    <div className="product-card">
        <span className="badge">{product.category}</span>

        <span className="wishlist">🤍 </span>

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="category">
        {product.category} • {product.type}
      </p>

      <h2>₹{product.price}</h2>

      <p className="rating">⭐⭐⭐⭐⭐ ({product.rating}.0)</p>

      <div className="buttons">

        <button className="details-btn">
          View Details
        </button>

        <button className="cart-btn">
          Add to Cart
        </button>

         <button className="whatsapp-btn">WhatsApp Order</button>


      </div>

    </div>

  );

}

export default ProductCard;
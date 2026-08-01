import "./ProductCard.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function ProductCard({
  product,
  setSelectedProduct,
  setIsModalOpen,
}) {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleViewDetails = () => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="product-card">

      <span className="badge">
        {product.category}
      </span>

      <span
        className="wishlist"
        onClick={() => toggleWishlist(product)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </span>

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="category">
        {product.category} • {product.type}
      </p>

      <h2>₹{product.price}</h2>

      <p className="rating">
        ⭐⭐⭐⭐⭐ ({product.rating}.0)
      </p>

      <div className="buttons">

        <button
          className="details-btn"
          onClick={handleViewDetails}
        >
          View Details
        </button>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button className="whatsapp-btn">
          WhatsApp Order
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
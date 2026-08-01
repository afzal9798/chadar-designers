import "./ProductCard.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

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

      {/* Category Badge */}
      <span className="badge">
        {product.category}
      </span>

      {/* Premium Badge */}
      <div className="top-badge">
        {product.badge}
      </div>

      {/* Wishlist */}
      <span
        className="wishlist"
        onClick={() => toggleWishlist(product)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </span>

      {/* Product Image */}
      <div className="image-container">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="image-overlay">
          <button
            onClick={handleViewDetails}
          >
            👁 Quick View
          </button>
        </div>

      </div>

      {/* Product Name */}
      <h3>{product.name}</h3>

      {/* Category */}
      <p className="category">
        {product.category} • {product.type}
      </p>

      {/* Price */}
      <div className="price-section">

        <h2 className="new-price">
          ₹{product.price}
        </h2>

        <span className="old-price">
          ₹{product.oldPrice}
        </span>

        <span className="discount">
          {product.discount}% OFF
        </span>

      </div>

      {/* Rating */}
      <div className="product-meta">

        <span className="rating">
          ⭐ {product.rating}
        </span>

        <span className="reviews">
          {product.reviews} Reviews
        </span>

      </div>

      {/* Stock */}
      <p className="stock">
        🟢 {product.stock}
      </p>

      {/* Delivery */}
      <p className="delivery">
        🚚 Free Delivery
      </p>

      {/* Buttons */}
      <div className="buttons">

        <button
          className="details-btn"
          onClick={handleViewDetails}
        >
          View Details
        </button>

        <button
          className="cart-btn"
            onClick={() => {
            addToCart(product);

           toast.success(
            `${product.name} added to cart 🛒`
          );
          }}
        >
          Add To Cart
        </button>

        <button className="whatsapp-btn">
          WhatsApp Order
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
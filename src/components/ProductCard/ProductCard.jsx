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
  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  // View Details
  const handleViewDetails = () => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Add To Cart
  const handleAddToCart = () => {
    addToCart(product);

    toast.success(
      `${product.name} added to cart 🛒`
    );
  };

  // WhatsApp Order
  const handleWhatsAppOrder = () => {
    // Apna WhatsApp number yahan daalo
    // Country code ke saath, + ke bina
    const phone = "919798014447";

    const message =
      `🛏️ Hello Chadar Designers,%0A%0A` +
      `I want to order:%0A%0A` +
      `Product: ${product.name}%0A` +
      `Category: ${product.category}%0A` +
      `Type: ${product.type}%0A` +
      `Price: ₹${product.price}%0A` +
      `Quantity: 1%0A%0A` +
      `Please confirm my order.`;

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="product-card">

      {/* Category Badge */}
      <span className="badge">
        {product.category}
      </span>

      {/* Premium Badge */}
      {product.badge && (
        <div className="top-badge">
          {product.badge}
        </div>
      )}

      {/* Wishlist */}
      <span
        className="wishlist"
        onClick={() => {
        toggleWishlist(product);

        if (isWishlisted) {
          toast.error(`${product.name} removed from wishlist`);
        } else {
          toast.success(`${product.name} added to wishlist ❤️`);
        }
        }}
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
          <button onClick={handleViewDetails}>
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

        {product.oldPrice && (
          <span className="old-price">
            ₹{product.oldPrice}
          </span>
        )}

        {product.discount && (
          <span className="discount">
            {product.discount}% OFF
          </span>
        )}

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

        {/* View Details */}
        <button
          className="details-btn"
          onClick={handleViewDetails}
        >
          View Details
        </button>

        {/* Add To Cart */}
        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

        {/* WhatsApp Order */}
        <button
          className="whatsapp-btn"
          onClick={handleWhatsAppOrder}
        >
          WhatsApp Order
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
import "./WishlistDrawer.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

function WishlistDrawer({
  isOpen,
  onClose,
}) {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  // Wishlist → Cart
  const handleAddToCart = (product) => {
    // Add product to cart
    addToCart(product);

    // Remove product from wishlist
    removeFromWishlist(product.id);

    // Show notification
    toast.success(
      `${product.name} moved to cart 🛒`
    );
  };

  // Remove from wishlist
  const handleRemove = (product) => {
    removeFromWishlist(product.id);

    toast.error(
      `${product.name} removed from wishlist`
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="wishlist-overlay">

      <div className="wishlist-drawer">

        {/* Header */}
        <div className="wishlist-header">

          <h2>
            ❤️ My Wishlist
          </h2>

          <button
            className="wishlist-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        {/* Body */}
        <div className="wishlist-body">

          {wishlist.length === 0 ? (
            <div className="wishlist-empty">

              <div className="empty-heart">
                🤍
              </div>

              <h3>
                Your wishlist is empty
              </h3>

              <p>
                Add your favourite products
                here.
              </p>

            </div>
          ) : (
            wishlist.map((product) => (

              <div
                className="wishlist-item"
                key={product.id}
              >

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                />

                {/* Product Info */}
                <div className="wishlist-info">

                  <h3>
                    {product.name}
                  </h3>

                  <p className="wishlist-price">
                    ₹{product.price}
                  </p>

                  <p className="wishlist-type">
                    {product.category} •{" "}
                    {product.type}
                  </p>

                  {/* Actions */}
                  <div className="wishlist-actions">

                    <button
                      className="wishlist-cart-btn"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                    >
                      🛒 Add To Cart
                    </button>

                    <button
                      className="wishlist-remove-btn"
                      onClick={() =>
                        handleRemove(product)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default WishlistDrawer;
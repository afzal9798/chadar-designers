import "./QuickViewModal.css";

function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
        />

        <h2>{product.name}</h2>

        <p className="price">
          ₹{product.price}
        </p>

        <p className="rating">
          ⭐⭐⭐⭐⭐ ({product.rating}.0)
        </p>

        <p className="description">
          {product.description}
        </p>

        <button
          className="modal-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default QuickViewModal;
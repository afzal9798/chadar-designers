import "./QuickViewModal.css";
import { useState } from "react";

function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!isOpen || !product) return null;

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const totalImages = productImages.length;

  const nextImage = () => {
    setSelectedImage((current) =>
      current === totalImages - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? totalImages - 1 : current - 1
    );
  };

  return (
    <div
      className="quickview-overlay"
      onClick={onClose}
    >
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        {/* ================= IMAGE GALLERY ================= */}

        <div className="gallery-section">

          <div className="main-image-container">

            {/* Previous */}
            {totalImages > 1 && (
              <button
                className="gallery-arrow gallery-prev"
                onClick={previousImage}
              >
                ‹
              </button>
            )}

            {/* Main Image */}
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="main-product-image"
            />

            {/* Next */}
            {totalImages > 1 && (
              <button
                className="gallery-arrow gallery-next"
                onClick={nextImage}
              >
                ›
              </button>
            )}

          </div>

          {/* Thumbnails */}
          <div className="thumbnail-container">

            {productImages.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${
                  selectedImage === index
                    ? "active-thumbnail"
                    : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>

          {/* Image Counter */}
          <p className="image-counter">
            {selectedImage + 1} / {totalImages}
          </p>

        </div>

        {/* ================= PRODUCT INFORMATION ================= */}

        <div className="quickview-info">

          <span className="quickview-badge">
            {product.badge}
          </span>

          <h2>{product.name}</h2>

          <p className="quickview-category">
            {product.category} • {product.type}
          </p>

          {/* Price */}
          <div className="quickview-price">

            <span className="quickview-new-price">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="quickview-old-price">
                ₹{product.oldPrice}
              </span>
            )}

            {product.discount && (
              <span className="quickview-discount">
                {product.discount}% OFF
              </span>
            )}

          </div>

          {/* Rating */}
          <div className="quickview-rating">
            ⭐ {product.rating}

            <span>
              ({product.reviews} Reviews)
            </span>
          </div>

          {/* Stock */}
          <p className="quickview-stock">
            🟢 {product.stock}
          </p>

          {/* Delivery */}
          <p className="quickview-delivery">
            🚚 Free Delivery
          </p>

          {/* Description */}
          <p className="description">
            {product.description}
          </p>

          {/* Add To Cart */}
          <button
            className="modal-cart-btn"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
          >
            🛒 Add To Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default QuickViewModal;
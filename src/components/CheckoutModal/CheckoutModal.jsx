import "./CheckoutModal.css";
import { useState } from "react";
import toast from "react-hot-toast";

function CheckoutModal({
  isOpen,
  onClose,
  onConfirm,
  total,
  deliveryCharge,
  grandTotal,
}) {
  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mobile aur PIN me sirf numbers allow
    if (name === "mobile" || name === "pincode") {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));

    // User type kare to us field ka error hata do
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Full Name
    if (!customer.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    // Mobile
    if (!customer.mobile.trim()) {
      newErrors.mobile =
        "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(customer.mobile)) {
      newErrors.mobile =
        "Enter a valid 10-digit mobile number.";
    }

    // Address
    if (!customer.address.trim()) {
      newErrors.address =
        "Please enter your complete address.";
    }

    // City
    if (!customer.city.trim()) {
      newErrors.city =
        "Please enter your city.";
    }

    // PIN
    if (!customer.pincode.trim()) {
      newErrors.pincode =
        "Please enter your PIN code.";
    } else if (!/^\d{6}$/.test(customer.pincode)) {
      newErrors.pincode =
        "PIN code must be exactly 6 digits.";
    }

    // Validation failed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      toast.error(
        "Please correct the highlighted fields."
      );

      return;
    }

    // Validation successful
    setErrors({});

    onConfirm(customer);
  };

  return (
    <div className="checkout-overlay">

      <div className="checkout-modal">

        {/* Header */}
        <div className="checkout-header">

          <h2>🛍️ Checkout</h2>

          <button
            type="button"
            className="checkout-close"
            onClick={onClose}
            aria-label="Close checkout"
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={customer.name}
              onChange={handleChange}
              className={
                errors.name
                  ? "input-error"
                  : ""
              }
            />

            {errors.name && (
              <small className="form-error">
                {errors.name}
              </small>
            )}

          </div>

          {/* Mobile */}
          <div className="form-group">

            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter 10-digit mobile number"
              value={customer.mobile}
              onChange={handleChange}
              maxLength="10"
              inputMode="numeric"
              className={
                errors.mobile
                  ? "input-error"
                  : ""
              }
            />

            {errors.mobile && (
              <small className="form-error">
                {errors.mobile}
              </small>
            )}

          </div>

          {/* Address */}
          <div className="form-group">

            <label>
              Complete Address
            </label>

            <textarea
              name="address"
              placeholder="House No, Street, Area..."
              value={customer.address}
              onChange={handleChange}
              rows="3"
              className={
                errors.address
                  ? "input-error"
                  : ""
              }
            />

            {errors.address && (
              <small className="form-error">
                {errors.address}
              </small>
            )}

          </div>

          {/* City + PIN */}
          <div className="form-row">

            {/* City */}
            <div className="form-group">

              <label>
                City
              </label>

              <input
                type="text"
                name="city"
                placeholder="City"
                value={customer.city}
                onChange={handleChange}
                className={
                  errors.city
                    ? "input-error"
                    : ""
                }
              />

              {errors.city && (
                <small className="form-error">
                  {errors.city}
                </small>
              )}

            </div>

            {/* PIN */}
            <div className="form-group">

              <label>
                PIN Code
              </label>

              <input
                type="text"
                name="pincode"
                placeholder="6-digit PIN"
                value={customer.pincode}
                onChange={handleChange}
                maxLength="6"
                inputMode="numeric"
                className={
                  errors.pincode
                    ? "input-error"
                    : ""
                }
              />

              {errors.pincode && (
                <small className="form-error">
                  {errors.pincode}
                </small>
              )}

            </div>

          </div>

          {/* Order Summary */}
          <div className="checkout-summary">

            <h3>
              Order Summary
            </h3>

            <div>
              <span>
                Product Total
              </span>

              <strong>
                ₹{total}
              </strong>
            </div>

            <div>
              <span>
                🚚 Delivery
              </span>

              <strong>
                {deliveryCharge === 0
                  ? "FREE"
                  : `₹${deliveryCharge}`}
              </strong>
            </div>

            <div className="checkout-grand-total">

              <span>
                Grand Total
              </span>

              <strong>
                ₹{grandTotal}
              </strong>

            </div>

          </div>

          {/* Confirm */}
          <button
            type="submit"
            className="confirm-order-btn"
          >
            📱 Continue to WhatsApp
          </button>

        </form>

      </div>

    </div>
  );
}

export default CheckoutModal;
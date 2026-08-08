import "./CartDrawer.css";
import { useContext, useState } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import { CartContext } from "../../context/CartContext";
import CheckoutModal from "../CheckoutModal/CheckoutModal";
import toast from "react-hot-toast";

function CartDrawer() {
  const { isCartOpen, closeCart } =
    useContext(DrawerContext);

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const [isCheckoutOpen, setIsCheckoutOpen] =
    useState(false);

  // Product Total
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // Total Savings
  const totalSavings = cart.reduce(
    (sum, item) => {
      const oldPrice =
        item.oldPrice || item.price;

      const saving =
        oldPrice - item.price;

      return (
        sum + saving * item.quantity
      );
    },
    0
  );

  // Total Items
  const totalItems = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  // Delivery Charge
  const deliveryCharge =
    total >= 999 ? 0 : 49;

  // Grand Total
  const grandTotal =
    total + deliveryCharge;

  // Open Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty 🛒");
      return;
    }

    setIsCheckoutOpen(true);
  };

  // Confirm Order
  const handleConfirmOrder = (
    customer
  ) => {
    const phone = "919798014447";

    let message =
      "🛏️ *Hello Chadar Designers*%0A%0A";

    message +=
      "🛍️ *New Order Request*%0A%0A";

    // Customer Details
    message +=
      "👤 *Customer Details*%0A";

    message +=
      `Name: ${customer.name}%0A`;

    message +=
      `Mobile: ${customer.mobile}%0A`;

    message +=
      `Address: ${customer.address}%0A`;

    message +=
      `City: ${customer.city}%0A`;

    message +=
      `PIN Code: ${customer.pincode}%0A%0A`;

    // Products
    message +=
      "📦 *Order Details*%0A%0A";

    cart.forEach((item, index) => {
      const subtotal =
        item.price * item.quantity;

      message +=
        `${index + 1}. ${item.name}%0A`;

      message +=
        `Quantity: ${item.quantity}%0A`;

      message +=
        `Price: ₹${item.price}%0A`;

      message +=
        `Subtotal: ₹${subtotal}%0A%0A`;
    });

    // Payment Summary
    message +=
      "💰 *Order Summary*%0A";

    message +=
      `Product Total: ₹${total}%0A`;

    message +=
      `You Save: ₹${totalSavings}%0A`;

    message +=
      `Delivery: ${
        deliveryCharge === 0
          ? "FREE"
          : "₹" + deliveryCharge
      }%0A`;

    message +=
      `Grand Total: ₹${grandTotal}%0A%0A`;

    message +=
      "Please confirm my order.";

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );

    setIsCheckoutOpen(false);

    toast.success(
      "Order details prepared successfully 🎉"
    );
  };

  // Remove product
  const handleRemove = (item) => {
    removeFromCart(item.id);

    toast.error(
      `${item.name} removed from cart 🗑️`
    );
  };

  return (
    <>
      <div
        className={`cart-drawer ${
          isCartOpen ? "open" : ""
        }`}
      >

        {/* Header */}
        <div className="drawer-header">

          <h2>
            🛒 Shopping Cart (
            {totalItems}{" "}
            {totalItems === 1
              ? "Item"
              : "Items"}
            )
          </h2>

          <button
            onClick={closeCart}
          >
            ✕
          </button>

        </div>

        {/* Body */}
        <div className="drawer-body">

          {cart.length === 0 ? (
            <div className="empty-cart">

              <h3>
                Your cart is empty.
              </h3>

              <p>
                Add some products to your cart.
              </p>

            </div>
          ) : (
            <>
              {cart.map((item) => {

                const subtotal =
                  item.price *
                  item.quantity;

                return (
                  <div
                    className="drawer-item"
                    key={item.id}
                  >

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    {/* Info */}
                    <div className="drawer-info">

                      <h4
                        style={{
                          color: "#111",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        {item.name}
                      </h4>

                      <p
                        style={{
                          color: "#d4af37",
                          fontSize: "18px",
                          fontWeight: "700",
                          margin: "8px 0",
                        }}
                      >
                        ₹{item.price}
                      </p>

                      {/* Quantity */}
                      <div className="drawer-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                        >
                          −
                        </button>

                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            background: "white",
                            color: "black",
                            display: "flex",
                            justifyContent:
                              "center",
                            alignItems: "center",
                            fontSize: "22px",
                            fontWeight: "bold",
                            border:
                              "1px solid #ddd",
                            borderRadius: "6px",
                          }}
                        >
                          {item.quantity}
                        </div>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* Subtotal */}
                      <p
                        style={{
                          color: "#555",
                          fontSize: "15px",
                          fontWeight: "600",
                          margin: "10px 0",
                        }}
                      >
                        ₹{item.price} ×{" "}
                        {item.quantity} ={" "}

                        <strong
                          style={{
                            color: "#111",
                            fontSize: "17px",
                          }}
                        >
                          ₹{subtotal}
                        </strong>
                      </p>

                      {/* Remove */}
                      <button
                        className="drawer-remove"
                        onClick={() =>
                          handleRemove(item)
                        }
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                );
              })}

              {/* Cart Summary */}
              <div className="drawer-total">

                {/* Savings */}
                {totalSavings > 0 && (
                  <p
                    style={{
                      color: "#25a244",
                      fontSize: "17px",
                      fontWeight: "700",
                      margin: "8px 0",
                      textAlign: "center",
                    }}
                  >
                    🎉 You Save: ₹
                    {totalSavings}
                  </p>
                )}

                {/* Product Total */}
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    padding: "6px 0",
                    color: "#555",
                  }}
                >
                  <span>
                    Product Total
                  </span>

                  <strong>
                    ₹{total}
                  </strong>
                </div>

                {/* Delivery */}
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    padding: "6px 0",
                    color:
                      deliveryCharge === 0
                        ? "#25a244"
                        : "#555",
                  }}
                >
                  <span>
                    🚚 Delivery
                  </span>

                  <strong>
                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}
                  </strong>
                </div>

                {/* Free Delivery Message */}
                {deliveryCharge > 0 && (
                  <p
                    style={{
                      color: "#d4af37",
                      fontSize: "14px",
                      fontWeight: "600",
                      textAlign: "center",
                      margin: "8px 0",
                    }}
                  >
                    🛍️ Add ₹
                    {999 - total} more
                    for FREE Delivery
                  </p>
                )}

                {/* Grand Total */}
                <h3
                  style={{
                    color: "#111",
                    fontSize: "24px",
                    background: "#f8f8f8",
                    padding: "12px",
                    border:
                      "2px solid #d4af37",
                    marginTop: "10px",
                  }}
                >
                  Grand Total : ₹
                  {grandTotal}
                </h3>

                {/* Checkout */}
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  📱 WhatsApp Order
                </button>

              </div>
            </>
          )}

        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() =>
          setIsCheckoutOpen(false)
        }
        onConfirm={handleConfirmOrder}
        total={total}
        deliveryCharge={deliveryCharge}
        grandTotal={grandTotal}
      />
    </>
  );
}

export default CartDrawer;
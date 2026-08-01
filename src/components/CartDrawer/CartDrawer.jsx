import "./CartDrawer.css";
import { useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import { CartContext } from "../../context/CartContext";

function CartDrawer() {
  const { isCartOpen, closeCart } = useContext(DrawerContext);

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  console.log(cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`cart-drawer ${
        isCartOpen ? "open" : ""
      }`}
    >
      <div className="drawer-header">
        <h2>🛒 Shopping Cart</h2>

        <button onClick={closeCart}>
          ✕
        </button>
      </div>

      <div className="drawer-body">
        {cart.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div
                className="drawer-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

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

                  <div className="drawer-quantity">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="drawer-remove"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="drawer-total">
              <h3
                style={{
                color: "#111",
                fontSize: "24px",
                background: "#f8f8f8",
                padding: "12px",
                border: "2px solid #d4af37",
                
                }}
              >
                Total : ₹{total}
              </h3>

              <button className="checkout-btn">
                WhatsApp Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
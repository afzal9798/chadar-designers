import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { DrawerContext } from "../../context/DrawerContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { openCart } = useContext(DrawerContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        Chadar <span>Designers</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        <div
          className="cart-count"
          onClick={openCart}
        >
          🛒 {totalItems}
        </div>

        <button className="nav-btn">
          WhatsApp Order
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
import "./Navbar.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { DrawerContext } from "../../context/DrawerContext";
import { WishlistContext } from "../../context/WishlistContext";
import WishlistDrawer from "../WishlistDrawer/WishlistDrawer";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { openCart } = useContext(DrawerContext);
  const { wishlist } = useContext(WishlistContext);

  const [isWishlistOpen, setIsWishlistOpen] =
    useState(false);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  return (
    <>
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          Chadar Designers
        </div>

        {/* Navigation */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">

          {/* Wishlist */}
          <div
            className="wishlist-nav"
            onClick={() =>
              setIsWishlistOpen(true)
            }
          >
            ❤️ {wishlistCount}
          </div>

          {/* Cart */}
          <div
            className="cart-count"
            onClick={openCart}
          >
            🛒 {totalItems}
          </div>

          {/* WhatsApp */}
          <button className="nav-btn">
            WhatsApp Order
          </button>

        </div>
      </nav>

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() =>
          setIsWishlistOpen(false)
        }
      />
    </>
  );
}

export default Navbar;
import "./Navbar.css";

function Navbar() {
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

      <button className="nav-btn">
        WhatsApp Order
      </button>
    </nav>
  );
}

export default Navbar;
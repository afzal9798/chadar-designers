import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>Chadar Designers</h2>
          <p>
            Premium Bedsheets, Printed Collection &
            Home Furnishing Store.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>📞 9798014447</p>
          <p>📱 WhatsApp Available</p>
          <p>📧 chadardesigner97@gmail.com</p>
          <p>📍 Shivdhara Chowk, Darbhanga</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Chadar Designers. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
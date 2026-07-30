import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Premium Bedsheets
          <br />
          For Every Home
        </h1>

        <p>
          Discover beautiful Plain and Printed Bedsheets
          crafted with quality, comfort and elegance.
        </p>

        <div className="hero-buttons">

          <button className="shop-btn">
            Shop Now
          </button>

          <button className="whatsapp-btn">
            WhatsApp Order
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image">
          Product Image
        </div>

      </div>

    </section>
  );
}

export default Hero;
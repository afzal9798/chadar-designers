import "./FeaturedCollections.css";

function FeaturedCollections() {
  return (
    <section className="featured">

      <h2>Our Collections</h2>

      <div className="collection-grid">

        <div className="collection-card">

          <div className="image-placeholder">
            Plain Collection
          </div>

          <h3>Plain Collection</h3>

          <p>
            Light & Dark Plain Bedsheets
          </p>

          <span>Starting ₹550</span>

          <button>Explore</button>

        </div>

        <div className="collection-card">

          <div className="image-placeholder">
            Printed Collection
          </div>

          <h3>Printed Collection</h3>

          <p>
            Beautiful Printed Bedsheets
          </p>

          <span>Starting ₹700</span>

          <button>Explore</button>

        </div>

      </div>

    </section>
  );
}

export default FeaturedCollections;
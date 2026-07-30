import "./CategoryFilter.css";

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-filter">

      <button
        className={category === "All" ? "active" : ""}
        onClick={() => setCategory("All")}
      >
        All
      </button>

      <button
        className={category === "Plain" ? "active" : ""}
        onClick={() => setCategory("Plain")}
      >
        Plain
      </button>

      <button
        className={category === "Printed" ? "active" : ""}
        onClick={() => setCategory("Printed")}
      >
        Printed
      </button>

    </div>
  );
}

export default CategoryFilter;
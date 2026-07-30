import "./TypeFilter.css";

function TypeFilter({ type, setType }) {
  return (
    <div className="type-filter">

      <button
        className={type === "All" ? "active" : ""}
        onClick={() => setType("All")}
      >
        All
      </button>

      <button
        className={type === "Light" ? "active" : ""}
        onClick={() => setType("Light")}
      >
        Light
      </button>

      <button
        className={type === "Dark" ? "active" : ""}
        onClick={() => setType("Dark")}
      >
        Dark
      </button>

    </div>
  );
}

export default TypeFilter;
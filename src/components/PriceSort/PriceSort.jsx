import "./PriceSort.css";

function PriceSort({ sort, setSort }) {
  return (
    <div className="price-sort">

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >

        <option value="default">
          Sort by Price
        </option>

        <option value="low">
          Price: Low to High
        </option>

        <option value="high">
          Price: High to Low
        </option>

      </select>

    </div>
  );
}

export default PriceSort;
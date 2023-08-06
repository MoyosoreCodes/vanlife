import "./index.css";
import { useState } from "react";
const Vans = () => {
  const [filters, addFilter] = useState([
    { label: "Simple", value: "simple" },
    { label: "Luxury", value: "luxury" },
    { label: "Rugged", value: "rugged" },
  ]);

  const changeFilter = (filterIndex: number) => {
    console.log({ filterIndex });
  };

  const displayFilters = filters.map(({ label, value }, index) => (
    <span
      className="filter-item"
      key={index}
      onClick={() => changeFilter(index)}
    >
      {label}
    </span>
  ));
  return (
    <main className="vans-container">
      <p className="title">Explore our van options</p>
      <div className="filter-section">
        <div className="filters">{displayFilters}</div>
        <span className="clear-btn">Clear filters</span>
      </div>
    </main>
  );
};

export default Vans;

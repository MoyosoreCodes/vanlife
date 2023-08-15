import "./index.css";
import { useEffect, useState } from "react";
import Van from "./van/Van";
import "../../server/server.ts";
import { VanItem, FilterItem } from "./types/Van.ts";
const Vans = () => {
  const [filters, _] = useState<FilterItem[]>([
    { label: "Simple", value: "simple", selected: false },
    { label: "Luxury", value: "luxury", selected: false },
    { label: "Rugged", value: "rugged", selected: false },
  ]);

  const [activeFilter, setActiveFilter] = useState<FilterItem | undefined>(
    undefined
  );

  const [vans, setVans] = useState<VanItem[]>([]);

  useEffect(() => {
    fetchVans();
  }, [activeFilter?.value]);

  function handleFilterSelection(index: number) {
    const selectedFilter = filters.find((_, i) => index === i);
    if (selectedFilter) setActiveFilter(selectedFilter);
  }

  function clearFilter() {
    setActiveFilter(undefined);
  }

  function fetchVans() {
    let url = "api/vans";
    if (activeFilter) {
      url += `?type=${activeFilter.value}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVans(data?.vans));
  }

  const displayFilters = filters.map(({ label, value }, index) => (
    <span
      className={`filter-item ${
        value === activeFilter?.value ? "selected" : ""
      }`}
      key={index}
      onClick={() => handleFilterSelection(index)}
    >
      {label}
    </span>
  ));

  const allVans = vans.map((van) => {
    return (
      <Van
        key={van?.id}
        imageUrl={van?.imageUrl}
        name={van?.name}
        price={van?.price}
        type={van?.type}
      />
    );
  });
  return (
    <main className="vans-container">
      <p className="title">Explore our van options</p>
      <div className="filter-section">
        <div className="filters">{displayFilters}</div>
        <span className="clear-btn" onClick={clearFilter}>
          Clear filters
        </span>
      </div>
      <div className="van-list-section">
        <div className="vans">{allVans}</div>
      </div>
    </main>
  );
};

export default Vans;

import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Van from "./van/Van";
import { VanItem, VanFilterItem } from "./types/van.ts";

const Vans = () => {
  const navigate = useNavigate();
  const [filters, _] = useState<VanFilterItem[]>([
    { label: "Simple", value: "simple" },
    { label: "Luxury", value: "luxury" },
    { label: "Rugged", value: "rugged" },
  ]);

  const [activeFilter, setActiveFilter] = useState<VanFilterItem | null>(null);

  const [vans, setVans] = useState<VanItem[]>([]);

  useEffect(() => {
    fetchVans();
  }, [activeFilter?.value]);

  function handleFilterSelection(index: number) {
    const selectedFilter = filters.find((_, i) => index === i);
    if (selectedFilter) setActiveFilter(selectedFilter);
  }

  function clearFilter() {
    setActiveFilter(null);
  }

  function fetchVans() {
    let url = "/api/vans";
    if (activeFilter) {
      url += `?type=${activeFilter.value}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVans(data?.vans));
  }

  function viewVanDetail(vanId: string) {
    navigate(`/vans/${vanId}`);
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
        onClick={() => viewVanDetail(van?.id)}
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

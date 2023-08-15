import "./index.css";
import { useEffect, useState } from "react";
import Van from "./van/Van";
import "../../server/server.ts";
import { VanItem } from "./types/Van.ts";
const Vans = () => {
  const [filters, addFilter] = useState([
    { label: "Simple", value: "simple" },
    { label: "Luxury", value: "luxury" },
    { label: "Rugged", value: "rugged" },
  ]);

  const [vans, setVans] = useState<VanItem[]>([]);

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data?.vans));
  }, []);

  const displayFilters = filters.map(({ label, value }, index) => (
    <span className="filter-item" key={index}>
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
        <span className="clear-btn">Clear filters</span>
      </div>
      <div className="van-list-section">
        <div className="vans">{allVans}</div>
      </div>
    </main>
  );
};

export default Vans;

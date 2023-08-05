import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [links, setLinks] = useState([
    { to: "/about", label: "About" },
    { to: "/vans", label: "Vans" },
  ]);

  const headerLinks = links.map(({ to, label }) => (
    <NavLink
      to={to}
      className={(isActive) => (isActive ? "active-link" : '')}
    >
      {label}
    </NavLink>
  ));
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <nav className="nav-container">{headerLinks}</nav>
    </header>
  );
}

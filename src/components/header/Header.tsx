import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [links, setLinks] = useState([
    { to: "/host", label: "Host" },
    { to: "/about", label: "About" },
    { to: "/vans", label: "Vans" },
  ]);

  const headerLinks = links.map(({ to, label }) => (
    <NavLink
      to={to}
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

import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserIcon from "../svgs/UserIcon";

export default function Header() {
  const [links, _] = useState([
    { to: "/host", label: "Host" },
    { to: "/about", label: "About" },
    { to: "/vans", label: "Vans" },
    { to: "/auth/login", label: null, icon: UserIcon },
  ]);

  const headerLinks = links.map(({ to, label }, index) => (
    <NavLink to={to} key={index}>
      <span>
        {label}
        {/* {icon} */}
      </span>
    </NavLink>
  ));
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <nav className="navigation">{headerLinks}</nav>
    </header>
  );
}

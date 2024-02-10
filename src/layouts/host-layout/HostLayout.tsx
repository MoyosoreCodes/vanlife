import "./HostLayout.css";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function PHostLayout() {
  const [links, _] = useState([
    { to: "/host", label: "Dashboard", isIndex: true },
    { to: "/host/income", label: "Income", isIndex: false },
    { to: "/host/vans", label: "Vans", isIndex: false },
    { to: "/host/reviews", label: "Reviews", isIndex: false },
  ]);

  const hostLinks = links.map(({ to, label, isIndex }, index) => (
    <NavLink to={to} end={isIndex} key={index}>
      {label}
    </NavLink>
  ));

  return (
    <main className="host-container">
      <nav className="navigation">{hostLinks}</nav>
      <Outlet />
    </main>
  );
}

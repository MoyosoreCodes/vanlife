import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";
import { useState } from "react";

export default function HostLayout() {
  const [links, setLinks] = useState([
    { to: "/host", label: "Dashboard", isIndex: true },
    { to: "/host/income", label: "Income", isIndex: false },
    { to: "/host/vans", label: "Vans", isIndex: false },
    { to: "/host/reviews", label: "Reviews", isIndex: false },
  ]);

  const hostLinks = links.map(({ to, label, isIndex }) => (
    <NavLink to={to} end={isIndex}>
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

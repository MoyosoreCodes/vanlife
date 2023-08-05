import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";
import { useState } from "react";

export default function HostLayout() {
  const [links, setLinks] = useState([
    { to: "/host", label: "Dashboard" },
    { to: "/host/income", label: "Income" },
    { to: "/host/reviews", label: "Reviews" },
  ]);

  const hostLinks = links.map(({ to, label }) => (
    // <NavLink to={to} className={(isActive) => (isActive ? "active-link" : "")}>
    //   {label}
    // </NavLink>
    <NavLink to={to} >
      {label}
    </NavLink>
  ));

  return (
    <main>
      <nav className="nav-container">{hostLinks}</nav>
      <Outlet />
    </main>
  );
}

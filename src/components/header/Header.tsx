import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="logo">#VANLIFE</Link>
      <nav className="nav-container">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}

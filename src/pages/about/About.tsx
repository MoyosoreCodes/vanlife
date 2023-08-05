import Button from "../../components/button/Button";
import "./About.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/img/about-hero.png";

export default function About() {
  const navigate = useNavigate();
  function viewAllVans() {
    navigate("/vans");
  }
  return (
    <main className="about-section">
      <img src={heroImage} alt="hero" className="about-hero-image" />
      <section className="content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <span>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </span>
        <span>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </span>
        <div className="explore-container">
          <div className="items">
            <h2>Your destination is waiting. Your van is ready.</h2>
            <div className="item-btn">
              <Button text="Explore our vans" onClick={viewAllVans} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

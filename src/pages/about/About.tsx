import Button from "../../components/button/Button";
import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  function viewAllVans() {
    navigate("/vans");
  }
  return (
    <main className="about-section">
      <img
        src="https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1691971200&Signature=hBGTSXnfWDR~LIOZjwpopRfomfaEjTcFoUdFmprq0hSZsF1YKJ70SY858VDPB-f8qK3Gj8RKnsvW1S8xRNR47L9B7lT25e6qNQPruPqD~N64eh9o8bibNnEibLMKKXgTay6LMY22v7YrEAusajjUi2LtL6oOShVlomcWb~vYFdhE7vB4tM1T~YJez~6AOYeAFGHXOlZ9V0rUBa8umT9KuhEqygZpeo~rLotJtnVbZ0bkNUqT8Si-v4p96ISqZymjaAPywx1uxE7v3NJz1u4PpiipeMMUyqaKSC4jdJhxtTWw0hpBppCNt1UnfVTdMRB1TkrKOmYLzY1~tZh7QF4QhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="about_image"
      />
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
            <Button text="Explore our vans" onClick={viewAllVans} />
          </div>
        </div>
      </section>
    </main>
  );
}

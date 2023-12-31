import "./Home.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
export default function Home() {
  const navigate = useNavigate();
  function viewAllVans() {
    navigate("/vans");
  }

  return (
    <main className="homepage">
      <h3>You got the travel plans, we got the travel vans.</h3>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <div className="action">
        <Button className="action-btn" onClick={viewAllVans}>
          Find your van
        </Button>
      </div>
    </main>
  );
}

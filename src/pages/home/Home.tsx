import Button from "../../components/button/Button";
import "./Home.css";
export default function Home() {
  return (
    <main className="homepage">
      <h3>You got the travel plans, we got the travel vans.</h3>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <div className="action">
        <Button text="Find your van" background="#FF8C38" />
      </div>
    </main>
  );
}

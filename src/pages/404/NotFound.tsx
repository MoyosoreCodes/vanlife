import "./NotFound.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <main className="not-found-container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Button className="return-btn" onClick={() => navigate("/")}>
        Return to home
      </Button>
    </main>
  );
};

export default NotFound;

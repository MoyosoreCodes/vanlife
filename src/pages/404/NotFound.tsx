import "./NotFound.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

interface NotFoundProps {
  content?: string;
  pageName?: string;
  pageUrl?: string;
}

const NotFound: FC<NotFoundProps> = ({
  content = "page",
  pageName = "home",
  pageUrl = "/",
}) => {
  const navigate = useNavigate();
  return (
    <main className="not-found-container">
      <h1>Sorry, the {content} you were looking for was not found.</h1>
      <Button className="return-btn" onClick={() => navigate(pageUrl)}>
        Return to {pageName}
      </Button>
    </main>
  );
};

export default NotFound;

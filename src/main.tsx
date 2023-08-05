import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { makeServer } from "./server/index.ts";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

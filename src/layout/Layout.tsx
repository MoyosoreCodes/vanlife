import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

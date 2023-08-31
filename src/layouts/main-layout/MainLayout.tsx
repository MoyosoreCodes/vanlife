import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

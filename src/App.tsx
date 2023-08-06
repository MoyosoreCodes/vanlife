import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MainLayout from "./layouts/main-layout/MainLayout";
import HostLayout from "./layouts/host-layout/HostLayout";
import Vans from "./pages/vans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={""} />
          </Route>

          <Route path="/host" element={<HostLayout />}>
            <Route index element={""} />
            <Route path="income" element={""} />
            <Route path="vans" element={""} />
            <Route path="reviews" element={""} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

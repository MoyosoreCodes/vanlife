import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

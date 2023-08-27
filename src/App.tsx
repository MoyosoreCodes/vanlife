import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout";
import HostLayout from "./layouts/host-layout/HostLayout";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Vans = lazy(() => import("./pages/vans"));
const VanDetails = lazy(() => import("./pages/vans/vandetails/VanDetails"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route path="vans">
            <Route
              index
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Vans />
                </Suspense>
              }
            />
            <Route
              path=":vanId"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <VanDetails />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/host"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <HostLayout />
              </Suspense>
            }
          >
            <Route index element={""} />
            <Route path="income" element={""} />
            <Route path="vans" element={""} />
            <Route path="reviews" element={""} />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

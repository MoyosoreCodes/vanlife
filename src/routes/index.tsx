import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import RouteWrapper from "./RouteWrapper";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const VanRoutes = lazy(() => import("./VanRoutes"))
const HostRoutes = lazy(() => import("./HostRoutes"))
const NotFound = lazy(() => import("../pages/404/NotFound"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <RouteWrapper >
                <Home />
              </RouteWrapper>
            }
          />
          <Route
            path="about"
            element={
              <RouteWrapper >
                <About />
              </RouteWrapper>
            }
          />
          <Route path="/vans/*" element={<RouteWrapper>
            <VanRoutes />
          </RouteWrapper>}>
          </Route>
          <Route
            path="/host/*"
            element={
              <RouteWrapper>
                <HostRoutes />
              </RouteWrapper>
            }
          />
          <Route
            path="*"
            element={
              <RouteWrapper >
                <NotFound />
              </RouteWrapper>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
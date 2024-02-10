import { Route, Routes } from "react-router-dom";
import RouteWrapper from "./RouteWrapper";
import Vans from "../pages/vans";
import VanDetails from "../pages/vans/vandetails/VanDetails";

function VanRoutes() {
  return <Routes>
    <Route
      index
      element={
        <RouteWrapper >
          <Vans />
        </RouteWrapper>
      }
    />
    <Route
      path=":vanId"
      element={
        <RouteWrapper >
          <VanDetails />
        </RouteWrapper>
      }
    />

  </Routes>
}

export default VanRoutes;
import { Route, Routes } from "react-router-dom";
import HostLayout from "../layouts/host-layout/HostLayout"

function HostRoutes() {
  return <Routes>
    <Route element={<HostLayout />}>
      <Route index element={""} />
      <Route path="income" element={""} />
      <Route path="vans" element={""} />
      <Route path="reviews" element={""} />
    </Route>
  </Routes>;
};

export default HostRoutes;
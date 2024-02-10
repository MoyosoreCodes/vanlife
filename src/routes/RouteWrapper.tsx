import { Suspense } from "react";
import Loader from "../components/loader/Loader";

interface RouteWrapperProps {
  children: any;
}
const RouteWrapper = ({ children }: RouteWrapperProps) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default RouteWrapper;

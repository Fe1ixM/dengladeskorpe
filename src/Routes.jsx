import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Backoffice from "./pages/backoffice/Backoffice";
import DishDetail from "./pages/dish/DishDetail";
import {
  homeLoader,
  backOfficeLoader,
  dishDetailsLoader,
} from "../Loaders/DataLoaders";

const RootLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<RootLayout />}
      errorElement={<div>Der opstod en fejl. Prøv igen senere.</div>}
    >
      <Route index element={<Home />} loader={homeLoader} />
      <Route
        path="backoffice"
        element={<Backoffice />}
        loader={backOfficeLoader}
      />
      <Route
        path="dish/:dishId"
        element={<DishDetail />}
        loader={dishDetailsLoader}
      />
      <Route path="*" element={<div>Siden findes ikke.</div>} />
    </Route>,
  ),
);

export default routes;

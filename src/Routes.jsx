import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import { homeLoader } from "../Loaders/DataLoaders";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<div>Der opstod en fejl. Prøv igen senere.</div>}>
      <Route index element={<Home />} loader={homeLoader} />
    </Route>,
  ),
);

export default routes;
